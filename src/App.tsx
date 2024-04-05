import { useEffect, useState } from "react";
import Header from "./components/Header";
import TypingPrompt from "./components/TypingPrompt";

function App() {
  const phrase = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit illum molestias dolorem, architecto fugiat, et commodi nulla adipisci nobis neque facilis voluptatem explicabo animi. Ut aliquam possimus et itaque."
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [currentCorrect, setCurrentCorrect] = useState(0);
  const [currentAverage, setCurrentAverage] = useState(0);


  return (
    <div className="bg-gray-200 min-h-screen min-w-screen">
      <Header></Header>
      <main className="flex justify-center">
        <div className="flex w-2/3">
          <TypingPrompt
            phrase={phrase}
            highlightIndex={highlightIndex}
            setHighlightIndex={setHighlightIndex}
            currentCorrect={currentCorrect}
            setCurrentCorrect={setCurrentCorrect}
            currentAverage={currentAverage}
            setCurrentAverage={setCurrentAverage}
          />
        </div>
      </main>
    </div>
  )
}

export default App
