import Image from "next/image";
import React from "react";

const WhyComponent = () => {
  return (
    <div className="bg-blue-200 py-14 px-8 lg:px-20">
      <h2 className="text-4xl text-center font-bold mb-10 text-gray-800">
        Why gTahidi?
      </h2>
      <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="relative mb-2">
            <Image
              src="/watch.png"
              alt="Clock"
              objectFit="contain"
              height={700}
              width={700}
            />
          </div>
          <p className="text-center text-sm lg:text-base">
            Saves you time. (Of Course)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="  relative mb-2">
            <Image
              src="/whiste.png"
              alt="Whiste"
              objectFit="contain"
              height={700}
              width={700}
            />
          </div>
          <p className="text-center text-sm lg:text-base">
            It's Free. Stop buying Lesson Plans and Schemes of work.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative mb-2">
            <Image
              src="/pen.png"
              alt="Pencil"
              objectFit="contain"
              height={700}
              width={700}
            />
          </div>
          <p className="text-center text-sm lg:text-base">
            Copy, Edit & Download. It's Yours.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className=" relative mb-2">
            <Image
              src="/go.png"
              alt="Rocket"
              objectFit="contain"
              height={700}
              width={700}
            />
          </div>
          <p className="text-center text-sm lg:text-base">
            Compliant with over 80% of Global Curricula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyComponent;
