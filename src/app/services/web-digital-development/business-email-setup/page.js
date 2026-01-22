'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const BusinessEmailSetupPage = () => {
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
                <span className="text-gray-900 font-medium">Business Email Setup</span>
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
                  Professional Business Email Setup
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Establish credibility with professional business email addresses. At SocialHawks, we set up custom email solutions that match your domain (you@yourbusiness.com), ensuring reliable delivery, security, and seamless integration with your workflow.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Professional Email
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

            {/* Why Business Email */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why You Need Professional Business Email
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "💼", title: "Professional Image", desc: "Custom emails like info@yourbrand.com build trust and credibility." },
                  { icon: "🛡️", title: "Enhanced Security", desc: "Enterprise-grade protection against spam, phishing, and malware." },
                  { icon: "📱", title: "Access Anywhere", desc: "Check emails on any device with mobile apps and webmail." },
                  { icon: "🔗", title: "Brand Consistency", desc: "Every email reinforces your brand identity." },
                  { icon: "📊", title: "Admin Controls", desc: "Centralized management of all company email accounts." }
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

            {/* Email Solutions */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Email Solutions We Offer
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Google Workspace", description: "Gmail, Calendar, Drive, Meet, and more with your custom domain.", icon: "📧" },
                  { title: "Microsoft 365", description: "Outlook, Teams, OneDrive, and Office apps for business.", icon: "📬" },
                  { title: "Zoho Mail", description: "Affordable professional email with collaboration tools.", icon: "✉️" },
                  { title: "Custom SMTP Setup", description: "Self-hosted email servers for complete control.", icon: "🖥️" }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                What&apos;s Included in Our Setup
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "⚙️", title: "Account Setup", desc: "Complete email account creation" },
                  { icon: "🔧", title: "DNS Configuration", desc: "MX, SPF, DKIM, DMARC setup" },
                  { icon: "📥", title: "Email Migration", desc: "Transfer existing emails safely" },
                  { icon: "📱", title: "Mobile Setup", desc: "Configure on all devices" },
                  { icon: "🔐", title: "Security Setup", desc: "2FA and security policies" },
                  { icon: "📚", title: "User Training", desc: "Guide your team to get started" },
                  { icon: "✉️", title: "Email Signatures", desc: "Professional signature templates" },
                  { icon: "🔄", title: "Auto-Responders", desc: "Out-of-office setup" },
                  { icon: "💬", title: "Ongoing Support", desc: "Help when you need it" }
                ].map((feature, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready for Professional Email?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Stop using generic email addresses. Get professional business email that builds trust and keeps your communications secure.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Set Up My Email
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

export default BusinessEmailSetupPage;
