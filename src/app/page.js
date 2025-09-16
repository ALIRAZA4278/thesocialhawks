import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesHome from './Components/Services-home'
import Testimonials from './Components/Testimonials'

const page = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <ServicesHome />
      <Testimonials />
    </div>
  )
}

export default page