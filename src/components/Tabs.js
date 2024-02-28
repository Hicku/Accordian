import { useState } from "react";
import Tab from "./Tab";
import ToggleButton from "./ToggleButton";

export default function Tabs({
  dummyData,
  onToggleMultiClick,
  multiClick,
  curOpen,
  setCurOpen,
  setMultiCurOpen = { setMultiCurOpen },
  multiCurOpen = { multiCurOpen },
}) {
  return (
    <div className="tabs">
      <ToggleButton
        onToggleMultiClick={onToggleMultiClick}
        multiClick={multiClick}
      />
      {dummyData.map((item, index) => (
        <Tab
          question={item.question}
          key={item.id}
          num={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
          onMultiCurOpen={setMultiCurOpen}
          multiClick={multiClick}
          multiCurOpen={multiCurOpen}
        >
          {item.answer}
        </Tab>
      ))}
    </div>
  );
}
