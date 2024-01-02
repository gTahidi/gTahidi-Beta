import Image from "next/image";
import React from "react";

const WhyComponent = () => {
  return (
    <div className="bg-blue-200 py-14 px-8  lg:px-20">
      <h2 className="text-4xl text-center font-bold mb-10 text-gray-800">
        Why gTahidi?
      </h2>
      <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { src: "/watch.png", alt: "Clock", text: "Saves you time. (Of Course)" },
          { src: "/whiste.png", alt: "Whistle", text: "It's Free. Stop buying Lesson Plans and Schemes of work." },
          { src: "/pen.png", alt: "Pencil", text: "Copy, Edit & Download. It's Yours." },
          { src: "/go.png", alt: "Rocket", text: "Compliant with over 80% of Global Curricula." },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center  rounded-lg p-4">
            <div className="relative mb-4 floating">
              <Image
                src={item.src}
                alt={item.alt}
                // objectFit="cover"
                height={550} // Adjusted size
                width={550}  // Adjusted size
              />
            </div>
            <p className="text-center text-sm lg:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyComponent;
