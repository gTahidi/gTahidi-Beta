import Image from "next/image";
import React from "react";
import { HDIWStep } from "./HDIWStep";

export const HDIW = () => {
  return (
    <section className="p-[5%] flex flex-col" id="how-it-works">
      <h2 className="section-title mx-auto">
        How it <span className="text-gtahidiPink">works</span>
      </h2>
      <div className="flex gap-x-10 flex-col sm:flex-row">
        <Image
          alt="lesson plan"
          src="/lessonplan.jpeg"
          width={600}
          height={600}
          className="sm:w-1/2 h-[400px] object-cover w-full mb-5 sm:mb-0"
        />
        <div className="flex-grow">
          <HDIWStep
            description="Input your Topic, Sub-topic, Grade & Lesson Duration"
            step={1}
            title="Input your Requirements"
          />
          <HDIWStep
            title="Click Create Lesson Plan"
            step={2}
            description="Just like that, click create, wait a few seconds and you have your lesson plan!"
          />
          <HDIWStep
            title="Edit, Save & Download"
            description="Edit, Download & Save your Lesson plans & notes and Assessment Questions to your Schemes of Work."
            step={3}
          />
        </div>
      </div>
    </section>
  );
};
