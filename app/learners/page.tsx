"use client";

import React from 'react'
import Hero from '@/components/enterprise_hero'
import Microsoft from '@/components/microsoft'
import Features from '@/components/features_enterprise'
import { Testimonials } from '@/components/Testimonials'
import WhyChoose from '@/components/WhyChoose'
import Stats from '@/components/StatsBanner'
import Top_Features from '@/components/features_Ieaners'
import Experience from '@/components/experience'
import Learn from '@/components/learn'
import useMetaPixel from '@/hooks/useMetaPixel'

function Page() {
  useMetaPixel('879225596866623')
  return (
    <div>
      <Hero/>
      <Microsoft/>
      {/* <Features/> */}
      <Stats/>
      <Top_Features/>
      <WhyChoose/>
      <Experience/>
      <Testimonials/>
      <Learn/>
    </div>
  )
}

export default Page
