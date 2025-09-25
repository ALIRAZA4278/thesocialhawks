'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Custom hook for animated counting
const useAnimatedCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOutCubic);
      
      setCount(current);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration, start]);

  return [count, ref];
};

const Hero = () => {
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY = useSpring(yRange, { stiffness: 400, damping: 40 });

  // Words that will rotate in the heading
  const changingWords = ['Creativity', 'Innovation', 'Results', 'Growth', 'Success'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Animated counters for stats
  const [revenueCount, revenueRef] = useAnimatedCounter(564, 2500);
  const [adsCount, adsRef] = useAnimatedCounter(806, 2000);
  const [brandsCount, brandsRef] = useAnimatedCounter(64, 1500);
  
  // Background images that will rotate
  const backgroundImages = [
    {
      src: '/images/hero-bg-1.jpg',
      fallback: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      src: '/images/hero-bg-2.jpg', 
      fallback: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      src: '/images/hero-bg-3.jpg',
      fallback: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      src: '/images/hero-bg-4.jpg',
      fallback: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  // Team member avatars with fallback colors
  const teamMembers = [
    { id: 1, name: 'John', image: '/images/team-1.jpg', fallback: '#FF6B6B' },
    { id: 2, name: 'Sarah', image: '/images/team-2.jpg', fallback: '#4ECDC4' },
    { id: 3, name: 'Mike', image: '/images/team-3.jpg', fallback: '#45B7D1' },
    { id: 4, name: 'Lisa', image: '/images/team-4.jpg', fallback: '#96CEB4' },
    { id: 5, name: 'David', image: '/images/team-5.jpg', fallback: '#FFEAA7' }
  ];

  // Auto-change words every 2 seconds
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, [changingWords.length]);

  // Auto-change background images every 2 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <motion.section 
      className="relative bg-white"
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Content */}
      <div className=" mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center py-6 sm:py-8 lg:py-10">
            {/* Left Content */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             

              {/* Main Heading */}
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-6 sm:mb-8 lg:mb-15 font-extralight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Digital Marketing Agency{' '}
                <br />
                Obsessed With{' '}
                <span className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={currentWordIndex}
                      className="text-gray-900"
                      initial={{ opacity: 0, y: 20, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -20, rotateX: 90 }}
                      transition={{ duration: 0.5 }}
                    >
                      {changingWords[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-primary">.</span>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-15 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We turn marketing budgets into predictable revenue streams 
                for businesses tired of guesswork and empty promises.
              </motion.p>

              {/* Team Avatars and Contact Button */}
              <motion.div 
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* Circular Team Images */}
                <div className="flex -space-x-3">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
                      style={{ zIndex: teamMembers.length - index }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + (index * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {!imageErrors[`team-${member.id}`] ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(`team-${member.id}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: member.fallback }}
                        >
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                  <Link href="/#contact" >
                {/* Contact Button */}
                <motion.button 
                  className="flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-10 py-2 sm:py-3 border border-gray-300 rounded-full text-sm sm:text-base font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300 group bg-white shadow-md w-full sm:w-auto"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                  Contact us
                </motion.button>
                  </Link>
              </motion.div>

              {/* Trust Text */}
              <motion.p 
                className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 lg:mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Trusted by 80+ Brands Globally
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="flex flex-row sm:flex-row justify-around gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 bg-[rgb(245_245_245)] p-4 sm:p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  ref={revenueRef} 
                  className="text-center sm:text-left"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {revenueCount.toLocaleString()}M+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">Rev Generated</p>
                </motion.div>
                <motion.div 
                  ref={adsRef} 
                  className="text-center sm:text-left"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {adsCount.toLocaleString()}+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">Ads Created</p>
                </motion.div>
                <motion.div 
                  ref={brandsRef} 
                  className="text-center sm:text-left"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {brandsCount}+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">Brands</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div 
              className="relative order-first lg:order-last"
              style={{ y: parallaxY }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Background Images with Animation */}
                <div className="absolute inset-0 z-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 1 }}
                    >
                      {!imageErrors[`bg-${currentImageIndex}`] ? (
                        <Image
                          src={backgroundImages[currentImageIndex].src}
                          alt={`Background ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                          priority={currentImageIndex === 0}
                          onError={() => handleImageError(`bg-${currentImageIndex}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full"
                          style={{ background: backgroundImages[currentImageIndex].fallback }}
                        ></div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Phone mockup overlay */}
                <motion.div 
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {!imageErrors['hero-phone'] ? (
                    <Image
                      src="/images/hero-phone.jpg"
                      alt="Mobile App Design"
                      fill
                      className="object-cover"
                      onError={() => handleImageError('hero-phone')}
                    />
                  ) : (
                    <motion.div 
                      className="text-white text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <motion.div 
                        className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <p className="text-lg font-semibold">Mobile App Design</p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;