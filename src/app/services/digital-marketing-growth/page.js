'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const DigitalMarketingGrowthPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const subServicesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });
  const isSubServicesInView = useInView(subServicesRef, { once: true, margin: "-50px" });

  const subServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Climb to the top of search results and get found by customers actively looking for what you offer. Our proven SEO strategies deliver sustainable organic growth.",
      icon: "🔍",
      link: "/services/digital-marketing-growth/seo",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Paid Social Advertising",
      description: "Reach your ideal customers on Facebook, Instagram, TikTok, and LinkedIn with highly targeted ad campaigns that maximize ROI and drive real business results.",
      icon: "📱",
      link: "/services/digital-marketing-growth/paid-social-advertising",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Influencer & Creator Partnerships",
      description: "Connect with audiences through authentic creator collaborations that build trust, expand reach, and drive engagement across social platforms.",
      icon: "🤝",
      link: "/services/digital-marketing-growth/influencer-creator-partnerships",
      gradient: "from-orange-500 to-red-500"
    }
  ];

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
                <span className="text-gray-900 font-medium">Digital Marketing & Growth</span>
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
                  Digital Marketing & Growth Services That Drive Real Results
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Stop throwing money at marketing that doesn&apos;t work. SocialHawks delivers data-driven digital marketing strategies that attract qualified leads, increase conversions, and fuel sustainable business growth. Whether you need to dominate search rankings, run high-performing ad campaigns, or leverage influencer partnerships, we&apos;ve got you covered.
                </p>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Grow My Business
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

            {/* Why Digital Marketing Matters */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Digital Marketing is Essential for Growth
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🎯", title: "Reach Your Ideal Customers", desc: "Target the exact people who need your products or services, not just anyone with a pulse." },
                  { icon: "📊", title: "Measurable Results", desc: "See exactly what's working with real data, not gut feelings or guesswork." },
                  { icon: "💰", title: "Better ROI Than Traditional Marketing", desc: "Get more bang for your buck compared to billboards, print ads, or cold calling." },
                  { icon: "⚡", title: "Faster Results", desc: "Launch campaigns today and start seeing traffic, leads, and sales within days." },
                  { icon: "🌐", title: "24/7 Marketing Machine", desc: "Your digital presence works around the clock, even while you sleep." },
                  { icon: "🔄", title: "Continuous Optimization", desc: "We constantly refine and improve your campaigns based on performance data." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Specialized Services */}
            <section ref={subServicesRef} className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Digital Marketing Services
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subServices.map((service, idx) => (
                  <Link key={idx} href={service.link}>
                    <motion.div
                      className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden h-full"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                      {/* Icon */}
                      <motion.div
                        className="text-6xl mb-6 relative z-10"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                        {service.description}
                      </p>

                      {/* Arrow Icon */}
                      <motion.div
                        className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300 relative z-10"
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn More</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </section>

            {/* What We Do */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How We Drive Growth for Your Business
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Strategic Planning",
                    description: "We don't guess. We analyze your market, competitors, and target audience to build a data-backed strategy that actually works."
                  },
                  {
                    title: "Multi-Channel Approach",
                    description: "From search engines to social media, we meet your customers wherever they are with consistent, compelling messaging."
                  },
                  {
                    title: "Performance Tracking",
                    description: "Track every dollar spent and every lead generated with transparent reporting and real-time dashboards."
                  },
                  {
                    title: "Continuous Optimization",
                    description: "We constantly test, refine, and improve your campaigns to maximize ROI and stay ahead of the competition."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
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
                Why Choose SocialHawks for Digital Marketing?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "🎯", title: "Results-Driven Approach", desc: "We focus on metrics that matter: leads, sales, and revenue growth." },
                  { icon: "👥", title: "Experienced Team", desc: "Our specialists have years of experience across industries and platforms." },
                  { icon: "📈", title: "Proven Track Record", desc: "We've helped 100+ businesses achieve measurable growth." },
                  { icon: "🔧", title: "Custom Solutions", desc: "No cookie-cutter strategies. Every plan is tailored to your business goals." },
                  { icon: "💬", title: "Transparent Communication", desc: "Regular updates, clear reporting, and always available to answer questions." },
                  { icon: "⚡", title: "Fast Implementation", desc: "We move quickly to get your campaigns live and generating results." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
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
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Digital Marketing Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    description: "We dive deep into your business, goals, and target audience to craft a winning strategy."
                  },
                  {
                    step: "02",
                    title: "Campaign Development",
                    description: "Our team creates compelling campaigns designed to capture attention and drive action."
                  },
                  {
                    step: "03",
                    title: "Launch & Monitor",
                    description: "We launch your campaigns and closely monitor performance from day one."
                  },
                  {
                    step: "04",
                    title: "Optimize & Scale",
                    description: "Based on data insights, we continuously optimize and scale what's working best."
                  },
                  {
                    step: "05",
                    title: "Report & Refine",
                    description: "Regular reporting keeps you informed, and we refine strategies based on results."
                  }
                ].map((process, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-5xl font-bold text-primary/30 flex-shrink-0">{process.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Industries We Serve */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Industries We Serve
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { icon: "🛒", name: "E-commerce" },
                  { icon: "💼", name: "B2B Services" },
                  { icon: "🏥", name: "Healthcare" },
                  { icon: "🍔", name: "Food & Beverage" },
                  { icon: "🏋️", name: "Fitness & Wellness" },
                  { icon: "🏡", name: "Real Estate" },
                  { icon: "🎓", name: "Education" },
                  { icon: "🚀", name: "Tech & SaaS" }
                ].map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h3 className="font-medium">{industry.name}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Results You Can Expect */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Results You Can Expect
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "📈", title: "Increased Traffic", desc: "More qualified visitors to your website" },
                  { icon: "💼", title: "More Leads", desc: "Higher volume of sales-ready prospects" },
                  { icon: "💰", title: "Better Conversions", desc: "Turn more visitors into paying customers" },
                  { icon: "🎯", title: "Lower Customer Acquisition Cost", desc: "Get customers for less money" },
                  { icon: "🌟", title: "Enhanced Brand Awareness", desc: "Build recognition in your market" },
                  { icon: "📊", title: "Measurable ROI", desc: "Clear visibility into your marketing investment" }
                ].map((result, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="text-4xl flex-shrink-0">{result.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{result.title}</h3>
                      <p className="text-gray-600 text-sm">{result.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="text-center py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Scale Your Business?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Stop wasting time and money on marketing that doesn&apos;t work. Partner with SocialHawks and start seeing real, measurable growth.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Let&apos;s build a digital marketing strategy that drives results for your business.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Let&apos;s Get Started
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

export default DigitalMarketingGrowthPage;
