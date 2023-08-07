import { HDIW } from "@/components/HDIW";
import { Nav } from "@/components/Nav";
import { Welcome } from "@/components/Welcome";
import Why from "@/components/Why";
import React from "react";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { SocialsSection } from "@/components/SocialsSection";
import { Footer } from "@/components/Footer";

const page = () => {
  return (
    <>
      <Nav />
      <main>
        <Welcome />
        <SocialsSection />
        <Why />
        <div className="bg-gtahidiCream p-[3%]" />
        <HDIW />
        <Testimonials />
        <Pricing />
        <section className="p-[5%] flex justify-around items-center flex-col sm:flex-row">
          <p className="text-4xl font-semibold">
            Get up and running in less than 2 minutes.
          </p>
          <button className="bg-gtahidiPurple py-4 px-6 hover:scale-125 transition-all rounded-full text-white font-medium mt-5 sm:mt-0">
            Start Creating
          </button>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default page;
