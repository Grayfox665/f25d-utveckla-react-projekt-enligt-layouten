import TagButton from "./TagButton";
import "./Taglist.css";

export default function TagList({ btns, onBtnClick }) {
  return (
    <aside className="Tagbtn-list">
      {btns.map((label, index) => (
        <TagButton
          key={index}
          label={label}
          tagBtn="Click Tag BTN"
          onClick={onBtnClick}
        />
      ))}
      {/* <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" />
      <TagButton tagBtn="Click Tag BTN" /> */}
    </aside>
  );
}
