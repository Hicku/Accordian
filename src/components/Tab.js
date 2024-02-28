export default function Tab({
  question,
  children,
  num,
  curOpen,
  onMultiCurOpen,
  onOpen,
  multiClick,
  multiCurOpen,
}) {
  const multiIsOpen = (num) => {
    for (let i = 0; i < multiCurOpen.length; i++) {
      if (num === multiCurOpen[i]) {
        return true;
      }
    }
    return false;
  };

  const isOpen = num === curOpen;

  const showText = () => {
    if (multiClick) {
      if (multiIsOpen(num)) {
        onMultiCurOpen(multiCurOpen.filter((openTab) => openTab !== num));
      } else {
        onMultiCurOpen([...multiCurOpen, num]);
      }
    } else {
      if (isOpen) {
        onOpen(null);
      } else {
        onOpen(num);
      }
    }
  };

  return (
    <div className="tab" onClick={showText}>
      <div>{question}</div>
      {isOpen ? <div>{children}</div> : ""}
      {multiIsOpen(num) ? <div>{children}</div> : ""}
    </div>
  );
}
