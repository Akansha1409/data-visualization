import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const createChartData = (label, data, field, color) => ({
  labels: data.map(item => item.country || 'Unknown'),
  datasets: [
    {
      label,
      data: data.map(item => item[field] || 0),
      backgroundColor: color,
    },
  ],
});

export const Charts = ({ data }) => {
  const chartConfigs = [
    { label: 'Intensity', field: 'intensity', color: 'rgba(124, 58, 237, 0.6)' },
    { label: 'Likelihood', field: 'likelihood', color: 'rgba(34, 197, 94, 0.6)' },
    { label: 'Relevance', field: 'relevance', color: 'rgba(239, 68, 68, 0.6)' },
    { label: 'Year', field: 'start_year', color: 'rgba(59, 130, 246, 0.6)' },
    { label: 'Topic', field: 'topic', color: 'rgba(245, 158, 11, 0.6)' },
    { label: 'Region', field: 'region', color: 'rgba(13, 148, 136, 0.6)' },
    { label: 'City', field: 'city', color: 'rgba(202, 138, 4, 0.6)' },
  ];

  return (
    <div className="space-y-10">
      {chartConfigs.map(({ label, field, color }) => (
        <div key={field} className="bg-white dark:bg-gray-800 rounded shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{label} Chart</h3>
          <Bar data={createChartData(label, data, field, color)} />
        </div>
      ))}
    </div>
  );
};
