import React from "react";
import Image from "next/image";
import Phone from "@/public/phone.svg";
import Ideabulb from "@/public/ideabulb.svg";
import Girl from "@/public/youngschoolgirlexperiments.svg";

function features_Ieaners() {
  return (
    <div>
      <div className=" bg-blue-800 dark:bg-gray-900">
        <div className="container px-20 py-8 mx-auto">
          <h1 className="text-2xl font-semibold  text-white capitalize mt-6 lg:text-3xl ">
            Top <span className=" text-gtahidiPink">Features</span>
          </h1>

          <p className=" text-2xl mx-auto mt-4  text-white xl:mt-6 ">
            Share your services or product offerings here. Present them as
            simple headers that can lead out to their pages where you can
            expound on them further. You can also use this space for other
            purposes where the information is best presented as mere teasers to
            other individualized pages.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-4   rounded-xl bg-blue-900 ">
              <Image 
                src={Phone} 
                alt="phone" 
                width={200}
                height={200}
                />
              <h2 className="text-xl font-semibold text-gtahidiPink">
                Personalized Planning
              </h2>
              <p className="font-medium text-white">
                Share your services or product offerings here. Present them as
                simple headers that can lead out to their pages where you can
                expound on them further.
              </p>
            </div>

            <div className="w-full p-4   rounded-xl bg-blue-900 ">
              <Image 
                src={Ideabulb} 
                alt="phone"
                width={190}
                height={190}
                />
              <h2 className="text-xl font-semibold text-gtahidiPink">
                Innovative Engagement
              </h2>
              <p className="font-medium text-white">
                Share your services or product offerings here. Present them as
                simple headers that can lead out to their pages where you can
                expound on them further.
              </p>
            </div>

            <div className="w-full p-4   rounded-xl bg-blue-900 ">
              <Image 
                src={Girl} 
                alt="phone" 
                width={250}
                height={250}
              />
              <h2 className="text-xl font-semibold text-gtahidiPink">
                STEM Learning
              </h2>
              <p className="font-medium text-white">
                Share your services or product offerings here. Present them as
                simple headers that can lead out to their pages where you can
                expound on them further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default features_Ieaners;
