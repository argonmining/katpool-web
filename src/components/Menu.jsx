import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Menu = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      // Navigate to the Dashboard page with the wallet parameter in the URL
      navigate(`/dashboard?wallet=${searchTerm.trim()}`);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${window.location.pathname === '/' ? 'bg-transparent' : 'bg-gradient-to-r from-[#70C7BA] to-[#49EACB]'}`}>
      <div className="flex justify-between items-center p-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="katPool" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold text-white">katPool</span>
        </div>
        {/* Search Box */}
        <form onSubmit={handleSearch} className="flex-1 mx-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by wallet address..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </form>
        {/* Navigation Menu */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/pool-statistics" className="text-white hover:text-gray-300">Pool Statistics</Link>
          <Link to="/FAQs" className="text-white hover:text-gray-300">FAQs</Link>

          {/* Resources Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 flex items-center"
            >
              Resources
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <Link to="/guides" className="block px-4 py-2 text-sm hover:bg-gray-200">Guides</Link>
                <Link to="/faq" className="block px-4 py-2 text-sm hover:bg-gray-200">FAQs</Link>
                <Link to="/support" className="block px-4 py-2 text-sm hover:bg-gray-200">Support</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
