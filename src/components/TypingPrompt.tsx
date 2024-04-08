import React, { useEffect, useState } from "react"

interface Props {
  phrase: string,
  highlightIndex: number,
  setHighlightIndex: React.Dispatch<number>,
  currentCorrect: number,
  setCurrentCorrect: React.Dispatch<number>,
  currentAverage: number,
  setCurrentAverage: React.Dispatch<number>,
}

export default function TypingPrompt({
  phrase,
  highlightIndex,
  setHighlightIndex, 
  currentAverage, 
  setCurrentAverage, 
  currentCorrect, 
  setCurrentCorrect} : Props) {

    const phraseLength = phrase.length;

    const [correctChracterArray, setCorrectCharacterArray] = useState((new Array(phraseLength)).fill(0));
    const [wordsPerMinute, setWordsPerMinute] = useState(0);
    const [wordsComplete, setWordsComplete] = useState(0);
    const [startTime, setStartTime] = useState(performance.now());
    // const startTime = performance.now();

    function handleKeyDown(e: any) {
      if (highlightIndex > phrase.length) return;
      const key = e.key;
      console.log(key);
      if (key.toLowerCase() === "shift" || key.toLowerCase() === "capslock") return;
      let correct = currentCorrect;
      if (phrase[highlightIndex] === key) {
        setCurrentCorrect(currentCorrect + 1);
        correct++;
      }

      const newCorrectArray = correctChracterArray.map((val: number, index: number) => {
        if (index !== highlightIndex) return val;

        if (phrase[highlightIndex] === key) {
          return 1;
        } else {
          return -1;
        }
      })

      if (phrase[highlightIndex] === " ") {
        setWordsComplete(wordsComplete + 1);
      }

      setCurrentAverage((correct / (highlightIndex + 1)) * 100);
      setHighlightIndex(highlightIndex + 1);
      setCorrectCharacterArray(newCorrectArray);
      calculateWordsPerMinute();
    }

    function calculateWordsPerMinute() {
      const currentTime = performance.now();
      const timeDifference = currentTime - startTime;
      const timeDifferenceInMinutes = timeDifference / (1000 * 60);
      const currentWordsPerMinute = (wordsComplete / timeDifferenceInMinutes);
      setWordsPerMinute(currentWordsPerMinute);
    }

    useEffect(() => {

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };

    }, [highlightIndex, currentCorrect, correctChracterArray, wordsPerMinute, wordsComplete]);

    return (
      <div className="flex flex-col gap-4 p-5 rounded border-8 border-indigo-400">
        <p className="text-3xl">
          {phrase.split('').map((char, index) => {
            if (index > highlightIndex) return char;

            if (highlightIndex === index) {
              return <span key={index} className="bg-red-400 bg-opacity-40">{char}</span>
            }

            if (correctChracterArray[index] === 1) {
              return <span key={index} className="text-green-600">{char}</span>
            }

            if (correctChracterArray[index] === -1) {
              return <span key={index} className="text-red-600">{char}</span>
            }

            return char;
          })}
        </p>
        <div className="flex justify-between text-lg">
          <p>Correct: {currentCorrect} / {phraseLength}</p>
          <p>WPM: {wordsPerMinute.toFixed(2)}</p>
          <p>Average: {currentAverage.toFixed(0)}%</p>
        </div>
      </div>
    )
}