export default function Tab({ question, children, num, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  const showText = () => {
    onOpen(num);
  };

  return (
    <div className="tab" onClick={showText}>
      <div>{question}</div>
      <div>{children}</div>
    </div>
  );
}
