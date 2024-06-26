/* eslint-disable react/no-unescaped-entities */


import React from "react";
import Image from "next/image";
import Educators from "@/public/MicrosoftTeams-image (1).png";
import Prof from '@/public/prof.png';

const Welcome = () => {
  return (
    <div className="bg-white mt-16 md:mt-0">
      <section className="container mx-auto py-10 px-4 md:py-20 md:px-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-8xl md:font-extrabold font-extrabold text-gTahidiMain  " >
          Karibu <br/> gTahidi
          </h1>
          <p className="mt-4 text-lg md:text-xl font-bold text-black">
            Revolutionize your Teaching with gTahidi
          </p>
          <p className="mt-4 text-lg md:text-xl font-thin text-text-black">
            Create Curriculum-Compliant lesson plans, schemes of work, <br/>
            and assessment questions in minutes.
          </p>

          {/* <div className="flex items-center space-x-2 mt-12 justify-center lg:justify-start">
            {[Prof, Prof, Prof, Prof].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={40}
                height={40}
                alt="Educator"
                className="rounded-full border-2 border-gray-500 object-cover"
                style={{ marginLeft: index !== 0 ? '-10px' : '0' }}
              />
            ))}
            <span className="text-lg font-medium text-gtahidiPink">
              Join 300+ Educators
            </span>
          </div> */}

          <a
            href="https://api.whatsapp.com/send?phone=254769132469&text=Hello+gTahidi%F0%9F%A4%97"
            className="mt-6 inline-block bg-gtahidiPink rounded-lg border-2 px-6 py-3 uppercase text-sm font-bold tracking-widest text-white"
          >
            Start Now
          </a>
        </div>
        
        <div className="mt-[200px] lg:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            src={Educators}
            alt="Educators"
            width={300}
            height={350}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
