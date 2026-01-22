'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const DomainRegistrationPage = () => {
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
                <span className="text-gray-900 font-medium">Domain Registration</span>
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
                  Domain Registration & Strategy
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Your domain name is your digital identity. At SocialHawks, we help you secure the perfect domain that reflects your brand, improves discoverability, and builds trust with your audience. From registration to strategic domain management, we&apos;ve got you covered.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Secure My Domain
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

            {/* Why Domain Matters */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Your Domain Name Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🎯", title: "Brand Identity", desc: "Your domain is often the first impression customers have of your brand." },
                  { icon: "🔍", title: "SEO Impact", desc: "A relevant domain name can improve your search engine rankings." },
                  { icon: "🛡️", title: "Brand Protection", desc: "Secure your brand name before competitors or cybersquatters do." },
                  { icon: "💼", title: "Professional Credibility", desc: "A custom domain builds trust and legitimacy for your business." },
                  { icon: "📧", title: "Professional Email", desc: "Enable branded email addresses like you@yourbusiness.com." }
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

            {/* Our Domain Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Domain Services
              </motion.h2>

              <div className="space-y-6">
                {[
                  { title: "Domain Name Search & Registration", description: "Find and register the perfect domain name with support for all major TLDs (.com, .net, .org, .io, and more)." },
                  { title: "Domain Strategy Consultation", description: "Expert advice on choosing domain names that align with your brand and business goals." },
                  { title: "Domain Portfolio Management", description: "Manage multiple domains, renewals, and transfers from a single dashboard." },
                  { title: "Domain Transfer Services", description: "Seamless transfer of existing domains to our managed services with zero downtime." },
                  { title: "Premium Domain Acquisition", description: "Help acquiring premium or already-registered domain names for your brand." },
                  { title: "Domain Privacy Protection", description: "WHOIS privacy to protect your personal information from public databases." }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Domain Extensions */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Popular Domain Extensions We Support
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[".com", ".net", ".org", ".io", ".co", ".tech", ".store", ".online", ".site", ".app", ".dev", ".ai"].map((ext, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-4 rounded-xl text-center font-bold text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    {ext}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Domain Strategy Tips */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Domain Selection Best Practices
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "✅", title: "Keep It Short", desc: "Shorter domains are easier to remember and type." },
                  { icon: "✅", title: "Make It Memorable", desc: "Choose a name that sticks in people&apos;s minds." },
                  { icon: "✅", title: "Avoid Hyphens & Numbers", desc: "They can cause confusion and typos." },
                  { icon: "✅", title: "Use Keywords Wisely", desc: "Include relevant keywords for SEO when possible." },
                  { icon: "✅", title: "Check Trademarks", desc: "Ensure your domain doesn&apos;t infringe on existing trademarks." },
                  { icon: "✅", title: "Secure Variations", desc: "Register common misspellings and alternative TLDs." }
                ].map((tip, idx) => (
                  <motion.div key={idx} className="bg-white p-6 rounded-xl shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{tip.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-700">{tip.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Claim Your Digital Identity?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Don&apos;t let someone else take your perfect domain. Let us help you find, register, and manage the ideal domain for your brand.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started Today
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

export default DomainRegistrationPage;
