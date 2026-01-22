'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const ConversionRateOptimizationPage = () => {
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
                <span className="text-gray-900 font-medium">Conversion Rate Optimization</span>
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
                  Conversion Rate Optimization
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Turn more visitors into customers without spending more on traffic. At SocialHawks, we use data-driven CRO strategies to optimize your website, landing pages, and funnels for maximum conversions and revenue.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Boost My Conversions
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

            {/* Why CRO */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why CRO is Essential for Growth
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "💰", title: "Maximize Existing Traffic", desc: "Get more value from visitors you&apos;re already paying to acquire." },
                  { icon: "📈", title: "Increase Revenue", desc: "Small conversion improvements lead to significant revenue gains." },
                  { icon: "🎯", title: "Better User Experience", desc: "CRO removes friction and improves customer satisfaction." },
                  { icon: "📊", title: "Data-Driven Decisions", desc: "Replace guesswork with tested, proven improvements." },
                  { icon: "💡", title: "Customer Insights", desc: "Learn what motivates your visitors to take action." }
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

            {/* CRO Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our CRO Services
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Conversion Audit", description: "Comprehensive analysis of your current conversion funnel and opportunities.", icon: "🔍" },
                  { title: "A/B Testing", description: "Systematic testing of headlines, CTAs, layouts, and more.", icon: "⚖️" },
                  { title: "Landing Page Optimization", description: "High-converting landing pages designed for specific campaigns.", icon: "📄" },
                  { title: "User Research", description: "Heatmaps, session recordings, and surveys to understand user behavior.", icon: "👥" },
                  { title: "Form Optimization", description: "Reduce form abandonment and increase completion rates.", icon: "📝" },
                  { title: "Checkout Optimization", description: "Streamline checkout flow to reduce cart abandonment.", icon: "🛒" }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* What We Test */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Elements We Test & Optimize
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Headlines & Copy",
                  "Call-to-Action Buttons",
                  "Page Layout",
                  "Images & Videos",
                  "Form Fields",
                  "Pricing Display",
                  "Trust Signals",
                  "Navigation",
                  "Social Proof",
                  "Mobile Experience",
                  "Page Speed",
                  "Checkout Flow"
                ].map((element, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-4 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }} whileHover={{ scale: 1.05 }}>
                    {element}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CRO Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our CRO Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Data Collection", description: "Gather quantitative and qualitative data about user behavior." },
                  { step: "02", title: "Analysis & Insights", description: "Identify conversion blockers and optimization opportunities." },
                  { step: "03", title: "Hypothesis Formation", description: "Create data-backed hypotheses for testing." },
                  { step: "04", title: "Test Design", description: "Design A/B or multivariate tests with clear success metrics." },
                  { step: "05", title: "Implementation", description: "Launch tests and monitor for statistical significance." },
                  { step: "06", title: "Analysis & Iteration", description: "Learn from results and continue the optimization cycle." }
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
                  Ready to Increase Your Conversions?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Don&apos;t leave money on the table. Let us help you convert more of your existing traffic into paying customers.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Free CRO Audit
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

export default ConversionRateOptimizationPage;
