import React from 'react';

const Earnings = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Earnings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {/* Example static rows */}
            <tr>
              <td className="py-2 px-4 border-b">2024-08-10</td>
              <td className="py-2 px-4 border-b">100 KAS</td>
              <td className="py-2 px-4 border-b">0xa3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">2024-08-11</td>
              <td className="py-2 px-4 border-b">200 KAS</td>
              <td className="py-2 px-4 border-b">0xb4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3</td>
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

export default Earnings;
