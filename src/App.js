import { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";

const dummyData = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
  },
  {
    id: 4,
    question: "How many continents are there?",
    answer: "Seven",
  },
];

function App() {
  const [curOpen, setCurOpen] = useState(null);
  const [multiClick, setMultiClick] = useState(false);
  const [multiCurOpen, setMultiCurOpen] = useState([]);

  const toggleMultiClick = () => {
    setMultiClick(!multiClick);
    setCurOpen(null);
    setMultiCurOpen([]);
  };

  return (
    <div className="App">
      <Tabs
        dummyData={dummyData}
        onToggleMultiClick={toggleMultiClick}
        multiClick={multiClick}
        curOpen={curOpen}
        setCurOpen={setCurOpen}
        multiCurOpen={multiCurOpen}
        setMultiCurOpen={setMultiCurOpen}
      />
    </div>
  );
}

export default App;
