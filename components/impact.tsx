import Image from 'next/image';
import React from 'react';
import ImpactImage from '@/public/emmanuel.svg'; // Replace with your actual image path
import Data from '@/public/data.svg'; 
import OnlineSupport from '@/public/Online support service.svg';
import Families from '@/public/Familiescelebrate.svg';

const OurImpact = () => {
  return (
    <div className="bg-purple-800 text-white p-6 flex flex-col md:flex-row items-center rounded-lg">
      <div className=" space-x-14 px-20 py-16 ml-[50px] ">
      <h2 className="text-5xl font-bold mb-6">Our Impact</h2>
        <div className="flex flex-col  ">
          <div className="flex items-center space-x-8">
            {/* Include your icons inline or as components */}
            <div className="icon">
                <Image
                    src={Data}
                    alt="Our Impact"
                    width={150} // Adjust as per your image's aspect ratio
                    height={150} // Adjust as per your image's aspect ratio
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div>
              <p className="text-3xl  text-gtahidiPink font-bold">3,000</p>
              <p>Data-driven projects delivered.</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="icon">
                <Image
                        src={OnlineSupport}
                        alt="Our Impact"
                        width={150} // Adjust as per your image's aspect ratio
                        height={150} // Adjust as per your image's aspect ratio
                        objectFit="cover"
                        className="rounded-lg"
                />
            </div>
            <div>
              <p className="text-3xl text-gtahidiPink font-bold">900</p>
              <p>Clients served.</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="icon">
                <Image
                    src={Families}
                    alt="Our Impact"
                    width={150} 
                    height={150} 
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div>
              <p className="text-3xl  text-gtahidiPink font-bold">200</p>
              <p>Communities improved.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex-1 md:ml-4 mt-6 md:mt-0">
        <Image
          src={ImpactImage}
          alt="Our Impact"
          width={500} // Adjust as per your image's aspect ratio
          height={300} // Adjust as per your image's aspect ratio
          // objectFit="cover"
          className="rounded"
        />
      </div>
    </div>
  );
};

export default OurImpact;
