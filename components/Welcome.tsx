'use client'

import { useGlobalData } from "@/hooks/useGlobalData";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Modal from 'react-modal';
import Image from "next/image";


const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent background
  },
  content: {
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -80%)',
    border: 'none', // Remove border
    background: 'transparent', // Transparent background
  },
};

export const Welcome = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { handleStart } = useGlobalData();

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="p-4 sm:p-[5%] flex flex-col sm:justify-between sm:flex-row">
      <div className="mb-4 sm:mb-0 sm:w-3/5">
        <h1 className="text-4xl sm:text-7xl text-gtahidiDarkBlue">
          Karibu gTahidi
          <br />
          <Typewriter
            options={{
              strings: [
                "Mwalimu",
                "Create Lesson Plans",
                "Create Short Notes",
                "Organize schemes of work",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h2 className="text-gtahidiDarkBlue text-2xl sm:text-3xl my-3">
          Revolutionize your <span className="text-gtahidiPink">Teaching</span> with gTahidi AI.
        </h2>
        <p className="my-2">
          Create Curriculum-Compliant Lesson Plans, Schemes of Work, and Assessment Questions in Minutes.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
          <button
            className="py-2 bg-gtahidiPurple rounded-lg text-white w-full sm:w-1/4"
            onClick={handleStart}
          >
            Get started
          </button>
          <button
            className="py-2 border-2 border-gtahidiPurple rounded-lg text-gtahidiPurple w-full sm:w-1/4"
            onClick={openModal}
          >
            Demo
          </button>
        </div>
      </div>
      <Image 
        src="/teacher-with-board.png" 
        alt="teacher with board" 
        width={500} 
        height={500} 
        className="mx-auto sm:mx-0 w-full sm:w-1/3" 
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="YouTube Video"
        style={modalStyles} // Apply custom styles
        ariaHideApp={false}
      > 
        <iframe
          title="Demo Video"
          width="560"
          height="400"
          src="https://www.youtube.com/embed/glOdPxxRD2M?autoplay=1" // Autoplay the video
          // https://youtu.be/glOdPxxRD2M?si=tNzpO6VdGbeVyz4A
          frameBorder="0"
          allowFullScreen
        />
      </Modal>
    </header>
  );
};
