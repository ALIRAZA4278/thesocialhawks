'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

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
  
  // Cards data - matching the Experience Matters design
  const cards = [
    {
      id: 1,
      category: "Marketing",
      title: "Men's Health Supplement Brand",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #2d4a3e 0%, #1a2f24 100%)",
      backgroundColor: "#f3f4f6"
    },
    {
      id: 2,
      category: "Branding", 
      title: "Healthcare Supplements Brand",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      backgroundColor: "#f3f4f6"
    },
    {
      id: 3,
      category: "Marketing",
      title: "Skincare Brand",
      image: "/images/EXAMPLE.jpg", 
      fallback: "linear-gradient(135deg, #fda4af 0%, #fb7185 100%)",
      backgroundColor: "#f3f4f6"
    },
    {
      id: 4,
      category: "Photography",
      title: "Fragrance Brand", 
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      backgroundColor: "#f3f4f6"
    }
  ];

  const [imageErrors, setImageErrors] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <motion.div 
      id="projects"
      className="bg-white" 
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
            className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-black hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a free consultation
          </motion.button>
        </motion.div>

        {/* Cards Grid - 2 cards per row on lg+, 1 card on smaller screens */}
        <motion.div 
          ref={cardsRef}
          initial={{ opacity: 0 }}
          animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={card.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transform-gpu bg-[color:var(--card-bg,#f3f4f6)]"
                initial={{ opacity: 0, y: 60, backgroundColor: card.backgroundColor }}
                animate={isCardsInView ? { 
                  opacity: 1, 
                  y: 0,
                  backgroundColor: hoveredCard === card.id ? '#000000' : card.backgroundColor
                } : { 
                  opacity: 0, 
                  y: 60,
                  backgroundColor: card.backgroundColor
                }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { 
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Card Content */}
                <div className="relative h-80 sm:h-96 p-6 sm:p-8 flex flex-col transition-all duration-500 z-20">
                  {/* Category Badge */}
                  <motion.div 
                    className="mb-4"
                    animate={{
                      y: hoveredCard === card.id ? -2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block text-xs sm:text-sm text-gray-600 font-medium group-hover:text-white transition-colors duration-300">
                      {card.category}
                    </span>
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-white transition-colors duration-300"
                    animate={{
                      y: hoveredCard === card.id ? -4 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {card.title}
                  </motion.h3>
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 z-50">
                    <motion.div 
                      className="w-10 h-10 bg-white bg-opacity-30 group-hover:bg-primary group-hover:bg-opacity-100 text-gray-700 group-hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                      whileHover={{ 
                        scale: 1.12, 
                        rotate: 45,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                      }}
                      animate={{
                        rotate: hoveredCard === card.id ? 45 : 0,
                        scale: hoveredCard === card.id ? 1.06 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <svg 
                        className="w-5 h-5 transition-colors duration-200 text-current opacity-70 group-hover:opacity-100" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Image Section */}
                  <div className="flex-1 relative mt-auto">
                    <motion.div 
                      className="relative h-full min-h-[120px] rounded-xl overflow-hidden shadow-lg"
                      animate={{
                        y: hoveredCard === card.id ? -6 : 0,
                        scale: hoveredCard === card.id ? 1.02 : 1,
                        opacity: hoveredCard === card.id ? 0.45 : 1
                      }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {!imageErrors[`card-${card.id}`] ? (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          onError={() => handleImageError(`card-${card.id}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                          style={{ background: card.fallback }}
                        />
                      )}

                      {/* Reduce image opacity on hover so black card background shows through */}
                      {/* image container opacity handled by parent motion.div's animate */}

                      {/* View button removed from image container so it won't be dimmed by image opacity */}
                    </motion.div>
                  </div>

                {/* View Button - positioned above image so it stays fully opaque on hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{
                    opacity: hoveredCard === card.id ? 1 : 0,
                    scale: hoveredCard === card.id ? 1 : 0.92,
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <motion.button
                    className=" bg-primary text-white px-6 py-3 rounded-full font-medium shadow-lg transform transition-all duration-200 pointer-events-auto"
                    whileHover={{ scale: 1.06, boxShadow: '0 10px 25px rgba(127,32,196,0.25)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); console.log(`View ${card.title}`); }}
                  >
                    <span className="flex items-center gap-2">
                      View
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 z-10"
                  animate={{
                    borderColor: hoveredCard === card.id ? "rgba(255,255,255,0.3)" : "transparent",
                  }}
                />

                {/* Hover Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-20"></div>
                
                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl z-40"
                  animate={{
                    x: hoveredCard === card.id ? ["0%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />

                  {/* Shadow Enhancement */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                    animate={{
                      boxShadow: hoveredCard === card.id 
                        ? "0 25px 50px rgba(0,0,0,0.15)" 
                        : "0 4px 6px rgba(0,0,0,0.05)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for enhanced hover effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .group:hover .shimmer-effect {
          animation: shimmer 1.5s ease-in-out;
        }

        /* Enhanced card hover states */
        .group:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        /* Smooth transitions for all elements */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hardware acceleration for smooth animations */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Responsive hover effects - disable on touch devices */
        @media (hover: none) {
          .group:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* Primary color variables for consistency */
        .bg-primary {
          background-color: var(--primary, #7f20c4);
        }

        .hover\\:bg-primary-hover:hover {
          background-color: var(--primary-hover, #5a2a7c);
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;