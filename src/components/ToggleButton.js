export default function ToggleButton({ onToggleMultiClick, multiClick }) {
  return (
    <button className="btn" onClick={onToggleMultiClick}>
      {multiClick ? "Single-click" : "Multi-open"}
    </button>
  );
}
