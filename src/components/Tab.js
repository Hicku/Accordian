export default function Tab({ data, question, children }) {
  return (
    <div className="tab">
      <div>{question}</div>
      <div>{children}</div>
    </div>
  );
}
