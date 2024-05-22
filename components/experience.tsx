/* eslint-disable react/no-unescaped-entities */

// STEMFeature.tsx
import Image from 'next/image';
import featureImage from '@/public/stem.svg'; // Replace with the actual path to your image

export default function STEMFeature() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gtahidiDarkBlue ">
      <div className="w-full md:w-1/2">
        {/* Replace with the actual path to your image */}
        <Image
          src={featureImage}
          alt="STEM Learning"
          width={500} // Adjust the size accordingly
          height={300} // Adjust the size accordingly
        />
      </div>
      <div className="w-full md:w-1/2 bg-white text-gtahidiDarkBlue p-6  rounded-lg md:mr-20">
        <h2 className="text-2xl font-bold mb-4">Unleashing the <span className=' text-gtahidiPink'>Power of AI in Education </span> with gTahidi AI on WhatsApp</h2>
        <p>
        Join us on a transformative adventure where learning meets technology. With gTahidi AI, education is not just about absorbing information—it's about thriving in a dynamic and interactive environment.         </p>
      </div>
    </div>
  );
}
