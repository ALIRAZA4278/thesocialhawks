'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const WordPressWebsiteDevelopmentPage = () => {
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
                <span className="text-gray-900 font-medium">WordPress Website Development</span>
              </div>
            </div>

            <motion.div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12" initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  WordPress Website Development Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  More than 40% of the internet runs on WordPress — and it&apos;s no coincidence. Here at SocialHawks, we have WordPress website development services that are flexible, fast, and scalable. From WordPress custom designs to corporate or eCommerce sites, our designers create sites that are beautiful and perform.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get My WordPress Website
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
                Why Choose WordPress for Your Business Website?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🌍", title: "Trusted Worldwide", desc: "WordPress is the world's number one CMS." },
                  { icon: "⚡", title: "Rapid & Adaptable", desc: "Totally customizable sites with plugins and themes." },
                  { icon: "🔒", title: "Safe & Sound", desc: "Automatic updates, SSL and high-level protection." },
                  { icon: "🔍", title: "Search Engine Friendly", desc: "Coded structure designed for Google rankings." },
                  { icon: "📱", title: "Responsive Design", desc: "Smooth viewing on desktop, tablet and mobile." }
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
                Our WordPress Website Development Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  { title: "Custom WordPress Development Services", desc: "We design and develop unique WordPress solutions to meet the goals and objectives of your brand - whether advanced themes and layouts or plugins and integrations." },
                  { title: "WordPress Website Design Service", desc: "Design is important. Our talented creatives will create responsive WordPress website designs to captivate users and drive conversions." },
                  { title: "WordPress Website Services & Maintenance", desc: "Beyond development, we provide WordPress website support, maintenance and ongoing service needs, plugins updates, security maintenance, performance assessment, backups." }
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
                Why SocialHawks is the Best WordPress Website Development Company
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "✅", title: "Made For You", desc: "Not the generic templates we commonly see out on the web." },
                  { icon: "✅", title: "SEO-Focused Development", desc: "Templates with pages specifically optimized for targeted keywords and meta data." },
                  { icon: "✅", title: "Scalable Projects", desc: "Small business solutions to enterprise WordPress projects." },
                  { icon: "✅", title: "Full Ownership", desc: "You own 100% of the website, files, and content." },
                  { icon: "✅", title: "Support From Everyone", desc: "24/7 support from your team for updates and maintenance." }
                ].map((item, idx) => (
                  <motion.div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
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

            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our WordPress Development Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Consultation & Planning", desc: "Grasping your objectives and website prerequisites." },
                  { step: "02", title: "Design & Mockups", desc: "UI/UX design for a chic, professional appearance." },
                  { step: "03", title: "WordPress Development", desc: "Creating bespoke code, setting up plugins, and developing features." },
                  { step: "04", title: "Testing & Optimization", desc: "Testing on different browsers, mobile and testing for speed." },
                  { step: "05", title: "Launch & Training", desc: "Going live and then training your team to handle WordPress without any difficulty." }
                ].map((process, idx) => (
                  <motion.div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex gap-6 items-start" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-5xl font-bold text-primary/30 flex-shrink-0">{process.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-700">{process.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Industries We Serve with WordPress Websites
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "E-commerce and Retail Shops",
                  "Corporate Portals",
                  "Universities and Colleges",
                  "Medical Practices",
                  "New Ventures and Businesspersons",
                  "Online Content and Publishing Sites"
                ].map((industry, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    {industry}
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="text-center py-16 bg-gray-900 text-white rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your WordPress Website?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  An effective, scalable, and easy to use WordPress website is what your business really needs. SocialHawks brings you traffic and even more customers through its powerful websites based on results.
                </p>
                <p className="text-lg text-gray-400 mb-8">Reach out to us right away and begin your bespoke WordPress development project.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get My WordPress Website
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

export default WordPressWebsiteDevelopmentPage;
