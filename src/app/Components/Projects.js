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
  
  // Use specific projects
  const selectedSlugs = [
    'dr-herbs-ecommerce-digital-marketing',
    'hirm-social-media-seo-campaign',
    'bricklane-pizza-social-media-branding',
    'the-cactus-bpo-digital-marketing'
  ];
  
  const cards = projectsData
    .filter(p => selectedSlugs.includes(p.slug))
    .map(p => ({
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

          <div className={`grid gap-6 lg:gap-8 ${cards.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
        {cards.map((card, index) => (
          <div key={card.slug || card.id} className="block">
            {/* Desktop/Tablet Card - Matching Image Design */}
            <motion.div
              className={`hidden sm:block group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white ${hoveredCard === card.id ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]' : 'shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]'}`}
              style={{
                border: '1px solid #e5e7eb'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isCardsInView ? {
                opacity: 1,
                y: 0,
              } : {
                opacity: 0,
                y: 40,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
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
                {/* Card Content Container - Clean Design */}
                <div className="relative p-8 sm:p-10 flex flex-col h-full min-h-[400px] sm:min-h-[450px]">
                  
                  {/* Top Section: Category & Arrow */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Category Badge - Purple dot with text */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                        {card.category}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      className="w-9 h-9 flex items-center justify-center transition-transform duration-300"
                      animate={{
                        x: hoveredCard === card.id ? 4 : 0,
                        y: hoveredCard === card.id ? -4 : 0,
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-4 leading-snug line-clamp-2 min-h-[64px] sm:min-h-[72px]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-auto line-clamp-3 min-h-[72px]">
                    {card.description}
                  </p>

                  {/* Bottom Section: Duration/Stats & Thumbnail */}
                  <div className="flex items-end justify-between mt-8 pt-6 border-t border-gray-100">
                    {/* Stats/Duration */}
                    <div className="flex gap-8">
                      <div>
                        <div className="text-lg sm:text-xl font-medium text-gray-900">
                          {card.stats.revenue || '2 Months'}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                          {card.stats.revenue ? 'Revenue Growth' : 'Duration'}
                        </div>
                      </div>
                    </div>

                    {/* Thumbnail Image */}
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = card.fallback;
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay - Dark background with centered content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === card.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    pointerEvents: hoveredCard === card.id ? 'auto' : 'none',
                    backgroundColor: 'rgba(31, 34, 53, 0.92)'
                  }}
                >
                  {/* Decorative blur circles - visible and glowing */}
                  <div 
                    className="absolute -top-8 -left-8 w-64 h-64 rounded-full"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(139, 146, 195, 0.5) 0%, rgba(139, 146, 195, 0.2) 40%, transparent 70%)',
                      filter: 'blur(50px)'
                    }}
                  ></div>
                  <div 
                    className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(100, 110, 160, 0.45) 0%, rgba(100, 110, 160, 0.15) 40%, transparent 70%)',
                      filter: 'blur(45px)'
                    }}
                  ></div>
                  <div 
                    className="absolute top-1/4 -right-16 w-72 h-72 rounded-full"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(120, 130, 180, 0.4) 0%, rgba(120, 130, 180, 0.15) 40%, transparent 70%)',
                      filter: 'blur(55px)'
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 text-center max-w-md">
                    {/* Category with decorative circles */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                        {card.category}
                      </span>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>

                    {/* Title */}
                    <motion.h3 
                      className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight px-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredCard === card.id ? 0 : 20,
                        opacity: hoveredCard === card.id ? 1 : 0 
                      }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {card.title}
                    </motion.h3>

                    {/* View Project Button */}
                    <motion.button
                      className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredCard === card.id ? 0 : 20,
                        opacity: hoveredCard === card.id ? 1 : 0 
                      }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>

            {/* Mobile Card - Clean Design */}
            <motion.div
              className="sm:hidden block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 min-h-[380px]"
              initial={{ opacity: 0, y: 40 }}
              animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <Link href={`/projects/${card.slug}`} className="flex flex-col h-full p-6">
                {/* Category & Arrow */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {card.category}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl font-normal text-gray-900 leading-snug mb-3 line-clamp-2 min-h-[56px]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3 min-h-[63px] flex-grow">
                  {card.description}
                </p>

                {/* Bottom: Stats & Thumbnail */}
                <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {card.stats.revenue || '2 Months'}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                      {card.stats.revenue ? 'Revenue Growth' : 'Duration'}
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = card.fallback;
                      }}
                    />
                  </div>
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