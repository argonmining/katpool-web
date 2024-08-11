// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white shadow-lg rounded-2xl p-6 fixed top-0 left-0 flex flex-col">
      <div className="flex items-center mb-8">
        <img src="/path-to-your-logo.png" alt="katPool" className="h-12 w-12" />
        <span className="ml-3 text-xl font-bold">katPool</span>
      </div>
      <nav className="flex-grow">
        <Link to="/dashboard" className="block text-gray-700 hover:text-blue-500 mb-4">Dashboard</Link>
        <Link to="/earnings" className="block text-gray-700 hover:text-blue-500 mb-4">Earnings</Link>
        <Link to="/rewards" className="block text-gray-700 hover:text-blue-500">Rewards</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
