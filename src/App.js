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
  return (
    <div className="App">
      <Tabs dummyData={dummyData} />
    </div>
  );
}

export default App;
