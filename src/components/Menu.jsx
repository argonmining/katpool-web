// src/components/Menu.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Menu = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Manage dropdown state
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch(searchValue);
      navigate(`/dashboard?wallet=${searchValue}`); // Update the URL with the wallet address
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#282c34] text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="katPool" className="h-10 w-10 rounded-full" />
        <span className="text-2xl font-bold">katPool</span>
      </div>

      <div className="flex-1 mx-8 max-w-lg">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search wallet address..."
          className="w-full h-10 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </div>

      <nav className="flex space-x-6 relative">
        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
        <Link to="/poolstatistics" className="text-gray-300 hover:text-white">Pool Stats</Link>
        <Link to="/FAQs" className="text-gray-300 hover:text-white">FAQs</Link>

        {/* Resources Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="text-gray-300 hover:text-white flex items-center">
            Resources
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <Link to="/guides" className="block px-4 py-2 text-sm hover:bg-gray-200">Guides</Link>
              <Link to="/faq" className="block px-4 py-2 text-sm hover:bg-gray-200">FAQs</Link>
              <Link to="/support" className="block px-4 py-2 text-sm hover:bg-gray-200">Support</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Menu;
