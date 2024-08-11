// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu'; // Import the updated Menu component
import { Card, Title, BarChart, LineChart, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge } from '@tremor/react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const [wallet, setWallet] = useState('');

  useEffect(() => {
    // Extract wallet address from URL query parameter
    const params = new URLSearchParams(location.search);
    const walletAddress = params.get('wallet');
    if (walletAddress) {
      setWallet(walletAddress);
      // Fetch and update dashboard data based on the walletAddress
    }
  }, [location]);

  // Sample data for the bar chart and line chart (same as before)
  const hashrateData = [/* data */];
  const performanceData = [/* data */];
  const minerData = [/* data */];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#B6B6B6' }}>
      <Menu onSearch={setWallet} /> {/* Pass the setWallet function to the Menu */}
      <div className="flex pt-20">
        <Sidebar /> {/* Sidebar remains on the left side */}
        <div className="ml-72 w-full overflow-y-auto h-screen pt-6 pr-8 pb-8 pl-8"> {/* Content area with scrolling */}
          <div className="mt-4">
            {/* Bar Chart for Hashrate */}
            <Card className="mt-8">
              <Title>Hashrate Over Time</Title>
              <BarChart
                data={hashrateData}
                index="date"
                categories={['hashrate']}
                colors={['blue']}
                yAxisWidth={40}
              />
            </Card>

            {/* Line Chart for Miner Performance */}
            <Card className="mt-8">
              <Title>Miner Performance Over Time</Title>
              <LineChart
                data={performanceData}
                index="date"
                categories={['efficiency', 'uptime']}
                colors={['green', 'orange']}
                yAxisWidth={40}
              />
            </Card>

            {/* Table for Miner Statistics */}
            <Card className="mt-8">
              <Title>Miner Statistics</Title>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Miner ID</TableHeaderCell>
                    <TableHeaderCell>Hashrate</TableHeaderCell>
                    <TableHeaderCell>Rewards Earned</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {minerData.map((miner, index) => (
                    <TableRow key={index}>
                      <TableCell>{miner.id}</TableCell>
                      <TableCell>{`${miner.hashrate} GH/s`}</TableCell> {/* Display hashrate with unit */}
                      <TableCell>{miner.rewards}</TableCell>
                      <TableCell>
                        <Badge color={miner.hashrate > 150 ? 'green' : 'yellow'}>
                          {miner.hashrate > 150 ? 'Active' : 'Idle'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
