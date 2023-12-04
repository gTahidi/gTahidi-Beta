import React from 'react'
import Hero from '@/components/hero_learners'
import Microsoft from '@/components/microsoft'
import About from '@/components/aboutus_enterprise'
import Contact from '@/components/Contact'
import { Testimonials } from '@/components/Testimonials'
import Impact from '@/components/impact'
import Solutions from '@/components/solution'


function page() {
  return (
    <>
    <div className='py-10 h-full bg-blue-100'>
        <Hero/>
    </div>
    <Microsoft/>
    <About/>
    <Solutions/>
    <Impact/>
    <Testimonials/>
    <Contact/>
    </>

  )
}

export default page