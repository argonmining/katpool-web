// src/components/Header.jsx
import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <div className="w-full h-16 bg-white shadow-lg rounded-2xl p-4 pl-72 fixed top-0 left-0 flex items-center">
      <input
        type="text"
        placeholder="Search wallet address..."
        className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(e.target.value);
          }
        }}
      />
      <button
        onClick={() => onSearch(document.querySelector('input').value)}
        className="ml-4 bg-green-500 text-white rounded-lg px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default Header;
