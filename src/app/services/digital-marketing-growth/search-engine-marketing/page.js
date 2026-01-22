'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const SearchEngineMarketingPage = () => {
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
                <Link href="/services/digital-marketing-growth" className="hover:text-primary transition-colors">Digital Marketing & Growth</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Search Engine Marketing</span>
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
                  Search Engine Marketing & PPC
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Get instant visibility at the top of search results with strategic paid advertising. At SocialHawks, we create and manage high-performing Google Ads and Bing Ads campaigns that drive qualified traffic and maximize your return on ad spend.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Launch My PPC Campaign
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

            {/* Why SEM */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Invest in Search Engine Marketing?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🚀", title: "Instant Visibility", desc: "Appear at the top of search results immediately, not months later." },
                  { icon: "🎯", title: "Precise Targeting", desc: "Reach users actively searching for your products or services." },
                  { icon: "💰", title: "Controlled Budget", desc: "Set your budget and only pay when someone clicks your ad." },
                  { icon: "📊", title: "Measurable Results", desc: "Track every click, conversion, and dollar spent in real-time." },
                  { icon: "🔄", title: "Quick Optimization", desc: "Adjust campaigns instantly based on performance data." }
                ].map((item, idx) => (
                  <motion.div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* SEM Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our SEM Services
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Google Ads Management", description: "Search, Display, Shopping, and YouTube ads expertly managed for maximum ROI.", icon: "🔍" },
                  { title: "Microsoft/Bing Ads", description: "Tap into the Bing network for additional qualified traffic at lower costs.", icon: "💻" },
                  { title: "Shopping Campaigns", description: "Product listing ads that showcase your inventory directly in search results.", icon: "🛒" },
                  { title: "Remarketing Campaigns", description: "Re-engage visitors who didn&apos;t convert with targeted follow-up ads.", icon: "🔄" },
                  { title: "Local Search Ads", description: "Target customers in your area with location-based advertising.", icon: "📍" },
                  { title: "Landing Page Optimization", description: "High-converting landing pages designed to maximize your ad spend.", icon: "📄" }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Campaign Types */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Campaign Types We Manage
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "🔎", title: "Search Campaigns", desc: "Text ads that appear in search results" },
                  { icon: "🖼️", title: "Display Campaigns", desc: "Visual ads across millions of websites" },
                  { icon: "🛍️", title: "Shopping Campaigns", desc: "Product ads with images and prices" },
                  { icon: "▶️", title: "Video Campaigns", desc: "YouTube and video network ads" },
                  { icon: "📱", title: "App Campaigns", desc: "Drive app installs and engagement" },
                  { icon: "🤖", title: "Performance Max", desc: "AI-powered cross-channel campaigns" }
                ].map((type, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our PPC Management Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Research & Strategy", description: "Keyword research, competitor analysis, and campaign strategy development." },
                  { step: "02", title: "Campaign Setup", description: "Account structure, ad groups, ad copy, and targeting configuration." },
                  { step: "03", title: "Launch & Monitor", description: "Campaign launch with close monitoring of initial performance." },
                  { step: "04", title: "Optimize & Scale", description: "Continuous A/B testing, bid adjustments, and budget optimization." },
                  { step: "05", title: "Report & Improve", description: "Detailed reporting with actionable insights for ongoing improvement." }
                ].map((process, idx) => (
                  <motion.div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex gap-6 items-start" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-5xl font-bold text-primary/30 flex-shrink-0">{process.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Get More Qualified Leads?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Stop wasting ad spend on poor campaigns. Let our PPC experts drive real results with data-driven strategies.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Free PPC Audit
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

export default SearchEngineMarketingPage;
