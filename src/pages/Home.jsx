// src/pages/Home.jsx
import React from 'react';
import Menu from '../components/Menu';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Menu />
      <Hero />
    </div>
  );
};

export default Home;
