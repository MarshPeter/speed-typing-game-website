import { useEffect, useState } from "react";
import TypingPrompt from "../components/TypingPrompt";
import TextPromptFetcher from "../services/TextPromptFetcher";
import Header from "../components/Header";
import PromptResults from "../components/PromptResults";

function Prompter() {
    const [phrase, setPhrase] = useState("");
    const [highlightIndex, setHighlightIndex] = useState(0);
    const [currentCorrect, setCurrentCorrect] = useState(0);
    const [currentAverage, setCurrentAverage] = useState(0);
    const [showPrompt, setShowPrompt] = useState(true);

    useEffect(() => {
        setPhrase(TextPromptFetcher.getPrompt());
    }, [phrase]);

    return (
        <>
            <Header />
            <main className="w-full flex justify-center">
                <div className="w-2/3">
                    {showPrompt ? (
                        <TypingPrompt
                            phrase={phrase}
                            highlightIndex={highlightIndex}
                            setHighlightIndex={setHighlightIndex}
                            currentCorrect={currentCorrect}
                            setCurrentCorrect={setCurrentCorrect}
                            currentAverage={currentAverage}
                            setCurrentAverage={setCurrentAverage}
                            setShowPrompt={setShowPrompt}
                        />
                    ) : (
                        <PromptResults />
                    )}
                </div>
            </main>
        </>
    );
}

export default Prompter;
