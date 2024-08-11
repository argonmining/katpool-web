// src/pages/GetConnected.jsx
import React from 'react';
import Menu from '../components/Menu';

const GetConnected = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Get Connected</h1>
        <p className="mt-4">This is the "Get Connected" page where users can find information on how to connect to the mining pool.</p>
      </div>
    </div>
  );
};

export default GetConnected;
