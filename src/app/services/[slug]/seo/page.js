"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';


const milestones = [
  {
    id: 1,
    title: 'Keywords Research',
    short: 'Identify priority keywords and map search intent.',
    bullets: [
      'Keywords Research',
      'Keywords Approval'
    ],
    icon: 'magnify'
  },
  {
    id: 2,
    title: 'Audit & Optimization',
    short: 'Technical and on-page improvements to prepare your site for growth.',
    bullets: [
      'On-Page Audit',
      'On-Page Optimization',
      'H1 Heading, Page Speed Optimization, HTML, CSS, JS Minification, Analytics Code, Search Console Code, XML Sitemap, Images Sitemap, Robots.txt file.'
    ],
    icon: 'target'
  },
  {
    id: 3,
    title: 'Content Optimization',
    short: 'Create and optimise content that converts and ranks.',
    bullets: [
      'Content Optimization',
      'Keywords Targeting',
      'Creation of Relevant Pages, Metadata, Meta tags, Web Content Creation, Existing Content Optimization.'
    ],
    icon: 'wrench'
  },
  {
    id: 4,
    title: 'Link Building',
    short: 'Authoritative link acquisition and profile building.',
    bullets: [
      'Business Profile Creation',
      'Profile Creation',
      'Guest Posting',
      'Bookmarking',
      'Blog Posting'
    ],
    icon: 'link'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 }
};

const SEOMilestonesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, var(--primary) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6"
            >
              <span className="text-white font-medium text-sm">SEO Campaign Milestones</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Proven <span className="text-primary">SEO Process</span>
              <br className="hidden sm:block" />
              That Delivers Results
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A systematic 4-stage approach designed to boost your search rankings, 
              increase organic traffic, and drive qualified leads to your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {[
              { number: '150+', label: 'SEO Campaigns' },
              { number: '95%', label: 'Success Rate' },
              { number: '300%', label: 'Avg. Traffic Increase' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Milestones Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                variants={item}
                layout
                className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {milestone.icon === 'magnify' && (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"></path>
                          </svg>
                        )}
                        {milestone.icon === 'target' && (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        )}
                        {milestone.icon === 'wrench' && (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        )}
                        {milestone.icon === 'link' && (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm -mt-3 ml-4 shadow-md">
                        {milestone.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{milestone.short}</p>
                      
                      <button
                        onClick={() => toggleCard(milestone.id)}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
                      >
                        {expandedCard === milestone.id ? 'Hide Details' : 'View Details'}
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: expandedCard === milestone.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </motion.svg>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedCard === milestone.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pt-6 border-t border-gray-200 overflow-hidden"
                      >
                        <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                        <div className="space-y-3">
                          {milestone.bullets.map((bullet, bulletIndex) => (
                            <motion.div
                              key={bulletIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: bulletIndex * 0.05, duration: 0.2 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm leading-relaxed">{bullet}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our proven SEO methodology drive qualified traffic and boost your online visibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your SEO Campaign
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
              <Link 
                href="/services/digital-marketing-growth" 
                className="inline-flex items-center gap-2 bg-white/10 text-gray-300 border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Back to Digital Marketing
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Contact />
    </div>
  );
};

export default SEOMilestonesPage;
