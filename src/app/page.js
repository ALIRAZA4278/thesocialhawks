import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesHome from './Components/Services-home'
import Testimonials from './Components/Testimonials'
import About from './Components/About'
import LogoCarousel from './Components/LogoCarousel'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

const page = () => {
  return (
    <div className='w-[95%] sm:w-[90%] mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <ServicesHome />
      <Projects />
      <Testimonials />
      <LogoCarousel />
      <Contact />
    </div>
  )
}

export default page