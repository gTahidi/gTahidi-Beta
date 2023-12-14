import React from 'react'
import Image from 'next/image'
import Phone from '@/public/phonegraphs.svg'
import Math from '@/public/maths decoration.svg'; // Replace with your actual image path

function support_teachers() {
  return (
    <div>
      <section className="bg-gtahidiDarkBlue text-white p-4 md:p-8 flex flex-col space-y-10 md:space-y-20 justify-center items-center">
        {/* First Row */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mx-auto justify-between items-center">
          <div className="bg-white rounded-2xl w-full md:w-[350px] p-6">
            <h2 className="text-2xl md:text-3xl text-gtahidiPink font-bold mb-4">We'll help perfect your learning experience.</h2>
            <p className='text-black'>
            Share your services or product offerings here. Present them 
            as simple headers that can lead out to their pages 
            where you can expound on them further.             </p>
          </div>
          <div className="w-full md:w-auto">
            <Image
              src={Phone}
              alt="Phone Graphs"
              width={300} 
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mx-auto justify-between items-center">
          <div className="w-full md:w-auto">
            <Image
              src={Math}
              alt="Math Decoration"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="bg-white rounded-2xl w-full md:w-[350px] p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gtahidiPink mb-4">STEM learning</h2>
            <p className='text-black'>
            Share your services or product offerings here. Present 
            them as simple headers that can lead out to their pages 
            where you can expound on them further.   
            tional classroom or a comfortable home setting.            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default support_teachers
