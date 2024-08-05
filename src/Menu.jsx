// src/Menu.jsx
import React from 'react';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
