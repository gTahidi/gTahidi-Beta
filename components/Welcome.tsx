"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import Image from "next/image";
import React from "react";
import { PilledButton } from "./PilledButton";
import Typewriter from "typewriter-effect";

export const Welcome = () => {
  const { handleStart } = useGlobalData();
  return (
    <header className="p-[5%] flex justify-between flex-col sm:flex-row">
      <div className="w-3/5">
        <h1 className="text-7xl text-gtahidiDarkBlue">
          Karibu <br />{" "}
          <Typewriter
            options={{
              strings: [
                "gTahidi",
                "AI in education",
                "Create Lesson Plans",
                "Create schemes of work",
                "much much more!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h2 className="text-white text-3xl my-5">
          Revolutionize your <span className="text-gtahidiPink">Teaching</span>{" "}
          <br /> with gTahidi AI.
        </h2>
        <p className="my-6">
          Create Curriculum-Compliant Lesson Plans, Schemes of Work and
          Assessment Questions in Minutes.
        </p>
        <button
          className="py-5 bg-gtahidiPurple rounded-lg text-white w-1/2"
          onClick={handleStart}
        >
          Start Creating
        </button>
      </div>
      <Image
        src="/teacher-with-board.png"
        alt="blob"
        height={600}
        width={600}
        className="mx-auto sm:mx-0 w-1/2 sm:w-1/3"
      />
    </header>
  );
};
