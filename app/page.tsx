"use client";

import  HDIW  from "@/components/HDIW";
import { Nav } from "@/components/Nav";
import {Welcome}  from "@/components/Welcome";
import Why from "@/components/Why";
import React from "react";
import { Testimonials } from "@/components/Testimonials";
import Privacy from "@/components/privacy";
import { Pricing } from "@/components/Pricing";
import Footer  from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { SocialsSection } from "@/components/SocialsSection";
import FAQ  from "@/components/Faqs"
import Trusted from "@/components/Trusted";
import BackedByMicrosoft from "@/components/microsoft";
import Popup from "@/components/Popup";
import useMetaPixel from '@/hooks/useMetaPixel'


const page = () => {
  useMetaPixel('879225596866623')
  return (
    <main>
      <Popup/>
      {/* <section className="bg-gradient-to-b from-linearGradientPurple to-linearGradientPink"> */}
      <section >
        <Nav />
        <Welcome />
      </section>
      {/* <SocialsSection /> */}
      <BackedByMicrosoft />
      <Trusted/>
      {/* <Why /> */}
      {/* <HDIW /> */}
      <Privacy />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
