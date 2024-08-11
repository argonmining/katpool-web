import React, { useState } from 'react';
import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';

const Earnings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const earningsData = [
    { date: '2024-08-01', amount: '1000 KAS', status: 'Completed' },
    { date: '2024-08-02', amount: '850 KAS', status: 'Pending' },
    { date: '2024-08-03', amount: '1200 KAS', status: 'Completed' },
    // Add more rows as needed
  ];

  const paginatedData = earningsData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(earningsData.length / rowsPerPage)) {
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
        <Title>Earnings</Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((earning, index) => (
              <TableRow key={index}>
                <TableCell>{earning.date}</TableCell>
                <TableCell>{earning.amount}</TableCell>
                <TableCell>{earning.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between mt-4">
          <Button disabled={currentPage === 1} onClick={handlePrevPage}>
            Previous
          </Button>
          <Button
            disabled={currentPage === Math.ceil(earningsData.length / rowsPerPage)}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Earnings;
