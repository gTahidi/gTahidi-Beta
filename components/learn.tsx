/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Image from 'next/image';
import Phone from '@/public/mtoinasimu.svg';

function learn() {
  return (
    <div className="bg-gTahidiMain">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 md:px-10 lg:px-20  lg:items-center">
            <div className="text-center lg:text-left">
                <h1 className="font-bold text-white text-3xl md:text-4xl mb-6">Embrace a smarter way to learn. Tap into the future of education with gTahidi AI, where your potential knows no bounds. </h1>
                
                <div className="mt-5 lg:mt-8 flex justify-center lg:justify-start flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <a className="w-full sm:w-auto p-3 inline-flex justify-center items-center  text-sm font-semibold rounded-lg border border-transparent bg-gtahidiPink text-white  " href="https://wa.link/ishz1o">
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
