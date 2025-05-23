import "./TagButton.css";

export default function TagButton({ tagBtn, label, onClick }) {
  return (
    <button className="tag-button" onClick={() => onClick(label)}>
      {tagBtn}
    </button>
  );
}
