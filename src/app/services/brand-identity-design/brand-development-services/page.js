'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const BrandDevelopmentServicesPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });

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
          <div className="px-4">
            {/* Breadcrumb */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <span>/</span>
                <Link href="/services/brand-identity-design" className="hover:text-primary transition-colors">Brand Identity & Design</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Brand Development Services</span>
              </div>
            </div>

            <motion.div
              className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Left side - Main heading */}
              <div className="text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Brand Development Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  A brand transcends a mere logo; it&apos;s the whole story, the sound of its voice, the bond developed with the public. SocialHawks offers expert brand development services to help companies manufacture substantial identities, stand out from the competition, and win customer loyalty.
                </p>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Build My Brand
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          ref={contentRef}
          className="pb-16 sm:pb-20"
          initial={{ opacity: 0 }}
          animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4 mx-auto max-w-6xl">

            {/* Why Brand Development is Essential */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Brand Development is Essential
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🎯", title: "Builds Recognition", desc: "A powerful brand makes your firm unforgettable." },
                  { icon: "❤️", title: "Creates Emotional Connection", desc: "Consumers are drawn to narratives, not merely to products." },
                  { icon: "📈", title: "Drives Growth", desc: "Branding that is uniform across the board leads to customers' increased trust and sales." },
                  { icon: "🌍", title: "Scales Across Channels", desc: "Your brand's identity remains unchanged no matter what form of communication, be it digital or print." },
                  { icon: "🔑", title: "Positions You as an Authority", desc: "An established brand gives an impression of trustworthiness and the right to lead in the industry." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Brand Development Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Brand Development Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Professional Brand Development",
                    description: "A distinct brand identity is created by us that integrates colors, typography, voice, and storytelling to show your values and mission."
                  },
                  {
                    title: "Brand Identity Development Services",
                    description: "More than just a logo, a brand is actually a story, a voice, and an emotional attachment with your audience. Various services are offered by us to assist you in forming your brand identity which includes logo design and brand guidelines that ensure your message and visuals are coherently presented on each platform."
                  },
                  {
                    title: "Branding Development Services for Businesses",
                    description: "Platforms through which our brand development services connect businesses, whether startups or enterprises, are based on creating identities that get into the hearts of customers and draw loyalty."
                  }
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Why Choose SocialHawks */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose SocialHawks as Your Brand Development Agency?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "✅", title: "Strategic Approach", desc: "We kick off with market research, competitor analysis, and positioning strategy." },
                  { icon: "✅", title: "Creative Excellence", desc: "Cutting-edge designs that harmonize beauty with significance." },
                  { icon: "✅", title: "Holistic Brand", desc: "It covers everything, namely; visual identity, brand voice, and customer experience." },
                  { icon: "✅", title: "Proven Track Record", desc: "Trusted by companies from various sectors all around the world." },
                  { icon: "✅", title: "Future-Ready Brands", desc: "Trend-responsive identities that develop hand in hand with changes." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Brand Development Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Brand Development Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    description: "Getting to know your values, goals, and audience."
                  },
                  {
                    step: "02",
                    title: "Concept Development",
                    description: "Defining the message, tone, and visual look of the brand."
                  },
                  {
                    step: "03",
                    title: "Design & Identity",
                    description: "Creating logos and colors, typography, and guidelines."
                  },
                  {
                    step: "04",
                    title: "Implementation",
                    description: "Usage consistently on web, print, and digital mediums."
                  },
                  {
                    step: "05",
                    title: "Review & Evolution",
                    description: "Changes in the market and feedback are incorporated into the process."
                  }
                ].map((process, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-5xl font-bold text-primary/30 flex-shrink-0">{process.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Industries We Serve */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Industries We Serve in Brand Development
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Corporate & B2B Businesses",
                  "E-commerce Brands",
                  "Education",
                  "Healthcare & Wellness",
                  "Food & Beverage",
                  "Startups & Entrepreneurs"
                ].map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {industry}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="text-center py-16 bg-gray-900 text-white rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Build a Powerful Brand?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Your brand is your most valuable asset. SocialHawks&apos; brand development services craft strategies and identities that foster trust, loyalty, and future growth.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Call us for support with creating an end-to-end brand identity that truly represents that business you are creating.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Build My Brand
                  </Link>
                </motion.div>
              </motion.div>
            </section>

          </div>
        </motion.div>
      </motion.div>

      <Contact />
    </div>
  );
};

export default BrandDevelopmentServicesPage;
