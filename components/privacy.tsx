'use client'


import React from 'react';
import { DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/outline'; // Assuming you are using Heroicons for icons

const InfoSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex">
          <DocumentTextIcon className="h-10 w-10 text-gray-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800">Your Privacy is Our Priority</h2>
            <p className="text-gray-600">
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security...
              {/* Full privacy text goes here */}
            </p>
          </div>
        </div>
        <div className="flex">
          <AcademicCapIcon className="h-10 w-10 text-gray-500" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800">Our foundation in the field of education</h2>
            <p className="text-gray-600">
              gTahidi was co-founded by an accomplished educator, making it specifically crafted to address...
              {/* Full foundation text goes here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
