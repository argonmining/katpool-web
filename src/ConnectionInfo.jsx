// src/ConnectionInfo.jsx
import React from 'react';

const ConnectionInfo = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Connection Information for Miners</h2>
      <ul>
        <li>Server: pool.katpool.com</li>
        <li>Port: 3333</li>
        <li>Username: YourWalletAddress</li>
        <li>Password: x</li>
      </ul>
    </section>
  );
};

export default ConnectionInfo;
