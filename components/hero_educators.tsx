"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Educators from "@/public/educators.svg";

export const Welcome = () => {
  return (
    <div className=" px-16 py-20 bg-blue-100 ">
      <section className="container flex flex-col items-center  mx-auto lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="max-w-xl  font-extrabold tracking-wide text-purple-900 capitalize md:text-6xl ">
            Qaribu <br/>
            gTahidi
          </h1>

          <p className="max-w-lg mt-4 text-black text-xl font-bold">
            Revolutionize your Teaching with gTahidi
          </p>
          <p className="max-w-lg mt-4 text-black text-xl font-thin">
            Create Carriculum - Compliant lessonPlans, Schemes of Wor,<br/> And Assesment Questions in Minutes
          </p>

          <div className="mt-6 sm:flex sm:items-center">
            <a
              href="#"
              className="bg-gtahidiPink hover:bg-[#475F45]/80 rounded-lg duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white "
            >
              Buy Tickets
            </a>
          </div>
        </div>

        <div className="h-[25rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden">
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
