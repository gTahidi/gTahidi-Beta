'use client'
import Image from "next/image";
import EducatorsIconSVG from '@/public/educators.svg'; // Update the path to your SVG files
import LearnersIconSVG from '@/public/earners.svg'; // Update the path to your SVG files
import EnterprisesIconSVG from '@/public/enterprise-hero.svg'; // Update the path to your SVG files


export const Welcome = () => {
  return (
    <section className="bg-white p-12 dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-gtahidiPink bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                <span className="text-xs bg-gtahidiPink rounded-full text-white px-4 py-1.5 me-3">New</span> <span className="text-sm font-medium">Uploading a lessonPlan was launched! See what's new</span> 
                <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Empowering Future <p>Generations </p> </h1>
            <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Discover gTahidi AI's innovative learning solutions, all conveniently delivered<br/> through WhatsApp. We bring education to your fingertips ensuring an engaging and specialized learning experience.</p>
            <div className=" flex flex-row space-x-8 items-center justify-center">
            <div className="w-1/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">                <div className="flex justify-center pb-5">
                    <Image 
                        src={EducatorsIconSVG}
                        alt="Educators"
                        width={46}
                        height={46}
                    />
                </div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gtahidiPink dark:text-white">Educators</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> This innovative AI service is designed to empower educators and teachers by providing them with cutting-edge AI solutions to streamline the process of creating lesson plans, notes, and quizzes.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gtahidiDarkBlue rounded-lg hover:bg-gtahidiPink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Get Started    
                </a>
            </div>

            <div className="w-1/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">                <div className="flex justify-center pb-5">
                    <Image 
                        src={LearnersIconSVG}
                        alt="Educators"
                        width={46}
                        height={46}
                    />
                </div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gtahidiPink dark:text-white">Learners</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Discover gTahidi AI's innovative learning solutions, all conveniently delivered through WhatsApp. We bring education to your fingertips ensuring an engaging and specialized learning experience.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gtahidiDarkBlue rounded-lg hover:bg-gtahidiPink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Get Started    
                </a>
            </div>
            <div className="w-1/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">                <div className="flex justify-center pb-5">
                    <Image 
                        src={EnterprisesIconSVG}
                        alt="Educators"
                        width={46}
                        height={46}
                    />
                </div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gtahidiPink dark:text-white">Enterprises</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Unlock the potential of your edtech company with gTahidi AI. Our solutions can empower your platform, enhance the learning experience, and stay ahead of the competition.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gtahidiDarkBlue rounded-lg hover:bg-gtahidiPink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Get Started    
                </a>
            </div>
            </div>

        </div>
        
    </section>

  );
};
