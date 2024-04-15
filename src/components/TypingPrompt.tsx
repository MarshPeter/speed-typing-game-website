import React, { useEffect, useState } from "react";
import PromptStatsCalculator from "../services/PromptStatsCalculator";
import Countdown from "./Countdown";

interface Props {
    phrase: string;
    highlightIndex: number;
    setHighlightIndex: React.Dispatch<number>;
    currentCorrect: number;
    setCurrentCorrect: React.Dispatch<number>;
    currentAverage: number;
    setCurrentAverage: React.Dispatch<number>;
    setShowPrompt: React.Dispatch<boolean>;
}

export default function TypingPrompt({
    phrase,
    highlightIndex,
    setHighlightIndex,
    currentAverage,
    setCurrentAverage,
    currentCorrect,
    setCurrentCorrect,
    setShowPrompt,
}: Props) {
    const [correctCharacterArray, setCorrectCharacterArray] = useState(
        new Array<number>()
    );
    const [wordsPerMinute, setWordsPerMinute] = useState(0);
    const [wordsComplete, setWordsComplete] = useState(0);
    const [startTime, setStartTime] = useState(performance.now());
    const [countdownOngoing, setCountdownOngoing] = useState(true);

    function handleKeyDown(e: any) {
        console.log(countdownOngoing);
        if (countdownOngoing) return;
        if (highlightIndex >= phrase.length) return;
        console.log(phrase.length, correctCharacterArray.length);
        const key = e.key;
        console.log(key);
        if (key.toLowerCase() === "shift" || key.toLowerCase() === "capslock")
            return;
        let correct = currentCorrect;
        if (phrase[highlightIndex] === key) {
            setCurrentCorrect(currentCorrect + 1);
            correct++;
        }

        const newCorrectArray = correctCharacterArray.map(
            (val: number, index: number) => {
                if (index !== highlightIndex) return val;

                if (phrase[highlightIndex] === key) {
                    return 1;
                } else {
                    return -1;
                }
            }
        );

        if (phrase[highlightIndex] === " ") {
            setWordsComplete(wordsComplete + 1);
        }

        setCurrentAverage((correct / (highlightIndex + 1)) * 100);
        setHighlightIndex(highlightIndex + 1);
        setCorrectCharacterArray(newCorrectArray);
        setWordsPerMinute(
            PromptStatsCalculator.calculateWordsPerMinute(
                startTime,
                wordsComplete
            )
        );
    }

    function finishCountdown() {
        setCountdownOngoing(false);
    }

    useEffect(() => {
        if (correctCharacterArray.length === 0) {
            setCorrectCharacterArray(new Array(phrase.length).fill(0));
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        highlightIndex,
        currentCorrect,
        correctCharacterArray,
        wordsPerMinute,
        wordsComplete,
        countdownOngoing,
    ]);

    if (highlightIndex > correctCharacterArray.length) {
        setShowPrompt(false);
    }

    return (
        <div className="flex flex-col align-center gap-4 p-5 rounded border-8 border-indigo-400">
            {countdownOngoing ? (
                <Countdown onConclusionFunction={finishCountdown}></Countdown>
            ) : null}
            <div>
                <p className="text-3xl">
                    {phrase.split("").map((char, index) => {
                        if (index > highlightIndex) return char;

                        if (highlightIndex === index) {
                            return (
                                <span
                                    key={index}
                                    className="bg-red-400 bg-opacity-40"
                                >
                                    {char}
                                </span>
                            );
                        }

                        if (correctCharacterArray[index] === 1) {
                            return (
                                <span key={index} className="text-green-600">
                                    {char}
                                </span>
                            );
                        }

                        if (correctCharacterArray[index] === -1) {
                            return (
                                <span key={index} className="text-red-600">
                                    {char}
                                </span>
                            );
                        }

                        return char;
                    })}
                </p>
                <div className="flex justify-between text-lg">
                    <p>
                        Correct: {currentCorrect} /{" "}
                        {correctCharacterArray.length}
                    </p>
                    <p>WPM: {wordsPerMinute.toFixed(2)}</p>
                    <p>Average: {currentAverage.toFixed(0)}%</p>
                </div>
            </div>
        </div>
    );
}
