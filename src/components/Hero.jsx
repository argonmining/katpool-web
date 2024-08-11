// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/hero-image.png'; // Import the hero image

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#70C7BA] to-[#49EACB]">
      <div className="absolute inset-0 z-0 rounded-[100px] md:rounded-[200px] lg:rounded-[300px] bg-gradient-to-br from-[#70C7BA] to-[#49EACB]" />

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between space-x-8">
        <img src={heroImage} alt="Hero" className="w-1/2 h-auto" />
        <div className="flex flex-col items-center text-center text-white space-y-4 w-1/2">
          <h1 className="text-5xl font-bold">Welcome to Katpool</h1>
          <p className="text-2xl">Nacho Typical Kaspa Mining Pool</p>
          <div className="space-x-4 mt-4">
            <button className="bg-white text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">
              Get Connected
            </button>
            <button className="bg-white text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
