import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import Earnings from './Dashboard/Earnings';
import Rewards from './Dashboard/Rewards';
import {
  Card,
  Title,
  LineChart, 
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from '@tremor/react';

const DashboardHome = () => {
  const [networkHashrate, setNetworkHashrate] = useState(null);
  const [poolHashrate, setPoolHashrate] = useState(null);
  const [userHashrate48h, setUserHashrate48h] = useState(null);
  const [pendingBalance, setPendingBalance] = useState(null);
  const [workers, setWorkers] = useState([]);
  const [hashrateOverTime, setHashrateOverTime] = useState([]); 
  const location = useLocation();

  const prometheusBaseUrl = import.meta.env.VITE_PROMETHEUS_BASE_URL || 'https://default-url.com';

  const queryParams = new URLSearchParams(location.search);
  const walletAddress = queryParams.get('wallet');

  const formatHashrate = (hashrate) => {
    if (hashrate >= 1e18) {
      return `${(hashrate / 1e18).toFixed(2)} EH/s`;
    } else if (hashrate >= 1e15) {
      return `${(hashrate / 1e15).toFixed(2)} TH/s`;
    } else if (hashrate >= 1e12) {
      return `${(hashrate / 1e12).toFixed(2)} GH/s`;
    } else {
      return `${(hashrate / 1e9).toFixed(2)} MH/s`;
    }
  };

  useEffect(() => {
    const fetchNetworkHashrate = async () => {
      try {
        const response = await fetch('https://api-v2-do.kas.fyi/analytics/metrics');
        if (!response.ok) {
          throw new Error('Failed to fetch network hashrate data');
        }
        const data = await response.json();
        const hashrate = parseFloat(data.hashrate); 
        setNetworkHashrate(formatHashrate(hashrate));
      } catch (error) {
        console.error('Error fetching network hashrate:', error);
      }
    };

    const fetchPoolHashrate = async () => {
      try {
        const response = await fetch(
          `${prometheusBaseUrl}/api/v1/query?query=pool_hash_rate_GHps`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch pool hashrate data');
        }
        const data = await response.json();
        const poolHashrateGHps = parseFloat(data.data.result[0].value[1]); 
        setPoolHashrate(formatHashrate(poolHashrateGHps * 1e9)); 
      } catch (error) {
        console.error('Error fetching pool hashrate:', error);
      }
    };

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
        const adjustedBalance = (balance / 1e8).toFixed(2);
        setPendingBalance(adjustedBalance);
      } catch (error) {
        console.error('Error fetching pending balance:', error);
      }
    };

    const fetchAndFormatHashrate = async (minerId, timeInterval) => {
      try {
        const response = await fetch(
          `${prometheusBaseUrl}/api/v1/query?query=avg_over_time(miner_hash_rate_GHps{miner_id="${minerId}"}[${timeInterval}])`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch hashrate data for ${timeInterval}`);
        }
        const data = await response.json();
        const hashrateGH = parseFloat(data.data.result[0].value[1]);

        return formatHashrate(hashrateGH * 1e9); 
      } catch (error) {
        console.error('Error fetching hashrate data:', error);
        return 'N/A';
      }
    };

    const fetchWorkers = async () => {
      if (!walletAddress) {
        console.error('No wallet address provided');
        return;
      }

      try {
        const response = await fetch(
          `${prometheusBaseUrl}/api/v1/query?query=miner_wallet_association{wallet_address="${walletAddress}"}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch worker miner IDs');
        }
        const data = await response.json();

        const workerData = await Promise.all(
          data.data.result.map(async (worker) => {
            const minerId = worker.metric.miner_id;
            const hashrate15m = await fetchAndFormatHashrate(minerId, '15m');
            const hashrate1h = await fetchAndFormatHashrate(minerId, '1h');
            const hashrate12h = await fetchAndFormatHashrate(minerId, '12h');
            const hashrate24h = await fetchAndFormatHashrate(minerId, '24h');
            return {
              minerId,
              hashrate15m,
              hashrate1h,
              hashrate12h,
              hashrate24h,
              lastShare: 'N/A',
            };
          })
        );

        setWorkers(workerData);

        const hashrate48hPromises = workerData.map(worker =>
          fetchAndFormatHashrate(worker.minerId, '48h')
        );
        const hashrate48hResults = await Promise.all(hashrate48hPromises);
        const aggregateHashrate = hashrate48hResults.reduce((acc, hashrate) => {
          const numericValue = parseFloat(hashrate);
          return acc + (isNaN(numericValue) ? 0 : numericValue);
        }, 0);
        setUserHashrate48h(formatHashrate(aggregateHashrate * 1e9)); 
      } catch (error) {
        console.error('Error fetching workers data:', error);
      }
    };

    const fetchHashrateOverTime = async () => {
      if (!walletAddress) {
        console.error('No wallet address provided');
        return;
      }

      try {
        const response = await fetch(
          `${prometheusBaseUrl}/api/v1/query?query=wallet_hashrate_hourly{wallet_address="${walletAddress}"}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch hashrate over time data');
        }
        const data = await response.json();

        const formattedData = data.data.result.map(entry => ({
          time: new Date(entry.metric.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          hashrate: parseFloat(entry.value[1]), 
        }));

        setHashrateOverTime(formattedData);
      } catch (error) {
        console.error('Error fetching hashrate over time:', error);
      }
    };

    fetchNetworkHashrate();
    fetchPoolHashrate();
    fetchPendingBalance();
    fetchWorkers();
    fetchHashrateOverTime(); 
  }, [walletAddress, prometheusBaseUrl]);

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-xl shadow-lg bg-gray-100 flex flex-col justify-center items-center p-6">
          <Title className="text-black text-center leading-relaxed">Network Hashrate</Title>
          <p className="text-4xl font-bold text-black text-center leading-relaxed">
            {networkHashrate !== null ? networkHashrate : 'Loading...'}
          </p>
        </Card>
        <Card className="rounded-xl shadow-lg bg-gray-100 flex flex-col justify-center items-center p-6">
          <Title className="text-black text-center leading-relaxed">Pool Hashrate</Title>
          <p className="text-4xl font-bold text-black text-center leading-relaxed">
            {poolHashrate !== null ? poolHashrate : 'Loading...'}
          </p>
        </Card>
        <Card className="rounded-xl shadow-lg bg-gray-100 flex flex-col justify-center items-center p-6">
          <Title className="text-black text-center leading-relaxed">Your Hashrate (48h)</Title>
          <p className="text-4xl font-bold text-black text-center leading-relaxed">
            {userHashrate48h !== null ? userHashrate48h : 'Loading...'}
          </p>
        </Card>
        <Card className="rounded-xl shadow-lg bg-gray-100 flex flex-col justify-center items-center p-6">
          <Title className="text-black text-center leading-relaxed">Pending Balance</Title>
          <p className="text-4xl font-bold text-black text-center leading-relaxed">
            {pendingBalance !== null ? `${pendingBalance} KAS` : 'Loading...'}
          </p>
        </Card>
      </div>

      <Card className="rounded-xl shadow-lg bg-gray-100">
        <Title className="text-center text-black">Hashrate Over Time (Last 48 Hours)</Title>
        <LineChart
          data={hashrateOverTime}
          index="time"
          categories={['hashrate']}
          colors={['#70C7BA']}  
          yAxisWidth={40}
          label="Hashrate"
          yLabel="Hashrate"
          xLabel="Time (Hours)"
          showXAxis
          showYAxis
          showLegend={false}
        />
      </Card>

      <Card className="rounded-xl shadow-lg bg-gray-100">
        <Title>Workers</Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Worker Name</TableHeaderCell>
              <TableHeaderCell>Hashrate (15min)</TableHeaderCell>
              <TableHeaderCell>Hashrate (1 hour)</TableHeaderCell>
              <TableHeaderCell>Hashrate (12 hour)</TableHeaderCell>
              <TableHeaderCell>Hashrate (24 hour)</TableHeaderCell>
              <TableHeaderCell>Last Share</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workers.length > 0 ? (
              workers.map((worker, index) => (
                <TableRow key={index}>
                  <TableCell>{worker.minerId}</TableCell>
                  <TableCell>{worker.hashrate15m}</TableCell>
                  <TableCell>{worker.hashrate1h}</TableCell>
                  <TableCell>{worker.hashrate12h}</TableCell>
                  <TableCell>{worker.hashrate24h}</TableCell>
                  <TableCell>{worker.lastShare}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="6" className="text-center">Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>

      <Card className="rounded-xl shadow-lg bg-gray-100">
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
                  <a href={`https://explorer.kaspa.org/tx/${payment.transactionHash}`} target="_blank" rel="noopener noreferrer" className="text-black-500 underline">
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
