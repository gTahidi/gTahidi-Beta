"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

export const Welcome = () => {
  const { handleStart } = useGlobalData();
  return (
    <header className="p-4 sm:p-[5%] flex flex-col sm:justify-between sm:flex-row">
      <div className="mb-4 sm:mb-0 sm:w-3/5">
        <h1 className="text-4xl sm:text-7xl text-gtahidiDarkBlue">
          Karibu gTahidi
          <br />
          <Typewriter
            options={{
              strings: [
                "Mwalimu",
                "Create Lesson Plans",
                "Create Short Notes",
                "Organize schemes of work",
                ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h2 className="text-gtahidiDarkBlue text-2xl sm:text-3xl my-3">
          Revolutionize your <span className="text-gtahidiPink">Teaching</span> with gTahidi AI.
        </h2>
        <p className="my-2">
          Create Curriculum-Compliant Lesson Plans, Schemes of Work, and Assessment Questions in Minutes.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
          <button
            className="py-2 bg-gtahidiPurple rounded-lg text-white w-full sm:w-1/4"
            onClick={handleStart}
          >
            Get started
          </button>
          <button
            className="py-2 border-2 border-gtahidiPurple rounded-lg text-gtahidiPurple w-full sm:w-1/4"
            // onClick={handleStart}
          >
            Demo
          </button>
        </div>
      </div>
      <img src="/teacher-with-board.png" alt="blob" className="mx-auto sm:mx-0 w-full sm:w-1/3" />

    </header>
  );
};
