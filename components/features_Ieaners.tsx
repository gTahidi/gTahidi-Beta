/* eslint-disable react/no-unescaped-entities */


import Image from 'next/image';
import Assistance from '@/public/assistance.svg'
import Subject from '@/public/subject.svg'
import Experience from '@/public/experience.svg'
import Pace from '@/public/pace.svg'


export default function LearningExperience() {
  return (
    <div className="bg-gtahidiDarkBlue p-6 md:px-20 md:py-12 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white p-12 mb-8">Transform Your <span className=' text-gtahidiPink'>Learning Experience</span> </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className=" bg-gtahidiDarkBlueTwo text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src={Subject}
            alt='subject'
            width={150}
            height={150}
          />
          <h3 className="text-xl font-bold text-gtahidiPink mb-2">Wide Range of Subjects</h3>
          <p className=' text-center mb-2'>From Literature to Calculus, explore subjects that pique your interest. </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gtahidiDarkBlueTwo text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
              src={Experience}
              alt='subject'
              width={150}
              height={150}
          />
          <h3 className="text-xl font-bold text-gtahidiPink mb-2">Adaptive Learning </h3>
          <p className=' text-center mb-2'>Tailored to fit your learning style for an incredibly personalized experience. </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gtahidiDarkBlueTwo text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
              src={Assistance}
              alt='subject'
              width={150}
              height={150}
          />
          <h3 className="text-xl font-bold text-gtahidiPink mb-2">On-Demand Assistance</h3>
          <p className=' text-center mb-2'>Immediate help is just a message away on WhatsApp whenever you encounter hurdles.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gtahidiDarkBlueTwo text-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
              src={Pace}
              alt='subject'
              width={150}
              height={150}
          />
          <h3 className="text-xl font-bold text-gtahidiPink mb-2">Flexible Learning Pace:</h3>
          <p className=' text-center mb-2'>Whether you're a quick learner or need more time, gTahidi AI adjusts to your needs. </p>
        </div>
      </div>
    </div>
  );
}
