'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const PerformanceMarketingPage = () => {
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
                <span className="text-gray-900 font-medium">Performance Marketing</span>
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
                  Performance Marketing
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Results-driven marketing where you only pay for measurable outcomes. At SocialHawks, we design and execute performance marketing campaigns that focus on conversions, ROAS, and real business growth—not vanity metrics.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Drive Real Results
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

            {/* Why Performance Marketing */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Performance Marketing Works
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "💰", title: "Pay for Results", desc: "Your budget goes towards actual conversions, not impressions." },
                  { icon: "📊", title: "100% Measurable", desc: "Every campaign is tracked and attributed to real outcomes." },
                  { icon: "🎯", title: "Precision Targeting", desc: "Reach high-intent audiences ready to take action." },
                  { icon: "📈", title: "Scalable Growth", desc: "Successful campaigns can be scaled profitably." },
                  { icon: "🔄", title: "Real-Time Optimization", desc: "Continuous improvement based on performance data." }
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

            {/* Performance Channels */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Performance Marketing Channels
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Paid Search (PPC)", description: "Google and Bing ads targeting high-intent search queries.", icon: "🔍" },
                  { title: "Paid Social", description: "Facebook, Instagram, TikTok, and LinkedIn advertising.", icon: "📱" },
                  { title: "Affiliate Marketing", description: "Partner with publishers who drive qualified traffic.", icon: "🤝" },
                  { title: "Native Advertising", description: "Sponsored content that blends with editorial.", icon: "📰" },
                  { title: "Programmatic Display", description: "Automated ad buying across premium networks.", icon: "🖥️" },
                  { title: "Email Performance", description: "Targeted email campaigns with measurable conversions.", icon: "📧" }
                ].map((channel, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{channel.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{channel.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{channel.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* KPIs We Optimize */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Key Metrics We Optimize
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { metric: "ROAS", desc: "Return on Ad Spend" },
                  { metric: "CPA", desc: "Cost Per Acquisition" },
                  { metric: "CPL", desc: "Cost Per Lead" },
                  { metric: "LTV", desc: "Customer Lifetime Value" },
                  { metric: "CVR", desc: "Conversion Rate" },
                  { metric: "CAC", desc: "Customer Acquisition Cost" },
                  { metric: "AOV", desc: "Average Order Value" },
                  { metric: "MER", desc: "Marketing Efficiency Ratio" }
                ].map((kpi, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-2xl font-bold text-primary mb-2">{kpi.metric}</div>
                    <p className="text-gray-600 text-sm">{kpi.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Approach */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Performance Marketing Approach
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Define Success Metrics", description: "Establish clear KPIs aligned with your business objectives." },
                  { step: "02", title: "Audience Research", description: "Deep analysis of your ideal customer profiles and behaviors." },
                  { step: "03", title: "Channel Selection", description: "Choose the right mix of channels for your goals and audience." },
                  { step: "04", title: "Creative Development", description: "Data-informed ad creative designed for conversion." },
                  { step: "05", title: "Launch & Test", description: "Systematic testing of audiences, creatives, and placements." },
                  { step: "06", title: "Scale Winners", description: "Aggressively scale what works, cut what doesn&apos;t." }
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
                  Ready for Measurable Growth?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Stop guessing and start growing. Our performance marketing strategies deliver real, trackable results for your business.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Performance Analysis
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

export default PerformanceMarketingPage;
