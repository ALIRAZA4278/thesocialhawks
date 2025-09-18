'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [imageError, setImageError] = useState(false);

  const stats = [
    { number: "1000+", label: "Ads Created", icon: "📊" },
    { number: "5+", label: "Years of Expertise", icon: "🏆" },
    { number: "80+", label: "Brands", icon: "🎯" },
    { number: "700M+", label: "Revenue Generated", icon: "💰" }
  ];

  const values = [
    {
      title: "Data-Driven Approach",
      description: "We eliminate guesswork from your marketing, replacing it with strategies backed by data and refined through continuous testing.",
      icon: "📈"
    },
    {
      title: "Performance Focus",
      description: "Our campaigns don't just look good, but perform exceptionally well with measurable results and ROI.",
      icon: "🎯"
    },
    {
      title: "Creative Excellence",
      description: "We combine creative thinking with analytical precision to deliver campaigns that capture attention and drive action.",
      icon: "💡"
    },
    {
      title: "Continuous Optimization",
      description: "Through constant testing and refinement, we ensure your marketing strategies evolve and improve over time.",
      icon: "🔄"
    }
  ];

  return (
     <section className="py-12 sm:py-16 bg-white">
      <div className="w-[95%] sm:w-[90%] mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
          <div className="text-left mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">About us</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-3xl">
              Performance-Driven Marketing For Growing Businesses
            </h2>
        
            </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center mb-20 lg:mb-24 xl:mb-28">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
              {!imageError ? (
                <img
                  src="/images/about-team.jpg"
                  alt="Performance-Driven Marketing Team"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] bg-gradient-to-br from-primary/20 to-purple-600/30 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-lg font-medium">Our Marketing Team</p>
                    <p className="text-sm">Data-obsessed marketers delivering results</p>
                  </div>
                </div>
              )}
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-primary">1000+</div>
                    <div className="text-xs text-gray-600">Ads Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-primary">5+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
                <span className="text-primary font-semibold">Devnest</span> was founded with a simple belief: marketing should 
                generate real, measurable returns, not just impressions.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                We're a team of data-obsessed marketers who combine creative 
                thinking with analytical precision to deliver campaigns that don't just 
                look good, but perform exceptionally well.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our approach eliminates guesswork from your marketing, replacing 
                it with strategies backed by data and refined through continuous 
                testing.
              </p>
            </div>

            {/* Statistics Tags - Same as reference image */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <span className="text-lg">🏆</span>
                <span className="text-sm font-medium text-gray-700">1,000+ Ads Created</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <span className="text-lg">⭐</span>
                <span className="text-sm font-medium text-gray-700">5+ Years of Expertise</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <span className="text-lg">🎯</span>
                <span className="text-sm font-medium text-gray-700">80+ Brands</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <span className="text-lg">💰</span>
                <span className="text-sm font-medium text-gray-700">700M+ Revenue Generated</span>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">Performance-Focused</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">Data-Driven Strategies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">Creative Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">Continuous Testing</span>
              </div>
            </div>
          </motion.div>
        </div>
              </div>
    </section>
  );
};

export default About;