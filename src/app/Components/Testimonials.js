'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "Transformed Our Social Media Presence",
      quote: "SocialHawks transformed our social media presence and gave our brand a fresh, engaging look. From mouth-watering food photography to consistent online campaigns, they made sure our pizza shop stood out in a crowded market. Their production quality and management have been exceptional.",
      name: "BrickLane Pizza",
      position: "Owner of Pizza Shop",
      image: "/images/testimonial-1.jpg",
      fallback: "#FF6B6B",
      projectSlug: "bricklane-pizza-social-media-branding"
    },
    {
      id: 2,
      rating: 5,
      title: "Seamless E-commerce Marketing",
      quote: "Working with SocialHawks has been seamless. They understood our niche market and helped us connect with our target audience. Their campaigns and visuals have directly boosted our sales. Truly a team that knows how to market for e-commerce.",
      name: "Flex Vape",
      position: "Owner of Ecommerce Store",
      image: "/images/testimonial-2.jpg",
      fallback: "#4ECDC4",
      projectSlug: null
    },
    {
      id: 3,
      rating: 5,
      title: "Perfect Blend of Style & Creativity",
      quote: "SocialHawks helped us showcase our apparel brand with the right blend of style and creativity. Their photography and social media management gave our collections the exposure they deserved, helping us grow a loyal audience.",
      name: "The Knotty Needles",
      position: "Owner of Clothing Brand",
      image: "/images/testimonial-3.jpg",
      fallback: "#45B7D1",
      projectSlug: null
    },
    {
      id: 4,
      rating: 5,
      title: "Luxurious Brand Presence",
      quote: "SocialHawks crafted a luxurious brand presence for us. Their creative production, photography, and digital campaigns elevated Zaafar Fragrance into a premium name in the market. We couldn't have asked for a better creative partner.",
      name: "Zaafar Fragrance",
      position: "Owner of Perfume Brand",
      image: "/images/testimonial-4.jpg",
      fallback: "#96CEB4",
      projectSlug: "zaafar-fragrance-brand-digital-growth"
    },
    {
      id: 5,
      rating: 5,
      title: "Positioned as Reliable Provider",
      quote: "Our business relies on digital distribution, and SocialHawks played a major role in positioning us as a reliable online service provider. Their marketing campaigns created awareness and credibility that directly impacted our growth.",
      name: "ACE",
      position: "Owner of Digital Products Store",
      image: "/images/testimonial-5.jpg",
      fallback: "#FFEAA7",
      projectSlug: null
    },
    {
      id: 6,
      rating: 5,
      title: "High-Quality Gym Marketing",
      quote: "The SocialHawks team delivered high-quality production and social media strategies that made our gym stand out. Their work helped us attract and retain clients with a stronger online presence.",
      name: "Emergym",
      position: "Gym Owner",
      image: "/images/testimonial-6.jpg",
      fallback: "#FF8C94",
      projectSlug: null
    },
    {
      id: 7,
      rating: 5,
      title: "Dependable Lead Generation",
      quote: "SocialHawks handled everything from production to lead generation. Their targeted campaigns made sure we were constantly reaching the right prospects. They are a dependable agency that delivers results.",
      name: "Cactus",
      position: "Call Center Owner",
      image: "/images/testimonial-7.jpg",
      fallback: "#A8E6CF",
      projectSlug: null
    },
    {
      id: 8,
      rating: 5,
      title: "Excellent Online Grocery Growth",
      quote: "SocialHawks understood our online grocery service needs and created campaigns that resonated with our customers. Their strategic approach helped us expand our reach and build customer trust.",
      name: "Ucaaz",
      position: "Online Grocery Service",
      image: "/images/testimonial-8.jpg",
      fallback: "#FFD3B6",
      projectSlug: null
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

  // Quadruple the testimonials array for seamless infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

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
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
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
            <div className="flex animate-scroll-right space-x-4 sm:space-x-6" style={{ width: 'max-content' }}>
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 testimonial-card flex flex-col border border-gray-100"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ perspective: '1000px', minHeight: '280px' }}
                >
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {testimonial.title}
                  </h3>

                  {/* Quote */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-auto flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
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
                          className="w-full h-full flex items-center justify-center text-white font-bold text-base"
                          style={{ backgroundColor: testimonial.fallback }}
                        >
                          {testimonial.name ? testimonial.name.charAt(0) : ''}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs truncate">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Green Banner */}
          <motion.div 
            className="banner-hover bg-primary rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-0 cursor-pointer transition-all duration-200 group"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ y: bannerY }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Client Avatars */}
              <div className="avatar-container flex -space-x-2 sm:-space-x-3 transition-all duration-200 overflow-x-auto py-1 no-scrollbar">
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
            transform: translateX(-25%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
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
          animation: scroll-right 50s linear infinite, subtle-glow 8s ease-in-out infinite;
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

      `}</style>
    </motion.section>
  );
};

export default Testimonials;
