'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const SSLCertificatePage = () => {
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
                <span className="text-gray-900 font-medium">SSL Certificate</span>
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
                  SSL/TLS Certificate Installation
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Secure your website with SSL/TLS certificates that encrypt data, build visitor trust, and boost SEO rankings. At SocialHawks, we handle everything from certificate selection to installation and renewal management.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Secure My Website
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

            {/* Why SSL Matters */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why SSL Certificates Are Essential
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🔒", title: "Data Encryption", desc: "Protect sensitive data transmitted between users and your server." },
                  { icon: "✅", title: "Trust Indicators", desc: "Display the padlock icon and HTTPS that visitors expect to see." },
                  { icon: "📈", title: "SEO Boost", desc: "Google ranks HTTPS websites higher in search results." },
                  { icon: "🛡️", title: "Phishing Protection", desc: "SSL certificates help verify your site&apos;s authenticity." },
                  { icon: "💳", title: "PCI Compliance", desc: "Required for accepting online payments securely." }
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

            {/* SSL Types */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Types of SSL Certificates
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Domain Validation (DV)", description: "Basic encryption for blogs and small websites. Quick issuance within minutes.", icon: "🔐", best: "Best for: Personal sites, blogs" },
                  { title: "Organization Validation (OV)", description: "Higher trust level with business verification. Displays company info in certificate.", icon: "🏢", best: "Best for: Business websites" },
                  { title: "Extended Validation (EV)", description: "Highest level of trust with extensive verification. Shows company name in browser.", icon: "🏆", best: "Best for: E-commerce, banks" }
                ].map((cert, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{cert.description}</p>
                    <p className="text-primary text-sm font-medium">{cert.best}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Special SSL Types */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Specialized SSL Solutions
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "🌐", title: "Wildcard SSL", desc: "Secure unlimited subdomains with a single certificate (*.yourdomain.com)." },
                  { icon: "📋", title: "Multi-Domain SSL (SAN)", desc: "Protect multiple different domains with one certificate." },
                  { icon: "💻", title: "Code Signing", desc: "Sign software and applications to verify authenticity." },
                  { icon: "📧", title: "Email Certificates", desc: "Secure email communications with S/MIME certificates." }
                ].map((item, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.02 }}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our SSL Installation Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Assessment", description: "We evaluate your needs and recommend the right SSL certificate type." },
                  { step: "02", title: "Certificate Acquisition", description: "We obtain the certificate from trusted Certificate Authorities." },
                  { step: "03", title: "Installation", description: "Expert installation on your server with proper configuration." },
                  { step: "04", title: "Testing & Verification", description: "Thorough testing to ensure everything works perfectly." },
                  { step: "05", title: "Ongoing Management", description: "Renewal reminders and management to prevent expiration." }
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
                  Ready to Secure Your Website?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Don&apos;t let &quot;Not Secure&quot; warnings drive visitors away. Get SSL protection today and build trust with every visitor.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get SSL Certificate
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

export default SSLCertificatePage;
