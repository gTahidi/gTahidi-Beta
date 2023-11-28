import React from 'react'
import Hero from '@/components/hero_learners'
import Microsoft from '@/components/microsoft'


function page() {
  return (
    <>
    <div className='mt-20 py-10 h-full bg-blue-100'>
        <Hero/>
    </div>
    <Microsoft/>
    </>

  )
}

export default page