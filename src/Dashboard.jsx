// src/Dashboard.jsx
import React from 'react';
import { BarChart } from '@tremor/react';
import { LineChart } from '@tremor/react'; // Assuming LineChart is available in Tremor

const Dashboard = () => {
  const data = [
    { month: 'January', value: 50 },
    { month: 'February', value: 60 },
    { month: 'March', value: 70 },
  ];

  const lineData = [
    { time: '04:50', value: 1 },
    { time: '10:50', value: 2 },
    { time: '16:50', value: 3 },
  ];

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen full-width-container">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 p-4 bg-gray-800 rounded">
          <h3 className="text-xl mb-2">Main</h3>
          <p>Unpaid balance: 35.66 (5.43 $)</p>
          <p>Min. payout: 100.00 (15.22 $)</p>
          <p>New payout: 2024-08-06 11:25:16</p>
          <p>Est. earnings: 42.21 (6.42 $)</p>
          <p>Total paid: 3313.59 (504.25 $)</p>
        </div>
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="text-xl mb-2">Hashrate</h3>
          <p>30 min: 6.11 TH/s</p>
          <p>3 hours: 5.41 TH/s</p>
          <p>24 hours: 851.76 GH/s</p>
        </div>
        <div className="p-4 bg-gray-800 rounded">
          <h3 className="text-xl mb-2">Earnings</h3>
          <p>1 hour: 2.83 (0.43 $)</p>
          <p>12 hours: 8.67 (1.32 $)</p>
          <p>24 hours: 9.19 (1.40 $)</p>
          <p>Week: 31.68 (4.82 $)</p>
          <p>Month: 155.42 (23.65 $)</p>
        </div>
        <div className="col-span-2 p-4 bg-gray-800 rounded">
          <h3 className="text-xl mb-2">Hashrate Over Time</h3>
          <LineChart data={lineData} x="time" y="value" />
        </div>
        <div className="col-span-2 p-4 bg-gray-800 rounded">
          <h3 className="text-xl mb-2">Worker Performance</h3>
          <BarChart data={data} x="month" y="value" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
