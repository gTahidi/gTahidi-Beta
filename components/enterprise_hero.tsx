import Image from 'next/image';
import React from 'react';
import YourIllustration from '@/public/enterprisehero.png'; 

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center bg-blue-100 h-screen">
      <div className="container mx-auto px-4 md:px-12 xl:px-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-purple-700 mb-4">
              Experience <br/>
              excellence <br/>
              with us.
            </h1>
            <p className="text-md md:text-lg text-purple-600 mb-6">
              Your partner in learning.
            </p>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
              Start Learning
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image 
              src={YourIllustration} 
              alt="Learning Illustration" 
              width={500} // Adjusted for smaller screens
              height={500} // Adjusted for smaller screens
              layout="responsive" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
