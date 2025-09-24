"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const InfluencerPartnershipsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const influencerTiers = [
    {
      tier: 'Nano Influencers',
      followers: '1K-10K',
      engagement: '2-8%',
      bestFor: 'Local businesses, niche markets',
      avgCost: '$50-$500',
      icon: '👤'
    },
    {
      tier: 'Micro Influencers',
      followers: '10K-100K',
      engagement: '1-5%',
      bestFor: 'Product launches, brand awareness',
      avgCost: '$500-$5K',
      icon: '👥'
    },
    {
      tier: 'Macro Influencers',
      followers: '100K-1M',
      engagement: '0.5-3%',
      bestFor: 'Mass market campaigns',
      avgCost: '$5K-$50K',
      icon: '🌟'
    },
    {
      tier: 'Mega Influencers',
      followers: '1M+',
      engagement: '0.5-2%',
      bestFor: 'Brand partnerships, viral campaigns',
      avgCost: '$50K+',
      icon: '🚀'
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      description: 'Visual storytelling, lifestyle content, and product showcases',
      audience: '18-34 years, lifestyle-focused',
      contentTypes: ['Posts', 'Stories', 'Reels', 'IGTV'],
      icon: '📸'
    },
    {
      name: 'TikTok',
      description: 'Short-form video content, viral trends, and Gen Z engagement',
      audience: '16-24 years, entertainment-seeking',
      contentTypes: ['Short Videos', 'Challenges', 'Duets', 'Live Streams'],
      icon: '🎵'
    },
    {
      name: 'YouTube',
      description: 'Long-form content, tutorials, and in-depth reviews',
      audience: '25-44 years, education-focused',
      contentTypes: ['Videos', 'Shorts', 'Live Streams', 'Community Posts'],
      icon: '📺'
    },
    {
      name: 'LinkedIn',
      description: 'Professional networking, B2B content, and thought leadership',
      audience: '25-54 years, professionals',
      contentTypes: ['Articles', 'Posts', 'Videos', 'Events'],
      icon: '💼'
    }
  ];

  const services = [
    {
      title: 'Influencer Discovery & Vetting',
      description: 'Find the perfect creators aligned with your brand values and audience',
      features: [
        'Advanced influencer database search',
        'Audience authenticity verification',
        'Engagement rate analysis',
        'Brand safety compliance checks',
        'Competitor influencer analysis'
      ]
    },
    {
      title: 'Campaign Strategy & Planning',
      description: 'Develop comprehensive influencer marketing strategies',
      features: [
        'Goal setting and KPI definition',
        'Budget allocation and optimization',
        'Content calendar development',
        'Multi-platform campaign coordination',
        'Timeline and milestone planning'
      ]
    },
    {
      title: 'Contract Negotiation & Management',
      description: 'Handle all legal and financial aspects professionally',
      features: [
        'Rate negotiation and budget management',
        'Contract drafting and review',
        'FTC compliance guidance',
        'Payment processing and tracking',
        'Relationship management'
      ]
    },
    {
      title: 'Content Creation & Approval',
      description: 'Ensure high-quality, on-brand content delivery',
      features: [
        'Creative brief development',
        'Content review and approval process',
        'Brand guideline enforcement',
        'Content optimization suggestions',
        'Asset collection and archiving'
      ]
    },
    {
      title: 'Performance Tracking & Analytics',
      description: 'Measure success with comprehensive reporting',
      features: [
        'Real-time campaign monitoring',
        'ROI calculation and analysis',
        'Engagement metrics tracking',
        'Reach and impression reporting',
        'Conversion attribution analysis'
      ]
    }
  ];

  const caseStudies = [
    {
      client: 'Fashion E-commerce Brand',
      challenge: 'Increase brand awareness among Gen Z consumers',
      solution: 'Partnered with 15 micro-influencers for Instagram Reels campaign',
      results: [
        '2.5M total reach',
        '180K engagement',
        '15% increase in website traffic',
        '8% boost in sales'
      ],
      duration: '3 months'
    },
    {
      client: 'Tech Startup',
      challenge: 'Drive app downloads and user acquisition',
      solution: 'Collaborated with tech reviewers on YouTube and TikTok',
      results: [
        '50K app downloads',
        '25% increase in daily active users',
        '40% improvement in app store ranking',
        '12% conversion rate'
      ],
      duration: '2 months'
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
              <span className="text-primary font-medium text-sm">Influencer & Creator Partnerships</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Amplify Your Brand with 
              <br className="hidden sm:block" />
              <span className="text-primary">Authentic Influencer</span> Partnerships
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with the right creators to tell your brand story authentically. 
              From nano to mega influencers, we build partnerships that drive real business results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
              >
                Start Your Campaign
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
              { number: '500+', label: 'Creator Network' },
              { number: '92%', label: 'Campaign Success Rate' },
              { number: '5M+', label: 'Total Reach Generated' },
              { number: '15%', label: 'Average ROI Increase' }
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
              { id: 'tiers', label: 'Influencer Tiers' },
              { id: 'platforms', label: 'Platforms' },
              { id: 'services', label: 'Our Services' },
              { id: 'case-studies', label: 'Case Studies' }
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Influencer Marketing Works</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Authentic Storytelling</h3>
                        <p className="text-gray-600">Influencers create genuine connections with their audience through authentic content that resonates.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Targeted Reach</h3>
                        <p className="text-gray-600">Access specific demographics and niche communities that align perfectly with your target market.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Cost-Effective ROI</h3>
                        <p className="text-gray-600">Generate higher engagement rates and conversions compared to traditional advertising methods.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Success Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Average Engagement Rate</span>
                      <span className="font-bold text-primary">4.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Brand Awareness Lift</span>
                      <span className="font-bold text-primary">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Conversion Rate</span>
                      <span className="font-bold text-primary">3.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Customer Acquisition Cost</span>
                      <span className="font-bold text-primary">-40%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tiers' && (
              <motion.div
                key="tiers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Influencer Tiers & Investment Levels</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {influencerTiers.map((tier, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{tier.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{tier.tier}</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-gray-500">Followers:</span>
                          <span className="ml-2 font-semibold text-primary">{tier.followers}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Engagement:</span>
                          <span className="ml-2 font-semibold text-green-600">{tier.engagement}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Best For:</span>
                          <span className="ml-2 text-gray-700">{tier.bestFor}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Investment:</span>
                          <span className="ml-2 font-semibold text-gray-900">{tier.avgCost}</span>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">{platform.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{platform.description}</p>
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Target Audience: </span>
                        <span className="text-sm font-semibold text-primary">{platform.audience}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block mb-2">Content Types:</span>
                        <div className="flex flex-wrap gap-2">
                          {platform.contentTypes.map((type, typeIndex) => (
                            <span key={typeIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              {type}
                            </span>
                          ))}
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

            {activeTab === 'case-studies' && (
              <motion.div
                key="case-studies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {caseStudies.map((study, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{study.client}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {study.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-sm text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <span className="text-sm text-gray-500">Campaign Duration: </span>
                          <span className="text-sm font-semibold text-primary">{study.duration}</span>
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
              Ready to Partner with Influential Creators?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s connect your brand with the perfect influencers to amplify your message and drive meaningful engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Launch Your Campaign
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

export default InfluencerPartnershipsPage;