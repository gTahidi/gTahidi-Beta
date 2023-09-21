import { HDIW } from "@/components/HDIW";
import { Nav } from "@/components/Nav";
import { Welcome } from "@/components/Welcome";
import Why from "@/components/Why";
import React from "react";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { SocialsSection } from "@/components/SocialsSection";
import { Faqs } from "@/components/Faqs";

const page = () => {
  return (
    <main>
      {/* <section className="bg-gradient-to-b from-linearGradientPurple to-linearGradientPink"> */}
      <section >
        <Nav />
        <Welcome />
      </section>
      <SocialsSection />
      <Why />
      <HDIW />
      <Testimonials />
      <Pricing />
      <Faqs />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
};

export default page;
