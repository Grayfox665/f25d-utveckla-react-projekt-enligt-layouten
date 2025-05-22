import "./Sidebar.css";
import LinkComponent from "../LinkComponent";

export default function SideBar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <LinkComponent name="Uppgift 2" link="#" />
      <LinkComponent name="Uppgift 3" link="#" />
    </aside>
  );
}
