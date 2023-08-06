"use client";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Testimony } from "./Testimony";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<boolean>(true);
  return (
    <section
      className="p-[5%] bg-gtahidiCream flex gap-x-5 items-center justify-between"
      id="testimonials"
    >
      <h2 className="section-title w-1/3">
        It`s like having a team of dedicated Teachers but in your pocket
      </h2>
      {currentTestimonial ? (
        <Testimony
          person="- Samuel Mwaniki, Teacher, TNB Kenya"
          text="gTahidi has changed, how I prepare for classes, and teach. It`s seamless and easy."
        />
      ) : (
        <Testimony
          person="- Emily Mwanzia, Senior teacher."
          text="Being a Kenyan CBC teacher involves a lot of planning and paperwork. GTahidi AI will lightened workload and considerably, free me uptime for teachers to focus more on actual teaching."
        />
      )}
      <div className="w-10">
        <div
          className="w-8 h-8 bg-white rounded-full relative cursor-pointer hover:w-10 hover:h-10 transition-all mx-auto"
          onClick={() => setCurrentTestimonial((prev) => !prev)}
        >
          <FontAwesomeIcon
            icon={faCaretUp}
            className="w-5 h-5 center-absolutely"
          />
        </div>
        <div
          className="w-8 h-8 bg-white rounded-full relative cursor-pointer hover:w-10 hover:h-10 transition-all mt-5 mx-auto"
          onClick={() => setCurrentTestimonial((prev) => !prev)}
        >
          <FontAwesomeIcon
            icon={faCaretDown}
            className="w-5 h-5 center-absolutely"
          />
        </div>
      </div>
    </section>
  );
};
