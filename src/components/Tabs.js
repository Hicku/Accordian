import { useState } from "react";
import Tab from "./Tab";

export default function Tabs({ dummyData }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="tabs">
      {dummyData.map((item, index) => (
        <Tab
          question={item.question}
          key={item.id}
          num={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {item.answer}
        </Tab>
      ))}
    </div>
  );
}
