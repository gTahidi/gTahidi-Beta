import React from 'react'
import Hero from '@/components/hero_learners'
import Microsoft from '@/components/microsoft'
import About from '@/components/aboutus_enterprise'
import Contact from '@/components/Contact'
import { Testimonials } from '@/components/Testimonials'


function page() {
  return (
    <>
    <div className='mt-20 py-10 h-full bg-blue-100'>
        <Hero/>
    </div>
    <Microsoft/>
    <About/>
    <Testimonials/>
    <Contact/>
    </>

  )
}

export default page