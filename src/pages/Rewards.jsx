import React, { useState } from 'react';
import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';

const Rewards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const rewardsData = [
    { date: '2024-08-01', reward: '50 KAS', type: 'Block Reward' },
    { date: '2024-08-02', reward: '25 KAS', type: 'Transaction Fee' },
    { date: '2024-08-03', reward: '30 KAS', type: 'Block Reward' },
    // Add more rows as needed
  ];

  const paginatedData = rewardsData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(rewardsData.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-8 space-y-8 mt-20">
      <Card className="rounded-xl shadow-lg bg-gray-400">
        <Title>Rewards</Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Reward</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((reward, index) => (
              <TableRow key={index}>
                <TableCell>{reward.date}</TableCell>
                <TableCell>{reward.reward}</TableCell>
                <TableCell>{reward.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between mt-4">
          <Button disabled={currentPage === 1} onClick={handlePrevPage}>
            Previous
          </Button>
          <Button
            disabled={currentPage === Math.ceil(rewardsData.length / rowsPerPage)}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Rewards;
