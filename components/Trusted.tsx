import React from 'react';
import Bars from '@/public/Woman-working.svg';
import Progress from '@/public/checkout-window.svg';
import lesson from '@/public/healthtrackingwatch.svg';
import Map from '@/public/trail-map.svg'
import Image from 'next/image';
import OnLine from '@/public/language-online.svg'; 
import Dashboard from '@/public/dashboard-screen-app.svg'


const FeatureSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-8">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-7 mb-16">
          Trusted tools. <span className='text-gtahidiPink'>Accurate Results</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-6 transition  duration-300 ease-in-out transform hover:scale-105 rounded-xl  hover:shadow-xl hover:border hover:border-blue-200 hover:bg-gray-50">
            <Image 
              src={Bars}
              alt="Assessment Analytics"
              width={156}
              height={156}
              layout="intrinsic"
            />
            <h3 className="text-xl font-semibold text-gray-800 max-w-xs text-center">Assessment Analytics</h3>
            <p className="text-gray-600 max-w-sm text-center mb-8 p-4">
              Analyze student participation and assess your learners'  assessment analytics.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-4 p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl  hover:shadow-xl hover:border hover:border-blue-200 hover:bg-gray-50">
          <Image 
                src={OnLine}
                alt="Bars"
                className="text-blue-600" 
                width={156} // Set width as needed
                height={156} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Adaptive Learning</h3>
            <p className="text-gray-600 text-center p-2">
              Personalize your learning journey with adaptive learning sequences that tailor content and assessments to your individual strengths.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-4 p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl  hover:shadow-xl hover:border hover:border-blue-200 hover:bg-gray-50">
          <Image 
                src={Dashboard}
                alt="Bars"
                className="text-blue-600" 
                width={156} // Set width as needed
                height={156} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Data Analytics Dashboard</h3>
            <p className="text-gray-600 text-center p-2 ">
              Gain valuable insights into user behavior, engagement, and performance with a data analytics dashboard.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center p-2 space-y-4 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl  hover:shadow-xl hover:border hover:border-blue-200 hover:bg-gray-50">
          <Image 
                src={Map}
                alt="Bars"
                className="text-blue-600" 
                width={300} // Set width as needed
                height={200} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Generate Lesson Plans</h3>
            <p className="text-gray-600 text-center p-2">
              Design lessons that have clear goals, structure, and organization.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="flex flex-col items-center p-2 space-y-4 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl  hover:shadow-xl hover:border hover:border-blue-200 hover:bg-gray-50">
          <Image 
                src={lesson}
                alt="Bars"
                className="text-blue-600" 
                width={156} // Set width as needed
                height={156} // Set height as needed
            />            <h3 className="text-xl font-semibold text-gray-800">Progress Tracking</h3>
            <p className="text-gray-600 text-center p-2">
              Monitor your students' progress with real-time tracking tools, allowing you to set goals and track achievements.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="flex flex-col items-center p-2 space-y-4 transition duration-300 ease-in-out transform hover:scale-105 rounded-xl  hover:shadow-xl hover:border hover:border-blue-200 hover:bg-gray-50">
          <Image 
                src={Progress}
                alt="Bars"
                className="text-blue-600" 
                width={156} // Set width as needed
                height={156} // Set height as needed
            />            
            <h3 className="text-xl font-semibold text-gray-800">Content Marketplace</h3>
            <p className="text-gray-600 text-center p-2">
              Expand your content offering and engage your learners with a content marketplace stocked with high-quality educational content from various sources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
