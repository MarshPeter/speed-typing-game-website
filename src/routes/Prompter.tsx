import { useEffect, useState } from "react";
import TypingPrompt from "../components/TypingPrompt"
import TextPromptFetcher from "../services/TextPromptFetcher";
import Header from "../components/Header";

function Prompter() {
  const [phrase, setPhrase] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [currentCorrect, setCurrentCorrect] = useState(0);
  const [currentAverage, setCurrentAverage] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
    
  useEffect(() => {
    setPhrase(TextPromptFetcher.getPrompt());
  }, [phrase])

  return (
    <main>
      <Header />
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
    </main>
  )
}

export default Prompter