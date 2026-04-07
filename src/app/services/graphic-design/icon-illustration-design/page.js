'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const IconIllustrationDesignPage = () => {
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
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <span>/</span>
                <Link href="/services/graphic-design" className="hover:text-primary transition-colors">Graphic Design</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Icon & Illustration Design</span>
              </div>
            </div>

            <motion.div
              className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Icon & Illustration Design
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Give your brand a unique visual language with custom icons and illustrations. At SocialHawks, we design original icon sets, brand illustrations, and vector graphics that make your products, websites, and marketing materials truly distinctive.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Illustration Design
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

            {/* Trust Section */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Custom Icons & Illustrations Matter
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Generic stock icons make your brand look generic. Custom illustrations and icon sets create a distinctive visual identity that sets you apart from competitors, improves user comprehension, and adds personality to every touchpoint.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "🎯", text: "Brand differentiation — custom visuals set you apart from competitors using stock art." },
                  { icon: "🧠", text: "Better comprehension — icons improve content understanding by up to 89%." },
                  { icon: "✨", text: "Unique personality — illustrations add character and warmth to your brand." },
                  { icon: "🔄", text: "Versatile usage — one icon set works across web, mobile, print, and social." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Icon & Illustration Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  { title: "Custom Icon Sets", description: "Cohesive icon libraries designed for your product, website, or app. Consistent style, multiple sizes, and formats for every use case." },
                  { title: "Brand Illustrations", description: "Original illustrations that capture your brand personality. From hero images to spot illustrations, each piece tells your story visually." },
                  { title: "Vector Art & Graphics", description: "Scalable vector graphics for any application — logos, patterns, backgrounds, and decorative elements that look sharp at every size." },
                  { title: "Character & Mascot Design", description: "Unique character designs and brand mascots that give your brand a memorable face and connect emotionally with your audience." }
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
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
                Why Choose SocialHawks for Illustration Design?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🎨", title: "Original Artwork", desc: "Every illustration is created from scratch — no templates or stock modifications." },
                  { icon: "📐", title: "Scalable Vectors", desc: "All designs delivered as scalable SVG/AI files that look perfect at any size." },
                  { icon: "🔄", title: "Consistent Style", desc: "Unified visual language across all icons and illustrations in your set." },
                  { icon: "📦", title: "Complete Packages", desc: "Full icon libraries with multiple sizes, states, and color variants." },
                  { icon: "⚡", title: "Quick Iterations", desc: "Fast design cycles with responsive feedback and revision rounds." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Industries */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Industries We Create Illustrations For
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["Technology & Apps", "E-commerce & Retail", "Education & E-learning", "Healthcare & Wellness", "Finance & FinTech", "Food & Beverage", "Gaming & Entertainment"].map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-4 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300"
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

            {/* Process */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Illustration Design Process
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Style Exploration", description: "Exploring visual styles, references, and creating a design direction that fits your brand." },
                  { step: "02", title: "Sketch & Concept", description: "Hand-sketching initial concepts and getting your feedback before moving to digital." },
                  { step: "03", title: "Digital Design", description: "Creating polished digital illustrations with precise vector work and color application." },
                  { step: "04", title: "Finalize & Package", description: "Delivering final files in all required formats with a usage style guide." }
                ].map((process, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-5xl font-bold text-primary/50 mb-4">{process.step}</div>
                    <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                    <p className="text-gray-300">{process.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Create a Unique Visual Language?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let SocialHawks design custom icons and illustrations that make your brand unmistakably yours.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Get a free illustration design consultation today!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Illustration Design
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

export default IconIllustrationDesignPage;
