'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const WebContentWritingPage = () => {
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
                <span className="text-gray-900 font-medium">Content & Writing</span>
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
                  Web Content Writing Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Content has the ability to shift thoughts, create trust, and elicit response. At SocialHawks, we provide professional web content writing services that combine creativity with strategy. Our SEO writing will help you stand apart from the competition, target your audience, rise in the ranks of search engines, and turn your visitors into customers.
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
                    Get My Content Written
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

            {/* Why Quality Web Content Matters */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Quality Web Content Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "📝", title: "First Impressions Count", desc: "Your content is the representation of your brand on the internet." },
                  { icon: "🔍", title: "Enhances your SEO Rank", desc: "Search engines give a reward to high-quality content that contains keywords." },
                  { icon: "👥", title: "Instills Trust", desc: "Professional writing establishes authority with credibility." },
                  { icon: "📈", title: "Converts", desc: "Persuasive writing turn readers into customers." },
                  { icon: "🌍", title: "Scales Across Platforms", desc: "Content can be geared for your website, blogs, and digital campaigns." }
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

            {/* Our Web Content Writing Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Web Content Writing Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Web Content Writing",
                    description: "Whatever your business objective may be, enthrall your audience by providing crystal-clear, concise and engaging web contents."
                  },
                  {
                    title: "Web Content Writing Services",
                    description: "Our writing services are comprehensive and include landing pages, service descriptions, About Us page, FAQs, and much more."
                  },
                  {
                    title: "Writing Web Content for SEO",
                    description: "We merge creativity with strategy, so that all copy is SEO-friendly and designed for better visibility and rankings."
                  },
                  {
                    title: "Blog & Article Writing",
                    description: "Position your business as a reliable resource for readers with blogs that incorporate keywords and thought-leadership articles."
                  },
                  {
                    title: "Product Descriptions & E-commerce Copy",
                    description: "Create a greater sales impact by using persuasive copy and descriptions which highlight product features, benefits and value."
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
                Why Choose SocialHawks for Content Writing?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "✅", title: "SEO Friendly Copy", desc: "Implementing compliant keywords without stuffing." },
                  { icon: "✅", title: "Industry/Niche Experts", desc: "Writers experienced with many niches." },
                  { icon: "✅", title: "Engaging & Persuasive Copy", desc: "Specific to evoke emotion and inspire action with your audience." },
                  { icon: "✅", title: "Fast Turn Around", desc: "Done quickly but with effective quality." },
                  { icon: "✅", title: "Scalable Content", desc: "From 1 page to full web copy." }
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

            {/* Our Content Writing Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Content Writing Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Research and Strategy",
                    description: "Analyzing keywords and competitors within the market."
                  },
                  {
                    step: "02",
                    title: "Content Planning",
                    description: "Structuring main topics and minor topics for a better user experience."
                  },
                  {
                    step: "03",
                    title: "Writing and Drafting",
                    description: "Producing content that is of great quality, original, SEO friendly."
                  },
                  {
                    step: "04",
                    title: "Optimization",
                    description: "Making sure of good readability, keyword distribution, and proper formatting."
                  },
                  {
                    step: "05",
                    title: "Review and Final Delivery",
                    description: "Reviewing, proofreading, and final content."
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

            {/* Content Types We Specialize In */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Content Types We Specialize In
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🏠", title: "Landing Pages", desc: "Conversion-focused copy for your campaigns" },
                  { icon: "📄", title: "Website Copy", desc: "Homepage, About Us, Service pages" },
                  { icon: "📝", title: "Blog Posts & Articles", desc: "SEO-optimized long-form content" },
                  { icon: "🛍️", title: "Product Descriptions", desc: "Compelling e-commerce copy" },
                  { icon: "❓", title: "FAQs & Guides", desc: "Helpful customer resources" },
                  { icon: "📧", title: "Email Copy", desc: "Engaging newsletter content" },
                  { icon: "📱", title: "Social Media Content", desc: "Engaging posts and captions" },
                  { icon: "📖", title: "Case Studies", desc: "Success stories that convert" },
                  { icon: "📰", title: "Press Releases", desc: "Professional announcements" }
                ].map((type, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Industries We Write Content For */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Industries We Write Content For
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: "🛒", name: "E-commerce and Retail" },
                  { icon: "🏢", name: "Corporate and B2B Services" },
                  { icon: "🏥", name: "Healthcare and Wellness" },
                  { icon: "🎓", name: "Education and E-learning" },
                  { icon: "🚀", name: "Startups and Entrepreneurs" },
                  { icon: "🍔", name: "Food & Hospitality" }
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

            {/* SEO Content Benefits */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Benefits of Professional SEO Content Writing
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "📊", title: "Higher Search Rankings", desc: "Optimized content ranks better on Google and other search engines" },
                  { icon: "🎯", title: "Targeted Traffic", desc: "Attract visitors who are actively searching for your services" },
                  { icon: "💰", title: "Increased Conversions", desc: "Persuasive copy that turns readers into paying customers" },
                  { icon: "🏆", title: "Brand Authority", desc: "Establish your business as an industry thought leader" },
                  { icon: "⏱️", title: "Long-term Value", desc: "Quality content continues to drive traffic for years" },
                  { icon: "📈", title: "Better ROI", desc: "Content marketing delivers higher returns than traditional advertising" }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.desc}</p>
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
                  Ready to Transform Your Website with Powerful Content?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Your website is worthy of content that not only takes up space but also makes an impact. With SocialHawks&apos; web content writing services you will receive content that is enthralling, optimized, and designed to convert.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Contact us today and together let&apos;s produce content that ranks and resonates.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get My Content Written
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

export default WebContentWritingPage;
