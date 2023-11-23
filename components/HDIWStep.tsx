import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-purple-600 min-h-screen flex flex-col items-center justify-center text-white p-8">
      <h2 className="text-5xl font-bold mb-10">How it works!</h2>
      <div className="flex flex-row justify-around items-start w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <Image 
            src="/teacher1.png" 
            alt="Character" 
            width={900} 
            height={900} 
            className=' w-full h-full'
            />
        </div>
        <div className="space-y-10">
          <div className="flex items-center space-x-4">
            <Image src="/bulb.png" alt="Lightbulb" width={104} height={104} />
            <div className='bg-white rounded text-black p-2 '>
              <h3 className="text-xl font-semibold text-gtahidiPink">Input your Requirements</h3>
              <p>Input your Topic, Sub-topic, Grade & Lesson Duration</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/calender.png" alt="Calendar" width={64} height={64} />
            <div className='bg-white rounded text-black p-2 '>
              <h3 className="text-xl font-semibold">Click Create Lesson Plan</h3>
              <p>Just like that, click create, wait for a few seconds and you have your Lesson Plan!</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/book.png" alt="Edit" width={64} height={64} />
            <div className='bg-white rounded text-black p-2 '>
              <h3 className="text-xl font-semibold">Edit, Save & Download</h3>
              <p>Edit, Download & Save your lesson plans, notes and Assessment Questions to your Schemes of work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
