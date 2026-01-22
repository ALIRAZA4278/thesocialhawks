'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const SocialMediaManagementPage = () => {
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
                <span className="text-gray-900 font-medium">Social Media Management</span>
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
                  Strategic Social Media Management
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Build a powerful social presence that engages your audience and drives business growth. At SocialHawks, we create and manage compelling social media strategies that turn followers into loyal customers across all major platforms.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Boost My Social Presence
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

            {/* Why Social Media */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Strategic Social Media Management Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🎯", title: "Brand Awareness", desc: "Increase visibility and reach new audiences every day." },
                  { icon: "💬", title: "Community Building", desc: "Create engaged communities around your brand." },
                  { icon: "🔗", title: "Website Traffic", desc: "Drive qualified traffic to your website and landing pages." },
                  { icon: "💰", title: "Lead Generation", desc: "Convert social followers into paying customers." },
                  { icon: "🤝", title: "Customer Loyalty", desc: "Build lasting relationships with your audience." }
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

            {/* Platforms We Manage */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Platforms We Manage
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { platform: "Facebook", icon: "📘", desc: "Community & Ads" },
                  { platform: "Instagram", icon: "📸", desc: "Visual Storytelling" },
                  { platform: "TikTok", icon: "🎵", desc: "Viral Content" },
                  { platform: "LinkedIn", icon: "💼", desc: "B2B Marketing" },
                  { platform: "Twitter/X", icon: "🐦", desc: "Real-time Engagement" },
                  { platform: "YouTube", icon: "▶️", desc: "Video Marketing" },
                  { platform: "Pinterest", icon: "📌", desc: "Visual Discovery" },
                  { platform: "Threads", icon: "🧵", desc: "Text-based Content" }
                ].map((item, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-bold mb-1">{item.platform}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Services */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Social Media Services
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Content Strategy & Planning", desc: "Custom content calendars aligned with your goals and audience interests." },
                  { title: "Content Creation", desc: "Eye-catching graphics, videos, reels, and copy that stops the scroll." },
                  { title: "Community Management", desc: "Active engagement with your audience, responding to comments and DMs." },
                  { title: "Hashtag Research", desc: "Strategic hashtag selection to maximize reach and discoverability." },
                  { title: "Competitor Analysis", desc: "Monitor competitors and identify opportunities for differentiation." },
                  { title: "Performance Reporting", desc: "Monthly reports with insights and recommendations for improvement." }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Management Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Audit & Strategy", description: "We analyze your current presence and develop a custom strategy." },
                  { step: "02", title: "Content Planning", description: "Create monthly content calendars with themes and posting schedules." },
                  { step: "03", title: "Content Creation", description: "Design and produce engaging content tailored to each platform." },
                  { step: "04", title: "Publishing & Engagement", description: "Schedule posts and actively engage with your community." },
                  { step: "05", title: "Analysis & Optimization", description: "Track performance and continuously optimize for better results." }
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
                  Ready to Dominate Social Media?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let us handle your social media while you focus on running your business. Get consistent, engaging content that grows your brand.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Social Media Management
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

export default SocialMediaManagementPage;
