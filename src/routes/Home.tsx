import { useEffect, useState } from "react";
import textPromptFetcher from "../services/TextPromptFetcher";
import Header from "../components/Header";
import TypingPrompt from "../components/TypingPrompt";
import Button from "../components/Button";
import InPageLink from "../components/InPageLink";

function App() {
  const [phrase, setPhrase] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [currentCorrect, setCurrentCorrect] = useState(0);
  const [currentAverage, setCurrentAverage] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);

  function setPhrasePrompt(prompt: (string | null)) {
    if (prompt === null) {
      setPhrase(textPromptFetcher.getPrompt());
    } else {
      setPhrase(prompt);
    }

    changePromptStartState();
    return;
  }

  function changePromptStartState() {
    setShowPrompt(!showPrompt);
  }

  return (
    <div className="bg-gray-200 min-h-screen min-w-screen">
      <Header></Header>
      <main className="flex justify-center">
        <div className="flex w-2/3">
          <div>
            <InPageLink linkTo="/prompt" text="Play as guest"></InPageLink>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
