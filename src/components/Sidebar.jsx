import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg rounded-tr-3xl rounded-br-3xl">
      <div className="flex items-center justify-center h-20 border-b">
        <img src="/logo.png" alt="katPool" className="h-12 w-12 rounded-full" />
        <span className="text-2xl font-bold ml-2">katPool</span>
      </div>
      <nav className="mt-10">
        <Link to="/dashboard" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/dashboard') ? 'bg-gray-200 text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}>
          Statistics
        </Link>
        <Link to="/dashboard/earnings" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/dashboard/earnings') ? 'bg-gray-200 text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}>
          Earnings
        </Link>
        <Link to="/dashboard/rewards" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/dashboard/rewards') ? 'bg-gray-200 text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}>
          Rewards
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
