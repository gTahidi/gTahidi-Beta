// Import React and Next.js components
import React from 'react';
import Head from 'next/head';
import Hero from '@/components/hero_educators';
import Microsoft from '@/components/microsoft';
import Support from '@/components/support_teachers';
import WhyEducators from '@/components/why_educators';

// Import Tailwind CSS components

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Microsoft />
      <WhyEducators />
      <Support />
    </div>
  );
};

export default HomePage;
