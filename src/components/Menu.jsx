import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Menu = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the location object
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Check for the wallet parameter in the URL
    const queryParams = new URLSearchParams(location.search);
    const walletParam = queryParams.get('wallet');

    if (walletParam) {
      setSearchTerm(walletParam); // Set the wallet address in the search bar
    }
  }, [location]);

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
    <header className={`fixed top-0 left-0 w-full z-50 ${window.location.pathname === '/' ? 'bg-transparent' : 'bg-gradient-to-r from-[#231F20] to-[#70C7BA]'}`}>
      <div className="flex justify-between items-center p-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="katPool" className="h-10 w-10 rounded-full" />
          <span className="text-2xl font-bold text-white">Kaspa katPool</span>
        </div>

        {/* Centered Search Box */}
        <form onSubmit={handleSearch} className="flex items-center justify-center flex-1 mx-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by wallet address..."
            className="w-full max-w-lg p-2 border border-gray-300 rounded-md"
          />
          <button 
            type="submit" 
            className="ml-2 p-2 bg-white text-black rounded-md hover:bg-gray-200 focus:outline-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </button>
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
              Nacho the Kat
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <Link to="https://NachoWyborski.xyz" className="block px-4 py-2 text-sm hover:bg-gray-200">Website</Link>
                <Link to="https://discord.gg/nachothekat" className="block px-4 py-2 text-sm hover:bg-gray-200">Discord</Link>
                <Link to="/Done" className="block px-4 py-2 text-sm hover:bg-gray-200">Donate</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
