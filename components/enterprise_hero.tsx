/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import YourIllustration from '@/public/teams.png'; 

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen mt-16 md:mt-0">
    <div className="container mx-auto px-4 mt-8 sm:mt-0 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-poppins text-gtahidiDarkBlue mb-4">
              Explore Learning<br/> with Fun & Ease:<br/> gTahidi AI is at Your<br/> Service!"
            </h1>
            <p className="text-md md:text-lg text-gtahidiDarkBlue mb-6">
              Step into a world where learning is limitless. gTahidi AI brings
              comprehensive educational support directly through WhatsApp,
              covering every subject imaginable—from arts to sciences, and everything in between. 
            </p>
            <Link href="https://wa.link/ishz1o"> {/* Replace with your actual route */}
              <button className="bg-gTahidiSecond text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                Start Learning
              </button>
            </Link>
          </div>
          <div className="flex justify-center mt-[30px] md:justify-end">
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
