import React from 'react'
import Image from 'next/image'
import Phone from '@/public/phonegraphs.svg'
import Math from '@/public/maths decoration.svg'; // Replace with your actual image path


function support_teachers() {
  return (
    <div >
      <section className="bg-gtahidiDarkBlue text-white p-8 flex flex-col space-y-20 justify-center items-center">
      <div className=" space-x-11 mx-auto flex mb-8 mt-8 justify-between ">
        <div className="flex-1 bg-white rounded-2xl w-[350px] p-8 ">
          <h2 className="text-3xl text-gtahidiPink font-bold mb-4">We'll help perfect your learning experience.</h2>
          <p className=' text-black'>
            Share your services or product offerings here. Present them 
            as simple headers that can lead out to their pages 
            where you can expound on them further. 
          </p>
        </div>
        <div className="floating">
          <Image
            src={Phone}
            alt="Secure Lock and Key"
            width={350} 
            height={350} 
          />
        </div>
        
      </div>
      <div className="max-w-4xl mx-auto flex space-x-12 justify-between items-center">
        <div className="floating">
          <Image
            src={Math}
            alt="Secure Lock and Key"
            width={350}  
            height={350} 
          />
        </div>        
        <div className="flex-1 bg-white rounded-2xl w-[350px] p-8">
          <h2 className="text-3xl font-bold text-gtahidiPink mb-4">STEM learning</h2>
          <p className=' text-black'>
            Share your services or product offerings here. Present 
            them as simple headers that can lead out to their pages 
            where you can expound on them further.   
            tional classroom or a comfortable home setting.
          </p>
        </div>
        
      </div>
    </section>
    </div>
  )
}

export default support_teachers
