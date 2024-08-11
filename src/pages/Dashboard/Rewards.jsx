import React from 'react';

const Rewards = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Rewards</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Reward</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example static rows */}
            <tr>
              <td className="py-2 px-4 border-b">2024-08-10</td>
              <td className="py-2 px-4 border-b">50 KAS</td>
              <td className="py-2 px-4 border-b">Pending</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">2024-08-11</td>
              <td className="py-2 px-4 border-b">75 KAS</td>
              <td className="py-2 px-4 border-b">Confirmed</td>
            </tr>
            {/* More rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
      </div>
    </div>
  );
};

export default Rewards;
