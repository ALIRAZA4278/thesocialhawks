'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const WebDigitalDevelopmentPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });

  // Sub-services data
  const subServices = [
    {
      id: 1,
      title: "Professional Website Development Services",
      slug: "professional-website-development",
      shortDescription: "Your website is the core of your business expansion. We offer professional website development services that balance trendsetting designs with advanced technology.",
      image: "/images/services/web-development.jpg",
      fallback: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: [
        "Custom Web Design",
        "Mobile-Friendly Development",
        "SEO-Optimized Framework",
        "Conversion-Focused Approach",
        "Fast Loading Times"
      ]
    },
    {
      id: 2,
      title: "WordPress Website Development Services",
      slug: "wordpress-website-development",
      shortDescription: "Over 40% of the internet runs on WordPress. We create flexible, fast, and scalable WordPress websites that are beautiful and perform exceptionally.",
      image: "/images/services/wordpress-development.jpg",
      fallback: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: [
        "Custom WordPress Development",
        "Responsive Design",
        "SEO-Focused Development",
        "Plugin Integration",
        "24/7 Support"
      ]
    },
    {
      id: 3,
      title: "Ecommerce Web Design & Development",
      slug: "ecommerce-web-development",
      shortDescription: "Build your online store with secure, fast, and conversion-focused ecommerce solutions. Custom ecommerce platforms designed to sell more effectively.",
      image: "/images/services/ecommerce-development.jpg",
      fallback: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: [
        "Secure Payment Gateways",
        "Product Management System",
        "Shopping Cart Optimization",
        "Mobile-Friendly Design",
        "SEO Ready"
      ]
    },
    {
      id: 4,
      title: "Web Application Development Services",
      slug: "web-application-development",
      shortDescription: "Powerful, scalable, and secure web applications that automate tasks, enhance customer experience, and drive business growth.",
      image: "/images/services/web-app-development.jpg",
      fallback: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      features: [
        "Custom Web Applications",
        "Maximum Performance & Speed",
        "Safe & Trusted",
        "Universal Platform Access",
        "Scalable Framework"
      ]
    },
    {
      id: 5,
      title: "Backend Development Services",
      slug: "backend-development",
      shortDescription: "Build a strong foundation with secure, scalable, and high-performance backend systems. Expert backend architecture that powers your digital success.",
      image: "/images/services/backend-development.jpg",
      fallback: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      features: [
        "API Development & Integration",
        "Database Management",
        "Cloud Integration",
        "Performance Testing",
        "Continuous Support"
      ]
    }
  ];

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />

      <motion.div
        className="min-h-screen bg-white mt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="py-12 sm:py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center px-4">
            <motion.div
              className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Left side - Main heading */}
              <div className="text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
                  Web & Digital Development{' '}
                  <span className="lg:block">Services</span>
                </h1>
              </div>

              {/* Right side - Description */}
              <div className="text-left lg:max-w-md lg:flex-shrink-0">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional website development, WordPress solutions, ecommerce platforms,
                  custom web applications, and backend development services. From startup sites
                  to enterprise solutions — we build digital experiences that drive growth.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sub-Services Grid */}
        <motion.div
          ref={servicesRef}
          className="pb-16 sm:pb-20"
          initial={{ opacity: 0 }}
          animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4 mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Development Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our comprehensive web and digital development services
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {subServices.map((service, index) => (
                <Link href={`/services/web-digital-development/${service.slug}`} key={service.id} className="block">
                  <motion.div
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
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
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                      {!imageErrors[`sub-service-${service.id}`] ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={() => handleImageError(`sub-service-${service.id}`)}
                        />
                      ) : (
                        <div
                          className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                          style={{ background: service.fallback }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Service Badge */}
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border border-white/20">
                          Service #{index + 1}
                        </span>
                      </motion.div>

                      {/* Hover Action Icon */}
                      <motion.div
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1, rotate: 12 }}
                      >
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                        {service.shortDescription}
                      </p>

                      {/* Features List */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer Button */}
                      <motion.div
                        className="inline-flex items-center gap-2 text-primary font-bold text-base group-hover:gap-3 transition-all duration-300 pt-4 border-t border-gray-100"
                        whileHover={{ x: 4 }}
                      >
                        <span>Learn More</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </motion.div>
                    </div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="py-16 bg-gray-50 rounded-3xl mx-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Choose SocialHawks?
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver web solutions
              that drive real business results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "💻", title: "Modern Technologies", desc: "Latest frameworks and best practices" },
                { icon: "⚡", title: "Fast Performance", desc: "Optimized for speed and efficiency" },
                { icon: "🔒", title: "Secure Development", desc: "Enterprise-grade security standards" },
                { icon: "📱", title: "Responsive Design", desc: "Perfect on all devices and screens" },
                { icon: "🎯", title: "SEO Optimized", desc: "Built for search engine visibility" },
                { icon: "🚀", title: "Scalable Solutions", desc: "Grows with your business needs" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Contact />
    </div>
  );
};

export default WebDigitalDevelopmentPage;
