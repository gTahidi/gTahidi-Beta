import React from "react";
import { faEnvelope, faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionTitle } from "./SectionTitle";

export const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <SectionTitle inPink="Touch" text="Get In" />
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <h3 className="text-gtahidiDarkBlue font-semibold text-lg mb-8">
              For any Queries and Support
            </h3>
            <div className="flex items-center mb-6">
              {/* <FontAwesomeIcon icon={faLocationArrow} className="text-gtahidiPink mr-3" size="lg" /> */}
              <div className="text-sm">
                <p className="font-semibold">Company Location</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              {/* <FontAwesomeIcon icon={faEnvelope} className="text-gtahidiPink mr-3" size="sm" /> */}
              <div className="text-sm">
                <p className="font-semibold">Write to us at</p>
                <a href="mailto:gtahidiai@gmail.com" className="hover:underline">gtahidiai@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center mb-6">
              {/* <FontAwesomeIcon icon={faPhone} className="text-gtahidiPink mr-3" size="lg" /> */}
              <div className="text-sm">
                <p className="font-semibold">Call us on</p>
                <p>0790456789</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 shadow-sm p-4 focus:border-gtahidiPink focus:ring focus:ring-gtahidiPink focus:ring-opacity-50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 shadow-sm p-4 focus:border-gtahidiPink focus:ring focus:ring-gtahidiPink focus:ring-opacity-50"
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full rounded-lg border border-gray-300 shadow-sm p-4 mt-6 focus:border-gtahidiPink focus:ring focus:ring-gtahidiPink focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-300 shadow-sm p-4 mt-6 focus:border-gtahidiPink focus:ring focus:ring-gtahidiPink focus:ring-opacity-50"
            />
            <textarea
              placeholder="Your Message"
              className="w-full rounded-lg border border-gray-300 shadow-sm p-4 mt-6 focus:border-gtahidiPink focus:ring focus:ring-gtahidiPink focus:ring-opacity-50"
              rows={5}
            />
            <button className="bg-gtahidiDarkBlue rounded-lg py-3 px-6 text-white mt-6 hover:bg-gtahidiPink transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
