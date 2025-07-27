import React from 'react';
import { Home, BarChart, SlidersHorizontal } from 'lucide-react';

export const Sidebar = () => (
  <div className="bg-white dark:bg-gray-900 shadow w-full md:w-64 md:fixed md:left-0 md:top-0 p-6 transition-all z-20">
    <h2 className="text-xl font-bold text-primary mb-6">Dashboard</h2>
    <nav className="space-y-6">
      <a href="#overview" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer transition">
        <Home size={20} /> Overview
      </a>
      <a href="#charts" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer transition">
        <BarChart size={20} /> Charts
      </a>
      <a href="#filters" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer transition">
        <SlidersHorizontal size={20} /> Filters
      </a>
    </nav>
  </div>
);
