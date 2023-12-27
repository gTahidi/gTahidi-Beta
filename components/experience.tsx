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
      <div className="w-full md:w-1/2 bg-white text-gtahidiDarkBlue p-6 rounded-lg mr-20">
        <h2 className="text-2xl font-bold mb-4">Unleashing the <span className=' text-gtahidiPink'>Power of STEM Learning </span> with gTahidi AI on WhatsApp</h2>
        <p>
          In a world dominated by technology, the pursuit of knowledge is evolving at an unprecedented pace. Enter the realm of STEM learning, where education meets adventure, and gTahidi AI is your guiding light. Brace yourself for a thrilling journey through Math, Sciences, Coding, and more – all seamlessly accessible through the familiar interface of WhatsApp.
        </p>
      </div>
    </div>
  );
}
