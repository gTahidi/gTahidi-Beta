"use client";
import { useGlobalData } from "@/hooks/useGlobalData";
import React from "react";

export const StartCreating = () => {
  const { openWaitlistModal } = useGlobalData();
  return (
    <section className="p-[5%] flex justify-around items-center flex-col sm:flex-row">
      <p className="text-4xl font-semibold">
        Get up and running in less than 2 minutes.
      </p>
      <button
        className="bg-gtahidiPurple py-4 px-6 hover:scale-125 transition-all rounded-full text-white font-medium mt-5 sm:mt-0"
        onClick={openWaitlistModal}
      >
        Join the waitlist
      </button>
    </section>
  );
};
