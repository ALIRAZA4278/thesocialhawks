'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projectsData } from '../data/projects';

const Projects = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  
  // Check if elements are in view
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-50px" });
  
  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  // Use real projects data (limit to 4)
  const cards = projectsData.slice(0, 4).map(p => ({
    id: p.id,
    slug: p.slug,
    category: p.category,
    title: p.title,
    description: p.shortDescription,
    image: p.images && p.images.length ? p.images[0] : '/images/EXAMPLE.jpg',
    fallback: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundColor: '#f8fafc',
    stats: { duration: p.duration || 'TBD', revenue: p.results && p.results[0] ? p.results[0].value : '' },
  }));

  const [imageErrors, setImageErrors] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <motion.div 
      id="projects"
      className="bg-white" 
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header Section */}
        <motion.div 
          ref={headingRef}
          className="mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="text-left  "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4 sm:mb-6"
              variants={sectionVariants}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">Case Studies</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-3xl"
              variants={sectionVariants}
            >
              Experience Matters
            </motion.h2>
          </motion.div>
          
          <motion.button 
            className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-black text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a free consultation
          </motion.button>
        </motion.div>

        {/* Cards Grid - Enhanced design */}
        <motion.div 
          ref={cardsRef}
          initial={{ opacity: 0 }}
          animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {cards.map((card, index) => (
          <div key={card.slug || card.id} className="block">
            {/* Desktop/Tablet Card */}
            <motion.div 
              className={`hidden sm:block group relative rounded-3xl overflow-hidden cursor-pointer transform-gpu shadow-lg hover:shadow-2xl transition-all duration-500 ${hoveredCard === card.id ? 'z-50' : ''}`}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={isCardsInView ? { 
                opacity: 1, 
                y: 0,
                scale: 1,
                backgroundColor: hoveredCard === card.id ? '#000000' : card.backgroundColor
              } : { 
                opacity: 0, 
                y: 80,
                scale: 0.95,
                backgroundColor: card.backgroundColor
              }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.05,
                y: -12,
                transition: { 
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => router.push(`/projects/${card.slug}`)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  router.push(`/projects/${card.slug}`);
                }
              }}
            >
                {/* Gradient Background Overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{ background: card.fallback }}
                />

                {/* Card Content Container */}
                <div className="relative min-h-[280px] sm:h-[360px] lg:h-[420px] p-5 sm:p-8 flex flex-col transition-all duration-500 z-20 bg-white group-hover:bg-black/90 opacity-100 group-hover:opacity-80 overflow-hidden">
                  
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Category Badge */}
                    <motion.div 
                      className="flex items-center gap-2"
                      animate={{
                        y: hoveredCard === card.id ? -4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-white transition-colors duration-300"></div>
                      <span className="text-sm font-medium text-primary group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                        {card.category}
                      </span>
                    </motion.div>
                    
                    {/* Action Icon */}
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 90
                      }}
                      animate={{
                        rotate: hoveredCard === card.id ? 45 : 0,
                        scale: hoveredCard === card.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg 
                        className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <motion.h3 
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-white transition-colors duration-300"
                      animate={{
                        y: hoveredCard === card.id ? -6 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      >
                      {card.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed mb-4 sm:mb-6 clamp-desc"
                      animate={{
                        y: hoveredCard === card.id ? -4 : 0,
                        opacity: hoveredCard === card.id ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      >
                      {card.description}
                    </motion.p>

                    {/* Stats Section */}
                    <motion.div 
                      className="flex items-center gap-6 mt-auto"
                      animate={{
                        y: hoveredCard === card.id ? -8 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                          {card.stats.duration}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                          Duration
                        </div>
                      </div>
                      <div className="w-px h-8 bg-gray-200 group-hover:bg-white/30 transition-colors duration-300"></div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-600 group-hover:text-white transition-colors duration-300">
                          {card.stats.revenue}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                          Revenue Growth
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Preview Section */}
                  {/* Floating preview image — hide on mobile to prevent overlap */}
                  <motion.div 
                    className="hidden sm:block absolute bottom-8 right-8 w-20 h-20 rounded-2xl overflow-hidden shadow-lg opacity-80 group-hover:opacity-100 transition-all duration-500"
                    animate={{
                      scale: hoveredCard === card.id ? 1.1 : 1,
                      y: hoveredCard === card.id ? -4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {!imageErrors[`card-${card.slug || card.id}`] ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        onError={() => handleImageError(`card-${card.slug || card.id}`)}
                      />
                    ) : (
                      <div 
                        className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                        style={{ background: card.fallback }}
                      />
                    )}
                  </motion.div>

                  {/* View Case Study Button with Backdrop (desktop only overlay patterns) */}
                  <motion.div
                    className="hidden sm:flex absolute inset-0 items-center justify-center z-50 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: hoveredCard === card.id ? 1 : 0,
                      scale: hoveredCard === card.id ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Dark overlay backdrop for better button visibility */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredCard === card.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Button container with better positioning */}
                    <motion.div
                      className="relative z-10 flex flex-col items-center gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredCard === card.id ? 0 : 20,
                        opacity: hoveredCard === card.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                    >
                      {/* Project title overlay */}
                      <motion.h4
                        className="text-white text-lg font-bold text-center px-4 opacity-90"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{
                          y: hoveredCard === card.id ? 0 : 10,
                          opacity: hoveredCard === card.id ? 0.9 : 0,
                        }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        {card.title}
                      </motion.h4>
                      
                      {/* Enhanced View Project Button */}
                      <motion.button
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-2xl transform transition-all duration-300 pointer-events-auto flex items-center gap-3 hover:bg-primary hover:text-white hover:shadow-[0_20px_40px_rgba(127,32,196,0.4)] relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.08,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          router.push(`/projects/${card.slug}`);
                        }}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{
                          y: hoveredCard === card.id ? 0 : 10,
                          opacity: hoveredCard === card.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                        />
                        
                        <span className="relative z-10">View Project</span>
                        <motion.svg 
                          className="w-5 h-5 relative z-10" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* Decorative Elements (hide on mobile) */}
                  <motion.div 
                    className="hidden sm:block absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: hoveredCard === card.id ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    />
                  
                  <motion.div 
                    className="hidden sm:block absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      scale: hoveredCard === card.id ? [1, 1.3, 1] : 1,
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />

                  {/* Mobile-only full-width preview image below content */}
                  <div className="sm:hidden mt-4 rounded-xl overflow-hidden h-24">
                    {!imageErrors[`card-${card.slug || card.id}`] ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(`card-${card.slug || card.id}`)}
                      />
                    ) : (
                      <div className="w-full h-full" style={{ background: card.fallback }} />
                    )}
                  </div>
                </div>

                {/* Border Animation */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 z-30"
                  animate={{
                    borderColor: hoveredCard === card.id ? "rgba(255,255,255,0.4)" : "transparent",
                  }}
                  />

                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl z-40"
                  animate={{
                    x: hoveredCard === card.id ? ["-100%", "100%"] : "-100%",
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                  />
              </motion.div>

            {/* Mobile Card (full details, stacked layout) */}
            <motion.div
              className="sm:hidden block rounded-2xl overflow-hidden bg-white shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              <Link href={`/projects/${card.slug}`} className="block">
                {/* Image on top */}
                <div className="relative h-40 w-full">
                  {!imageErrors[`card-m-${card.slug || card.id}`] ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(`card-m-${card.slug || card.id}`)}
                    />
                  ) : (
                    <div className="w-full h-full" style={{ background: card.fallback }} />
                  )}
                </div>

                <div className="p-4">
                  {/* Category row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{card.category}</span>
                    </div>
                    <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-2">{card.title}</h3>

                  {/* Description (no clamp on mobile to show full details) */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{card.stats.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div>
                      <div className="text-sm font-semibold text-green-600">{card.stats.revenue}</div>
                      <div className="text-xs text-gray-500">Revenue Growth</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-primary hover:bg-black text-white px-4 py-3 rounded-full font-medium transition-colors">
                    View Project
                  </button>
                </div>
              </Link>
            </motion.div>
          </div>
            ))}
          </div>
        </motion.div>
      </div>

  {/* Enhanced CSS for modern card designs */}
      <style jsx>{`
        /* Clamp description lines to avoid overflow on small screens */
        .clamp-desc {
          display: -webkit-box;
          -webkit-line-clamp: 3; /* default for mobile */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (min-width: 640px) { /* sm */
          .clamp-desc {
            -webkit-line-clamp: 4;
          }
        }

        @media (min-width: 1024px) { /* lg */
          .clamp-desc {
            -webkit-line-clamp: 5;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(100%) rotate(25deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(127, 32, 196, 0.3); }
          50% { box-shadow: 0 0 40px rgba(127, 32, 196, 0.6); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Enhanced hover animations */
        .group:hover .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .group:hover .shimmer-effect {
          animation: shimmer 2s ease-in-out;
        }

        /* Smooth card transformations */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
          will-change: transform;
        }

        /* Gradient background animations */
        .group:hover .gradient-bg {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        /* Enhanced shadow effects */
        .shadow-luxury {
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.07),
            0 10px 15px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .shadow-luxury-hover {
          box-shadow: 
            0 20px 25px rgba(0, 0, 0, 0.1),
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* Refined transitions */
        .transition-luxury {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* Button hover effects */
        .btn-case-study {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-case-study:hover {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          transform: translateY(-2px);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .group:hover {
            transform: translateY(-6px) scale(1.02);
          }
        }

        @media (max-width: 768px) {
          .group:hover {
            transform: translateY(-4px) scale(1.01);
          }
        }

        /* Disable hover effects on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .group:hover {
            transform: none;
          }
          
          .group:hover .gradient-bg {
            animation: none;
          }
        }

        /* Custom scrollbar for better UX */
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

        /* Primary color theme */
        .bg-primary {
          background-color: var(--primary, #7f20c4);
        }

        .text-primary {
          color: var(--primary, #7f20c4);
        }

        .border-primary {
          border-color: var(--primary, #7f20c4);
        }

        .hover\\:bg-primary-hover:hover {
          background-color: var(--primary-hover, #6a1b9a);
        }

        /* Enhanced focus states for accessibility */
        .focus-luxury:focus {
          outline: none;
          box-shadow: 
            0 0 0 3px rgba(127, 32, 196, 0.1),
            0 0 0 6px rgba(127, 32, 196, 0.05);
        }

        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .gpu-acceleration {
          transform: translateZ(0);
          will-change: transform, opacity;
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;