import { useState, useEffect } from "react";

export default function ThemeToggle () {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Save theme preference to local storage
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);
  
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  )
}