import PromptStatsCalculator from "../services/PromptStatsCalculator";

interface Props {
    correctCharacterCount: number;
    wordsPerMinute: number;
    phrase: string;
}

export default function PromptResults({
    correctCharacterCount,
    wordsPerMinute,
    phrase,
}: Props) {
    const characterCount = phrase.length;
    const wordCount = phrase.split(" ").length;

    return (
        <div className="flex flex-wrap flex-col align-center gap-4 p-5 rounded border-8 border-indigo-400">
            <ul>
                <li>Characters in Prompt: {characterCount}</li>
                <li>Words in Prompt: {wordCount}</li>
                <li>Correct Characters: {correctCharacterCount}</li>
                <li>
                    Average Correct:{" "}
                    {((correctCharacterCount / characterCount) * 100).toFixed(
                        2
                    )}
                    %
                </li>
                <li>Words Per Minute (WPM): {wordsPerMinute}</li>
                <li>
                    Adjusted Words Per Minute:{" "}
                    {PromptStatsCalculator.adjusNumberBasedOnPercentage(
                        wordsPerMinute,
                        correctCharacterCount,
                        characterCount
                    )}
                </li>
            </ul>
        </div>
    );
}
