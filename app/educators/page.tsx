// Import React and Next.js components
import React from 'react';
import Head from 'next/head';
import Hero from '@/components/hero_educators';
import Microsoft from '@/components/microsoft';

// Import Tailwind CSS components

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Microsoft />
    </div>
  );
};

export default HomePage;
