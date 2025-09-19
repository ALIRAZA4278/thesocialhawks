"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import '../styles/theme.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to background opacity
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 0.95]);
  const backdropBlur = useTransform(scrollYProgress, [0, 0.1], [8, 16]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Nav items: Home and anchor sections are on the main page; Projects is a separate page
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/#projects' },
    
  ];

  

  return (
    <>
      {/* Add padding to body to account for fixed navbar */}
      <style jsx global>{`

        /* Ensure navbar is always on top */
        .navbar-container {
          z-index: 99999 !important;

        }
        
        /* Override any component z-index that might interfere */
        .navbar-container * {
          z-index: inherit !important;
        }
        
        /* Ensure no other component can go above navbar */
        body * {
          z-index: auto;
        }
        
        body .navbar-container {
          z-index: 99999 !important;
        }
      `}</style>

      <motion.div 
        className="navbar-container w-full  pt-2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.nav 
          className={`relative bg-gray-100 rounded-md shadow-sm min-[1000px]:px-8 min-[800px]:px-4 px-2 mx-auto w-full transition-all duration-300 ${
            isMobileMenuOpen ? 'pb-2 sm:pb-4' : ''
          }`}
          whileHover={{ scale: 1.001 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {/* Desktop Navbar */}
          <div className="flex items-center justify-between h-[50px] sm:h-[60px]">
          {/* Logo */}
          <motion.div 
            className="navbar-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 tracking-tight hover:text-primary transition-colors">
              <motion.span
              className='cursor-pointer'
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Socialhawks
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation Items */}
          <motion.div 
            className="hidden min-[1000px]:flex items-center gap-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-1 rounded-md text-base font-medium transition-all duration-300 hover:bg-primary hover:text-white text-gray-800`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Button */}
          <motion.div 
            className="hidden min-[1000px]:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/#contact" className="group">
              <motion.a
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300 bg-white"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact Us
                <motion.span 
                  className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs group-hover:bg-primary-hover transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.a>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="min-[1000px]:hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.button 
              onClick={toggleMobileMenu}
              className="text-2xl text-gray-800 hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ✕
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ☰
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile menu with enhanced animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="min-[1000px]:hidden overflow-hidden px-4 relative z-[99999]"
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="flex flex-col gap-3 mb-4 mt-5"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, index) => {
                  const base = 'block w-full px-4 py-2 rounded-full text-base font-medium text-center transition-all duration-200';
                  const classes = `${base} text-gray-800 hover:bg-primary hover:text-white`;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          toggleMobileMenu();
                        }}
                        className={classes}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div 
                className="flex justify-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link href="/#contact">
                  <a
                    onClick={() => toggleMobileMenu()}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-200 bg-white inline-flex items-center justify-center"
                  >
                    Contact Us
                  </a>
                </Link>
                <Link href="/#contact">
                  <a
                    onClick={() => toggleMobileMenu()}
                    className="ml-1 w-8 h-8 bg-primary rounded-md flex items-center justify-center text-xs text-white hover:bg-primary-hover transition-colors"
                    aria-label="Contact arrow"
                  >
                    →
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Navbar;  