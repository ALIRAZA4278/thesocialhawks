'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const WebApplicationDevelopmentPage = () => {
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
                <span className="text-gray-900 font-medium">Web Application Development</span>
              </div>
            </div>

            <motion.div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12" initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Web Application Development Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Today&apos;s digital economy has turned businesses to more than just static websites; they now want to have powerful, scalable, and secure web applications. SocialHawks is the company that specializes in custom web app development services, and we create innovative applications that help in the automation of tasks, enhancement of customer experience, and consequently the growth of businesses.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get My Web App
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
                Why Invest in Custom Web Application Development?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🔧", title: "Designed Specifically for Your Business Needs", desc: "Every business is different and thus should your app be." },
                  { icon: "⚡", title: "Maximum Performance & Speed", desc: "Applications that are optimized for very short loading times and excellent performance." },
                  { icon: "🔒", title: "Safe & Trusted", desc: "Strong coding practices, encryption, and vulnerability testing." },
                  { icon: "📱", title: "Universal Platform Access", desc: "Applications designed to work perfectly on all browsers and devices." },
                  { icon: "📊", title: "Expandable Framework", desc: "Don't be afraid of the future, as these are applications that can scale along with your business." }
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
                Our Web Application Development Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  { title: "Custom Web Application Development Services", desc: "We create and develop personalized web applications that address actual business issues — ranging from customer relationship management (CRM) and inventory management systems to cutting-edge software as a service (SaaS) platforms." },
                  { title: "Web Application Development Service", desc: "Our complete web application development service applies to every step from the planning stage to UI/UX design, writing the code, system integration, and launching the application." },
                  { title: "Best Web Application Development Services", desc: "The use of modern plus most up-to-date frameworks and technologies (React, Angular, Node.js, Laravel, Django) helps us to provide the best web application development services that also come with advanced features." },
                  { title: "Application Development Services for Enterprises", desc: "Our application development services are not limited to one category of customer; they can be broad enough to cover clients ranging from newly established businesses to big multinational enterprises." }
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
                Why SocialHawks Should Be Your Web App Development Partner?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "✅", title: "Agile Development Methodology", desc: "A rapid, flexible, and iterative procedure." },
                  { icon: "✅", title: "Proficient Developers", desc: "Capable of modern frameworks and full-stack solutions." },
                  { icon: "✅", title: "Customer-Centric Design", desc: "Apps designed for easy navigation and excellent user experience." },
                  { icon: "✅", title: "Integration Skills", desc: "APIs, payment gateways, and third-party tools incorporated without a hitch." },
                  { icon: "✅", title: "Ongoing Support", desc: "Updates, monitoring, and maintenance after launch." }
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
                Modern Technologies We Use
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Angular", icon: "🅰️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Laravel", icon: "🔴" },
                  { name: "Django", icon: "🐍" },
                  { name: "Vue.js", icon: "💚" },
                  { name: "Python", icon: "🐍" },
                  { name: "MongoDB", icon: "🍃" }
                ].map((tech, idx) => (
                  <motion.div key={idx} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h3 className="font-bold text-gray-900">{tech.name}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="text-center py-16 bg-gray-900 text-white rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build a Custom Web App?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Your company is worthy of an app that provides fast, safe, and expandable operations. SocialHawks makes you a partner who is knowledgeable about both technology and business expansion.
                </p>
                <p className="text-lg text-gray-400 mb-8">Discuss your bespoke web app development project with our professionals today.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get My Web App
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

export default WebApplicationDevelopmentPage;
