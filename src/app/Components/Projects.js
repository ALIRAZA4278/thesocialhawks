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
    stats: { revenue: p.results && p.results[0] ? p.results[0].value : '' },
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
              className={`hidden sm:block group relative rounded-3xl overflow-hidden cursor-pointer transform-gpu transition-all duration-500 bg-gradient-to-br from-white via-gray-50/30 to-white ${hoveredCard === card.id ? 'z-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]' : 'shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.16)]'}`}
              style={{
                border: '1px solid rgba(127,32,196,0.15)'
              }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isCardsInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
              } : {
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                scale: 1.03,
                y: -10,
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
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{
                      x: hoveredCard === card.id ? ['-100%', '200%'] : '-100%',
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: hoveredCard === card.id ? Infinity : 0,
                      repeatDelay: 0.5
                    }}
                    style={{ width: '50%' }}
                  />
                </div>

                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(127,32,196,0.3), rgba(127,32,196,0.1), rgba(127,32,196,0.3))',
                    backgroundSize: '200% 200%',
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                  animate={{
                    backgroundPosition: hoveredCard === card.id ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Animated Corner Accent with Particles */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(127,32,196,0.15), transparent 70%)'
                  }}
                  animate={{
                    scale: hoveredCard === card.id ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/40 rounded-full"
                      style={{
                        top: `${20 + i * 15}%`,
                        right: `${15 + i * 10}%`,
                      }}
                      animate={{
                        y: hoveredCard === card.id ? [-5, 5, -5] : 0,
                        opacity: hoveredCard === card.id ? [0.3, 0.8, 0.3] : 0,
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>

                {/* Card Content Container */}
                <div className="relative min-h-[280px] sm:h-[360px] lg:h-[420px] p-7 sm:p-9 flex flex-col transition-all duration-300 z-20 overflow-hidden">

                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-7">
                    {/* Category Badge */}
                    <motion.div
                      className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 rounded-full border border-primary/20 shadow-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {card.category}
                      </span>
                    </motion.div>

                    {/* Action Icon */}
                    <motion.div
                      className="w-11 h-11 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-primary group-hover:to-primary/90 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md border border-gray-200 group-hover:border-primary"
                      whileHover={{
                        scale: 1.15,
                        rotate: 45
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col relative">
                    {/* Title */}
                    <motion.h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300 relative"
                      whileHover={{ x: 2 }}
                    >
                      {card.title}
                      {/* Underline accent */}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: '60%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.h3>

                    {/* Description with fade-in effect */}
                    <motion.p
                      className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 clamp-desc relative"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient text overlay on hover */}
                      <span className="relative z-10">{card.description}</span>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredCard === card.id ? '100%' : 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </motion.p>

                    {/* Stats Section */}
                    {card.stats.revenue && (
                      <motion.div
                        className="flex items-center gap-3 mt-auto bg-gradient-to-r from-green-50 via-emerald-50/50 to-green-50 px-5 py-3.5 rounded-2xl border border-green-200 shadow-sm group-hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <motion.div
                          className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl"
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-lg font-bold text-green-700">
                            {card.stats.revenue}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                            Revenue Growth
                          </div>
                        </div>
                        <motion.div
                          className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ rotate: 90 }}
                        >
                          <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>

                  {/* Image Preview Section with Enhanced Effects */}
                  <motion.div
                    className="absolute bottom-6 right-6 rounded-xl overflow-hidden border-2 border-white shadow-lg"
                    initial={{ width: 80, height: 80 }}
                    animate={{
                      width: hoveredCard === card.id ? 96 : 80,
                      height: hoveredCard === card.id ? 96 : 80,
                      rotate: hoveredCard === card.id ? [0, -2, 2, 0] : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Decorative corner frame */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Image with zoom effect */}
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredCard === card.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = card.fallback;
                      }}
                    />

                    {/* Overlay gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === card.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>

            {/* Mobile Card (full details, stacked layout) */}
            <motion.div
              className="sm:hidden block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              <Link href={`/projects/${card.slug}`} className="block">
                {/* Image on top */}
                <div className="relative h-40 w-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = card.fallback;
                    }}
                  />
                </div>

                <div className="p-4">
                  {/* Category row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">{card.category}</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">{card.title}</h3>

                  {/* Description (no clamp on mobile to show full details) */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{card.description}</p>

                  {/* Stats */}
                  {card.stats.revenue && (
                    <div className="flex items-center gap-2 mb-3 bg-green-50 px-3 py-2 rounded-lg border border-green-100">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <div>
                        <div className="text-sm font-bold text-green-600">{card.stats.revenue}</div>
                        <div className="text-xs text-gray-600 font-medium">Revenue Growth</div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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