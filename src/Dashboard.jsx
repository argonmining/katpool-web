// src/Dashboard.jsx
import React from 'react';
import { BarChart } from '@tremor/react';

const data = [
  { month: 'January', value: 50 },
  { month: 'February', value: 60 },
  { month: 'March', value: 70 },
];

const Dashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to the Dashboard. Here you can monitor your mining activities and statistics.</p>
      <BarChart data={data} x="month" y="value" />
    </div>
  );
};

export default Dashboard;
