'use client'

import React from 'react';
import Image from 'next/image';
import Microsoft from '@/public/Microsoft_logo.svg.png'


const BackedByMicrosoft: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-gray-300">
      <div className="text-center flex flex-row items-center space-x-2">
        <p className="text-xl font-semibold text-gray-600">Backed by</p>
        <div className="inline-flex items-center">
          <Image 
            src={Microsoft}
            alt="Microsoft for Startups"  
            className="h-8" 
            height={32}
            width={32}
          />
          <span className="text-lg font-semibold ml-2">Microsoft for Startups</span>
        </div>
      </div>
    </div>
  );
};

export default BackedByMicrosoft;
