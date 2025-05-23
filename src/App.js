import "./App.css";
import NavBar from "./Components/NavbarComponents/Navbar";
import SideBar from "./Components/SidobarComponents/Sidebar";
import TagList from "./Components/TagListComponents/TagList";
import PostList from "./Components/PostsComponents/PostList";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
        <TagList />
      </div>
    </div>
  );
}

export default App;
