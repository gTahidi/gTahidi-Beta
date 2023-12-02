import React from 'react'
import Hero from '@/components/enterprise_hero'
import Microsoft from '@/components/microsoft'
import Features from '@/components/features_enterprise'
import { Testimonials } from '@/components/Testimonials'
import Top_Features from '@/components/features_Ieaners'
import Experience from '@/components/experience'

function page() {
  return (
    <div>
      <Hero/>
      <Microsoft/>
      {/* <Features/> */}
      {/* <Top_Features/> */}
      {/* <Experience/> */}
      <Testimonials/>
    </div>
  )
}

export default page
