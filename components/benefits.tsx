// FeaturesAndBenefits.js
import Image from 'next/image';
import backgroundImage from '@/public/bg.png'; // Adjust the import path to your image's location

export default function FeaturesAndBenefits() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-green-500">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 md:px-20 w-full text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Features and <span className="text-gtahidiPink">Benefits</span></h2>
        <div className="bg-gtahidiDarkBlue p-6 md:p-8 rounded-lg">
          <ul className="space-y-4">
            {[
              ['Streamlined Lesson Creation', 'Quickly assemble detailed and curriculum-aligned lesson plans.'],
              ['Comprehensive Notes', 'Easily develop in-depth notes to enhance your teaching material.'],
              ['Interactive Quizzes', 'Engage your students with quizzes that are both informative and enjoyable.'],
              ['Efficient Schemes of Work', 'Plan your entire course structure seamlessly and effectively.'],
            ].map(([feature, description]) => (
              <li key={feature} className="flex flex-col md:flex-row items-start bg-gtahidiDarkBlueTwo rounded-lg p-4">
                <span className="font-bold text-xl md:text-2xl text-pink-300 w-full md:w-1/3">{feature}:</span>
                <span className="ml-4 text-white text-lg md:text-xl">{description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
