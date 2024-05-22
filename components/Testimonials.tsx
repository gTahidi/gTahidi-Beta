/* eslint-disable react/no-unescaped-entities */


"use client";
import Image from "next/image";
import Profile from "@/public/prof.png";

export const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        What Our learners Are Saying: 
                </h1>

        <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-gtahidiPink rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
            <button title="left arrow" className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div>
                <p className="flex items-center text-center text-gray-500 lg:mx-8">
                gTahidi has truly been a lifesaver for me. It's incredibly reliable 
                for my research and revisions. I'm so grateful to the team for creating 
                such a detailed and accurate learning tool. If you're a learner and haven't
                 tried gTahidi yet, you're definitely missing out on your best learning buddy!
                </p>

                <div className="flex flex-col items-center justify-center mt-8">
                    {/* <Image 
                      className="object-cover rounded-full w-14 h-14" 
                      src={Profile}
                      alt=""
                      width={56}
                      height={56}
                    /> */}

                    <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Merab Chebet</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">High School Student</span>
                    </div>
                </div>
            </div>

            <button title="right arrow" className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>
  );
};
