// src/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
