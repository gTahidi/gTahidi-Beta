// StatsBanner.tsx
import Image from 'next/image';
import backgroundImage from '@/public/statsbanner.svg'; // Replace with your actual image path

const StatsBanner: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden text-white px-20 p-14 flex items-center justify-between ">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"  />

      {/* Content */}
      <div className="z-10 flex justify-between w-full">
        <div className="flex flex-col items-start">
          <span className="text-3xl font-medium">Current <span className='text-gtahidiPink'>gTahidi</span> </span>
          <span className="text-3xl  font-bold"><span className='text-gtahidiPink'>Total</span> users</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-medium">Kenya</span>
          <span className="text-3xl text-gtahidiPink font-bold">10000</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-3xl font-medium">Worldwide</span>
          <span className="text-3xl  text-gtahidiPink font-bold">500000</span>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
