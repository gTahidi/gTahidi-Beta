import React from 'react';
import Image from 'next/image';
import Phone from '@/public/mtoinasimu.svg';

function learn() {
  return (
    <div className="bg-gtahidiPurple">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 px-4 md:px-10 lg:px-20 py-8 lg:items-center">
            <div className="text-center lg:text-left">
                <h1 className="font-bold text-gtahidiPink text-3xl md:text-4xl mb-6">We'll help perfect your learning experience.</h1>
                <p className="mt-3 text-lg text-white ">
                    Share your services or product offerings here. 
                    Present them as simple headers that can lead 
                    out to their pages where you can expound on them further.
                </p>

                <div className="mt-5 lg:mt-8 flex justify-center lg:justify-start flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gtahidiPink text-white disabled:opacity-50 disabled:pointer-events-none " href="#">
                    Start Learning
                    </a>
                </div>
            </div>

            <div className="mt-8 lg:mt-0 self-end justify-self-center lg:justify-self-end">
                <Image 
                    src={Phone}
                    alt="Learning Illustration"
                    width={400} 
                    height={400}
                    layout="responsive"
                />
            </div>
        </div>
    </div>
  )
}

export default learn;
