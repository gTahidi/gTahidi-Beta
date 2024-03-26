import React from 'react'
import Hero from '@/components/hero_learners'
import Microsoft from '@/components/microsoft'
import About from '@/components/aboutus_enterprise'
import Contact from '@/components/Contact'
import { Testimonials } from '@/components/Testimonials'
import Impact from '@/components/impact'
import Stats from '@/components/StatsBanner'
import Solutions from '@/components/solution'
import WhyChoose from '@/components/WhyChoose_enterprise'
import useMetaPixel from '@/hooks/useMetaPixel'


function page() {
  useMetaPixel('YOUR_PIXEL_ID')
  return (
    <>
    <div className='py-10 h-full bg-white'>
        <Hero/>
    </div>
    <Microsoft/>
    <Stats/>
    {/* <About/> */}
    <Solutions/>
    <WhyChoose/>
    <Impact/>
    <Testimonials/>
    <Contact/>
    </>

  )
}

export default page
