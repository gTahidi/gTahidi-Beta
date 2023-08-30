"use client";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Testimony } from "./Testimony";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<boolean>(true);
  return (
    <section
      className="px-[5%] py-[15%] sm:p-[5%] bg-gtahidiCream"
      id="testimonials"
    >
      <h2 className="section-title sm:w-1/3 w-full mx-auto">
        What Our <span className="text-gtahidiPink">Users</span> Say
      </h2>
      <div className="flex w-3/4 mx-auto gap-x-3">
        <Testimony
          person="Samuel Mwaniki"
          text="gTahidi has changed, how I prepare for classes, and teach. It`s seamless and easy."
          position="Teacher, TNB Kenya"
        />
        <Testimony
          person="Emily Mwanzia"
          position="Senior teacher"
          text="Being a Kenyan CBC teacher involves a lot of planning and paperwork. GTahidi AI will lightened workload and considerably, free me uptime for teachers to focus more on actual teaching."
        />
      </div>
    </section>
  );
};
