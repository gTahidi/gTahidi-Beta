import Image from 'next/image';
import React from 'react';

const WhyComponent = () => {
  return (
    // Increased horizontal padding with px-20 and added responsive padding for larger screens with px-32 for larger screens
    <div className="flex justify-center h-1/2 items-center bg-blue-200 py-14 px-24 lg:px-32">
      <div className="flex flex-col items-center px-4"> {/* Added padding around each item */}
        {/* Increased image size */}
        <Image src="/watch.png" alt="Clock" width={950} height={950} layout="fixed" />
        <p className="text-center mt-2">Saves you time. (Of Course)</p>
      </div>
      <div className="flex flex-col items-center mx-10 px-4"> {/* Increased margin for horizontal spacing and padding around each item */}
        <Image src="/whiste.png" alt="Whistle" width={950} height={950} layout="fixed" />
        <p className="text-center mt-2">It's Free. Stop buying Lesson Plans and Schemes of work.</p>
      </div>
      <div className="flex flex-col items-center px-4">
        <Image src="/pen.png" alt="Pencil" width={950} height={950} layout="fixed" />
        <p className="text-center mt-2">Copy, Edit & Download. It's Yours.</p>
      </div>
      <div className="flex flex-col items-center mx-10 px-4">
        <Image src="/go.png" alt="Rocket" width={950} height={950} layout="fixed" />
        <p className="text-center mt-2">Compliant with over 80% of Global Curricula.</p>
      </div>
    </div>
  );
}

export default WhyComponent;
