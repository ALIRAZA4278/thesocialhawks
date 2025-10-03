'use client';
import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+92',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          countryCode: '+92',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <section className="bg-gray-900 text-white rounded-lg mb-10" id='contact' data-scroll data-scroll-section data-scroll-speed="-.05">
      {/* Contact Form Section */}
      <div className="relative bg-gray-900" style={{
        backgroundImage: 'url("/images/contact-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        
        <div className="relative  rounded-lg   z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Header */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6">
              We&apos;d Love to Hear From You!
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Tell us where you want to go. We&apos;ll help you get there smarter, faster, and bolder.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                type="button"
                onClick={() => window.open('/social-review', '_blank')}
                className="group relative bg-gradient-to-r from-primary to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🎯</span>
                  <span>FREE Social Media Review</span>
                  <span className="text-xl group-hover:animate-bounce">⚡</span>
                </div>
              </button>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div className="text-left">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    placeholder="First Name"
                  />
                </div>

                {/* Last Name */}
                <div className="text-left">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="text-left mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                  placeholder="Email"
                />
              </div>

              {/* Phone Number */}
              <div className="text-left mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number*
                </label>
                <div className="flex w-full">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="w-20 sm:w-24 px-2 sm:px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 bg-gray-50 text-sm flex-shrink-0"
                  >
                    <option value="+92">PK</option>
                    <option value="+1">US</option>
                    <option value="+44">UK</option>
                    <option value="+91">IN</option>
                    <option value="+86">CN</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="flex-1 min-w-0 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="text-left mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-8 rounded-lg transition-all duration-300 mb-4 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-dark transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Social Media Review Button */}
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-3">Need your social media reviewed?</p>
                <button
                  type="button"
                  onClick={() => window.open('/social-review', '_blank')}
                  className="group relative w-full font-semibold py-4 px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors duration-300">Get Social Media Review</span>
                    <span className="ml-2 group-hover:translate-x-1 group-hover:text-white transition-all duration-300">→</span>
                  </div>
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <div className="mt-6">
                  {submitStatus === 'success' ? (
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                      <p className="text-primary font-medium">
                        ✅ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon!
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                      <p className="text-red-600 font-medium">
                        ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info with Logo */}
            <div className="space-y-6 lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/images/logo-white.png"
                  alt="Socialhawks Logo"
                  width={200}
                  height={60}
                  className="h-25 w-auto object-contain"
                />
              </div>
              
              {/* Addresses */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">Office#405, 4th floor, King&apos;s Trade Center, <br />Block 3-A, Gulistan-e-Jauhar, Karachi, sindh, 75290</p>
                  </div>
                </div>
              
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-white">+92 310-4999 701 </p>
                </div>
               
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-white">info@thesocialhawks.com</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-white font-medium">Opening Hours:</p>
                </div>
                <div className="ml-5 space-y-1">
                  <p className="text-gray-300">Mon to Sat: 9:00am - 10:00pm</p>
                  <p className="text-gray-300">Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Menu Links */}
            <div>
              <h3 className="text-primary font-semibold text-lg mb-6">Menu</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#career" className="text-gray-300 hover:text-primary transition-colors">Career</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-primary font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#marketing" className="text-gray-300 hover:text-primary transition-colors">Marketing</a></li>
                <li><a href="#branding" className="text-gray-300 hover:text-primary transition-colors">Branding</a></li>
                <li><a href="#production" className="text-gray-300 hover:text-primary transition-colors">Production</a></li>
                <li><a href="#content" className="text-gray-300 hover:text-primary transition-colors">Content Creation</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Review CTA */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-6 mb-8">
                <h3 className="text-white font-bold text-xl mb-3">🚀 Want to Boost Your Social Media?</h3>
                <p className="text-gray-200 mb-4">Get a FREE professional review of all your social media accounts!</p>
                <button
                  type="button"
                  onClick={() => window.open('/social-review', '_blank')}
                  className="group inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="text-xl group-hover:animate-pulse">📊</span>
                  Get Your FREE Review Now
                  <span className="group-hover:translate-x-1 transition-transform duration-300">✨</span>
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="text-center mb-8">
              <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-4"></div>
              <h3 className="text-primary font-semibold text-lg">Follow us on:</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {/* Instagram */}
                <a target='_blank' href="https://www.instagram.com/socialhawks" className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl">
                  <div className="w-8 h-8 mb-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Instagram</span>
                </a>

                {/* Facebook */}
                <a href="#" target='_blank' className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 hover:bg-blue-600 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl">
                  <div className="w-8 h-8 mb-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">Facebook</span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/socialhawks" target='_blank' className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 hover:bg-blue-700 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl">
                  <div className="w-8 h-8 mb-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/@thesocialhawks" target='_blank' className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 hover:bg-red-600 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl">
                  <div className="w-8 h-8 mb-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 px-8 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </p>
              <p className="text-gray-400 text-sm">
                ©socialhawks. All Rights Reserved.
              </p>
            </div>
          </div>

      </footer>
    </section>
  );
};

export default Contact;