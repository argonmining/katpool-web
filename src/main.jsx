// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PoolStatistics from './pages/PoolStatistics';
import FAQs from './pages/FAQs';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pool-statistics" element={<PoolStatistics />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
