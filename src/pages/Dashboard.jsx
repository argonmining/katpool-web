import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import Earnings from './Dashboard/Earnings';
import Rewards from './Dashboard/Rewards';
import { Card, Title, BarChart, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

const DashboardHome = () => {
  const [networkHashrate, setNetworkHashrate] = useState(null);
  const [pendingBalance, setPendingBalance] = useState(null); // State for pending balance
  const location = useLocation(); // Get the location object

  const prometheusBaseUrl = import.meta.env.VITE_PROMETHEUS_BASE_URL || 'https://default-url.com';

  // Extract the wallet address from the URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const walletAddress = queryParams.get('wallet');

  useEffect(() => {
    const fetchHashrateData = async () => {
      try {
        const response = await fetch('https://api-v2-do.kas.fyi/analytics/metrics');
        if (!response.ok) {
          throw new Error('Failed to fetch network hashrate data');
        }
        const data = await response.json();
        const hashrateInTH = (data.hashrate / 1e12).toFixed(2); // Convert to Terahashes per second
        setNetworkHashrate(hashrateInTH);
      } catch (error) {
        console.error('Error fetching network hashrate:', error);
      }
    };

    fetchHashrateData();
  }, []);

  useEffect(() => {
    const fetchPendingBalance = async () => {
      if (!walletAddress) {
        console.error('No wallet address provided');
        return;
      }

      try {
        const response = await fetch(
          `${prometheusBaseUrl}/api/v1/query?query=miner_balances{wallet="${walletAddress}"}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch pending balance data');
        }
        const data = await response.json();
        const balance = data.data.result[0].value[1];
        const adjustedBalance = (balance / 1e8).toFixed(2); // Adjust by 8 decimal places
        setPendingBalance(adjustedBalance);
      } catch (error) {
        console.error('Error fetching pending balance:', error);
      }
    };

    fetchPendingBalance();
  }, [walletAddress, prometheusBaseUrl]); // Dependencies

  const hashrateData = [
    { hour: '00:00', hashrate: 35 },
    { hour: '01:00', hashrate: 40 },
    { hour: '02:00', hashrate: 38 },
    { hour: '03:00', hashrate: 42 },
    { hour: '04:00', hashrate: 37 },
    { hour: '05:00', hashrate: 45 },
    { hour: '06:00', hashrate: 48 },
    { hour: '07:00', hashrate: 44 },
    { hour: '08:00', hashrate: 47 },
    { hour: '09:00', hashrate: 50 },
    { hour: '10:00', hashrate: 49 },
    { hour: '11:00', hashrate: 52 },
    { hour: '12:00', hashrate: 54 },
    { hour: '13:00', hashrate: 53 },
    { hour: '14:00', hashrate: 55 },
    { hour: '15:00', hashrate: 57 },
    { hour: '16:00', hashrate: 60 },
    { hour: '17:00', hashrate: 58 },
    { hour: '18:00', hashrate: 61 },
    { hour: '19:00', hashrate: 59 },
    { hour: '20:00', hashrate: 62 },
    { hour: '21:00', hashrate: 65 },
    { hour: '22:00', hashrate: 63 },
    { hour: '23:00', hashrate: 66 },
    { hour: '00:00', hashrate: 68 },
    { hour: '01:00', hashrate: 67 },
    { hour: '02:00', hashrate: 69 },
    { hour: '03:00', hashrate: 70 },
    { hour: '04:00', hashrate: 72 },
    { hour: '05:00', hashrate: 73 },
    { hour: '06:00', hashrate: 74 },
    { hour: '07:00', hashrate: 76 },
    { hour: '08:00', hashrate: 75 },
    { hour: '09:00', hashrate: 78 },
    { hour: '10:00', hashrate: 77 },
    { hour: '11:00', hashrate: 80 },
    { hour: '12:00', hashrate: 82 },
    { hour: '13:00', hashrate: 81 },
    { hour: '14:00', hashrate: 83 },
    { hour: '15:00', hashrate: 85 },
    { hour: '16:00', hashrate: 86 },
    { hour: '17:00', hashrate: 88 },
    { hour: '18:00', hashrate: 87 },
    { hour: '19:00', hashrate: 89 },
    { hour: '20:00', hashrate: 91 },
    { hour: '21:00', hashrate: 90 },
    { hour: '22:00', hashrate: 93 },
    { hour: '23:00', hashrate: 92 },
  ];

  const minerData = [
    {
      name: 'IR-KS3M',
      hashrate15min: '6.01 TH/s',
      hashrate1hr: '5.75 TH/s',
      hashrate24hr: '5.83 TH/s',
      hashrate48hr: '6.10 TH/s',
      lastShare: '5m ago',
    },
    {
      name: 'AntminerK5SPro',
      hashrate15min: '18.12 TH/s',
      hashrate1hr: '21.32 TH/s',
      hashrate24hr: '22.11 TH/s',
      hashrate48hr: '21.95 TH/s',
      lastShare: '2m ago',
    },
    // Add more workers as needed
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-xl shadow-lg bg-gray-400 flex flex-col justify-center items-center p-6">
          <Title className="text-white text-center leading-relaxed">Network Hashrate</Title>
          <p className="text-4xl font-bold text-white text-center leading-relaxed">
            {networkHashrate !== null ? `${networkHashrate} TH/s` : 'Loading...'}
          </p>
        </Card>
        <Card className="rounded-xl shadow-lg bg-gray-400 flex flex-col justify-center items-center p-6">
          <Title className="text-white text-center leading-relaxed">Pool Hashrate</Title>
          <p className="text-4xl font-bold text-white text-center leading-relaxed">2.3 PH/s</p>
        </Card>
        <Card className="rounded-xl shadow-lg bg-gray-400 flex flex-col justify-center items-center p-6">
          <Title className="text-white text-center leading-relaxed">Your Hashrate (48h)</Title>
          <p className="text-4xl font-bold text-white text-center leading-relaxed">33.91 TH/s</p>
        </Card>
        <Card className="rounded-xl shadow-lg bg-gray-400 flex flex-col justify-center items-center p-6">
          <Title className="text-white text-center leading-relaxed">Pending Balance</Title>
          <p className="text-4xl font-bold text-white text-center leading-relaxed">
            {pendingBalance !== null ? `${pendingBalance} KAS` : 'Loading...'}
          </p>
        </Card>
      </div>

      {/* Hashrate Over Time */}
      <Card className="rounded-xl shadow-lg bg-gray-400">
        <Title className="text-center text-white">Hashrate Over Time (Last 48 Hours)</Title>
        <BarChart
          data={hashrateData}
          index="hour"
          categories={['hashrate']}
          colors={['blue']}
          yAxisWidth={40}
          label="Hashrate (TH/s)"
          yLabel="Hashrate (TH/s)"
          xLabel="Time (Hours)"
          showXAxis
          showYAxis
          showLegend={false}
        />
      </Card>

      {/* Miner Statistics */}
      <Card className="rounded-xl shadow-lg bg-gray-400">
        <Title>Workers</Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Worker Name</TableHeaderCell>
              <TableHeaderCell>Hashrate (15min)</TableHeaderCell>
              <TableHeaderCell>Hashrate (1hr)</TableHeaderCell>
              <TableHeaderCell>Hashrate (24hr)</TableHeaderCell>
              <TableHeaderCell>Hashrate (48hr)</TableHeaderCell>
              <TableHeaderCell>Last Share</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {minerData.map((miner, index) => (
              <TableRow key={index}>
                <TableCell>{miner.name}</TableCell>
                <TableCell>{miner.hashrate15min}</TableCell>
                <TableCell>{miner.hashrate1hr}</TableCell>
                <TableCell>{miner.hashrate24hr}</TableCell>
                <TableCell>{miner.hashrate48hr}</TableCell>
                <TableCell>{miner.lastShare}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Recent Payments */}
      <Card className="rounded-xl shadow-lg bg-gray-400">
        <Title>Recent Payments</Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Timestamp</TableHeaderCell>
              <TableHeaderCell>Transaction Hash</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                timestamp: '12:34 PM',
                transactionHash: '0xa3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4',
                amount: '1000 KAS',
              },
              {
                timestamp: '1:22 PM',
                transactionHash: '0xb4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i',
                amount: '750 KAS',
              },
            ].map((payment, index) => (
              <TableRow key={index}>
                <TableCell>{payment.timestamp}</TableCell>
                <TableCell>
                  <a href={`https://explorer.kaspa.org/tx/${payment.transactionHash}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {payment.transactionHash}
                  </a>
                </TableCell>
                <TableCell>{payment.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Menu />
        <div className="p-8 mt-20">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="rewards" element={<Rewards />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;