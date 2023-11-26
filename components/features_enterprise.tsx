import React from 'react';
import Image from 'next/image';
import FeatureIcon1 from '@/public/bulb.png'; // Replace with your actual image paths
import FeatureIcon2 from '@/public/bulb.png';
import FeatureIcon3 from '@/public/bulb.png';

const StatsAndFeatures = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Current gTahidi Tutor users</h2>
          <div className="flex justify-center space-x-8">
            <div>
              <h3 className="text-2xl font-bold">Kenya</h3>
              <p className="text-xl">10000</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Worldwide</h3>
              <p className="text-xl">500000</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Top Features</h2>
          <p className="mb-12 max-w-2xl mx-auto">
            Share your services or product offerings here. Present them as simple headers that can lead out to their pages where you can expound on them further.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Feature 1 */}
            <div className="bg-purple-700 rounded-lg p-6 w-full md:w-1/3">
              <Image src={FeatureIcon1} alt="Feature 1" width={64} height={64} />
              <h3 className="text-lg font-semibold mt-2">Personalized Planning</h3>
              <p className="mt-1">
                Share your services or product offerings here. Present them as simple headers that can lead out to their pages.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-purple-700 rounded-lg p-6 w-full md:w-1/3">
              <Image src={FeatureIcon2} alt="Feature 2" width={64} height={64} />
              <h3 className="text-lg font-semibold mt-2">Innovative Engagement</h3>
              <p className="mt-1">
                Share your services or product offerings here. Present them as simple headers that can lead out to their pages.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-purple-700 rounded-lg p-6 w-full md:w-1/3">
              <Image src={FeatureIcon3} alt="Feature 3" width={64} height={64} />
              <h3 className="text-lg font-semibold mt-2">STEM Learning</h3>
              <p className="mt-1">
                Share your services or product offerings here. Present them as simple headers that can lead out to their pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsAndFeatures;
