'use client';
import { useState } from 'react';
import Link from 'next/link';
import '../styles/theme.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About', href: '#', active: false },
    { name: 'Services', href: '#', active: false },
    { name: 'Projects', href: '#', active: false },
    { name: 'Career', href: '#', active: false },
  ];

  return (
    <>
      {/* Add padding to body to account for fixed navbar */}
      <style jsx global>{`
        body {
          padding-top: 100px;
        }
        @media (min-width: 900px) {
          body {
            padding-top: 90px;
          }
        }
      `}</style>

      <div className="fixed top-4 left-4 right-4 z-50">
        <nav className={`relative bg-gray-100 rounded-md shadow-sm px-8 mx-auto w-full transition-all duration-300 ${
          isMobileMenuOpen ? 'pb-4' : ''
        }`}>
          {/* Desktop Navbar */}
          <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <div className="navbar-logo">
            <Link href="/" className="text-4xl font-bold text-gray-800 tracking-tight hover:text-primary transition-colors">
              Socialhawks
            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden min-[1000px]:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-1 rounded-md text-base font-medium transition-all duration-300 hover:bg-primary hover:text-white ${
                  item.active 
                    ? 'bg-primary text-white' 
                    : 'text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden min-[1000px]:flex">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300 group bg-white">
              Contact Us
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs group-hover:bg-primary-hover transition-colors">
                →
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="min-[1000px]:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-2xl text-gray-800 hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu shown inside the navbar (matches navbar width) with smooth transition */}
        <div
          className={`min-[1000px]:hidden overflow-hidden transform-gpu transition-all duration-300 origin-top px-4 ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 scale-100 pointer-events-auto'
              : 'max-h-0 opacity-0 scale-95 pointer-events-none'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col gap-3 mb-4 mt-5">
            {navItems.map((item) => {
              const base = 'block w-full px-4 py-2 rounded-full text-base font-medium text-center transition-all duration-200';
              const classes = item.active
                ? `${base} bg-primary text-white`
                : item.name === 'Projects'
                ? `${base}   text-gray-800`
                : `${base} text-gray-800 hover:bg-primary hover:text-white`;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classes}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center gap-3">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-200 bg-white"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </button>
            <button
              className="ml-1 w-8 h-8 bg-primary rounded-md flex items-center justify-center text-xs text-white hover:bg-primary-hover transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Contact arrow"
            >
              →
            </button>
          </div>
        </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;