'use client'

import React from 'react';

const BackedByMicrosoft: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-sm font-light text-gray-600">Backed by</p>
        <div className="inline-flex items-center">
          {/* Replace with actual logo */}
          <img src="/path-to-your-microsoft-logo.svg" alt="Microsoft for Startups" className="h-8" />
          <span className="text-lg font-semibold ml-2">Microsoft for Startups</span>
        </div>
      </div>
    </div>
  );
};

export default BackedByMicrosoft;
