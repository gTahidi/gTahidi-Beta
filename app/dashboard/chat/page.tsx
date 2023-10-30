'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ChatPage = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(true);
  const router = useRouter();

  const upgrade = () => {
    router.push("/dashboard/pricing");
  };

  const close = () => {
    router.push("/dashboard");
  };

  return (
    <div className="">
      {/* <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 md:p-8 rounded shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Upgrade to Premium</h3>
          <p className="text-gtahidiPurple">
            Get access to advanced features like Upload Data and Chat by upgrading to our premium plan.
          </p>
          <div className="md:space-x-2 mt-4">
            <button className="bg-gtahidiPurple p-3 rounded text-white font-medium" onClick={upgrade}>
              Upgrade
            </button>
            <button className="bg-red-500 p-3 rounded text-white font-medium" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div> */}


      <div className='flex flex-col items-center m-4'>
        <h1 className='text-3xl font-bold p-4 '>gTahidiAI Chat</h1>
        <h1 className=''>Dont be too harsh on me 😄. I&apos;m still learning </h1>
      </div>

      <div className="min-h-screen flex items-center justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
              <div className="flex flex-col md:flex-row items-center p-4 justify-center space-y-4 md:space-y-0 md:space-x-4">
                  <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 text-center">
                      Time-based Activity
                      <p className="text-gray-500 text-sm">Ideas for engaging student activities.</p>
                  </button>
                  <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 text-center">
                      Generate Homework
                      <p className="text-gray-500 text-sm">For students to work on after lessons.</p>
                  </button>
              </div>
              <div className="mt-4 flex items-center border border-gray-300 rounded-full">
                <input className="flex-grow py-2 px-4" rounded-full type="text" placeholder="Type your message..." />
                <button className="p-2">
                    <svg className="h-6 w-6 fill-current text-gray-500 hover:text-gray-700" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"></path>
                    </svg>
                </button>
              </div>
          </div> 
      </div>

    </div>
  );
};

export default ChatPage;

