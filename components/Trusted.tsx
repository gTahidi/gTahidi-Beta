import React from 'react';
import Bars from '@/public/Woman-working.svg';
import Progress from '@/public/checkout-window.svg';
import Rectangle from '@/public/rectangle.svg';
import Vector from '@/public/Vector.svg';
import lesson from '@/public/healthtrackingwatch.svg';
import Enterprise from '@/public/enterprise.svg';
import Image from 'next/image';

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Trusted tools. <span className='text-gtahidiPink'>Accurate Results</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-6">
            <Image 
              src={Bars}
              alt="Assessment Analytics"
              width={96}
              height={96}
              layout="intrinsic"
            />
            <h3 className="text-xl font-semibold text-gray-800">Assessment Analytics</h3>
            <p className="text-gray-600 text-center">
              Analyze student participation and assess your learners' progress with data-driven assessment analytics.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-6">
          <Image 
                src={Vector}
                alt="Bars"
                className="text-blue-600" 
                width={96} // Set width as needed
                height={96} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Adaptive Learning</h3>
            <p className="text-gray-600 text-center">
              Personalize your learning journey with adaptive learning sequences that tailor content and assessments to your individual strengths.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-6">
          <Image 
                src={Rectangle}
                alt="Bars"
                className="text-blue-600" 
                width={96} // Set width as needed
                height={96} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Data Analytics Dashboard</h3>
            <p className="text-gray-600 text-center">
              Gain valuable insights into user behavior, engagement, and performance with a data analytics dashboard.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center space-y-6">
          <Image 
                src={lesson}
                alt="Bars"
                className="text-blue-600" 
                width={96} // Set width as needed
                height={96} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Generate Lesson Plans</h3>
            <p className="text-gray-600 text-center">
              Design lessons that have clear goals, structure, and organization.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="flex flex-col items-center space-y-6">
          <Image 
                src={Progress}
                alt="Bars"
                className="text-blue-600" 
                width={96} // Set width as needed
                height={96} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Progress Tracking</h3>
            <p className="text-gray-600 text-center">
              Monitor your students' progress with real-time tracking tools, allowing you to set goals and track achievements.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="flex flex-col items-center space-y-6">
          <Image 
                src={Enterprise}
                alt="Bars"
                className="text-blue-600" 
                width={96} // Set width as needed
                height={96} // Set height as needed
            />            
            <h3 className="text-xl font-semibold text-gray-800">Content Marketplace</h3>
            <p className="text-gray-600 text-center">
              Expand your content offering and engage your learners with a content marketplace stocked with high-quality educational content from various sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
