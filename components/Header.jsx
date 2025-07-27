import React from 'react';
import { DarkToggle } from './DarkToggle';

export const Header = ({ darkMode, setDarkMode }) => (
  <header className="bg-white dark:bg-gray-800 shadow w-full px-6 py-4 flex flex-wrap items-center justify-between fixed top-0 left-0 md:left-64 z-50 transition">
    <h1 className="text-xl font-semibold text-primary w-full sm:w-auto text-center sm:text-left">
      📊 Data Visualization Dashboard
    </h1>
    <div className="mt-2 sm:mt-0">
      <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  </header>
);
