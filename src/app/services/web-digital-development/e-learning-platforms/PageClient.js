'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const ELearningPlatformsPage = () => {
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
                <span className="text-gray-900 font-medium">E-learning Platforms</span>
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
                  E-learning Platforms & Marketplaces
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Transform education with powerful e-learning platforms and online marketplaces. At SocialHawks, we build scalable learning management systems (LMS), course platforms, and educational marketplaces that engage learners and drive knowledge sharing across the globe.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Build My E-learning Platform
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

            {/* Why E-learning Platforms */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Invest in E-learning Platform Development?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🌍", title: "Global Reach", desc: "Deliver education to learners anywhere in the world, 24/7." },
                  { icon: "📈", title: "Scalable Revenue", desc: "Create recurring income through subscriptions and course sales." },
                  { icon: "🎯", title: "Personalized Learning", desc: "Adaptive learning paths tailored to individual student needs." },
                  { icon: "📊", title: "Analytics & Insights", desc: "Track student progress and optimize course content with data." },
                  { icon: "💰", title: "Cost Effective", desc: "Reduce overhead compared to traditional education delivery." }
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

            {/* Our E-learning Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our E-learning Development Services
              </motion.h2>

              <div className="space-y-6">
                {[
                  { title: "Learning Management Systems (LMS)", description: "Custom LMS platforms with course management, student tracking, assessments, and certification features." },
                  { title: "Online Course Marketplaces", description: "Multi-vendor platforms where educators can create, publish, and sell courses to a global audience." },
                  { title: "Corporate Training Platforms", description: "Enterprise solutions for employee onboarding, compliance training, and skill development." },
                  { title: "Virtual Classroom Solutions", description: "Live video conferencing, interactive whiteboards, and real-time collaboration tools for online teaching." },
                  { title: "Mobile Learning Apps", description: "Native iOS and Android apps for learning on-the-go with offline access capabilities." }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Platform Features We Build
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "📚", title: "Course Builder", desc: "Drag-and-drop course creation tools" },
                  { icon: "🎥", title: "Video Hosting", desc: "Secure video streaming and hosting" },
                  { icon: "📝", title: "Assessments", desc: "Quizzes, exams, and assignments" },
                  { icon: "🏆", title: "Certificates", desc: "Automated certificate generation" },
                  { icon: "💳", title: "Payment Integration", desc: "Stripe, PayPal, and local gateways" },
                  { icon: "📱", title: "Mobile Responsive", desc: "Learn on any device seamlessly" },
                  { icon: "🔔", title: "Notifications", desc: "Email and push notifications" },
                  { icon: "👥", title: "Community Features", desc: "Forums, discussions, and groups" },
                  { icon: "📊", title: "Analytics Dashboard", desc: "Comprehensive reporting tools" }
                ].map((feature, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Development Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Development Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Planning", description: "Understanding your educational goals, target audience, and platform requirements." },
                  { step: "02", title: "UX/UI Design", description: "Creating intuitive interfaces that enhance the learning experience." },
                  { step: "03", title: "Development", description: "Building robust, scalable platforms with modern technologies." },
                  { step: "04", title: "Content Integration", description: "Setting up course structures and migrating existing content." },
                  { step: "05", title: "Testing & QA", description: "Rigorous testing across devices and user scenarios." },
                  { step: "06", title: "Launch & Support", description: "Deployment, training, and ongoing maintenance." }
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

            {/* Industries */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Industries We Serve
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["K-12 Education", "Higher Education", "Corporate Training", "Professional Certification", "Language Learning", "Skill Development", "Healthcare Training", "Fitness & Wellness"].map((industry, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-4 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    {industry}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Transform Education?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Build a powerful e-learning platform that engages learners, scales globally, and generates sustainable revenue for your educational business.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Start My E-learning Project
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

export default ELearningPlatformsPage;
