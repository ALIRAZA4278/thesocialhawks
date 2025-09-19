import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesHome from './Components/Services-home'
// import Portfolio from './Components/Portfolio'
import Testimonials from './Components/Testimonials'
import About from './Components/About'
import LogoCarousel from './Components/LogoCarousel'
import Contact from './Components/Contact'

const page = () => {
  return (
    <div className='w-[95%] sm:w-[90%] mx-auto'>
      <Navbar />
      <Hero />
      <ServicesHome />
      <Testimonials />
      {/* <Portfolio /> */}
      <About />
      <LogoCarousel />
      <Contact />
    </div>
  )
}

export default page