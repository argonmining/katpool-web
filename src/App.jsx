// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './Menu';
import HeroBanner from './HeroBanner';
import InfoSection from './InfoSection';
import ConnectionInfo from './ConnectionInfo';
import Stats from './Stats';
import Dashboard from './Dashboard';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={
            <>
              <HeroBanner />
              <InfoSection />
              <ConnectionInfo />
              <Stats />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
