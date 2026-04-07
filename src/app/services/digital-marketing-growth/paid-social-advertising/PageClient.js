"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const PaidSocialAdvertisingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const platforms = [
    {
      name: 'Meta (Facebook & Instagram)',
      audience: '2.9B+ active users',
      bestFor: 'Brand awareness, lead generation, e-commerce',
      adFormats: ['Feed Posts', 'Stories', 'Reels', 'Video Ads', 'Carousel', 'Collection'],
      avgCPC: '$0.97',
      targeting: 'Demographics, interests, behaviors, custom audiences',
      icon: '📱'
    },
    {
      name: 'TikTok Ads',
      audience: '1B+ active users',
      bestFor: 'Gen Z engagement, viral content, brand awareness',
      adFormats: ['In-Feed Videos', 'Branded Hashtag Challenge', 'TopView', 'Branded Effects'],
      avgCPC: '$1.02',
      targeting: 'Age, gender, interests, device, carrier',
      icon: '🎵'
    },
    {
      name: 'LinkedIn Ads',
      audience: '900M+ professionals',
      bestFor: 'B2B marketing, professional services, recruitment',
      adFormats: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Text Ads'],
      avgCPC: '$5.26',
      targeting: 'Job title, company, industry, skills, education',
      icon: '💼'
    },
    {
      name: 'Twitter Ads',
      audience: '450M+ active users',
      bestFor: 'Real-time engagement, trending topics, thought leadership',
      adFormats: ['Promoted Tweets', 'Promoted Accounts', 'Promoted Trends', 'Twitter Cards'],
      avgCPC: '$0.38',
      targeting: 'Keywords, interests, followers, events',
      icon: '🐦'
    }
  ];

  const campaignTypes = [
    {
      type: 'Brand Awareness',
      objective: 'Increase brand recognition and reach',
      metrics: ['Reach', 'Impressions', 'Brand Lift', 'Recall'],
      strategy: 'Wide targeting, video content, frequency optimization',
      investment: '$2,000 - $10,000/month'
    },
    {
      type: 'Lead Generation',
      objective: 'Capture qualified leads and prospects',
      metrics: ['Cost per Lead', 'Lead Quality Score', 'Conversion Rate'],
      strategy: 'Lead magnets, form optimization, retargeting',
      investment: '$1,500 - $8,000/month'
    },
    {
      type: 'E-commerce Sales',
      objective: 'Drive direct sales and revenue',
      metrics: ['ROAS', 'Cost per Purchase', 'AOV', 'LTV'],
      strategy: 'Product catalogs, dynamic ads, shopping features',
      investment: '$3,000 - $15,000/month'
    },
    {
      type: 'App Promotion',
      objective: 'Increase app downloads and engagement',
      metrics: ['Cost per Install', 'Post-install Events', 'Retention Rate'],
      strategy: 'App install campaigns, deep linking, user journey optimization',
      investment: '$2,500 - $12,000/month'
    }
  ];

  const services = [
    {
      title: 'Campaign Strategy & Planning',
      description: 'Comprehensive strategy development for maximum ROI',
      features: [
        'Audience research and persona development',
        'Platform selection and budget allocation',
        'Creative strategy and messaging framework',
        'Competitor analysis and market positioning',
        'Campaign timeline and milestone planning'
      ]
    },
    {
      title: 'Creative Development & Testing',
      description: 'High-performing ad creatives that convert',
      features: [
        'Ad copy writing and optimization',
        'Visual design and video production',
        'A/B testing and creative iteration',
        'Brand compliance and approval workflow',
        'User-generated content integration'
      ]
    },
    {
      title: 'Advanced Targeting & Audiences',
      description: 'Precision targeting for qualified traffic',
      features: [
        'Custom and lookalike audience creation',
        'Behavioral and interest-based targeting',
        'Retargeting and remarketing campaigns',
        'Exclude audiences and suppression lists',
        'Cross-platform audience synchronization'
      ]
    },
    {
      title: 'Campaign Management & Optimization',
      description: 'Daily monitoring and performance optimization',
      features: [
        'Real-time bid management and optimization',
        'Budget pacing and allocation adjustments',
        'Creative refresh and fatigue management',
        'Placement and device optimization',
        'Conversion tracking and attribution setup'
      ]
    }
  ];

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
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
              <span className="text-primary font-medium text-sm">Paid Social Advertising</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Scale Your Business with 
              <br className="hidden sm:block" />
              <span className="text-primary">High-Converting</span> Social Ads
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Reach your ideal customers across Meta, TikTok, LinkedIn, and Twitter with data-driven campaigns 
              that maximize ROI and drive measurable business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
              >
                Launch Your Campaign
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
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
              { number: '250+', label: 'Campaigns Managed' },
              { number: '4.2x', label: 'Average ROAS' },
              { number: '$2M+', label: 'Ad Spend Managed' },
              { number: '89%', label: 'Client Retention Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'platforms', label: 'Platforms' },
              { id: 'campaigns', label: 'Campaign Types' },
              { id: 'services', label: 'Our Services' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Paid Social Advertising?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Precision Targeting</h3>
                        <p className="text-gray-600">Reach your exact audience with advanced targeting options based on demographics, interests, and behaviors.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Immediate Results</h3>
                        <p className="text-gray-600">Unlike organic growth, paid social delivers instant visibility and measurable results from day one.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Scalable Growth</h3>
                        <p className="text-gray-600">Start small and scale successful campaigns to maximize your marketing investment and business growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Benchmarks</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Average Click-Through Rate</span>
                      <span className="font-bold text-primary">2.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Conversion Rate</span>
                      <span className="font-bold text-primary">4.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Return on Ad Spend</span>
                      <span className="font-bold text-primary">4.2x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cost per Lead Reduction</span>
                      <span className="font-bold text-primary">-35%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'platforms' && (
              <motion.div
                key="platforms"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Platform Expertise</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {platforms.map((platform, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">{platform.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                          <p className="text-primary font-semibold">{platform.audience}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm text-gray-500">Best For: </span>
                          <span className="text-sm text-gray-700">{platform.bestFor}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Average CPC: </span>
                          <span className="text-sm font-semibold text-primary">{platform.avgCPC}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Targeting Options: </span>
                          <span className="text-sm text-gray-700">{platform.targeting}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 block mb-2">Ad Formats:</span>
                          <div className="flex flex-wrap gap-2">
                            {platform.adFormats.map((format, formatIndex) => (
                              <span key={formatIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                {format}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'campaigns' && (
              <motion.div
                key="campaigns"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Campaign Types & Investment Levels</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {campaignTypes.map((campaign, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{campaign.type}</h3>
                      <p className="text-gray-600 mb-6">{campaign.objective}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Key Metrics:</h4>
                          <div className="flex flex-wrap gap-2">
                            {campaign.metrics.map((metric, metricIndex) => (
                              <span key={metricIndex} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Strategy:</h4>
                          <p className="text-sm text-gray-600">{campaign.strategy}</p>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <span className="text-sm text-gray-500">Recommended Investment: </span>
                          <span className="text-sm font-semibold text-primary">{campaign.investment}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Complete Service Suite</h2>
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                        <div className="lg:col-span-2">
                          <div className="grid md:grid-cols-2 gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-center mt-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Scale with Paid Social?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create high-converting campaigns that drive real business results across all major social platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Campaign
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

export default PaidSocialAdvertisingPage;