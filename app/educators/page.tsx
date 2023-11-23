// Import React and Next.js components
import React from 'react';
import Head from 'next/head';

// Import Tailwind CSS components

const HomePage = () => {
  return (
    <>
      <Head>
        <title>gTahidi AI</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
        <div className="text-center p-4 md:p-12">
          <div className="mb-4">
            {/* Logo placeholder */}
            <div className="mb-4 inline-block">
              {/* Replace with actual logo */}
              <div className="bg-white p-2 rounded-full">C</div>
            </div>
            {/* Title and subtitle */}
            <h1 className="text-5xl text-white font-bold mb-4">Karibu gTahidi</h1>
            <p className="text-white text-xl mb-8">
              Revolutionize your Teaching with gTahidi AI
            </p>
            <p className="text-white mb-8">
              Create Curriculum - Compliant Lesson Plans, Schemes of Work and Assessment Questions in Minutes
            </p>
          </div>
          {/* Button */}
          <button className="text-purple-600 bg-white hover:bg-gray-100 font-bold py-2 px-4 rounded">
            Start Learning
          </button>
          {/* Stack of Books - This would be an image */}
          {/* Replace with an actual image */}
          <div className="mt-8">
            <img
              src="/path-to-your-stack-of-books-image.png" // Replace with the path to your image
              alt="Stack of Books"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
