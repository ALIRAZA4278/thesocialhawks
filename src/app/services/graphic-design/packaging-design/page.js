'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const PackagingDesignPage = () => {
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
                <span className="text-gray-900 font-medium">Packaging Design Concepts</span>
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
                  Packaging Design Concepts
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Make your products stand out on the shelf and screen with stunning packaging design. At SocialHawks, we create eye-catching packaging concepts that protect your product, tell your brand story, and drive purchase decisions at the critical point of sale.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Packaging Design
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
                Why Professional Packaging Design Matters
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Packaging is your product's first handshake with the customer. Studies show that 72% of consumers say packaging design influences their purchase decisions. Great packaging creates shelf appeal, communicates value, and turns first-time buyers into loyal customers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "🛍️", text: "72% of consumers — say packaging design influences their purchase decisions." },
                  { icon: "👁️", text: "Shelf appeal — you have 7 seconds to grab attention in a retail environment." },
                  { icon: "💎", text: "Perceived value — premium packaging justifies premium pricing." },
                  { icon: "🔄", text: "Brand recall — distinctive packaging increases repeat purchases." }
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
                Our Packaging Design Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  { title: "Product Packaging Design", description: "Complete packaging designs for consumer products — from concept to print-ready artwork. Designs that stand out on shelves and screens." },
                  { title: "Label & Tag Design", description: "Product labels, hang tags, and sticker designs that communicate your brand story, ingredients, and key selling points beautifully." },
                  { title: "Box & Container Design", description: "Custom box designs, mailer boxes, and container packaging that create memorable unboxing experiences for your customers." },
                  { title: "Packaging Mockups", description: "Photorealistic 3D mockups of your packaging designs for presentations, e-commerce listings, and marketing materials." }
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
                Why Choose SocialHawks for Packaging Design?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🎨", title: "Creative Excellence", desc: "Award-worthy designs that capture attention and communicate your brand." },
                  { icon: "🖨️", title: "Print-Ready Files", desc: "Production-ready artwork with proper bleeds, color profiles, and die lines." },
                  { icon: "📐", title: "Structural Knowledge", desc: "We understand packaging construction and material constraints." },
                  { icon: "🌍", title: "Regulatory Compliance", desc: "Designs that accommodate required labeling and regulatory information." },
                  { icon: "📸", title: "Realistic Mockups", desc: "3D mockups included so you can see your packaging before production." }
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
                Industries We Design Packaging For
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["Food & Beverage", "Beauty & Cosmetics", "Health & Supplements", "Consumer Electronics", "Fashion & Apparel", "Home & Lifestyle", "Pet Products"].map((industry, idx) => (
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
                Our Packaging Design Process
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Product & Market Research", description: "Understanding your product, target market, competitors, and retail environment." },
                  { step: "02", title: "Concept Development", description: "Creating multiple packaging concepts with different visual directions and structural options." },
                  { step: "03", title: "Design Refinement", description: "Refining the chosen concept with detailed artwork, typography, and color finalization." },
                  { step: "04", title: "Production Files", description: "Delivering print-ready files with dielines, color separations, and supplier specifications." }
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
                  Ready to Design Packaging That Sells?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let SocialHawks create packaging designs that make your products irresistible — on the shelf, online, and in the hands of your customers.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Get a free packaging design consultation today!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Packaging Design
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

export default PackagingDesignPage;
