'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const WebHostingPage = () => {
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
                <Link href="/services/web-digital-development" className="hover:text-primary transition-colors">Web & Digital Development</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Web Hosting</span>
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
                  Web Hosting Solutions
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Fast, secure, and reliable web hosting that keeps your website running 24/7. At SocialHawks, we offer hosting solutions from shared to dedicated servers, optimized for performance, security, and scalability to match your business needs.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Hosting Quote
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

            {/* Why Hosting Matters */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Quality Hosting Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "⚡", title: "Speed & Performance", desc: "Fast loading times improve user experience and SEO rankings." },
                  { icon: "🔒", title: "Security", desc: "Protect your website and data from cyber threats and attacks." },
                  { icon: "📈", title: "Uptime Reliability", desc: "99.9% uptime ensures your site is always accessible to visitors." },
                  { icon: "🚀", title: "Scalability", desc: "Easily scale resources as your traffic and business grow." },
                  { icon: "💾", title: "Daily Backups", desc: "Automatic backups protect your data from loss." }
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

            {/* Hosting Types */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Hosting Solutions We Offer
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Shared Hosting", description: "Cost-effective hosting for small websites and blogs with shared server resources.", icon: "🏠" },
                  { title: "VPS Hosting", description: "Virtual Private Servers with dedicated resources for growing businesses.", icon: "🏢" },
                  { title: "Dedicated Servers", description: "Full server resources for high-traffic sites and enterprise applications.", icon: "🏰" },
                  { title: "Cloud Hosting", description: "Scalable cloud infrastructure with pay-as-you-go pricing.", icon: "☁️" },
                  { title: "WordPress Hosting", description: "Optimized hosting specifically tuned for WordPress performance.", icon: "📝" },
                  { title: "E-commerce Hosting", description: "High-performance hosting for online stores with SSL and PCI compliance.", icon: "🛒" }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Hosting Features Included
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "🔐", title: "Free SSL Certificate", desc: "Secure your site with HTTPS" },
                  { icon: "💾", title: "Daily Backups", desc: "Automated daily backup system" },
                  { icon: "🌐", title: "Global CDN", desc: "Fast content delivery worldwide" },
                  { icon: "📧", title: "Email Hosting", desc: "Professional email accounts" },
                  { icon: "🛡️", title: "DDoS Protection", desc: "Advanced threat mitigation" },
                  { icon: "📊", title: "Analytics", desc: "Traffic and performance metrics" },
                  { icon: "🔧", title: "cPanel Access", desc: "Easy server management" },
                  { icon: "💬", title: "24/7 Support", desc: "Expert help anytime" },
                  { icon: "🚀", title: "One-Click Installs", desc: "Quick app deployments" }
                ].map((feature, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Performance Stats */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Performance Guarantee
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { stat: "99.9%", label: "Uptime Guarantee" },
                  { stat: "<200ms", label: "Server Response" },
                  { stat: "24/7", label: "Monitoring" },
                  { stat: "100%", label: "SSD Storage" }
                ].map((item, idx) => (
                  <motion.div key={idx} className="bg-white p-6 rounded-xl text-center shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                    <p className="text-gray-600">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready for Reliable Hosting?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Get fast, secure, and scalable hosting that grows with your business. Let us handle the technical infrastructure while you focus on growth.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Hosting Today
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

export default WebHostingPage;
