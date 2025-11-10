"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact';
import { getAllProjects, getFeaturedProjects } from '../data/projects';

const ProjectsPage = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, threshold: 0.2 });

  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();

  // Derive categories from project data and include an "All" option
  const derivedCategories = Array.from(new Set(allProjects.map(p => p.category))).filter(Boolean);
  const categories = ['All', ...derivedCategories];

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category && project.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto bg-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary/5"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6"
            >
              <span className="text-primary font-medium text-sm">Our Portfolio</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our <span className="text-primary">Creative</span> Work
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover our portfolio of successful projects that have transformed brands and driven exceptional results.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { number: '50+', label: 'Projects Completed', icon: '🚀' },
                { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { number: '200%', label: 'Average Growth', icon: '📈' },
                { number: '24/7', label: 'Support Available', icon: '🎯' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 cursor-pointer group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section 
        className="py-8 bg-white border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <motion.button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center justify-between w-full bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-lg transition-colors duration-300"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"></path>
                </svg>
                <span className="font-medium text-gray-900">
                  Filter: {selectedCategory}
                </span>
              </div>
              <motion.svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: showMobileFilters ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </motion.svg>
            </motion.button>
          </div>

          {/* Desktop Filters (always visible) + Mobile Filters (toggle) */}
          <motion.div 
            className={`${showMobileFilters ? 'block' : 'hidden'} md:block`}
            initial={false}
            animate={{ 
              height: showMobileFilters ? 'auto' : 0,
              opacity: showMobileFilters ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            style={{ 
              height: showMobileFilters ? 'auto' : 0,
              overflow: 'hidden'
            }}
          >
            <motion.div 
              className="text-center mb-6 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Filter by Category</h3>
              <p className="text-gray-600 text-sm">Explore projects by industry and expertise</p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-0">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowMobileFilters(false); // Close mobile filters after selection
                  }}
                  className={`relative px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 border-2 text-sm md:text-base ${
                    selectedCategory === category
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
                  } group overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={selectedCategory !== category ? { x: [0, -2, 2, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {category}
                  </motion.span>
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Results count */}
          <motion.div 
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm text-gray-500">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        ref={projectsRef}
        id="projects"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={isProjectsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our most impactful work and see how we&apos;ve helped businesses 
              transform their digital presence and achieve remarkable growth.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group"
              >
                <Link href={`/projects/${project.slug}`}>
                  <motion.div
                    className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Project Image - Fixed Height */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                      <motion.img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700"
                        whileHover={{ scale: 1.08 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Year Badge */}
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
                          {project.year}
                        </span>
                      </motion.div>

                      {/* Hover Action Icon */}
                      <motion.div 
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1, rotate: 12 }}
                      >
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </div>
                      </motion.div>

                      {/* Client Logo Overlay */}
                      <motion.div 
                        className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                          <div className="w-6 h-6 bg-white rounded-full p-1">
                            <Image 
                              src={project.clientLogo} 
                              alt={project.client}
                              width={20}
                              height={20}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-gray-800 font-medium text-xs">{project.client}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Category Badge */}
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          {project.category}
                        </span>
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm mb-5 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {/* Services Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {project.services.slice(0, 4).map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="bg-gray-50 text-gray-600 px-2 py-1.5 rounded-lg text-xs font-medium border border-gray-100 hover:bg-gray-100 transition-colors text-center"
                          >
                            {service.length > 15 ? service.substring(0, 15) + '...' : service}
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        {/* Duration in Years */}
                        <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="font-medium">{project.year}</span>
                        </div>

                        {/* View Project Button */}
                        <motion.div
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                          whileHover={{ x: 2 }}
                        >
                          <span>View Project</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-800"
        initial={{ opacity: 0 }}
        animate={isProjectsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Let&#39;s collaborate to transform your brand and create something extraordinary together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Contact />

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Smooth animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Card hover effects */
        .group:hover .card-shine {
          transform: translateX(100%);
        }
        
        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: translateX(-100%);
          transition: transform 0.6s ease-in-out;
        }
        
        /* Backdrop blur fallback */
        @supports not (backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            background-color: rgba(255, 255, 255, 0.85);
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        /* Focus styles for accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #7f20c4;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;