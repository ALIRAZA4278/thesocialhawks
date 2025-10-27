'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const EcommerceWebDevelopmentPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />

      <motion.div className="min-h-screen bg-white mt-15" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div ref={heroRef} className="py-12 sm:py-16" initial={{ opacity: 0, y: 50 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="px-4">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <span>/</span>
                <Link href="/services/web-digital-development" className="hover:text-primary transition-colors">Web & Digital Development</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Ecommerce Web Development</span>
              </div>
            </div>

            <motion.div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12" initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Ecommerce Web Design & Development Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Your eCommerce website is not a mere online shop if you have an ease-of-use, fast, and also at the same time creative eCommerce web design and development. SocialHawks provides the eCommerce solutions that are more customer-centered and also they are free from the worries of being hacked, the web development will be done secured and with conversion-focused strategies that will help you sell more easily and effectively through the internet.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Start My Ecommerce Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div ref={contentRef} className="pb-16 sm:pb-20" initial={{ opacity: 0 }} animate={isContentInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }}>
          <div className="px-4 mx-auto max-w-6xl">

            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Invest in Professional Ecommerce Website Design?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "👀", title: "First Impressions Matter", desc: "The design of your storefront has a direct influence on the level of trust that the customer has in you and the buying decisions that they will make." },
                  { icon: "💰", title: "Maximized for Conversions", desc: "Straightforward navigation, product showcases, and simple checkout process." },
                  { icon: "🔒", title: "Trustworthy & Secure", desc: "SSL encryption, safe payment options, and information security." },
                  { icon: "📱", title: "Mobile-Friendly Design", desc: "Consistent buying process on every device." },
                  { icon: "🔍", title: "Search Engine Optimization Ready", desc: "Optimized pages, product categories, and descriptions to rank better." }
                ].map((item, idx) => (
                  <motion.div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Ecommerce Web Development Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  { title: "Ecommerce Development Solutions", desc: "We construct the modern-day and future-ready eCommerce platforms that are capable of expanding indefinitely along with your business and providing the same smooth and efficient functionality for both the startups and big companies." },
                  { title: "Custom Ecommerce Solutions", desc: "The team of professionals provides the development of custom eCommerce websites with very specific features that are business-like needs which can range from sophisticated product filtering to unique shopping experiences." },
                  { title: "Ecommerce Web Design Services", desc: "E-commerce web design that is attractive and aimed at increasing conversion is what we create, the web designs that we create will according to our and also our clients' expectations turn the visitors into buyers." },
                  { title: "Custom Ecommerce Web Design Services", desc: "Do not be lost among cookie-cutter templates. We offer custom eCommerce web design services, which are friendly to users, brand-centered, sales-optimized layouts that we have designed." }
                ].map((service, idx) => (
                  <motion.div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Key Features of Our Ecommerce Websites
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "📦", title: "Product Management System", desc: "Simple inventory and categories to manage." },
                  { icon: "💳", title: "Secure Payment Gateways", desc: "Multiple payment options that are supported by top-class encryption." },
                  { icon: "🚚", title: "Shipping & Logistics Integration", desc: "Real-time order management and tracking." },
                  { icon: "🛒", title: "Shopping Cart Optimization", desc: "Easy and quick checkout to reduce cart abandonment." }
                ].map((item, idx) => (
                  <motion.div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Platforms We Work On
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Shopify Development", icon: "🛍️" },
                  { name: "WooCommerce (WordPress)", icon: "🌐" },
                  { name: "Magento Development", icon: "🔧" },
                  { name: "Custom-Built Ecommerce Solutions", icon: "⚙️" }
                ].map((platform, idx) => (
                  <motion.div key={idx} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-5xl mb-4">{platform.icon}</div>
                    <h3 className="font-bold text-gray-900">{platform.name}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="text-center py-16 bg-gray-900 text-white rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Launch Your Online Store?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Transform your business with a powerful ecommerce platform that drives sales and delivers exceptional customer experiences.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Start My Ecommerce Project
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

export default EcommerceWebDevelopmentPage;
