'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const SocialMediaStoryTemplatesPage = () => {
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
                <span className="text-gray-900 font-medium">Social Media Story Templates</span>
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
                  Social Media Story Templates
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Engage your audience with beautifully designed story templates for Instagram, Facebook, TikTok, and more. At SocialHawks, we create branded, reusable story templates that keep your content consistent, save your team hours of work, and drive higher engagement across every platform.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Story Templates
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

            {/* Trust Section */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Professional Story Templates Matter
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Stories are the most consumed content format on social media, with over 500 million daily users on Instagram alone. Custom story templates ensure your brand stands out in this fast-paced, vertical-first environment while maintaining consistency across all your story content.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "📱", text: "500M+ daily story viewers — tap into the most active content format." },
                  { icon: "⏰", text: "Save hours — reusable templates speed up your content creation workflow." },
                  { icon: "🎨", text: "Brand consistency — every story reinforces your visual identity." },
                  { icon: "📈", text: "Higher engagement — branded stories get 15-25% more interactions." }
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

            {/* Services Section */}
            <section className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Story Template Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  { title: "Instagram Story Templates", description: "Custom-branded Instagram Story templates for announcements, product showcases, Q&As, polls, testimonials, and daily content. Designed for easy editing in Canva or Photoshop." },
                  { title: "Facebook Story Templates", description: "Optimized Facebook Story designs that capture attention in the stories feed. Perfect for promotions, events, behind-the-scenes content, and community engagement." },
                  { title: "TikTok & Reels Cover Templates", description: "Eye-catching cover templates for TikTok videos and Instagram Reels that maintain brand consistency and entice viewers to watch your short-form content." },
                  { title: "Story Highlight Cover Icons", description: "Beautiful, cohesive highlight cover icons that organize your Instagram profile and give visitors a professional first impression of your brand." }
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
                Why Choose SocialHawks for Story Templates?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "✏️", title: "Easy to Edit", desc: "Templates delivered in editable formats — update text, images, and colors yourself." },
                  { icon: "🎯", title: "Platform-Optimized", desc: "Designed to exact specifications for each social media platform." },
                  { icon: "🔄", title: "Reusable & Scalable", desc: "Create weeks of content from a single template set." },
                  { icon: "🎨", title: "On-Brand Design", desc: "Every template reflects your brand colors, fonts, and visual style." },
                  { icon: "⚡", title: "Quick Delivery", desc: "Complete story template sets delivered within 2-3 business days." }
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
                Industries We Create Story Templates For
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["Fashion & Beauty", "Food & Restaurant", "Fitness & Wellness", "E-commerce & Retail", "Real Estate", "Travel & Lifestyle", "Coaches & Consultants"].map((industry, idx) => (
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

            {/* Process */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Story Template Design Process
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Brand Analysis", description: "Understanding your brand identity, content themes, and story goals." },
                  { step: "02", title: "Template Planning", description: "Mapping out template categories and layouts for your content needs." },
                  { step: "03", title: "Design & Customize", description: "Creating branded templates with your colors, fonts, and visual elements." },
                  { step: "04", title: "Deliver & Train", description: "Providing editable files with a guide on how to customize each template." }
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
                  Ready to Elevate Your Story Content?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Get branded story templates that save time, boost engagement, and keep your social media presence looking polished and professional every single day.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Get a free consultation today!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Story Templates
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

export default SocialMediaStoryTemplatesPage;
