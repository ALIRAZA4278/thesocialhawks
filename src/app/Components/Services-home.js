'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Custom hook for animated counting (reusing from Hero component)
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

const ServicesHome = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const servicesRef = useRef(null);
  const bigTextRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const innerRef = useRef(null);
  const offsetRef = useRef(0);
  const frameRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const singleWidthRef = useRef(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [autoSpeed] = useState(40); // px per second
  
  // Navigation state
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Check if elements are in view
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  const isBigTextInView = useInView(bigTextRef, { once: true, margin: "-100px" });
  
  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Animated counter for projects
  const [projectsCount, projectsRef] = useAnimatedCounter(251, 2000);
  
  // Background color state
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef();

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: '-100px 0px' // Add some margin for better timing
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Services data - comprehensive 14 service categories from services page
  const services = useMemo(() => [
    {
      id: 1,
      title: "Brand Identity & Design",
      slug: "/brand-identity-design",
      description: "Craft distinctive brand identities with logo design, brand guidelines, animated logos, and presentation design that defines your unique market presence.",
      image: "/images/services/1.jpg",
      fallback: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Graphic Design",
      slug: "/graphic-design",
      description: "Create compelling visual content including social media posts, ad creatives, infographics, and UI/UX design that captivates your audience.",
      image: "/images/services/2.jpg",
      fallback: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Print & Stationery",
      slug: "/print-stationery",
      description: "Professional print solutions from business cards to brochures, ensuring your brand maintains consistency across all physical touchpoints.",
      image: "/images/services/3.jpg",
      fallback: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Merchandising",
      slug: "/merchandising",
      description: "Custom branded merchandise including apparel, corporate uniforms, and promotional items that extend your brand into the physical world.",
      image: "/images/services/4.jpg",
      fallback: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Web & Digital Development",
      slug: "/web-digital-development",
      description: "Full-stack web development from startup sites to e-commerce platforms, including hosting, domains, and technical infrastructure management.",
      image: "/images/services/5.jpg",
      fallback: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "Mobile App Development",
      slug: "/mobile-app-development",
      description: "Native and cross-platform mobile applications for iOS, Android, and Windows with modern UI/UX and robust functionality.",
      image: "/images/services/6.jpg",
      fallback: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      id: 7,
      title: "Content & Writing",
      slug: "/content-writing",
      description: "Strategic content creation including copywriting, blog writing, SEO content, eBooks, and technical writing that drives engagement and conversions.",
      image: "/images/services/7.jpg",
      fallback: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      id: 8,
      title: "Animation Services",
      slug: "/animation-services",
      description: "Bring your ideas to life with animated explainer videos, motion graphics, 3D visualization, and character animation with full production services.",
      image: "/images/services/8.jpg",
      fallback: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      id: 9,
      title: "Video & Photography",
      slug: "/video-photography",
      description: "Professional videography and photography services including commercial shoots, event coverage, product photography, and post-production excellence.",
      image: "/images/services/9.jpg",
      fallback: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      id: 10,
      title: "Digital Marketing & Growth",
      slug: "/digital-marketing-growth",
      description: "Comprehensive digital marketing including social media management, SEO, PPC, influencer partnerships, and performance analytics for measurable growth.",
      image: "/images/services/10.jpg",
      fallback: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)"
    },
    {
      id: 11,
      title: "Performance & Maintenance",
      slug: "/performance-maintenance",
      description: "Ongoing website maintenance, performance optimization, security updates, and proactive monitoring to keep your digital assets running smoothly.",
      image: "/images/services/11.jpg",
      fallback: "linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)"
    },
    {
      id: 12,
      title: "Cybersecurity & Protection",
      slug: "/cybersecurity-protection",
      description: "Comprehensive security solutions including WAF management, malware protection, vulnerability monitoring, and disaster recovery planning.",
      image: "/images/services/12.jpg",
      fallback: "linear-gradient(135deg, #ff8a80 0%, #ff5722 100%)"
    },
    {
      id: 13,
      title: "Strategy & Consulting",
      slug: "/strategy-consulting",
      description: "Strategic business consulting including market research, content strategy, digital transformation, and advisory services for sustainable growth.",
      image: "/images/services/13.jpg",
      fallback: "linear-gradient(135deg, #b39ddb 0%, #9c27b0 100%)"
    },
    {
      id: 14,
      title: "Platform Management",
      slug: "/platform-management",
      description: "Expert management of digital platforms including social media channels, advertising platforms, and multi-channel campaign optimization.",
      image: "/images/services/14.jpg",
      fallback: "linear-gradient(135deg, #81c784 0%, #4caf50 100%)"
    }
  ], []);
  
  const [imageErrors, setImageErrors] = useState({});
  // Track active (tapped) card on mobile to simulate hover
  const [activeCard, setActiveCard] = useState(null);
  
  // Check scroll position
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Navigation functions with responsive card width
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 280 : 320; // Smaller cards on mobile
    }
    return 320;
  };

  const scrollToNext = () => {
    // Move one card to the left (since auto is RTL)
    if (innerRef.current) {
      const cardWidth = getCardWidth();
      offsetRef.current -= cardWidth;
      if (singleWidthRef.current && Math.abs(offsetRef.current) >= singleWidthRef.current) {
        offsetRef.current += singleWidthRef.current;
      }
      innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      // Pause autoplay briefly
      setIsAutoPaused(true);
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(() => setIsAutoPaused(false), 1800);
    }
  };
  
  const scrollToPrev = () => {
    // Move one card to the right
    if (innerRef.current) {
      const cardWidth = getCardWidth();
      offsetRef.current += cardWidth;
      // wrap
      if (singleWidthRef.current && offsetRef.current > 0) {
        offsetRef.current -= singleWidthRef.current;
      }
      innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      setIsAutoPaused(true);
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(() => setIsAutoPaused(false), 1800);
    }
  };

  // Initialize scroll position check
  useEffect(() => {
    const handleScroll = () => updateScrollButtons();
    const scrollContainer = scrollContainerRef.current;
    
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial check
      updateScrollButtons();
      
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Compute width of single items group (one iteration)
  useEffect(() => {
    const computeSingleWidth = () => {
      const container = innerRef.current;
      if (!container) return;
      const children = Array.from(container.children).slice(0, services.length);
      if (!children.length) return;
      const firstLeft = children[0].offsetLeft;
      const last = children[children.length - 1];
      const width = last.offsetLeft + last.offsetWidth - firstLeft;
      singleWidthRef.current = width;
    };

    computeSingleWidth();
    window.addEventListener('resize', computeSingleWidth);
    return () => window.removeEventListener('resize', computeSingleWidth);
  }, [services]);

  // RAF loop for smooth RTL auto-scroll (manipulates transform directly for performance)
  useEffect(() => {
    let lastTime = performance.now();

    const step = (time) => {
      const dt = time - lastTime;
      lastTime = time;

      if (!isAutoPaused && innerRef.current && singleWidthRef.current) {
        offsetRef.current -= (autoSpeed * dt) / 1000;
        if (Math.abs(offsetRef.current) >= singleWidthRef.current) {
          offsetRef.current += singleWidthRef.current;
        }
        innerRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isAutoPaused, autoSpeed, services]);

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const handleCardToggle = (id) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  const handleCardKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardToggle(id);
    }
  };

  return (
    <motion.div 
      id="services"
      className="bg-white" 
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className={`mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16 transition-colors duration-500 rounded-xl sm:rounded-2xl ${isInView ? 'bg-[rgb(12,23,20)]' : 'bg-white'}`}
        ref={componentRef}
      >
        {/* Hero Section */}
        <motion.div 
          ref={headingRef}
          className="mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-8">
            {/* Left side - Main heading */}
            <div className="w-full lg:max-w-2xl">
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight transition-colors duration-500 ${
                isInView ? 'text-white' : 'text-gray-900'
              }`}>
                Services for Brands That Want{' '}
                <span className="lg:block">Results, Not Just Reports.</span>
              </h1>
            </div>
            
            {/* Right side - Description */}
            <div className="w-full lg:max-w-md lg:flex-shrink-0">
              <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-500 ${
                isInView ? 'text-gray-300' : 'text-gray-600'
              }`}>
                From high-converting ads to scroll-stopping content, we help you get 
                seen, remembered, and bought – without wasting time or budget.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid with Horizontal Scroll */}
        <motion.div 
          ref={servicesRef}
          className="mb-8 sm:mb-12 lg:mb-16 relative"
          initial={{ opacity: 0 }}
          animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Carousel Container (auto right-to-left infinite) */}
          <div
            ref={scrollContainerRef}
              className="w-full overflow-hidden relative z-0"
              onMouseEnter={() => setIsAutoPaused(true)}
              onMouseLeave={() => setIsAutoPaused(false)}
            >
              {/* We duplicate the services array to create a seamless loop */}
              <div ref={innerRef} className="flex gap-5 pb-4 px-2 will-change-transform">
                {[...services, ...services].map((service, idx) => (
                  <Link
                    key={`srv-${idx}-${service.id}`}
                    href={`/services/${service.slug}`}
                    className="block flex-shrink-0"
                  >
                    <motion.div
                      tabIndex={0}
                      onClick={() => handleCardToggle(service.id)}
                      onKeyDown={(e) => handleCardKeyDown(e, service.id)}
                      className={`service-card group relative bg-gray-900 hover:bg-primary rounded-xl sm:rounded-2xl overflow-hidden h-80 sm:h-96 cursor-pointer border border-gray-800 transition-all duration-300 ${activeCard === service.id ? 'active' : ''}`}
                      style={{
                        width: 'clamp(260px, 30vw, 300px)',
                        minWidth: 'clamp(260px, 30vw, 300px)'
                      }}
                      initial={{ opacity: 0, y: 60, rotateX: 45 }}
                      animate={isServicesInView ? {
                        opacity: 1,
                        y: 0,
                        rotateX: 0
                      } : {
                        opacity: 0,
                        y: 60,
                        rotateX: 45
                      }}
                      transition={{
                        delay: (idx % services.length) * 0.05,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 120,
                        damping: 14
                      }}
                      whileHover={{
                        scale: 1.03,
                        rotateY: 3,
                        transition: { duration: 0.25 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Content Container */}
                      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
                  {/* Header with Title and Arrow */}
                  <div className="flex justify-between items-start mb-4 relative z-20">
                    <div className="flex-1 pr-2">
                      <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 group-hover:!text-white leading-tight ${activeCard === service.id ? 'text-white' : 'text-primary'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-primary/50 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:shadow-xl transition-all duration-300 relative z-30 flex-shrink-0">
                      <svg 
                        className="w-4 h-4 text-primary group-hover:text-gray-900 transform rotate-0 group-hover:rotate-45 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:!text-white flex-1 ${activeCard === service.id ? 'text-white' : 'text-gray-300'}`}>
                    {service.description}
                  </p>

                  {/* Image Section */}
                  <div className="h-36 sm:h-44 relative rounded-xl overflow-hidden mt-auto">
                    {!imageErrors[`service-${service.id}`] ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={() => handleImageError(`service-${service.id}`)}
                      />
                    ) : (
                      <div 
                        className="w-full h-full group-hover:scale-110 transition-transform duration-700 rounded-xl"
                        style={{ background: service.fallback }}
                      />
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
            </div>
          </div>
        
        </motion.div>

        {/* Progress Indicator */}
    


        {/* Large Text Section with Dark Background */}
        <motion.div 
          ref={bigTextRef}
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isBigTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-0">
            {/* Left Side - Large Text with Advanced Blur Effect */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none">
                <motion.span 
                  className="text-primary block cursor-pointer neon-text"
                  initial={{ filter: "blur(3px)", opacity: 0.6 }}
                  whileHover={{ 
                    filter: "blur(0px)", 
                    opacity: 1,
                    textShadow: "0 0 20px #6e3a92, 0 0 40px #6e3a92, 0 0 60px #6e3a92",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  WE CREATE
                </motion.span>
                <motion.span 
                  className="text-gray-400 block cursor-pointer neon-text"
                  initial={{ filter: "blur(3px)", opacity: 0.6 }}
                  whileHover={{ 
                    filter: "blur(0px)", 
                    opacity: 1,
                    textShadow: "0 0 20px #9CA3AF, 0 0 40px #9CA3AF",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  MEANINGFUL
                </motion.span>
                <motion.span 
                  className="text-gray-400 block cursor-pointer neon-text"
                  initial={{ filter: "blur(3px)", opacity: 0.6 }}
                  whileHover={{ 
                    filter: "blur(0px)", 
                    opacity: 1,
                    textShadow: "0 0 20px #9CA3AF, 0 0 40px #9CA3AF",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  EXPERIENCES THAT
                </motion.span>
                <motion.span 
                  className="text-primary block cursor-pointer neon-text"
                  initial={{ filter: "blur(3px)", opacity: 0.6 }}
                  whileHover={{ 
                    filter: "blur(0px)", 
                    opacity: 1,
                    textShadow: "0 0 20px #6e3a92, 0 0 40px #6e3a92, 0 0 60px #6e3a92",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  CONNECT BRANDS
                </motion.span>
                <motion.span 
                  className="text-gray-400 block cursor-pointer neon-text"
                  initial={{ filter: "blur(3px)", opacity: 0.6 }}
                  whileHover={{ 
                    filter: "blur(0px)", 
                    opacity: 1,
                    textShadow: "0 0 20px #9CA3AF, 0 0 40px #9CA3AF",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  WITH THEIR
                </motion.span>
                <motion.span 
                  className="text-primary block cursor-pointer neon-text"
                  initial={{ filter: "blur(3px)", opacity: 0.6 }}
                  whileHover={{ 
                    filter: "blur(0px)", 
                    opacity: 1,
                    textShadow: "0 0 20px #6e3a92, 0 0 40px #6e3a92, 0 0 60px #6e3a92",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  CUSTOMERS
                </motion.span>
              </h2>
            </div>

            {/* Right Side - Badge and Additional Content */}
            <div className="flex flex-col items-center lg:items-end space-y-4 lg:space-y-6 lg:ml-12">
              {/* Circular Badge */}
              <motion.div 
                className="relative"
                style={{ y: yParallax }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isBigTextInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Rotating Border Text */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{ rotate: rotateParallax }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 160 160">
                      <defs>
                        <path
                          id="circle-small"
                          d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                        />
                      </defs>
                      <text className="text-lg font-bold fill-white">
                        <textPath href="#circle-small" className="tracking-wider">
                          LET&apos;S GET STARTED • CONNECT NOW • 
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  
                  {/* Center Content */}
                  <div className="relative z-10 text-center">
                    <div className="text-white text-2xl sm:text-3xl font-bold">S</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Animated Counter */}
              <motion.div 
                className="text-center lg:text-right" 
                ref={projectsRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isBigTextInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-primary text-3xl sm:text-4xl lg:text-5xl font-light mb-2">
                  {projectsCount}+
                </div>
                <p className="text-primary text-sm sm:text-base font-medium">
                  Projects Completed
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Client Success Story Text */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
              We take pride in our client success stories, where our creative strategies and execution have 
              paved a vital role in achieving their business goals and surpassing expectations.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for animations and scrollbar */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .neon-text {
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        /* Hide scrollbar */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Disable pointer-based scrolling on carousel container */
        .no-pointer-scroll {
          touch-action: none;
          -ms-touch-action: none;
          overflow: hidden !important;
        }

        .will-change-transform {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .text-2xl.sm\\:text-3xl.md\\:text-4xl.lg\\:text-5xl.xl\\:text-6xl {
            font-size: 1.5rem;
            line-height: 1.2;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .text-2xl.sm\\:text-3xl.md\\:text-4xl.lg\\:text-5xl.xl\\:text-6xl {
            font-size: 1.875rem;
            line-height: 1.15;
          }
        }

        @media (max-width: 640px) {
          .neon-text {
            font-weight: 800;
            letter-spacing: 0.03em;
          }
        }
      `}</style>
      <style jsx>{`
        /* Make heading and paragraph white on hover/focus of the card */
        .service-card:hover h3,
        .service-card:focus-within h3 {
          color: #fff !important;
        }
        .service-card.active h3 {
          color: #fff !important;
        }
        .service-card:hover p,
        .service-card:focus-within p {
          color: #fff !important;
        }
        .service-card.active p {
          color: #fff !important;
        }
        
        /* Hide scrollbar */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};

export default ServicesHome;
