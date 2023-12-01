import Image from 'next/image';
import React from 'react';
import AboutImage from '@/public/about.png';

const AboutUs = () => {
  return (
    <div className='bg-blue-900 text-white p-6 px-20'> {/* Consider adjusting px-20 if too much padding on sides */}
      <h2 className="text-4xl ml-[250px] mt-7 font-bold mb-4">About Us</h2>
      <div className="flex flex-col ml-[200px] md:flex-row md:p-12 space-x-8 items-center">
        <div className="md:w-1/3 lg:w-2/5">
          <Image
            src={AboutImage}
            alt="About Us"
            width={640}
            height={400}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-3/5 pr-0 md:pr-20 md:mt-0"> {/* Consider adjusting pr-0 if too much padding on right */}
          <p className='text-justify md:text-left text-2xl'>
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
