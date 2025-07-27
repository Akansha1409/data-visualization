import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Charts } from '../components/Charts.jsx';
import { Filters } from '../components/Filters.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { Header } from '../components/Header.jsx';

const Index = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
     axios.get(`${import.meta.env.VITE_API_BASE_URL}/data`, { params: filters })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [filters]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="md:flex bg-gray-100 dark:bg-gray-900 min-h-screen transition-all">
        <Sidebar />
        <div className="flex-1 md:ml-64 px-4 pt-28 md:pt-24">


          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="p-4 md:p-8 pt-28 md:pt-24 space-y-10">
            <section id="overview">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Filters</h2>
                <div id="filters">
                  <Filters filters={filters} setFilters={setFilters} />
                </div>
              </div>
            </section>
            <section id="charts">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Chart View</h2>
                <Charts data={data} />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Index;
