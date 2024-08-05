// src/Stats.jsx
import React from 'react';
import { BarChart } from '@tremor/react';

const data = [
  { month: 'January', value: 40 },
  { month: 'February', value: 30 },
  { month: 'March', value: 20 },
];

const Stats = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Mining Stats</h2>
      <BarChart data={data} x="month" y="value" />
    </div>
  );
};

export default Stats;
