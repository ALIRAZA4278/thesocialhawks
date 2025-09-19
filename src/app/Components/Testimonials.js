'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      rating: 3,
      title: "Results, Right Away",
      quote: "I didn't talk in circles. They listened our problems, cleaned up our account, and got us conversions within a week one.",
      name: "Said",
      position: "Health Supplement Owner",
      image: "/images/testimonial-1.jpg",
      fallback: "#FF6B6B"
    },
    {
      id: 2,
      rating: 5,
      title: "It Was Strategy All Along",
      quote: "We thought we had a content issue. Turned out we had a strategy issue. Devnest fixed both.",
      name: "Yasir",
      position: "Haircare Brand Owner",
      image: "/images/testimonial-2.jpg",
      fallback: "#4ECDC4"
    },
    {
      id: 3,
      rating: 5,
      title: "Too Many Orders to Keep Up",
      quote: "Honestly, we're getting so many orders that we can't handle the inventory. We had to ask them to reduce the campaign budget.",
      name: "Rana Muddasir",
      position: "Owner, Furniture Brand",
      image: "/images/testimonial-3.jpg",
      fallback: "#45B7D1"
    },
    {
      id: 4,
      rating: 5,
      title: "Beyond ROAS: Real Clarity",
      quote: "We were stuck on 2 ROAS for months. Devnest didn't just fix it, they explained what was broken and why. Finally feels like we have direction.",
      name: "Naseem",
      position: "Owner of Fragrance Brand",
      image: "/images/testimonial-4.jpg",
      fallback: "#96CEB4"
    },
    {
      id: 5,
      rating: 5,
      title: "Exceeded Expectations",
      quote: "They understood our problems better than we did. The way they set up our campaigns made people actually buy.",
      name: "Khawar",
      position: "Founder of a Weight loss drink",
      image: "/images/testimonial-5.jpg",
      fallback: "#FFEAA7"
    }
  ];

  // Client avatars for bottom banner
  const clientAvatars = [
    { id: 1, name: 'John', image: '/images/client-1.jpg', fallback: '#FF6B6B' },
    { id: 2, name: 'Sarah', image: '/images/client-2.jpg', fallback: '#4ECDC4' },
    { id: 3, name: 'Mike', image: '/images/client-3.jpg', fallback: '#45B7D1' },
    { id: 4, name: 'Lisa', image: '/images/client-4.jpg', fallback: '#96CEB4' },
    { id: 5, name: 'David', image: '/images/client-5.jpg', fallback: '#FFEAA7' }
  ];

  const [imageErrors, setImageErrors] = useState({});
  const containerRef = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const testimonialsY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bannerY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  // Render star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-primary' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Double the testimonials array for seamless infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials];

  // Animation variants
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

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.03,
      rotateY: 3,
      rotateX: 3,
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className=" mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-left mb-8 sm:mb-12"
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
              <span className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">Customer Stories</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-3xl"
              variants={sectionVariants}
            >
              We Have More Success Stories{' '}
              <br className="hidden sm:block" />
              Than Other Agencies Have Clients
            </motion.h2>
          </motion.div>

          {/* Infinite Scrolling Testimonials */}
          <motion.div 
            className="relative mb-12 sm:mb-16 overflow-hidden"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ y: testimonialsY }}
          >
            <div className="flex animate-scroll-right space-x-4 sm:space-x-6">
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 testimonial-card"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ perspective: '1000px' }}
                >
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {testimonial.title}
                  </h3>

                  {/* Quote */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                      {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(`testimonial-${testimonial.id}-${index}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: testimonial.fallback }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Green Banner */}
          <motion.div 
            className="banner-hover bg-primary rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-0 cursor-pointer transition-all duration-300 group"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ y: bannerY }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Client Avatars */}
              <div className="avatar-container flex -space-x-2 sm:-space-x-3 transition-all duration-300 overflow-x-auto py-1 no-scrollbar">
                {clientAvatars.map((client, index) => (
                  <div
                    key={client.id}
                    className="avatar-hover flex-shrink-0 relative w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden shadow-lg transition-all duration-300"
                    style={{ zIndex: clientAvatars.length - index }}
                  >
                    {!imageErrors[`client-${client.id}`] ? (
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(`client-${client.id}`)}
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: client.fallback }}
                      >
                        {client.name.charAt(0)}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Text */}
              <p className="text-white font-semibold text-sm sm:text-base text-center sm:text-left ml-3 sm:ml-0">
                300+ happy clients shared stories
              </p>
            </div>

            {/* Arrow Button */}
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <svg 
                className="w-6 h-6 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 6s linear infinite;
        }

        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        /* Enhanced hover effects for testimonial cards */
        .testimonial-card {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        /* Subtle glow effect on scroll */
        @keyframes subtle-glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.03); }
        }

        .animate-scroll-right {
          animation: scroll-right 6s linear infinite, subtle-glow 8s ease-in-out infinite;
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
            animation-duration: 20s;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Testimonials;
