'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const AdCreativesPage = () => {
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
                <span className="text-gray-900 font-medium">Ad Creatives</span>
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
                  Ad Creatives for Digital Campaigns
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Maximize your ad spend with high-converting creatives designed to capture attention and drive action. At SocialHawks, we craft performance-driven ad designs for Google, Meta, LinkedIn, and every major advertising platform that turn impressions into conversions.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Ad Creatives
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

            {/* Why Ad Creatives Matter */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Professional Ad Creatives Matter
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your ad creative is the first thing potential customers see. In a crowded digital landscape, the difference between a click and a scroll-past comes down to design. High-quality ad creatives lower your cost per click, improve quality scores, and dramatically increase conversion rates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "💰", text: "Lower CPC — better creatives improve quality scores and reduce ad costs." },
                  { icon: "🎯", text: "Higher CTR — compelling visuals drive 2-3x more clicks than generic ads." },
                  { icon: "📈", text: "Better ROAS — optimized creatives maximize return on ad spend." },
                  { icon: "🧪", text: "A/B test ready — multiple variations to find your winning formula." }
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

            {/* Our Ad Creative Services */}
            <section className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Ad Creative Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Google Ads Creatives",
                    description: "Display banners, responsive ad assets, and YouTube thumbnail designs optimized for Google's ad network. Every size and format your campaigns need."
                  },
                  {
                    title: "Facebook & Instagram Ad Design",
                    description: "Thumb-stopping ad creatives for feed ads, story ads, carousel ads, and collection ads. Designed to meet Meta's best practices and maximize engagement."
                  },
                  {
                    title: "LinkedIn & B2B Ad Creatives",
                    description: "Professional ad designs for sponsored content, message ads, and dynamic ads that resonate with decision-makers and drive qualified leads."
                  },
                  {
                    title: "Retargeting & Dynamic Ad Design",
                    description: "Eye-catching retargeting creatives and dynamic ad templates that bring back visitors and close the conversion loop with personalized messaging."
                  }
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
                Why Choose SocialHawks for Ad Creatives?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🎯", title: "Conversion-Focused", desc: "Every design is crafted with clear CTAs and conversion psychology." },
                  { icon: "📐", title: "Platform-Optimized", desc: "Pixel-perfect designs for every ad platform and placement size." },
                  { icon: "⚡", title: "Rapid Delivery", desc: "Ad creatives delivered within 24-48 hours to keep your campaigns running." },
                  { icon: "🧪", title: "A/B Variations", desc: "Multiple creative variations included for split testing and optimization." },
                  { icon: "📊", title: "Performance-Driven", desc: "Designs informed by advertising best practices and performance data." }
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
                Industries We Create Ad Creatives For
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "E-commerce & DTC Brands",
                  "SaaS & Technology",
                  "Real Estate",
                  "Healthcare & Wellness",
                  "Finance & Insurance",
                  "Education & E-learning",
                  "Travel & Hospitality"
                ].map((industry, idx) => (
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

            {/* Our Process */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Ad Creative Process
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "01",
                    title: "Campaign Brief",
                    description: "Understanding your campaign objectives, target audience, and key messaging."
                  },
                  {
                    step: "02",
                    title: "Creative Strategy",
                    description: "Developing visual concepts and copy angles aligned with your campaign goals."
                  },
                  {
                    step: "03",
                    title: "Design & Variations",
                    description: "Creating multiple ad variations with different hooks, visuals, and CTAs."
                  },
                  {
                    step: "04",
                    title: "Export & Launch",
                    description: "Delivering final creatives in all required sizes and formats, ready to go live."
                  }
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
                  Ready to Supercharge Your Ad Campaigns?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Stop wasting ad spend on underperforming creatives. Let SocialHawks design high-converting ad visuals that maximize your ROI and drive real business results.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Get a free ad creative consultation today!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Ad Creatives
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

export default AdCreativesPage;
