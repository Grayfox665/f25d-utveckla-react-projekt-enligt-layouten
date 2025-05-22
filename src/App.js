import "./App.css";
import NavBar from "./Components/NavbarComponents/Navbar";
import SideBar from "./Components/SidobarComponents/Sidebar";
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
        <h1>F25D Borås YH - React Kurs</h1>
      </header>
      <SideBar isOpen={isSidebarOpen} />
    </div>
  );
}

export default App;
