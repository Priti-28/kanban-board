// DarkModeToggle.js
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Apply dark mode class to the root element
    document.body.classList.toggle("dark-mode", isDarkMode);

    return () => {
      // Remove dark mode class when unmounting or when dark mode is turned off
      document.body.classList.remove("dark-mode");
    };
  }, [isDarkMode]);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      <p>{isDarkMode ? "" : ""}</p>
    </div>
  );
};

export default DarkModeToggle;
