'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  // Testimonials data
  const testimonials = useMemo(() => [
    {
      id: 1,
      image: "/images/logo/1.png",
    },
    {
      id: 2,
      image: "/images/logo/2.png",
    },
    {
      id: 3,
      image: "/images/logo/3.jpg",
    },
    {
      id: 4,
      image: "/images/logo/4.png",
    },
    {
      id: 5,
      image: "/images/logo/5.png",
    },
    {
      id: 6,
      image: "/images/logo/6.png",
    },
    {
      id: 7,
      image: "/images/logo/7.png",
    },
    {
      id: 8,
      image: "/images/logo/8.png",
    },
    {
      id: 9,
      image: "/images/logo/9.png",
    },
    {
      id: 10,
      image: "/images/logo/10.png",
    },
    {
      id: 11,
      image: "/images/logo/11.png",
    },
    {
      id: 12,
      image: "/images/logo/12.png",
    },
    {
      id: 13,
      image: "/images/logo/13.png",
    },
    {
      id: 14,
      image: "/images/logo/14.png",
    },
    {
      id: 15,
      image: "/images/logo/15.png",
    },
    {
      id: 16,
      image: "/images/logo/16.png",
    },
    {
      id: 17,
      image: "/images/logo/17.png",
    },
    {
      id: 18,
      image: "/images/logo/18.png",
    },
    {
      id: 19,
      image: "/images/logo/19.png",
    },
    {
      id: 20,
      image: "/images/logo/20.png",
    },
    {
      id: 21,
      image: "/images/logo/21.png",
    },
    {
      id: 22,
      image: "/images/logo/22.png",
    },
    {
      id: 23,
      image: "/images/logo/23.png",
    },
    {
      id: 24,
      image: "/images/logo/24.png",
    },
    {
      id: 25,
      image: "/images/logo/25.png",
    },
    {
      id: 26,
      image: "/images/logo/26.png",
    },
    {
      id: 27,
      image: "/images/logo/27.png",
    },
    {
      id: 28,
      image: "/images/logo/28.png",
    },
    {
      id: 29,
      image: "/images/logo/29.png",
    },
    {
      id: 30,
      image: "/images/logo/30.png",
    },
    {
      id: 31,
      image: "/images/logo/31.png",
    },
    {
      id: 32,
      image: "/images/logo/32.png",
    }
  ], []);

  const [imageErrors, setImageErrors] = useState({});
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  // Handle mounting for client-side only features
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = testimonials.map((testimonial) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Still resolve even if image fails to load
          img.src = testimonial.image;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    if (isMounted) {
      preloadImages();
    }
  }, [testimonials, isMounted]);

  // Parallax scroll effects - only initialize when mounted
  const scrollConfig = isMounted && containerRef.current ? {
    target: containerRef,
    offset: ["start end", "end start"]
  } : undefined;

  const { scrollYProgress } = useScroll(scrollConfig || {});

  const firstRowY = useTransform(scrollYProgress || 0, [0, 1], [0, -50]);
  const secondRowY = useTransform(scrollYProgress || 0, [0, 1], [0, -30]);

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

  // Show loading state until images are preloaded and component is mounted
  if (!imagesLoaded || !isMounted) {
    return (
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-center items-center min-h-[120px]">
            <div className="flex space-x-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 sm:w-24 h-20 sm:h-24 bg-gray-200 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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
              style={{ y: isMounted ? firstRowY : 0 }}
            >
            <div className="flex animate-scroll-right space-x-3 sm:space-x-4" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="mb-b flex-shrink-0 w-20 sm:w-24 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl hover:shadow-3xl transition-all duration-500 logo-card border-2 border-gray-200 hover:border-blue-300"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ perspective: '1000px' }}
                > 

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 logo-container">
                      {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name || `Client logo ${testimonial.id}`}
                          fill
                          className="object-contain p-1"
                          priority={index < 10}
                          sizes="(max-width: 640px) 64px, 80px"
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
            style={{ y: isMounted ? secondRowY : 0 }}
          >
            <div className="flex animate-scroll-right-slow space-x-3 sm:space-x-4" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-20 sm:w-24 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl hover:shadow-3xl transition-all duration-500 logo-card border-2 border-gray-200 hover:border-blue-300"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ perspective: '1000px' }}
                > 

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 logo-container">
                      {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name || `Client logo ${testimonial.id}`}
                          fill
                          className="object-contain p-1"
                          priority={index < 10}
                          sizes="(max-width: 640px) 64px, 80px"
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
          animation: scroll-right 120s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right 150s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-right-slow:hover {
          animation-play-state: paused;
        }

        /* Enhanced hover effects for smooth transitions */
        .logo-card {
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          overflow: hidden;
        }

        .logo-card:hover {
          transform: translateY(-6px) scale(1.05) rotateY(2deg) rotateX(2deg);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15), 
            0 15px 35px rgba(59, 130, 246, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.08);
          border: 2px solid rgba(59, 130, 246, 0.4);
          background: linear-gradient(145deg, #ffffff, #f0f9ff);
        }

        /* Logo container with better visibility for white logos */
        .logo-container {
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #e2e8f0 100%);
          border: 1px solid rgba(100, 116, 139, 0.3);
          transition: all 0.4s ease;
          position: relative;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(59, 130, 246, 0.03) 0%, 
            rgba(147, 197, 253, 0.05) 50%, 
            rgba(59, 130, 246, 0.03) 100%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-card:hover .logo-container {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #dbeafe 100%);
          border-color: rgba(59, 130, 246, 0.5);
          transform: scale(1.02);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
        }

        .logo-card:hover .logo-container::before {
          opacity: 1;
        }

        .logo-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, 
            rgba(59, 130, 246, 0.1), 
            rgba(147, 197, 253, 0.2), 
            rgba(16, 185, 129, 0.1),
            rgba(59, 130, 246, 0.1));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .logo-card:hover::before {
          opacity: 1;
        }

        /* Additional shimmer effect */
        .logo-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, 
            transparent 30%, 
            rgba(255, 255, 255, 0.5) 50%, 
            transparent 70%);
          transform: rotate(45deg) translate(-100%, -100%);
          opacity: 0;
          transition: all 0.6s ease;
          pointer-events: none;
        }

        .logo-card:hover::after {
          transform: rotate(45deg) translate(100%, 100%);
          opacity: 1;
        }

        /* Improved subtle glow with more colors */
        @keyframes subtle-glow {
          0%, 100% { 
            filter: brightness(1) contrast(1); 
          }
          25% { 
            filter: brightness(1.02) contrast(1.05); 
          }
          50% { 
            filter: brightness(1.05) contrast(1.1); 
          }
          75% { 
            filter: brightness(1.02) contrast(1.05); 
          }
        }

        /* Floating animation for cards */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-2px); 
          }
        }

        .logo-card {
          animation: float 6s ease-in-out infinite;
        }

        .logo-card:nth-child(even) {
          animation-delay: -3s;
        }

        /* Apply subtle glow to the scroll animations */
        .animate-scroll-right {
          animation: scroll-right 120s linear infinite, subtle-glow 8s ease-in-out infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right 150s linear infinite, subtle-glow 10s ease-in-out infinite;
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
            animation-duration: 70s;
          }
          .animate-scroll-right-slow {
            animation-duration: 90s;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Testimonials;
