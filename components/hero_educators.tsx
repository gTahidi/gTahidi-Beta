"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Educators from "@/public/educators.svg";
import Prof from '@/public/prof.png'

export const Welcome = () => {
  return (
    <div className=" px-16 py-20 bg-blue-100 ">
      <section className="container flex flex-col items-center  mx-auto lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="max-w-xl  font-extrabold tracking-wide text-purple-900 capitalize md:text-6xl ">
            Qaribu <br />
            gTahidi
          </h1>

          <p className="max-w-lg mt-4 text-black text-xl font-bold">
            Revolutionize your Teaching with gTahidi
          </p>
          <p className="max-w-lg mt-4 text-black text-xl font-thin">
            Create Carriculum - Compliant lessonPlans, Schemes of Wor,
             And Assesment Questions in Minutes
          </p>
          <div className="pt-8 lg:pt-10 w-max mx-auto lg:mx-0">
          <div className="flex items-center text-center flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="flex items-center">
              <Image
                src={Prof}
                width={40}
                height={40}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-500  object-cover"
              />
              <Image
                src={Prof}
                width={40}
                height={40}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-500   object-cover -ml-2.5"
              />
              <Image
                src={Prof}
                width={40}
                height={40}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-500   object-cover -ml-2.5"
              />
              <Image
                src={Prof}
                width={40}
                height={40}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-500   object-cover -ml-2.5"
              />
              <span className="flex items-center justify-center font-medium p-4 text-lg text-gtahidiPink  -ml-2.5">
                 Join 300+
              </span>
            </div>
            <div className=" text-black">
              Educators
            </div>
          </div>
        </div>
        <div />

          <div className="mt-6 sm:flex sm:items-center">
            <a
              href="#"
              className="bg-gtahidiPink  rounded-lg duration-300 transition-colors border-2  px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white "
            >
              Start Now
            </a>
          </div>
        </div>
        

        <div className="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden">
          <Image
            className="object-cover"
            src={Educators}
            alt="main page"
            width={80}
            height={80}
          />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
