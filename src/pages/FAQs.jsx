// src/pages/FAQs.jsx
import React from 'react';
import Menu from '../components/Menu';

const FAQs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        {/* Add your FAQs content here */}
        <p className="mt-4">This is where you will add the accordion-style expandable list of FAQs.</p>
      </div>
    </div>
  );
};

export default FAQs;
