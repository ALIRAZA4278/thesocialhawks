'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const InfographicsDataVisualizationPage = () => {
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
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <span>/</span>
                <Link href="/services/graphic-design" className="hover:text-primary transition-colors">Graphic Design</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Infographics & Data Visualization</span>
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
                  Infographics & Data Visualization
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Transform complex data into compelling visual stories that your audience actually understands and shares. At SocialHawks, we design stunning infographics and data visualizations that simplify information, boost engagement, and position your brand as a thought leader.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Infographic Design
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

            {/* Why Infographics Matter */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Infographics Are Essential for Your Business
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                People process visual information 60,000 times faster than text. Infographics transform dense data, complex processes, and key insights into shareable visual content that drives engagement, builds authority, and makes your message stick.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "📖", text: "Visual storytelling — make complex data instantly understandable." },
                  { icon: "🔍", text: "Data clarity — turn raw numbers into meaningful insights." },
                  { icon: "🔗", text: "Highly shareable — infographics get 3x more shares than other content." },
                  { icon: "📈", text: "Boost engagement — visual content increases time spent on page by 80%." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Infographic Services */}
            <section className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Infographic & Data Visualization Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Statistical Infographics",
                    description: "Turn survey results, research data, and business metrics into visually compelling infographics with charts, graphs, and data points that tell a clear story at a glance."
                  },
                  {
                    title: "Process & Timeline Infographics",
                    description: "Visualize workflows, project timelines, and step-by-step processes with clean, intuitive layouts that guide viewers through information in a logical sequence."
                  },
                  {
                    title: "Comparison & List Infographics",
                    description: "Side-by-side comparisons, feature breakdowns, and ranked lists designed to help your audience make informed decisions quickly and easily."
                  },
                  {
                    title: "Interactive Data Dashboards",
                    description: "Dynamic data visualization designs for dashboards and reports that present real-time metrics, KPIs, and analytics in an engaging, easy-to-interpret format."
                  }
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
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
                Why Choose SocialHawks for Infographic Design?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "📊", title: "Data Expertise", desc: "We know how to interpret and present data in the most impactful way." },
                  { icon: "🎨", title: "Creative Excellence", desc: "Beautiful designs that balance aesthetics with information clarity." },
                  { icon: "🔬", title: "Research-Backed", desc: "Every infographic is built on verified data and accurate information." },
                  { icon: "📱", title: "Multi-Format Delivery", desc: "Optimized for web, social media, print, and presentations." },
                  { icon: "⚡", title: "Fast Turnaround", desc: "Professional infographics delivered within 3-5 business days." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Industries */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Industries We Create Infographics For
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Healthcare & Research",
                  "Finance & Banking",
                  "Technology & SaaS",
                  "Education & Academia",
                  "Government & NGOs",
                  "Marketing & Media",
                  "Manufacturing & Logistics"
                ].map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-4 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary transition-all duration-300"
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

            {/* Our Process */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Infographic Design Process
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "01",
                    title: "Data Collection & Analysis",
                    description: "Gathering your data, identifying key insights, and planning the visual narrative."
                  },
                  {
                    step: "02",
                    title: "Wireframe & Structure",
                    description: "Creating the information hierarchy and layout flow for maximum clarity."
                  },
                  {
                    step: "03",
                    title: "Visual Design",
                    description: "Bringing the data to life with charts, icons, illustrations, and branded styling."
                  },
                  {
                    step: "04",
                    title: "Review & Delivery",
                    description: "Final revisions and delivery in all required formats optimized for your needs."
                  }
                ].map((process, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-5xl font-bold text-primary/50 mb-4">{process.step}</div>
                    <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                    <p className="text-gray-300">{process.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Turn Your Data Into Visual Stories?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let SocialHawks transform your complex data into stunning infographics that inform, engage, and inspire your audience to take action.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Get a free infographic design consultation today!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Infographic Design
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

export default InfographicsDataVisualizationPage;
