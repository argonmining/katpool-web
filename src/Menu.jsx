// src/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4 full-width-container">
      <div className="flex justify-between items-center">
        <span className="text-white text-2xl font-bold">kaspa pool</span>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
          <li><a href="#stats" className="hover:text-gray-400">Pool Statistics</a></li>
          <li><a href="#mining" className="hover:text-gray-400">Start Mining</a></li>
          <li><a href="#faq" className="hover:text-gray-400">FAQ</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
