import "./Navbar.css";
import LinkComponent from "../LinkComponent";

export default function NavBar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="material-symbols-outlined">dehaze</span>
      </button>
      <LinkComponent name="Home" link="#" />
      <LinkComponent name="About" link="#" />
      <LinkComponent name="Contact us" link="#" />
    </nav>
  );
}
