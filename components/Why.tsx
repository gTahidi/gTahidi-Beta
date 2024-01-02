/* eslint-disable react/no-unescaped-entities */

// components/WhyGtahidiSection.tsx
import Image from 'next/image';
import React from 'react';

// Placeholder for the images
const images = {
  clock: '/path-to-your-clock-image.svg', // Replace with your actual image path
  whistle: '/path-to-your-whistle-image.svg', // Replace with your actual image path
  pencil: '/path-to-your-pencil-image.svg', // Replace with your actual image path
  rocket: '/path-to-your-rocket-image.svg', // Replace with your actual image path
};

const WhyGtahidiSection: React.FC = () => {
  return (
    <section className="py-12 bg-blue-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why gTahidi?</h2>
      </div>
      <div className="container mx-auto px-4 flex justify-around items-center">
        {/* Individual Feature Start */}
        <div className="flex flex-col items-center space-y-2">
          <Image src={images.clock} alt="Saves you time" width={120} height={120} />
          <p className="text-center text-gray-700">Saves you time. (Of Course)</p>
        </div>
        {/* Individual Feature End */}
        
        {/* Repeat for other features */}
        <div className="flex flex-col items-center space-y-2">
          <Image src={images.whistle} alt="Its Free" width={120} height={120} />
          <p className="text-center text-gray-700">Its Free. Stop buying Lesson Plans and Schemes of work.</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Image src={images.pencil} alt="Copy, Edit & Download" width={120} height={120} />
          <p className="text-center text-gray-700">Copy, Edit & Download it. It's Yours.</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Image src={images.rocket} alt="Compliant" width={120} height={120} />
          <p className="text-center text-gray-700">Compliant with over 80% of Global Curricula.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyGtahidiSection;
