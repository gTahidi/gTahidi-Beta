import Image from "next/image";
import React from "react";

export const Welcome = () => {
  return (
    <header className="p-[5%] flex bg-gtahidiPurpleTwo justify-between">
      <h1 className="text-3xl w-1/4">
        Karibu <br /> gTahidi
      </h1>
      <div className="">
        <h2>
          Revolutionize your <br /> teaching with gTahidi AI.
        </h2>
        <p className="my-6">
          Create Curriculum-Compliant Lesson Plans, Schemes of Work and
          Assessment Questions in Minutes.
        </p>
        <button className="py-5 bg-gtahidiPurple rounded-lg text-white w-1/2">
          Start Now
        </button>
      </div>
      <Image
        src="/BlobArrow.svg"
        alt="blob"
        height={600}
        width={600}
        className="w-1/3"
      />
    </header>
  );
};
