import React from 'react'
import Cartoon from '@/public/cartoon.svg'; // Replace with your actual image path
import Image from 'next/image';

function hero_educators() {
  return (
    <div>
      <div className="container px-24 py-24 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-6xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Karibu <br/> gTahidi </h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start Learning</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image 
                className="lg:max-w-2xl" 
                src={Cartoon} 
                alt="Catalogue-pana.svg"
                width={600}
                height={600}
                />
            </div>
        </div>
    </div>
    </div>
  )
}

export default hero_educators
