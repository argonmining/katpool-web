// src/pages/Dashboard.jsx
import React from 'react';
import Menu from '../components/Menu';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Miner Dashboard</h1>
        {/* Add your dashboard content here */}
        <p className="mt-4">This is where you will display the miner's statistics, charts, and other dashboard elements.</p>
      </div>
    </div>
  );
};

export default Dashboard;
