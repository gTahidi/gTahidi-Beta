"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import Image from "next/image";
import React from "react";

export const Welcome = () => {
  const { openWaitlistModal } = useGlobalData();
  return (
    <header className="p-[5%] flex bg-gtahidiPurpleTwo justify-between flex-col sm:flex-row">
      <h1 className="text-3xl w-full sm:w-1/4">
        Karibu <br /> gTahidi
      </h1>
      <div className="my-12 sm:my-0">
        <h2>
          Revolutionize your <br /> teaching with gTahidi AI.
        </h2>
        <p className="my-6">
          Create Curriculum-Compliant Lesson Plans, Schemes of Work and
          Assessment Questions in Minutes.
        </p>
        <button
          className="py-5 bg-gtahidiPurple rounded-lg text-white w-1/2"
          onClick={openWaitlistModal}
        >
          Join the waitlist
        </button>
      </div>
      <Image
        src="/BlobArrow.svg"
        alt="blob"
        height={600}
        width={600}
        className="mx-auto sm:mx-0 w-1/2 sm:w-1/3"
      />
    </header>
  );
};
