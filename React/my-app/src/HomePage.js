// HomePage.jsx
import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener('click', closeSidebar);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSidebarClick = (e) => {
    // Prevent the event from propagating to the document click listener
    e.stopPropagation();
  };

  return (
    <div className="home-page">
      <div className="top-bar">
        <img
          className="background-image"
          src="your-background-image-url.jpg"
          alt="Background"
        />
        <button onClick={toggleSidebar} className="toggle-button">
          ☰
        </button>
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} onClick={handleSidebarClick}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>

      <div className="main-content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default HomePage;
