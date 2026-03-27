'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useParams } from 'next/navigation';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';
import serviceDetails from './serviceData';

const ServiceDetailPage = ({ slugOverride } = {}) => {
  const params = useParams();
  const slug = slugOverride || params.slug;
  const service = serviceDetails[slug];

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-50px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-50px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  if (!service) {
    return (
      <div className="w-[95%] sm:w-[90%] mx-auto bg-white">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/services" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto bg-white">
      <Navbar />
      
      <motion.div 
        className="bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          className="py-5 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-purple-400/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-primary/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, -25, 0],
                y: [0, 25, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/15 to-purple-300/15 rounded-full blur-3xl"
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Service Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm border border-primary/20 text-primary rounded-full text-sm font-semibold mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Professional Service
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-medium mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {service.subtitle}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {service.description}
              </motion.p>
              
          
              {/* Visual Elements */}
            
            </div>
            
            {/* Action buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
               <Link 
                href="/#contact">

              <button className="inline-flex items-center gap-2 border-2 border-primary text-[#7f20c4] hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
                </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        {service.stats && (
          <motion.div 
            className="py-16 bg-primary text-white"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {service.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      initial={{ scale: 0 }}
                      animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-white/80">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Detailed Description */}
        <motion.div 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-lg leading-relaxed text-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {service.longDescription}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={servicesRef}
          className="py-16"
          initial={{ opacity: 0 }}
          animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3 
              className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Our Services Include
            </motion.h3>
            
            <motion.p 
              className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive solutions tailored to elevate your brand and drive measurable results
            </motion.p>
            
            <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
              {service.services.map((serviceItem, index) => {
                // Determine if this service item should be clickable
                let linkHref = null;

                // Digital Marketing & Growth inner pages
                if (slug === 'digital-marketing-growth') {
                  if (serviceItem.includes('SEO')) {
                    linkHref = `/services/${slug}/seo`;
                  } else if (serviceItem.includes('Influencer & Creator Partnerships')) {
                    linkHref = `/services/${slug}/influencer-creator-partnerships`;
                  } else if (serviceItem.includes('Paid Social Advertising')) {
                    linkHref = `/services/${slug}/paid-social-advertising`;
                  } else if (serviceItem.includes('Social Media Management')) {
                    linkHref = `/services/${slug}/social-media-management`;
                  } else if (serviceItem.includes('Search Engine Marketing') || serviceItem.includes('PPC')) {
                    linkHref = `/services/${slug}/search-engine-marketing`;
                  } else if (serviceItem.includes('Performance Marketing')) {
                    linkHref = `/services/${slug}/performance-marketing`;
                  } else if (serviceItem.includes('Conversion Rate Optimization')) {
                    linkHref = `/services/${slug}/conversion-rate-optimization`;
                  } else if (serviceItem.includes('Analytics') || serviceItem.includes('Reporting')) {
                    linkHref = `/services/${slug}/analytics-reporting`;
                  }
                }

                // Web & Digital Development inner pages
                if (slug === 'web-digital-development') {
                  if (serviceItem.includes('Website Development')) {
                    linkHref = `/services/${slug}/professional-website-development`;
                  } else if (serviceItem.includes('E-learning') || serviceItem.includes('Marketplaces')) {
                    linkHref = `/services/${slug}/e-learning-platforms`;
                  } else if (serviceItem.includes('Domain Registration')) {
                    linkHref = `/services/${slug}/domain-registration`;
                  } else if (serviceItem.includes('Web Hosting')) {
                    linkHref = `/services/${slug}/web-hosting`;
                  } else if (serviceItem.includes('DNS Management')) {
                    linkHref = `/services/${slug}/dns-management`;
                  } else if (serviceItem.includes('Business Email')) {
                    linkHref = `/services/${slug}/business-email-setup`;
                  } else if (serviceItem.includes('SSL') || serviceItem.includes('TLS')) {
                    linkHref = `/services/${slug}/ssl-certificate`;
                  } else if (serviceItem.includes('Shopify')) {
                    linkHref = `/services/${slug}/shopify-website-development`;
                  }
                }

                // Graphic Design inner pages
                if (slug === 'graphic-design') {
                  if (serviceItem.includes('Social Media Creative Posts')) {
                    linkHref = `/services/${slug}/social-media-creative-posts`;
                  } else if (serviceItem.includes('Ad Creatives')) {
                    linkHref = `/services/${slug}/ad-creatives`;
                  } else if (serviceItem.includes('Website Banners')) {
                    linkHref = `/services/${slug}/website-banners-headers`;
                  } else if (serviceItem.includes('Infographics')) {
                    linkHref = `/services/${slug}/infographics-data-visualization`;
                  } else if (serviceItem.includes('Social Media Story')) {
                    linkHref = `/services/${slug}/social-media-story-templates`;
                  } else if (serviceItem.includes('UI Design')) {
                    linkHref = `/services/${slug}/web-ui-design`;
                  } else if (serviceItem.includes('Digital Marketing Materials')) {
                    linkHref = `/services/${slug}/digital-marketing-materials`;
                  } else if (serviceItem.includes('Email Newsletter')) {
                    linkHref = `/services/${slug}/email-newsletter-design`;
                  } else if (serviceItem.includes('Presentation')) {
                    linkHref = `/services/${slug}/presentation-slide-decks`;
                  } else if (serviceItem.includes('E-book') || serviceItem.includes('Whitepaper')) {
                    linkHref = `/services/${slug}/ebook-whitepaper-design`;
                  } else if (serviceItem.includes('Icon') || serviceItem.includes('Illustration')) {
                    linkHref = `/services/${slug}/icon-illustration-design`;
                  } else if (serviceItem.includes('Packaging')) {
                    linkHref = `/services/${slug}/packaging-design`;
                  }
                }

                const content = (
                  <motion.div 
                    className="service-card relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 overflow-hidden h-full min-h-[200px] flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                  {/* Dynamic Background Pattern */}
                  <motion.div 
                    className="absolute inset-0 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl opacity-10 transition-opacity duration-500"
                    animate={{ 
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isServicesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.2, type: "spring", stiffness: 200 }}
                      whileHover={{ rotate: 15 }}
                    >
                      {/* Dynamic Icon based on index */}
                      {index % 6 === 0 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      )}
                      {index % 6 === 1 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {index % 6 === 2 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {index % 6 === 3 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      )}
                      {index % 6 === 4 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      )}
                      {index % 6 === 5 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      )}
                    </motion.div>
                    
                    {/* Service Text */}
                    <motion.div
                      className="flex-1 flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.4 }}
                    >
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900 transition-colors duration-500 leading-snug mb-4 min-h-[4rem] flex items-start">
                        <span className="line-clamp-3">{serviceItem}</span>
                      </h4>
                      
                      {/* Service Number */}
                      <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="text-sm font-medium text-gray-500 transition-colors duration-500">
                          Service #{(index + 1).toString().padStart(2, '0')}
                        </span>
                        
                        <motion.div 
                          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Animated Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-purple-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: 'linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #6366f1, #8b5cf6, #06b6d4)',
                      backgroundClip: 'padding-box, border-box',
                      backgroundOrigin: 'padding-box, border-box'
                    }}
                  />
                  </motion.div>
                );

                // Wrap SEO card with a link to the SEO milestones page when viewing the digital marketing service
                if (linkHref) {
                  return (
                    <Link href={linkHref} key={`service-link-${index}`}>
                      {content}
                    </Link>
                  );
                }

                return (
                  <div key={`service-card-${index}`}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Sub-Services Section - For Digital Marketing and Web Development */}
        {(slug === 'digital-marketing-growth' || slug === 'web-digital-development') && (
          <motion.div
            className="py-16 bg-gradient-to-br from-gray-50 to-primary/5"
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Specialized Services
              </motion.h3>

              <motion.p
                className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Dive deeper into our specialized service areas with comprehensive strategies and expert execution
              </motion.p>

              <div className={`max-w-6xl mx-auto px-4 grid gap-6 justify-center items-stretch ${slug === 'web-digital-development' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
                {(slug === 'digital-marketing-growth' ? [
                  {
                    title: 'SEO Milestones',
                    description: 'Comprehensive SEO process with detailed milestones and deliverables',
                    icon: '🔍',
                    link: `/services/${slug}/seo`,
                    features: ['Keyword Research', 'Technical Audit', 'Content Optimization', 'Link Building']
                  },
                  {
                    title: 'Influencer Partnerships',
                    description: 'Connect with authentic creators and build meaningful brand partnerships',
                    icon: '🤝',
                    link: `/services/${slug}/influencer-creator-partnerships`,
                    features: ['Creator Vetting', 'Campaign Strategy', 'Content Management', 'Performance Tracking']
                  },
                  {
                    title: 'Paid Social Advertising',
                    description: 'High-converting social media campaigns across all major platforms',
                    icon: '📱',
                    link: `/services/${slug}/paid-social-advertising`,
                    features: ['Meta & Instagram Ads', 'TikTok Campaigns', 'LinkedIn Advertising', 'Twitter Promotion']
                  }
                ] : [
                  {
                    title: 'Professional Website Development',
                    description: 'Custom-built websites designed to reflect your brand identity and engage your audience',
                    icon: '🌐',
                    link: `/services/${slug}/professional-website-development`,
                    features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Performance']
                  },
                  {
                    title: 'E-commerce Web Development',
                    description: 'Powerful online stores with secure payments and optimized checkout experiences',
                    icon: '🛒',
                    link: `/services/${slug}/ecommerce-web-development`,
                    features: ['Payment Integration', 'Inventory Management', 'Shopping Cart', 'Order Tracking']
                  },
                  {
                    title: 'Web Application Development',
                    description: 'Scalable web applications built with modern technologies for your business',
                    icon: '⚡',
                    link: `/services/${slug}/web-application-development`,
                    features: ['Custom Features', 'API Integration', 'Cloud Ready', 'Scalable Architecture']
                  },
                  {
                    title: 'Backend Development',
                    description: 'Robust server-side solutions and APIs that power your digital products',
                    icon: '🔧',
                    link: `/services/${slug}/backend-development`,
                    features: ['API Development', 'Database Design', 'Server Setup', 'Security Implementation']
                  },
                  {
                    title: 'WordPress Development',
                    description: 'Custom WordPress solutions with tailored themes and plugins',
                    icon: '📝',
                    link: `/services/${slug}/wordpress-website-development`,
                    features: ['Custom Themes', 'Plugin Development', 'Easy CMS', 'Performance Tuning']
                  },
                  {
                    title: 'Shopify Website Development',
                    description: 'Professional Shopify stores with custom themes, apps, and optimized checkout flows',
                    icon: '🛍️',
                    link: `/services/${slug}/shopify-website-development`,
                    features: ['Custom Themes', 'App Integration', 'Payment Setup', 'Store Optimization']
                  }
                ]).map((subService, index) => (
                  <div key={index} className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group w-full flex justify-center"
                    >
                      <Link href={subService.link} className="w-full">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-primary/20 h-full text-center mx-auto flex flex-col">
                          <div className="text-center flex-1 flex flex-col">
                            <motion.div
                              className="text-4xl mb-4"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {subService.icon}
                            </motion.div>

                            <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                              {subService.title}
                            </h4>

                            <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                              {subService.description}
                            </p>

                            <div className="space-y-2 mb-4">
                              {subService.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-500">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300 text-sm mt-auto">
                              Explore Details
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Benefits Section */}
        {service.benefits && (
          <motion.div 
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="px-4 ">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Key Benefits
              </motion.h3>
              
              <div className="flex flex-wrap gap-8 max-w-6xl mx-auto justify-center">
                {service.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group w-full md:w-1/2 lg:w-1/4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Process Section */}
        <motion.div 
          ref={processRef}
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3 
              className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              tr ansition={{ duration: 0.6 }}
            >
              Our Process
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.process.map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Background decoration */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isProcessInView ? { scale: 1, rotate: 180 } : { scale: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isProcessInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.icon || (index + 1)}
                    </motion.div>
                    <motion.h4 
                      className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    >
                      {step.step}
                    </motion.h4>
                  </div>
                  <motion.p 
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        {service.testimonials && (
          <motion.div 
            className="py-16 bg-white"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="px-4">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                What Our Clients Say
              </motion.h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 relative"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    {/* Quote Icon */}
                    <motion.div 
                      className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isProcessInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    >
                      &ldquo;
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-700 leading-relaxed mb-6 italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    >
                      &ldquo;{testimonial?.text || ''}&rdquo;
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span 
                            key={i}
                            className="text-yellow-400 text-lg"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isProcessInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, delay: 1.6 + index * 0.2 + i * 0.1 }}
                          >
                            ⭐
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Pricing Section */}
        {/* Case Studies Section */}
        {service.caseStudies && (
          <motion.div 
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Success Stories
              </motion.h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.caseStudies.map((study, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">{study.industry.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{study.title}</h4>
                          <p className="text-sm text-gray-600">{study.industry}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold text-primary mb-2">Results</h5>
                        <p className="text-gray-700 text-sm font-medium">{study.results}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Industries Section */}
        {service.industries && (
          <motion.div 
            className="py-16 bg-white"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Industries We Serve
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Specialized expertise across diverse industries with proven track records
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {service.industries.map((industry, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {industry.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {service.faq && (
          <motion.div 
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Frequently Asked Questions
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Get answers to the most common questions about our services
              </motion.p>
              
              <div className="max-w-4xl mx-auto space-y-6">
                {service.faq.map((faqItem, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02, shadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  >
                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">Q</span>
                      </div>
                      <div className="flex-1">
                        <motion.h4 
                          className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                        >
                          {faqItem.question}
                        </motion.h4>
                        <motion.p 
                          className="text-gray-600 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                        >
                          {faqItem.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Section */}
        <motion.div 
          ref={featuresRef}
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3 
              className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Why Choose Us
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {(service.features || []).map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center group flex-shrink-0 w-32"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-hover transition-colors shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isFeaturesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <motion.p 
                    className="text-xs font-medium text-gray-900 group-hover:text-primary transition-colors leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {feature}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div 
          className="py-16 bg-gray-900 text-white"
          initial={{ opacity: 0 }}
          animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Our Promise to You
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">100% Satisfaction</h4>
                  <p className="text-white/80">Unlimited revisions until you&apos;re completely satisfied</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
                  <p className="text-white/80">Quick turnaround times without compromising quality</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Quality Guarantee</h4>
                  <p className="text-white/80">Professional standards backed by our reputation</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isFeaturesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl">💼</span>
                  <h4 className="text-2xl font-bold">Professional Excellence Guarantee</h4>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  We stand behind every project with our commitment to excellence. If you&apos;re not completely satisfied with our work, 
                  we&apos;ll continue refining until it exceeds your expectations – at no additional cost.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="py-20 bg-black text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full"
              animate={{ 
                x: [0, -25, 0],
                y: [0, 25, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute bottom-10 left-1/4 w-12 h-12 bg-white rounded-full"
              animate={{ 
                x: [0, 20, 0],
                y: [0, -15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h3 
              className="text-3xl lg:text-5xl font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {service.cta.title}
            </motion.h3>
            
            <motion.p 
              className="text-lg  lg:text-xl opacity-90  max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {service.cta.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col mt-10 sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl w-full sm:w-auto min-w-[200px]"
                >
                  {service.cta.buttonText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all w-full sm:w-auto min-w-[200px]"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Schedule Consultation
              </motion.button>
            </motion.div>

            <motion.div 
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={isCtaInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                >
                  24/7
                </motion.div>
                <p className="opacity-90">Support Available</p>
              </motion.div>
              
              <motion.div 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={isCtaInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 200 }}
                >
                  100%
                </motion.div>
                <p className="opacity-90">Satisfaction Guarantee</p>
              </motion.div>
              
              <motion.div 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={isCtaInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  30+
                </motion.div>
                <p className="opacity-90">Expert Team Members</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      <Contact />
      
      {/* Custom Styles for Better Readability */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.4;
          max-height: calc(1.4em * 3);
        }
        
        /* Ensure proper text rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Improve hover interactions */
        .service-card {
          cursor: pointer;
        }
        
        .service-card:hover h4 {
          color: #7c3aed;
        }
        
        /* Consistent spacing */
        @media (min-width: 768px) {
          .service-grid {
            grid-auto-rows: 1fr;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 767px) {
          .service-card {
            min-height: 180px;
            padding: 1.5rem;
          }
          
          .service-card h4 {
            font-size: 1rem;
            line-height: 1.3;
            min-height: 3rem;
          }
        }
        
        /* Focus states for accessibility */
        .service-card:focus-visible {
          outline: 2px solid #7c3aed;
          outline-offset: 2px;
        }
        
        /* Smooth transitions */
        .service-card h4 {
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;