import Tab from "./Tab";

export default function Tabs({ dummyData }) {
  return (
    <div className="tabs">
      {dummyData.map((item) => (
        <Tab question={item.question} key={item.id}>
          {item.answer}
        </Tab>
      ))}
    </div>
  );
}
