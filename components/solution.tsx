import React from 'react';

const OurSolutions = () => {
  return (
    <div className="bg-gray-100 h-full p-10">
      <h2 className="text-3xl font-bold text-center pt-8 mb-12">Our Solutions</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <SolutionCard
          title="Premium Media Brands"
          description="Our Premium Media Brands deliver digital campaigns by strategically distributing content across our owned platforms."
        />
        <SolutionCard
          title="Ad Publisher Solutions"
          description="Our Ad Publisher Solutions make it easy for advertisers to invest in minority-owned and led publishers. Advertisers can programmatically discover and reach multicultural audiences."
        />
        <SolutionCard
          title="Career & Talent Solutions"
          description="Our Career & Talent Solutions include a recruitment platform and a global gathering connecting a network of inclusive tech companies, professionals, and innovators."
        />
      </div>
    </div>
  );
};

const SolutionCard = ({ title, description }) => {
  return (
    <div className="max-w-sm w-full p-6 bg-white rounded-xl border space-x-4 shadow-md">
      <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{title}</h3>
      <p className="font-normal text-gray-700 text-xl ">{description}</p>
    </div>
  );
};

export default OurSolutions;
