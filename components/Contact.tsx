import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SectionTitle } from "./SectionTitle";

export const Contact = () => {
  return (
    <section className="p-[5%] bg-white" id="contact">
      <SectionTitle inPink="Touch" text="Get In" />
      <div className="flex mx-5 flex-col sm:flex-row">
        <div className="w-full sm:w-1/3">
          <h3 className="text-gtahidiDarkBlue font-semibold mb-5">
            For any Queries and Support
          </h3>
          <div className="flex items-start">
            <div className="relative rounded-full p-5 border border-gtahidiPink mr-3">
              <FontAwesomeIcon
                icon={faLocationArrow}
                className="center-absolutely text-gtahidiPink"
              />
            </div>
            <div className="text-sm">
              <p>Company Location</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className="flex items-start my-5">
            <div className="relative rounded-full p-5 border border-gtahidiPink mr-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="center-absolutely text-gtahidiPink"
              />
            </div>
            <div className="text-sm">
              <p>Write to us at</p>
              <a href="mailto:gtahidiai@gmail.com">gtahidiai@gmail.com</a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="relative rounded-full p-5 border border-gtahidiPink mr-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="center-absolutely text-gtahidiPink"
              />
            </div>
            <div className="text-sm">
              <p>Call us on</p>
              <p>0790456789</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 sm:mt-0 sm:w-2/3 gap-y-5 flex flex-col">
          <div className="flex gap-x-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/2 rounded-full shadow-md p-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-1/2 rounded-full shadow-md p-4"
            />
          </div>
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full rounded-full shadow-md p-4"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-full shadow-md p-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full rounded-full shadow-md p-4"
          />
          <button className="bg-gtahidiDarkBlue w-1/3 ml-auto rounded-md p-5 text-white">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
