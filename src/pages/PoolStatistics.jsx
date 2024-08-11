// src/pages/PoolStatistics.jsx
import React from 'react';
import Menu from '../components/Menu';

const PoolStatistics = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Pool Statistics</h1>
        {/* Add your pool statistics content here */}
        <p className="mt-4">This is where you will display the pool's statistics, charts, and other relevant information.</p>
      </div>
    </div>
  );
};

export default PoolStatistics;
