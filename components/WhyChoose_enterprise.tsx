// FeaturesAndBenefits.js
import Image from 'next/image';
import backgroundImage from '@/public/bg.png'; // Adjust the import path to your image's location

export default function FeaturesAndBenefits() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white">

      <div className="relative z-10 px-20   ">
        <h2 className="text-4xl text-center font-extrabold mb-12 ">Why Choose ? <span className=" text-gtahidiPink">gTahidi AI </span>for Your Enterprise</h2>
          <ul className="space-y-8 ">
            {[
              ['State-of', 'Harness the power of the latest AI models to improve your learning solutions.'],
              ['Data-Driven Insights', 'Utilize analytics to understand user engagement and optimize your educational offers.'],
              ['Collaborative Partnerships', 'Join us in a collaborative journey in pioneering and reshaping the landscape of education with AI.'],
              ['Continuous Support', 'Benefit from our dedicated 24/7 support team, ensuring smooth integration and operation of gTahidi AI within your services.'],
            ].map(([feature, description]) => (
              <li key={feature} className="flex  rounded-xl border  shadow-lg p-4">
                <span className="font-bold w-1/2 text-xl text-gtahidiPink">{feature}:</span>
                <span className="ml-4 text-black text-xl">{description}</span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}
