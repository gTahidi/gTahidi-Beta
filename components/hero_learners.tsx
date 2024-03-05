import React from 'react';

function HeroLearners() {
  const email = 'info@ujaotech.com';

  return (
    <div className='h-screen'>
      <div className="container px-6 py-16 mx-auto text-center items-center justify-center flex">
        <div className="max-w-lg mx-auto mt-[120px]">
          <h1 className="text-3xl font-semibold text-gray-800  lg:text-5xl">Lead the way with <br /><span className='text-gtahidiPink'>gTahidi AI</span></h1>

          <p className="mt-6 text-gray-500">
            Join the AI revolution and get ahead of your competitors
          </p>
          <div className='mt-2'>
            <a href={`mailto:${email}`}>
              <button type="button" className="text-white bg-gtahidiPink focus:ring-4 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Partner with us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLearners;
