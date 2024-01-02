import React from 'react'
import Image from 'next/image'
import FoIder from '@/public/foIder.png'
import Paddy from '@/public/paddy.svg'; // Replace with your actual image path

function support_teachers() {
  return (
    <div>
      <section className="bg-white text-gtahidiPurple p-10 py-20 h-full w-full flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6 justify-center items-center">
        <div className="max-w-md mx-auto md:max-w-none">
          <Image
            src={FoIder}
            alt="Secure Lock and Key"
            width={580}  // Adjust based on your image aspect ratio
            height={580} // Adjust based on your image aspect ratio
          />
        </div>
        <div className="flex-1 px-6">
          <h2 className="text-3xl font-bold text-gtahidiPink mb-4">Why We Support Teachers </h2>
          <p>
            gTahidi was co-founded by an accomplished educator, making it specifically 
            crafted to address the complex challenges faced by teachers. Our robust suite 
            of tools elevates the way you deliver education, whether you find yourself in 
            a traditional classroom or a comfortable home setting.
            <br/>
            Together we shape the future of education one empowered Educator at a time
          </p>
        </div>
      </section>
    </div>
  )
}

export default support_teachers
