'use client';

import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  
  // Intersection observers
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-50px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });
  
  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const [imageError, setImageError] = useState(false);

  const stats = [
    { number: "1000+", label: "Ads Created", icon: "📊" },
    { number: "5+", label: "Years of Expertise", icon: "🏆" },
    { number: "80+", label: "Brands", icon: "🎯" },
    { number: "700M+", label: "Revenue Generated", icon: "💰" }
  ];

  const values = [
    {
      title: "Data-Driven Approach",
      description: "We eliminate guesswork from your marketing, replacing it with strategies backed by data and refined through continuous testing.",
      icon: "📈"
    },
    {
      title: "Performance Focus",
      description: "Our campaigns don't just look good, but perform exceptionally well with measurable results and ROI.",
      icon: "🎯"
    },
    {
      title: "Creative Excellence",
      description: "We combine creative thinking with analytical precision to deliver campaigns that capture attention and drive action.",
      icon: "💡"
    },
    {
      title: "Continuous Optimization",
      description: "Through constant testing and refinement, we ensure your marketing strategies evolve and improve over time.",
      icon: "🔄"
    }
  ];

  return (
     <motion.section 
       id="about"
       className="py-12 sm:py-16 bg-white"
       data-scroll
       data-scroll-section
       data-scroll-speed="0"
       ref={sectionRef}
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1 }}
     >
      <div className=" mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
          <motion.div 
            ref={headerRef}
            className="text-left mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="w-2 h-2 bg-primary rounded-full"
                initial={{ scale: 0 }}
                animate={isHeaderInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              ></motion.div>
              <span className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">About us</span>
              <motion.div 
                className="w-2 h-2 bg-primary rounded-full"
                initial={{ scale: 0 }}
                animate={isHeaderInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              ></motion.div>
            </motion.div>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Performance-Driven Marketing
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {" "}For Growing Businesses
              </motion.span>
            </motion.h2>
        
            </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center mb-20 lg:mb-24 xl:mb-28">
          
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            className="relative"
            style={{ y: yParallax, rotateY: rotateParallax }}
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={isImageInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -80, rotateY: -15 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
            >
              {!imageError ? (
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={isImageInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  <Image
                    src="/images/about-team.jpg"
                    alt="Performance-Driven Marketing Team"
                    width={600}
                    height={600}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
                    onError={() => setImageError(true)}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] bg-gradient-to-br from-primary/20 to-purple-600/30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={isImageInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div 
                    className="text-center text-gray-600"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isImageInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.div 
                      className="text-6xl mb-4"
                      initial={{ scale: 0 }}
                      animate={isImageInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                    >
                      👥
                    </motion.div>
                    <p className="text-lg font-medium">Our Marketing Team</p>
                    <p className="text-sm">Data-obsessed marketers delivering results</p>
                  </motion.div>
                </motion.div>
              )}
              
              
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            ref={contentRef}
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 80 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-primary font-semibold">socialhawks</span> was founded with a simple belief: marketing should 
                generate real, measurable returns, not just impressions.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We&apos;re a team of data-obsessed marketers who combine creative 
                thinking with analytical precision to deliver campaigns that don&apos;t just 
                look good, but perform exceptionally well.
              </motion.p>

              <motion.p 
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Our approach eliminates guesswork from your marketing, replacing 
                it with strategies backed by data and refined through continuous 
                testing.
              </motion.p>
            </motion.div>

 

            {/* Key Highlights (grid, 2 columns at >=1000px) */}
            <motion.div 
              className="grid grid-cols-1 min-[1000px]:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="px-1"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={isContentInView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0 
                  } : { 
                    opacity: 0, 
                    scale: 0.8, 
                    rotateY: -15 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.0 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3 w-full">
                    <motion.span 
                      className="text-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.icon}
                    </motion.span>
                    <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
              </div>
    </motion.section>
  );
};

export default About;