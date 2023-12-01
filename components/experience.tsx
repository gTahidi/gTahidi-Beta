import Image from 'next/image';
import React from 'react';
import Girl from '@/public/phone.svg'; // Ensure the path to your image is correct

const AboutUs = () => {
  return (
      <div className=" w-full">
        <div className="bg-white r">
          <div className="md:flex">
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Noteworthy Technology Acquisitions 2021</h2>
              <p className="text-gray-700 dark:text-gray-400 text-lg">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. The technology sector has seen a lot of consolidation over the years. 2021 is no exception, with several large companies making significant acquisitions. These mergers and acquisitions can help organizations rapidly scale their operations, expand into new markets, or acquire new technologies and talent.
              </p>
              {/* Additional content could go here */}
            </div>
            <div className="md:flex-shrink-0">
              <Image 
                src={Girl} 
                alt="A girl with a phone"
                width={640}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
