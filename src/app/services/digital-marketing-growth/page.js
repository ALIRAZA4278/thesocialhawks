'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const SEOServicesPage = () => {
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
                  Search Engine Optimization Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  It&apos;s not optional to be found online, it&apos;s mandatory. SocialHawks provides professional search engine optimization (SEO) services that actually improve rankings, capabilities to generate visibility, and drive the right traffic to your site. Whether you are a small business or a big brand, our strategies are geared towards producing the meaningful results for you.
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
                    Boost My Rankings
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

            {/* Why SEO Matters */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why SEO Matters for Your Business
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "📈", title: "Higher Rankings", desc: "Be at the top of results pages based on the key terms you are targeting." },
                  { icon: "👥", title: "Qualified Traffic", desc: "Pull in the right group of people who are interested in your services." },
                  { icon: "💰", title: "Cost Effective", desc: "Grow slow and sustainable over time instead of by ads." },
                  { icon: "🔑", title: "Brand Authority", desc: "Hitting the first page means that you are being trusted at first glance by your customers." },
                  { icon: "🌍", title: "Local & Global Reach", desc: "Optimize for local searches as well as world searches." }
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

            {/* Our SEO Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our SEO Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Local Search Engine Optimization Services",
                    description: "Enhance visibility in \"near me\" searches and gain the competitive edge in your local market with enhanced Google Business Profiles and targeting by location."
                  },
                  {
                    title: "Professional SEO Services",
                    description: "Stand out with our professional services, which include technical SEO, content optimization, building backlinks, and targeting the best keywords for the ultimate visibility."
                  },
                  {
                    title: "Best Search Engine Optimization Services",
                    description: "From start-ups to enterprise companies we offer the top SEO services to address specific industry requirements and competitive landscape."
                  },
                  {
                    title: "Small Business SEO Services",
                    description: "Affordable SEO solutions, designed to help your small business compete with bigger brands and foster continued growth."
                  },
                  {
                    title: "SEO Packages & Campaign Management",
                    description: "Transparent, SEO Packages that are results-driven with tangible deliverables, reporting, and performance tracking will give you peace of mind."
                  }
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
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
                Why Choose SocialHawks as Your SEO Company?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "✅", title: "Keyword Research Experts", desc: "Identify the phrases your customers are searching for." },
                  { icon: "✅", title: "Technical SEO Audits", desc: "Identify and resolve errors, speed issues, and indexing issues." },
                  { icon: "✅", title: "Content Optimization", desc: "Blogs, Landing Pages, and Service Pages that are built for ranking." },
                  { icon: "✅", title: "White Hat Link Building", desc: "Authority backlinks to increase domain authority." },
                  { icon: "✅", title: "Data Driven Reporting", desc: "Monthly report on performance and actions you can take to enhance performance." }
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

            {/* Our SEO Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our SEO Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "SEO Audit & Research",
                    description: "Technical issues and keyword targeting opportunities are uncovered by us."
                  },
                  {
                    step: "02",
                    title: "On-Page Optimization",
                    description: "We enhance your SEO titles, headings, content, and internal linking structure."
                  },
                  {
                    step: "03",
                    title: "Technical SEO",
                    description: "We optimize your site's loading speed, mobile functionality, and ability to be crawled."
                  },
                  {
                    step: "04",
                    title: "Content Strategy",
                    description: "User-centered content is created by us and keywords are included."
                  },
                  {
                    step: "05",
                    title: "Link Building",
                    description: "Backlinks are created by us to establish authority in your niche."
                  },
                  {
                    step: "06",
                    title: "Tracking & Reporting",
                    description: "Tracking rankings, traffic and conversions."
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

            {/* SEO Service Features */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What&apos;s Included in Our SEO Services
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🔍", title: "Keyword Research", desc: "In-depth analysis of search terms" },
                  { icon: "📊", title: "Competitor Analysis", desc: "Understanding your competition" },
                  { icon: "⚙️", title: "Technical SEO", desc: "Site speed, mobile, indexing fixes" },
                  { icon: "📝", title: "On-Page SEO", desc: "Meta tags, headers, content optimization" },
                  { icon: "🔗", title: "Link Building", desc: "Quality backlinks from authority sites" },
                  { icon: "📍", title: "Local SEO", desc: "Google Business Profile optimization" },
                  { icon: "📱", title: "Mobile Optimization", desc: "Mobile-first indexing ready" },
                  { icon: "📈", title: "Analytics Setup", desc: "Google Analytics & Search Console" },
                  { icon: "📄", title: "Monthly Reports", desc: "Detailed performance tracking" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
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
                Industries We Serve with SEO
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: "🛒", name: "E-commerce & Retail" },
                  { icon: "🏢", name: "Corporate Businesses" },
                  { icon: "🏥", name: "Healthcare & Wellness" },
                  { icon: "🎓", name: "Education & E-learning" },
                  { icon: "🍔", name: "Food & Hospitality" },
                  { icon: "🚀", name: "Startups & SMEs" }
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

            {/* SEO Results & Benefits */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Results You Can Expect
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "📊", title: "Increased Organic Traffic", desc: "More visitors from Google search results" },
                  { icon: "🎯", title: "Better Keyword Rankings", desc: "Top positions for your target keywords" },
                  { icon: "💼", title: "More Qualified Leads", desc: "Attract customers ready to buy" },
                  { icon: "💰", title: "Higher Conversion Rates", desc: "Turn more visitors into customers" },
                  { icon: "📈", title: "Improved Brand Visibility", desc: "Dominate search results in your industry" },
                  { icon: "⏱️", title: "Long-term Growth", desc: "Sustainable results that compound over time" }
                ].map((result, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl flex-shrink-0">{result.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{result.title}</h3>
                      <p className="text-gray-700">{result.desc}</p>
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
                  Ready to Rank Higher on Google?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Don&apos;t get left behind a competitor – everyone else is investing in search engine optimization! By using Social Hawks&apos; SEO services, you get to work with a partner that defines a strategy that results in real measurable results.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Contact us today to formulate your traffic, lead and revenue driving SEO strategy.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Boost My Rankings
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

export default SEOServicesPage;
