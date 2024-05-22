/* eslint-disable react/no-unescaped-entities */


import React from "react";
import Image from "next/image";
import Prof from "@/public/prof.png";

function TestimonyEducators() {
  return (
    <div>
      <section className="bg-gtahidiDarkBlue">
        <div className="container px-4 py-8 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl">
            What our <span className="text-gtahidiPink ">clients</span> say
          </h1>

          <div className="mt-8 xl:mt-10">
            <div className="flex overflow-x-auto space-x-4 pb-4">
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-100 rounded-lg p-6 md:p-8">
                <p className="leading-loose text-gray-500">
                  "Using gTahidi AI has significantly improved my teaching
                  experience. I can easily and quickly ask and receive answers
                  on my phone, making lesson planning and research more
                  efficient. The accuracy of the information provided is
                  impressive, and it fits well with my teaching methods. To
                  teachers out there, I highly recommend gTahidi AI for your
                  daily teaching."
                </p>

                <div className="flex items-center mt-6">
                  {/* <Image
                    className="object-cover rounded-full w-14 h-14"
                    src={Prof}
                    alt=""
                    width={56}
                    height={56}
                  /> */}
                  <div className="mx-4">
                    <h1 className="font-semibold text-gtahidiPink">Mr. Eric</h1>
                    <span className="text-sm text-gray-500">
                      High School English Literature Teacher
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-100 rounded-lg p-6 md:p-8">
                <p className="leading-loose text-gray-500">
                  "gTahidi AI has made teaching a seamless experience for me. It
                  is incredibly accurate and well-suited to my curriculum,
                  helping with research activities and even exam marking. The
                  best part is it’s readily available 24/7 on my WhatsApp, and
                  using gTahidi is as simple as chatting with a friend. I'd
                  strongly recommend it to my fellow teachers; gTahidi should
                  be your go-to teaching assistant for efficient lesson
                  planning."
                </p>

                <div className="flex items-center mt-6">
                  {/* <Image
                    className="object-cover rounded-full w-14 h-14"
                    src={Prof}
                    alt=""
                    width={56}
                    height={56}
                  /> */}
                  <div className="mx-4">
                    <h1 className="font-semibold text-gtahidiPink">Tr. Joy</h1>
                    <span className="text-sm text-gray-500">
                      High School Teacher
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-100 rounded-lg p-6 md:p-8">
                <p className="leading-loose text-gray-500">
                  "gTahidi AI is the best teaching assistant you can have. It is
                  so resourceful, and what amazes me most is its ability to
                  accommodate all subjects. I can generate Kiswahili articles
                  and set Kiswahili test papers for my students. For lesson
                  planning, gTahidi is the best tool I can recommend for daily
                  teaching use."
                </p>

                <div className="flex items-center mt-6">
                  {/* <Image
                    className="object-cover rounded-full w-14 h-14"
                    src={Prof}
                    alt=""
                    width={56}
                    height={56}
                  /> */}
                  <div className="mx-4">
                    <h1 className="font-semibold text-gtahidiPink">
                      Tr. Peris
                    </h1>
                    <span className="text-sm text-gray-500">
                      High School Homescience and Kiswahili Teacher
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonyEducators;
