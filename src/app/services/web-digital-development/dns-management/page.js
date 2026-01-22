'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const DNSManagementPage = () => {
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
                <span className="text-gray-900 font-medium">DNS Management</span>
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
                  DNS Management & Configuration
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Reliable DNS management is the backbone of your online presence. At SocialHawks, we provide expert DNS configuration and management services that ensure your domain points to the right servers, your emails reach their destination, and your website loads fast for users worldwide.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Configure My DNS
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

            {/* Why DNS Matters */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Proper DNS Management Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "⚡", title: "Faster Resolution", desc: "Optimized DNS means faster website loading for your visitors." },
                  { icon: "🛡️", title: "Security", desc: "Protect against DNS hijacking, spoofing, and DDoS attacks." },
                  { icon: "📧", title: "Email Deliverability", desc: "Correct MX records ensure your emails reach their destination." },
                  { icon: "🌍", title: "Global Performance", desc: "Geo-distributed DNS servers for worldwide accessibility." },
                  { icon: "⏱️", title: "Zero Downtime", desc: "Proper DNS management prevents service interruptions." }
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

            {/* DNS Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our DNS Services
              </motion.h2>

              <div className="space-y-6">
                {[
                  { title: "DNS Setup & Configuration", description: "Complete DNS setup including A records, CNAME, MX, TXT, and other record types." },
                  { title: "DNS Migration", description: "Seamless migration of DNS from one provider to another with zero downtime." },
                  { title: "Email DNS Configuration", description: "SPF, DKIM, and DMARC setup for improved email deliverability and security." },
                  { title: "DNS Security (DNSSEC)", description: "Implementation of DNS Security Extensions to protect against cache poisoning." },
                  { title: "Load Balancing", description: "DNS-based load balancing to distribute traffic across multiple servers." },
                  { title: "Monitoring & Alerting", description: "24/7 DNS monitoring with instant alerts for any issues or anomalies." }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* DNS Record Types */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                DNS Record Types We Manage
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { type: "A Record", desc: "Points domain to IPv4 address" },
                  { type: "AAAA Record", desc: "Points domain to IPv6 address" },
                  { type: "CNAME Record", desc: "Alias one domain to another" },
                  { type: "MX Record", desc: "Mail server configuration" },
                  { type: "TXT Record", desc: "Text records for verification" },
                  { type: "NS Record", desc: "Nameserver delegation" },
                  { type: "SPF Record", desc: "Email sender verification" },
                  { type: "DKIM Record", desc: "Email authentication" },
                  { type: "DMARC Record", desc: "Email policy enforcement" }
                ].map((record, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    <h3 className="font-bold text-primary mb-2 text-lg">{record.type}</h3>
                    <p className="text-gray-600">{record.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Need Expert DNS Configuration?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let our experts handle your DNS setup and management so you can focus on running your business without technical headaches.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get DNS Help
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

export default DNSManagementPage;
