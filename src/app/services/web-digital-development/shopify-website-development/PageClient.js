'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const ShopifyWebsiteDevelopmentPage = () => {
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
                <span className="text-gray-900 font-medium">Shopify Website Development</span>
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
                  Shopify Website Development
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Launch a high-converting Shopify store that sells around the clock. At SocialHawks, we build custom Shopify websites with stunning themes, seamless checkout experiences, and powerful integrations that help you scale your e-commerce business from day one.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Shopify Store
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

            {/* Why Shopify */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Choose Shopify for Your Online Store?
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Shopify powers over 4.4 million online stores worldwide and processes billions in sales every year. It&apos;s the leading e-commerce platform for a reason — reliable, scalable, and packed with features that make selling online effortless. Paired with our expert development, your Shopify store becomes an unstoppable sales machine.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "🚀", text: "Launch faster — go from concept to live store in as little as 2 weeks." },
                  { icon: "💳", text: "Built-in payments — Shopify Payments, Apple Pay, Google Pay, and 100+ gateways." },
                  { icon: "📈", text: "Scales with you — from 10 orders to 10,000+ orders per day seamlessly." },
                  { icon: "🔒", text: "Enterprise-grade security — PCI-DSS compliant with SSL included on every plan." }
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

            {/* Our Shopify Services */}
            <section className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Shopify Development Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Custom Shopify Store Setup",
                    description: "Complete Shopify store setup from scratch — domain configuration, theme installation, product catalog setup, payment gateway integration, shipping zones, and tax configuration. Everything you need to start selling online."
                  },
                  {
                    title: "Custom Theme Development",
                    description: "Bespoke Shopify themes built with Liquid, HTML, CSS, and JavaScript that reflect your brand identity perfectly. Fully responsive, fast-loading, and optimized for conversions with custom sections and blocks."
                  },
                  {
                    title: "Shopify Plus & Enterprise Solutions",
                    description: "Advanced Shopify Plus development for high-volume merchants. Custom checkout experiences, automation with Shopify Flow, wholesale channels, multi-currency stores, and B2B functionality."
                  },
                  {
                    title: "App Integration & Custom Development",
                    description: "Integration of essential Shopify apps for email marketing, reviews, upsells, subscriptions, and inventory management. Custom app development when off-the-shelf solutions don\u2019t fit your needs."
                  },
                  {
                    title: "Migration to Shopify",
                    description: "Seamless migration from WooCommerce, Magento, BigCommerce, or any other platform to Shopify. We transfer your products, customers, orders, and SEO rankings without downtime."
                  },
                  {
                    title: "Shopify Store Optimization",
                    description: "Speed optimization, conversion rate optimization, SEO improvements, and UX enhancements for existing Shopify stores. We audit your store and implement changes that directly increase revenue."
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
                Why Choose SocialHawks for Shopify Development?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🛍️", title: "Shopify Experts", desc: "Certified Shopify developers with 50+ stores built and launched successfully." },
                  { icon: "🎨", title: "Custom Design", desc: "No cookie-cutter templates — every store is designed uniquely for your brand." },
                  { icon: "📈", title: "Conversion-Focused", desc: "Stores built with proven UX patterns that maximize add-to-cart and checkout rates." },
                  { icon: "⚡", title: "Lightning Fast", desc: "Performance-optimized stores that score 90+ on Google PageSpeed." },
                  { icon: "🔧", title: "Ongoing Support", desc: "Post-launch support, maintenance, and continuous optimization for your store." }
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
                Industries We Build Shopify Stores For
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Fashion & Apparel",
                  "Beauty & Cosmetics",
                  "Food & Beverage",
                  "Health & Supplements",
                  "Home & Furniture",
                  "Electronics & Gadgets",
                  "Jewelry & Accessories",
                  "Sports & Fitness"
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
                Our Shopify Development Process
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    description: "Understanding your products, brand, target customers, and business goals to plan the perfect store."
                  },
                  {
                    step: "02",
                    title: "Design & Prototype",
                    description: "Creating custom mockups and interactive prototypes of your store for approval before development."
                  },
                  {
                    step: "03",
                    title: "Development & Integration",
                    description: "Building your Shopify store with custom theme, app integrations, and payment/shipping setup."
                  },
                  {
                    step: "04",
                    title: "Testing & Launch",
                    description: "Thorough QA testing across devices, speed optimization, and a smooth go-live with post-launch support."
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

            {/* What You Get */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What&apos;s Included in Every Shopify Build
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Custom Shopify Theme Design",
                  "Mobile-Responsive Layout",
                  "Product Catalog Setup",
                  "Payment Gateway Integration",
                  "Shipping & Tax Configuration",
                  "SEO Foundation Setup",
                  "Google Analytics & Tracking",
                  "Email Marketing Integration",
                  "Social Media Integration",
                  "Speed Optimization",
                  "Security & SSL Setup",
                  "Training & Documentation"
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">{feature}</span>
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
                  Ready to Launch Your Shopify Store?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful brands selling on Shopify. Let SocialHawks build you a store that looks incredible, converts visitors into customers, and scales with your business.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Get a free Shopify store consultation today!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Shopify Store
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

export default ShopifyWebsiteDevelopmentPage;
