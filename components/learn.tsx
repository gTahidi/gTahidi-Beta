import React from 'react';
import Image from 'next/image';
import Phone from '@/public/mtoinasimu.svg';

function learn() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 bg-gtahidiPurple">
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 space-x-4 lg:items-center">
            <div className="px-20 items-center ">
                <h1 className="font-bold text-gtahidiPink text-4xl mb-6">We'll help perfect your learning experience.</h1>
                <p className="mt-3 text-lg text-gray-800 ">
                    Share your services or product offerings here. 
                    Present them as simple headers that can lead 
                    out to their pages where you can expound on them further.
                </p>

                <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gtahidiPink text-white disabled:opacity-50 disabled:pointer-events-none " href="#">
                    Start Learning
                    </a>
                </div>
            </div>

            <div className="hidden lg:block self-end justify-self-end mt-10 lg:mt-0">
                <Image 
                    src={Phone}
                    alt="Secure Lock and Key"
                    width={500} 
                    height={500}
                />
            </div>
        </div>
    </div>
  )
}

export default learn;
