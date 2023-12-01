import Image from 'next/image';
import React from 'react';
import AboutImage from '@/public/about.png'

const AboutUs = () => {
  return (
    <div className='bg-blue-900 text-white p-6 '>
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
    <div className="flex flex-col md:flex-row   md:p-12">
      <div className="md:flex-1">
        {/* Replace with the path to your image */}
        <Image
          src={AboutImage}
          alt="About Us"
          width={150}
          height={150}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="md:flex-1 md:ml-6 mt-6 md:mt-0">
        
        <p>
          gTahidi AI is a management consultancy firm with 25 years of industry
          experience. We are firm believers in data, and its power to guide
          decisions, spearhead innovation, and create lasting change. We are
          dedicated to advising forward-thinking leaders, helping them make
          sound business decisions that positively impact not just their
          organization, but also the wider community.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
