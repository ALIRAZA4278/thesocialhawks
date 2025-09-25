'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 2,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 3,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 4,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 5,
      image: "/images/EXAMPLE.jpg",
    }
  ];

  const [imageErrors, setImageErrors] = useState({});
  const containerRef = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const firstRowY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const secondRowY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

   

  // Multiple the testimonials array for seamless infinite scroll that extends beyond viewport
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  // Animation variants for staggered carousel rows
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const rowVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Card hover animations
  const cardVariants = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      className="py-12 sm:py-16 bg-white"
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
         

          {/* Infinite Scrolling Testimonials */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="relative mb-8 sm:mb-12 overflow-hidden -mx-4"
              variants={rowVariants}
              style={{ y: firstRowY }}
            >
            <div className="flex animate-scroll-right space-x-3 sm:space-x-4" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="mb-b flex-shrink-0 w-20 sm:w-24 bg-gray-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 logo-card"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ perspective: '1000px' }}
                > 

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                      {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name || `Client logo ${testimonial.id}`}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(`testimonial-${testimonial.id}-${index}`)}
                        />
                        ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: testimonial.fallback }}
                        >
                          {testimonial.name ? testimonial.name.charAt(0) : ''}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Second Carousel with gap */}
          <motion.div 
            className="relative overflow-hidden mt-8 sm:mt-12 -mx-4"
            variants={rowVariants}
            style={{ y: secondRowY }}
          >
            <div className="flex animate-scroll-right-slow space-x-3 sm:space-x-4" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-20 sm:w-24 bg-gray-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-500 logo-card"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ perspective: '1000px' }}
                > 

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                      {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name || `Client logo ${testimonial.id}`}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(`testimonial-${testimonial.id}-${index}`)}
                        />
                        ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: testimonial.fallback }}
                        >
                          {testimonial.name ? testimonial.name.charAt(0) : ''}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 6s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right 12s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-right-slow:hover {
          animation-play-state: paused;
        }

        /* Enhanced hover effects for smooth transitions */
        .logo-card {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .logo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        /* Subtle glow effect on scroll */
        @keyframes subtle-glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.05); }
        }

        .animate-scroll-right {
          animation: scroll-right 6s linear infinite, subtle-glow 4s ease-in-out infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right 12s linear infinite, subtle-glow 6s ease-in-out infinite;
        }

        .banner-hover:hover {
          background-color: #000000 !important;
        }



        .group:hover .avatar-container {
          gap: 0.105rem;
          margin-left: 0;
          margin-right: 0;
        }

        .group:hover .avatar-container > * {
          margin-left: 0;
          margin-right: 0;
        }

        /* hide horizontal scrollbar for avatar container */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        @media (max-width: 640px) {
          .banner-hover {
            padding: 0.75rem;
            align-items: center;
          }
          .banner-hover .avatar-container {
            justify-content: center;
            width: 100%;
          }
          .banner-hover p {
            text-align: center;
            margin-left: 0;
            margin-top: 0.25rem;
          }
        }

        @media (max-width: 640px) {
          .animate-scroll-right {
            animation-duration: 12s;
          }
          .animate-scroll-right-slow {
            animation-duration: 24s;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Testimonials;
