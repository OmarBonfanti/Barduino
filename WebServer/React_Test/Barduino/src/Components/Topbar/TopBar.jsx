// Navbar.js
import { useState, useRef, useEffect, Children } from "react";
import "./TopBar.css"; // Import your CSS file for styling

const TopBar = ({ children }) => {
  

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    // Controlla se l'elemento cliccato è al di fuori della sidebar
    if (
      isSidebarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  // Aggiungi un listener per gestire il clic al di fuori della sidebar
  useEffect(() => {
    document.addEventListener("mousedown", closeSidebar);

    // Pulisci l'evento al momento della disattenzione del componente
    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, [isSidebarOpen]);

  const sidebarRef = useRef();

  return (
    <>
      {children}
      <nav className="navbar">
        <div
          className="navbar-menu"
          onClick={toggleSidebar}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navbar-toggle" onClick={toggleSidebar}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        {isSidebarOpen && (
          <div className="sidebar" ref={sidebarRef}>
            <a href="#home">Home</a> <br/>
            <a href="#about">About</a> <br/>
            <a href="#services">Services</a> <br/>
            <a href="#contact">Contact</a> <br/>
          </div>
        )}
      </nav>
    </>
  );
};

export default TopBar;
