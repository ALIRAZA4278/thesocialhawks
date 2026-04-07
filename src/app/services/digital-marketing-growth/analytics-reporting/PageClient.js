'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const AnalyticsReportingPage = () => {
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
                <span className="text-gray-900 font-medium">Analytics & Reporting</span>
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
                  Analytics & Performance Reporting
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Make data-driven decisions with comprehensive analytics and reporting. At SocialHawks, we set up tracking, create custom dashboards, and deliver actionable insights that help you understand performance and optimize for growth.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Clear Insights
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

            {/* Why Analytics */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Analytics & Reporting Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🎯", title: "Informed Decisions", desc: "Replace gut feelings with data-backed strategies." },
                  { icon: "📈", title: "Track ROI", desc: "Understand exactly what&apos;s working and what&apos;s not." },
                  { icon: "🔍", title: "Identify Opportunities", desc: "Discover hidden growth opportunities in your data." },
                  { icon: "⚡", title: "Faster Optimization", desc: "Quickly identify and fix underperforming areas." },
                  { icon: "💡", title: "Customer Understanding", desc: "Learn how users interact with your business." }
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

            {/* Analytics Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Analytics Services
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Analytics Setup", description: "Google Analytics 4, Tag Manager, and conversion tracking implementation.", icon: "⚙️" },
                  { title: "Custom Dashboards", description: "Real-time dashboards tailored to your KPIs and business goals.", icon: "📊" },
                  { title: "Attribution Modeling", description: "Understand the customer journey and channel contribution.", icon: "🔗" },
                  { title: "E-commerce Tracking", description: "Detailed revenue, product, and shopping behavior analytics.", icon: "🛒" },
                  { title: "Monthly Reports", description: "Comprehensive performance reports with insights and recommendations.", icon: "📋" },
                  { title: "Data Visualization", description: "Clear, actionable visualizations that tell the story of your data.", icon: "📈" }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tools We Use */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Analytics Tools We Work With
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Google Analytics 4",
                  "Google Tag Manager",
                  "Google Looker Studio",
                  "Meta Pixel",
                  "Hotjar",
                  "Mixpanel",
                  "Amplitude",
                  "Segment",
                  "Supermetrics",
                  "Tableau",
                  "Power BI",
                  "Custom APIs"
                ].map((tool, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-4 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }} whileHover={{ scale: 1.05 }}>
                    {tool}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* What We Track */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                What We Track & Report
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { category: "Website Performance", items: ["Traffic Sources", "User Behavior", "Page Performance", "Bounce Rates"] },
                  { category: "Marketing Metrics", items: ["Campaign ROI", "Channel Attribution", "Cost Per Acquisition", "Customer Lifetime Value"] },
                  { category: "Conversion Metrics", items: ["Conversion Rates", "Goal Completions", "Funnel Analysis", "Revenue Tracking"] }
                ].map((section, idx) => (
                  <motion.div key={idx} className="bg-white p-6 rounded-xl shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <h3 className="font-bold text-primary mb-4 text-lg">{section.category}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready for Data-Driven Growth?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Stop flying blind. Get clear visibility into your marketing performance and make smarter decisions with better data.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Analytics Setup
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

export default AnalyticsReportingPage;
