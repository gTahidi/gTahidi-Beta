// components/HowItWorksSection.tsx
import Image from 'next/image';
import React from 'react';
import CharacterIllustration from '@/public/character-illustration.svg'; // Replace with your actual image path
import Icon1 from '@/public/icon1.svg'; // Replace with your actual image path
import Icon2 from '@/public/icon2.svg'; // Replace with your actual image path
import Icon3 from '@/public/icon3.svg'; // Replace with your actual image path

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-indigo-600 text-white p-12 flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around">
        <div className="flex-1 flex justify-center">
          <Image
            src={CharacterIllustration}
            alt="Character Illustration"
            width={400} // Adjust based on your image's aspect ratio
            height={400} // Adjust based on your image's aspect ratio
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold text-center lg:text-left">How it works!</h2>
          <div className="flex items-center">
            <Image src={Icon1} alt="Step 1" width={50} height={50} />
            <p className="ml-4">Input your Requirements - Input your Topic, Sub-topic, Grade & Lesson Duration.</p>
          </div>
          <div className="flex items-center">
            <Image src={Icon2} alt="Step 2" width={50} height={50} />
            <p className="ml-4">Click Create Lesson Plan - Just like that, click create, wait for a few seconds and you have your Lesson Plan!</p>
          </div>
          <div className="flex items-center">
            <Image src={Icon3} alt="Step 3" width={50} height={50} />
            <p className="ml-4">Edit, Save & Download - Edit, Download & Save your lesson plans, notes and Assessment Questions to your Schemes of work.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
