'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const PerformanceMaintenancePage = () => {
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
                <span className="text-gray-900 font-medium">Performance & Maintenance</span>
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
                  Website Performance & Maintenance Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Your website needs ongoing care to perform at its best. SocialHawks provides comprehensive performance optimization and maintenance services that keep your website fast, secure, and running smoothly 24/7. From speed optimization to regular updates, we ensure your digital presence never misses a beat.
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
                    Optimize My Website
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

            {/* Why Performance & Maintenance Matters */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Performance & Maintenance Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "⚡", title: "Speed Equals Success", desc: "53% of users abandon sites that take longer than 3 seconds to load." },
                  { icon: "🔒", title: "Security Protection", desc: "Regular updates protect against vulnerabilities and cyber threats." },
                  { icon: "📈", title: "Better SEO Rankings", desc: "Google prioritizes fast, well-maintained websites in search results." },
                  { icon: "💰", title: "Cost Savings", desc: "Preventive maintenance costs less than emergency fixes and downtime." },
                  { icon: "👥", title: "Improved User Experience", desc: "Fast, reliable websites keep visitors engaged and increase conversions." },
                  { icon: "🎯", title: "Competitive Advantage", desc: "Stay ahead with optimized performance while competitors lag behind." }
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

            {/* Our Performance & Maintenance Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Performance & Maintenance Services
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🚀",
                    title: "Speed Optimization",
                    description: "Image compression, code minification, caching implementation, and CDN setup for lightning-fast load times."
                  },
                  {
                    icon: "🔄",
                    title: "Regular Updates",
                    description: "Core system updates, plugin updates, theme updates, and compatibility testing to keep everything current."
                  },
                  {
                    icon: "🛡️",
                    title: "Security Monitoring",
                    description: "24/7 malware scanning, vulnerability patching, firewall configuration, and security hardening."
                  },
                  {
                    icon: "📊",
                    title: "Performance Monitoring",
                    description: "Real-time uptime monitoring, performance metrics tracking, and instant alert notifications."
                  },
                  {
                    icon: "💾",
                    title: "Backup Management",
                    description: "Automated daily backups, secure offsite storage, and quick disaster recovery solutions."
                  },
                  {
                    icon: "🐛",
                    title: "Bug Fixes & Support",
                    description: "Quick resolution of issues, broken link fixes, form testing, and ongoing technical support."
                  },
                  {
                    icon: "📱",
                    title: "Mobile Optimization",
                    description: "Responsive design testing, mobile speed optimization, and cross-device compatibility checks."
                  },
                  {
                    icon: "🔍",
                    title: "SEO Maintenance",
                    description: "Meta tag optimization, sitemap updates, broken link monitoring, and search engine visibility maintenance."
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
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Performance Optimization Areas */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What We Optimize
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "⏱️", title: "Page Load Speed", desc: "Reduce load times to under 2 seconds" },
                  { icon: "🖼️", title: "Image Optimization", desc: "Compress and optimize all images" },
                  { icon: "💻", title: "Code Optimization", desc: "Minify CSS, JS, and HTML files" },
                  { icon: "🌐", title: "CDN Integration", desc: "Global content delivery network setup" },
                  { icon: "🗄️", title: "Database Optimization", desc: "Clean and optimize database queries" },
                  { icon: "📦", title: "Caching Solutions", desc: "Browser and server-side caching" },
                  { icon: "🔌", title: "Plugin Optimization", desc: "Remove unused plugins and optimize active ones" },
                  { icon: "📈", title: "Core Web Vitals", desc: "Improve LCP, FID, and CLS scores" },
                  { icon: "🎯", title: "Resource Loading", desc: "Lazy loading and async script loading" }
                ].map((area, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Maintenance Plans */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Maintenance Plans
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Essential",
                    icon: "🥉",
                    features: [
                      "Weekly backups",
                      "Monthly updates",
                      "Basic security monitoring",
                      "Performance checks",
                      "Email support"
                    ]
                  },
                  {
                    name: "Professional",
                    icon: "🥈",
                    popular: true,
                    features: [
                      "Daily backups",
                      "Weekly updates",
                      "Advanced security monitoring",
                      "Speed optimization",
                      "Priority support",
                      "Monthly reports"
                    ]
                  },
                  {
                    name: "Enterprise",
                    icon: "🥇",
                    features: [
                      "Real-time backups",
                      "Instant updates",
                      "24/7 security monitoring",
                      "Continuous optimization",
                      "Dedicated support",
                      "Custom SLA",
                      "White-label reports"
                    ]
                  }
                ].map((plan, idx) => (
                  <motion.div
                    key={idx}
                    className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {plan.popular && (
                      <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{plan.name}</h3>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                Why Choose SocialHawks for Website Maintenance?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "✅", title: "Proactive Approach", desc: "We prevent problems before they happen with regular monitoring and maintenance." },
                  { icon: "✅", title: "Expert Team", desc: "Experienced developers and system administrators handling your website." },
                  { icon: "✅", title: "Transparent Reporting", desc: "Detailed monthly reports showing all work completed and site performance." },
                  { icon: "✅", title: "Quick Response Time", desc: "Fast turnaround on issues with priority support for urgent matters." },
                  { icon: "✅", title: "Comprehensive Care", desc: "End-to-end maintenance covering performance, security, and functionality." },
                  { icon: "✅", title: "Flexible Plans", desc: "Scalable maintenance plans that grow with your business needs." }
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

            {/* Performance Metrics We Track */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Performance Metrics We Track
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { metric: "99.9%", label: "Uptime Guarantee" },
                  { metric: "<2s", label: "Page Load Time" },
                  { metric: "90+", label: "PageSpeed Score" },
                  { metric: "24/7", label: "Monitoring" },
                  { metric: "A+", label: "Security Rating" },
                  { metric: "100%", label: "Backup Success" },
                  { metric: "<1hr", label: "Response Time" },
                  { metric: "Daily", label: "Security Scans" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
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
                Industries We Serve
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "E-commerce",
                  "Healthcare",
                  "Education",
                  "Finance",
                  "Real Estate",
                  "Travel & Tourism",
                  "Media & Entertainment",
                  "Corporate",
                  "Non-Profit",
                  "SaaS Platforms",
                  "Legal Services",
                  "Hospitality"
                ].map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-4 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300"
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
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Optimize Your Website Performance?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Don&apos;t let a slow or poorly maintained website cost you customers. Partner with SocialHawks for professional performance optimization and ongoing maintenance that keeps your site running at peak performance.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Contact us today for a free website performance audit!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Optimize My Website
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

export default PerformanceMaintenancePage;
