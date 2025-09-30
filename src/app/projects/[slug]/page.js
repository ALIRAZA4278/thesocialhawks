"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { notFound } from 'next/navigation';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';
import { getProjectBySlug, getAllProjects } from '../../data/projects';

const ProjectDetailPage = ({ params }) => {
  // `params` may be a Promise in this Next.js version. Unwrap it with React.use()
  const resolvedParams = React.use ? React.use(params) : params;
  const project = getProjectBySlug(resolvedParams.slug);
  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter(p => p.slug !== resolvedParams.slug).slice(0, 2);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Gallery state
  const [showAllImages, setShowAllImages] = useState(false);
  const initialImageCount = 6; // Show first 6 images initially

  const heroRef = useRef(null);
  const detailsRef = useRef(null);
  const resultsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isDetailsInView = useInView(detailsRef, { once: true, threshold: 0.2 });
  const isResultsInView = useInView(resultsRef, { once: true, threshold: 0.2 });

  // Fallback results to show when a project has no results defined
  const fallbackResults = [
    {
      value: '120%+',
      metric: 'Increase in Sales',
      description: 'Significant uplift in online sales following our campaign.'
    },
    {
      value: '3x',
      metric: 'ROAS',
      description: 'Return on ad spend improved threefold across channels.'
    },
    {
      value: '45%',
      metric: 'Engagement Increase',
      description: 'Higher audience engagement on social platforms.'
    },
    {
      value: '250K',
      metric: 'Impressions',
      description: 'Total campaign impressions across channels.'
    }
  ];

  const resultsToShow = (project.results && project.results.length) ? project.results : fallbackResults;

  // Lightbox functions
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = React.useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = React.useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, nextImage, prevImage]);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 opacity-30 cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-300" />
          
          {/* Click hint overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.5 }}
            whileHover={{ scale: 1 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Image
              src={project.clientLogo}
              alt={project.client}
              width={60}
              height={60}
              className="bg- rounded-full"
            />
            <div className="text-left">
              <div className="text-primary font-semibold text-lg">{project.client}</div>
              <div className="text-gray-300 text-sm">{project.category}</div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {project.title}
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {project.shortDescription}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-semibold flex items-center gap-2">
                <motion.svg 
                  className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </motion.svg>
                Duration: {project.duration}
              </span>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-semibold flex items-center gap-2">
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-8 4h12v9a2 2 0 01-2 2H10a2 2 0 01-2-2v-9z"></path>
                </motion.svg>
                Year: {project.year}
              </span>
            </motion.div>
            <motion.div 
              className="bg-primary/20 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary font-semibold flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link 
              href="#details" 
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Project Details
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Images Gallery */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Click on any image to view in full size
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllImages ? project.images : project.images.slice(0, initialImageCount)).map((image, index) => (
              <motion.div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer border border-gray-100 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={isHeroInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openLightbox(index)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image number badge */}
                <motion.div
                  className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  {index + 1} / {project.images.length}
                </motion.div>

                {/* Zoom icon overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.5, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                >
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl border border-white/50"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.svg 
                      className="w-6 h-6 text-gray-900" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </motion.svg>
                  </motion.div>
                </motion.div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More/Less Button */}
          {project.images.length > initialImageCount && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                onClick={() => setShowAllImages(!showAllImages)}
                className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(127, 32, 196, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center gap-3">
                  {showAllImages ? (
                    <>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                      </motion.svg>
                      Show Less Images
                    </>
                  ) : (
                    <>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </motion.svg>
                      View More Images ({project.images.length - initialImageCount} more)
                    </>
                  )}
                </span>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)'
                  }}
                  initial={{ x: '-100%', skewX: -25 }}
                  whileHover={{ 
                    x: '100%',
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                />
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Project Details */}
      <motion.section 
        ref={detailsRef}
        id="details"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={isDetailsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isDetailsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Services Offered */}
              <div className="mb-8">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isDetailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </motion.div>
                  Services Offered
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, x: -20, rotateX: -15 }}
                      animate={isDetailsInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -20, rotateX: -15 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-primary flex-shrink-0 group-hover:bg-primary/80"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{service}</span>
                      <motion.svg
                        className="w-4 h-4 text-gray-400 group-hover:text-primary ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </motion.svg>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isDetailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </motion.div>
                  Technologies Used
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-2 rounded-full font-semibold border border-primary/20 hover:from-primary/20 hover:to-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isDetailsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 10px 20px rgba(127, 32, 196, 0.15)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right-side panel: testimonial (optional) + project metadata + CTA + other projects */}
            <motion.div
              className="lg:sticky lg:top-8 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isDetailsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Testimonial (if present) */}
              {project.testimonial ? (
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/10">
                  <div className="text-6xl text-primary/20 mb-4">&ldquo;</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    {project.testimonial?.text || ''}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {project.testimonial?.author ? project.testimonial.author.charAt(0) : ''}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{project.testimonial?.author || ''}</div>
                      <div className="text-gray-600 text-sm">{project.testimonial?.position || ''}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No testimonial yet</h4>
                  <p className="text-sm text-gray-600">This project doesn&rsquo;t have a customer testimonial yet. Reach out to learn more about outcomes.</p>
                </div>
              )}

              {/* Project metadata */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Info</h4>
                <ul className="text-sm text-gray-700 space-y-3">
                  <li><span className="font-medium">Client:</span> {project.client}</li>
                  <li><span className="font-medium">Category:</span> {project.category}</li>
                  <li><span className="font-medium">Year:</span> {project.year}</li>
                  <li><span className="font-medium">Duration:</span> {project.duration}</li>
                  <li><span className="font-medium">Status:</span> {project.status ? (project.status.charAt(0).toUpperCase() + project.status.slice(1)) : ''}</li>
                </ul>

                <div className="mt-6">
                  <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary-hover transition-colors">
                    Contact about this project
                  </Link>
                </div>
              </div>

              {/* Other projects */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Other Projects</h4>
                <div className="space-y-3">
                  {otherProjects.length ? otherProjects.map((p) => (
                    <Link key={p.slug} href={`/projects/${p.slug}`} className="block text-sm text-primary hover:underline">
                      {p.title}
                    </Link>
                  )) : (
                    <p className="text-sm text-gray-600">No other projects available.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        ref={resultsRef}
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={isResultsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Project Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Measurable outcomes that demonstrate the success and impact of our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resultsToShow.map((result, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer h-full"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isResultsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.2 + index * 0.15,
                  ease: "backOut"
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 group-hover:shadow-xl transition-all duration-500 border border-primary/10 group-hover:border-primary/20 overflow-hidden h-full flex flex-col justify-between"
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(127, 32, 196, 0.08) 0%, rgba(127, 32, 196, 0.15) 100%)"
                  }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20px 20px, rgba(127, 32, 196, 0.3) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '40px 40px'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Top section with icon and value */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Icon based on metric type */}
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {result.metric.toLowerCase().includes('sales') || result.metric.toLowerCase().includes('revenue') ? (
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                      ) : result.metric.toLowerCase().includes('engagement') ? (
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      ) : result.metric.toLowerCase().includes('roas') ? (
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      )}
                    </motion.div>

                    <motion.div 
                      className="text-4xl lg:text-5xl font-bold text-primary mb-4 group-hover:text-primary/90 transition-colors duration-300"
                      initial={{ scale: 0 }}
                      animate={isResultsInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4 + index * 0.1,
                        type: "spring",
                        bounce: 0.4
                      }}
                    >
                      {result.value}
                    </motion.div>
                  </div>
                  
                  {/* Bottom section with title and description */}
                  <div className="flex-1 flex flex-col justify-end">
                    <motion.h3 
                      className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {result.metric}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      {result.description}
                    </motion.p>
                  </div>

                  {/* Hover shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)'
                    }}
                    initial={{ x: '-100%', skewX: -25 }}
                    whileHover={{ 
                      x: '100%',
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.section 
          className="py-20 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={isResultsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Other Projects
              </h2>
              <p className="text-xl text-gray-600">
                Explore more of our successful collaborations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((otherProject, index) => (
                <motion.div
                  key={otherProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Link href={`/projects/${otherProject.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={otherProject.images[0]}
                          alt={otherProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {otherProject.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {otherProject.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-semibold text-sm">{otherProject.client}</span>
                          <span className="text-gray-500 text-sm">{otherProject.year}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
              >
                View All Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-800"
        initial={{ opacity: 0 }}
        animate={isResultsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Ready for Similar Results?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Let&apos;s discuss how we can achieve exceptional results for your business too.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isResultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-3 bg-white/10 text-gray-300 border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200"
              onClick={closeLightbox}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Navigation arrows */}
            {project.images.length > 1 && (
              <>
                <motion.button
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                <motion.button
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </>
            )}

            {/* Image container */}
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] mx-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentImageIndex}
                className="relative w-full h-full"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Image counter */}
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {currentImageIndex + 1} / {project.images.length}
              </motion.div>
            </motion.div>

            {/* Bottom navigation dots */}
            {project.images.length > 1 && (
              <motion.div
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.images.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />

      {/* Custom Interactive Styles */}
      <style jsx>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Custom hover effects */
        .hover-lift:hover {
          transform: translateY(-4px);
          transition: transform 0.3s ease;
        }
        
        /* Gradient text animation */
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .gradient-text {
          background: linear-gradient(-45deg, #7f20c4, #9333ea, #3b82f6, #06b6d4);
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Pulse animation */
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        
        /* Enhanced focus states */
        *:focus-visible {
          outline: 2px solid #7f20c4;
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #7f20c4, #9333ea);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #6a1b9a, #7c3aed);
        }
        
        /* Glass morphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Interactive card shadows */
        .card-interactive {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-interactive:hover {
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(127, 32, 196, 0.05);
        }
        
        /* Magnetic hover effect */
        .magnetic {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .magnetic:hover {
          transform: scale(1.05);
        }
        
        /* Text reveal animation */
        @keyframes text-reveal {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .text-reveal {
          animation: text-reveal 0.6s ease-out forwards;
        }
        
        /* Button hover effects */
        .btn-interactive {
          position: relative;
          overflow: hidden;
        }
        
        .btn-interactive::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-interactive:hover::before {
          left: 100%;
        }
        
        /* Prevent text selection on interactive elements */
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Performance optimizations */
        .gpu-acceleration {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;