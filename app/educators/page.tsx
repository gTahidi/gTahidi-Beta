"use client";

// Import React and Next.js components
import React from 'react';
import Head from 'next/head';
import Hero from '@/components/hero_educators';
import Microsoft from '@/components/microsoft';
import Benefits from '@/components/benefits'
import Support from '@/components/support_educators';
import WhyEducators from '@/components/why_educators';
import HowItWorks from '@/components/HDIWStep';
import Testimonials  from '@/components/testimony_educators';
import useMetaPixel from '@/hooks/useMetaPixel';

// Import Tailwind CSS components

const HomePage = () => {
  // const Pixel = 879225596866623
  useMetaPixel('412855071166949')
  return (
    <div>
      <Hero />
      <Microsoft />
      <WhyEducators />
      <Benefits/>
      {/* <HowItWorks /> */}
      <Support />
      <Testimonials/>
    </div>
  );
};

export default HomePage;
