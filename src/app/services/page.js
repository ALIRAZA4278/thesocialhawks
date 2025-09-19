'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact';

const ServicesPage = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  
  // Check if elements are in view
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  
  // Services data - matching the layout from the image
  const services = [
    {
      id: 1,
      title: "Marketing",
      description: "Tired of ants marching through your home? Our team specializes in evicting these tiny invaders, so you can reclaim your space without a single crumb left behind.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Branding",
      description: "Tired of ants marching through your home? Our team specializes in evicting these tiny invaders, so you can reclaim your space without a single crumb left behind.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Production",
      description: "Tired of ants marching through your home? Our team specializes in evicting these tiny invaders, so you can reclaim your space without a single crumb left behind.",
      image: "/images/EXAMPLE.jpg", 
      fallback: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Content Creation", 
      description: "Tired of ants marching through your home? Our team specializes in evicting these tiny invaders, so you can reclaim your space without a single crumb left behind.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const [imageErrors, setImageErrors] = useState({});

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />
      
      <motion.div 
        ref={sectionRef}
        className="min-h-screen bg-white mt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          className="    "
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center  px-4">
            <motion.div 
              className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Left side - Main heading */}
              <div className="text-left ">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-900">
                  Creative Solutions{' '}
                  <span className="lg:block">That Drive Real Growth</span>
                </h1>
              </div>
              
              {/* Right side - Description */}
              <div className="text-left lg:max-w-md lg:flex-shrink-0">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From strategy to execution, we offer full-scale services in marketing, 
                  content, branding, and production, built to amplify your brand and 
                  deliver measurable impact.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid - 2x2 Layout */}
        <motion.div 
          ref={servicesRef}
          className="pb-16 sm:pb-20"
          initial={{ opacity: 0 }}
          animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-200"
                  initial={{ opacity: 0, y: 60 }}
                  animate={isServicesInView ? { 
                    opacity: 1, 
                    y: 0
                  } : { 
                    opacity: 0, 
                    y: 60 
                  }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Content Layout - Title Left, Image Right */}
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Left Section - Title and Content */}
                    <div className="flex-1 p-6 lg:p-8 xl:p-10 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-6 lg:mb-8">
                          {service.description}
                        </p>
                      </div>

                      {/* Know More Link */}
                      <div className="flex items-center text-primary group-hover:text-primary-hover transition-colors duration-300 cursor-pointer">
                        <span className="text-sm font-medium">→ Know More</span>
                      </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-full lg:w-64 xl:w-80 h-48 lg:h-auto relative overflow-hidden lg:rounded-r-2xl">
                      {!imageErrors[`service-${service.id}`] ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={() => handleImageError(`service-${service.id}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                          style={{ background: service.fallback }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Contact />
    </div>
  )
}

export default ServicesPage
