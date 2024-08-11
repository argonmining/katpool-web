// src/components/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image

const Menu = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Logo" /> {/* Reference the imported logo */}
            <h1 className="text-xl ml-3">Katpool</h1>
          </div>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <Link to="/dashboard" className="hover:text-secondary">Dashboard</Link>
            <Link to="/pool-statistics" className="hover:text-secondary">Pool Statistics</Link>
            <Link to="/faqs" className="hover:text-secondary">FAQs</Link>
            <a href="https://nachowyborski.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">NACHO THE KAT</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Menu;
