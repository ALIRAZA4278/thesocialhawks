'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact';

const ServicesPage = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  
  // Check if elements are in view
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  
  // Services data - comprehensive 14 service categories
  const services = [
    {
      id: 1,
      title: "Brand Identity & Design",
      slug: "brand-identity-design",
      description: "Craft distinctive brand identities with logo design, brand guidelines, animated logos, and presentation design that defines your unique market presence.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Graphic Design",
      slug: "graphic-design",
      description: "Create compelling visual content including social media posts, ad creatives, infographics, and UI/UX design that captivates your audience.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Print & Stationery",
      slug: "print-stationery",
      description: "Professional print solutions from business cards to brochures, ensuring your brand maintains consistency across all physical touchpoints.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Merchandising",
      slug: "merchandising",
      description: "Custom branded merchandise including apparel, corporate uniforms, and promotional items that extend your brand into the physical world.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Web & Digital Development",
      slug: "web-digital-development",
      description: "Full-stack web development from startup sites to e-commerce platforms, including hosting, domains, and technical infrastructure management.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 6,
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description: "Native and cross-platform mobile applications for iOS, Android, and Windows with modern UI/UX and robust functionality.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      id: 7,
      title: "Content & Writing",
      slug: "content-writing",
      description: "Strategic content creation including copywriting, blog writing, SEO content, eBooks, and technical writing that drives engagement and conversions.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      id: 8,
      title: "Animation Services",
      slug: "animation-services",
      description: "Bring your ideas to life with animated explainer videos, motion graphics, 3D visualization, and character animation with full production services.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      id: 9,
      title: "Video & Photography",
      slug: "video-photography",
      description: "Professional videography and photography services including commercial shoots, event coverage, product photography, and post-production excellence.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
      id: 10,
      title: "Digital Marketing & Growth",
      slug: "digital-marketing-growth",
      description: "Comprehensive digital marketing including social media management, SEO, PPC, influencer partnerships, and performance analytics for measurable growth.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)"
    },
    {
      id: 11,
      title: "Performance & Maintenance",
      slug: "performance-maintenance",
      description: "Ongoing website maintenance, performance optimization, security updates, and proactive monitoring to keep your digital assets running smoothly.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)"
    },
    {
      id: 12,
      title: "Cybersecurity & Protection",
      slug: "cybersecurity-protection",
      description: "Comprehensive security solutions including WAF management, malware protection, vulnerability monitoring, and disaster recovery planning.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #ff8a80 0%, #ff5722 100%)"
    },
    {
      id: 13,
      title: "Strategy & Consulting",
      slug: "strategy-consulting",
      description: "Strategic business consulting including market research, content strategy, digital transformation, and advisory services for sustainable growth.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #b39ddb 0%, #9c27b0 100%)"
    },
    {
      id: 14,
      title: "Platform Management",
      slug: "platform-management",
      description: "Expert management of digital platforms including social media channels, advertising platforms, and multi-channel campaign optimization.",
      image: "/images/EXAMPLE.jpg",
      fallback: "linear-gradient(135deg, #81c784 0%, #4caf50 100%)"
    }
  ];

  const [imageErrors, setImageErrors] = useState({});

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />
      
      <motion.div 
        ref={sectionRef}
        className="min-h-screen bg-white mt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          className="    "
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center  px-4">
            <motion.div 
              className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Left side - Main heading */}
              <div className="text-left ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
                  Creative Solutions{' '}
                  <span className="lg:block">That Drive Real Growth</span>
                </h1>
              </div>
              
              {/* Right side - Description */}
              <div className="text-left lg:max-w-md lg:flex-shrink-0">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From strategy to execution, we offer full-scale services in marketing, 
                  content, branding, and production, built to amplify your brand and 
                  deliver measurable impact.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid - 2x2 Layout */}
        <motion.div 
          ref={servicesRef}
          className="pb-16 sm:pb-20"
          initial={{ opacity: 0 }}
          animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <Link href={`/services/${service.slug}`} key={service.id} className="block">
                  <motion.div 
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-200 h-96"
                    initial={{ opacity: 0, y: 60 }}
                    animate={isServicesInView ? { 
                      opacity: 1, 
                      y: 0
                    } : { 
                      opacity: 0, 
                      y: 60 
                    }}
                    transition={{ 
                      delay: index * 0.15, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.3 }
                    }}
                  >
                  {/* Content Layout - Title Left, Image Right */}
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Left Section - Title and Content */}
                    <div className="flex-1 p-6 lg:p-8 xl:p-10 flex flex-col justify-between min-h-0">
                      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 group-hover:text-primary transition-colors duration-300 flex-shrink-0">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                          {service.description}
                        </p>
                      </div>

                      {/* Know More Link */}
                      <div className="flex items-center text-primary group-hover:text-primary-hover transition-colors duration-300 cursor-pointer mt-4 flex-shrink-0">
                        <span className="text-sm font-medium">→ Know More</span>
                      </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-full lg:w-64 xl:w-80 h-48 lg:h-auto relative overflow-hidden lg:rounded-r-2xl">
                      {!imageErrors[`service-${service.id}`] ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={() => handleImageError(`service-${service.id}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                          style={{ background: service.fallback }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Contact />
      
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db #f3f4f6;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        
        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background: #d1d5db;
        }
        
        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        
        /* Smooth scrolling */
        .overflow-y-auto {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbar on mobile for cleaner look */
        @media (max-width: 768px) {
          .scrollbar-thin {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .scrollbar-thin::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default ServicesPage
