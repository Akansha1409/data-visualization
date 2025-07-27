import React from 'react';

export const DarkToggle = ({ darkMode, setDarkMode }) => (
  <button
    className="bg-primary text-white px-4 py-2 rounded hover:bg-purple-700 transition"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
  </button>
);