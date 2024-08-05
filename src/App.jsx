import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Menu from './Menu';
import HeroBanner from './HeroBanner';
import InfoSection from './InfoSection';
import ConnectionInfo from './ConnectionInfo';
import Stats from './Stats';
import './App.css'

const App = () => {
  return (
    <div>
      <Menu />
      <HeroBanner />
      <InfoSection />
      <ConnectionInfo />
      <Stats />
    </div>
  );
};

export default App;
