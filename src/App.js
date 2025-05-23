import "./App.css";
import NavBar from "./Components/NavbarComponents/Navbar";
import SideBar from "./Components/SidobarComponents/Sidebar";
import TagList from "./Components/TagListComponents/TagList";
import PostList from "./Components/PostsComponents/PostList";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const tagBtnLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleClick = (label) => {
    console.log(`${label} button was clicked!`);
  };

  return (
    <div className="App">
      <NavBar toggleSidebar={toggleSidebar} />
      <header>
        <h1 className="Header">F25D Borås YH - React Kurs</h1>
      </header>
      <SideBar isOpen={isSidebarOpen} />
      <div className="App-body">
        <PostList />
        <TagList btns={tagBtnLabels} onBtnClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
