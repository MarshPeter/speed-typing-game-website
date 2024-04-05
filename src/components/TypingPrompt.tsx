import React, { useEffect } from "react"

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

  useEffect(() => {
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

      setCurrentAverage((correct / (highlightIndex + 1)) * 100);
      setHighlightIndex(highlightIndex + 1);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [highlightIndex, currentCorrect]);

  return (
    <div className="flex flex-col gap-4 p-5 rounded border-8 border-indigo-400">
      <p className="text-3xl">
        {phrase.split('').map((char, index) => {
          if (highlightIndex === index) {
            return <span key={index} className="bg-red-400 bg-opacity-40">{char}</span>
          }

          return char;
        })}
      </p>
      <div className="flex justify-between text-lg">
        <p>Current Correct: {currentCorrect}</p>
        <p>Current Average: {currentAverage}</p>
      </div>
    </div>
  )
}