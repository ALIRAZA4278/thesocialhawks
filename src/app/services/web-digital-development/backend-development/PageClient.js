'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const BackendDevelopmentPage = () => {
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
                <span className="text-gray-900 font-medium">Backend Development</span>
              </div>
            </div>

            <motion.div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12" initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Backend Development Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The digital experience is powered by a strong foundation that is invisible to the user. SocialHawks provides backend development service that speeds up, secures, and scales your applications and websites. Our backend technology includes everything from APIs to databases and gives your business the stronghold to grow.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get My Backend Solution
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
                Why Backend Development Matters
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "⚡", title: "Performance & Speed", desc: "Efficient backend code has fast-loading websites and applications as a result." },
                  { icon: "🔒", title: "Security", desc: "With sophisticated encryption and security layers, the business and customer data remain safe." },
                  { icon: "📈", title: "Scalability", desc: "The backend systems will be fruitful if the traffic increases or if the business needs change." },
                  { icon: "🔗", title: "Seamless Integrations", desc: "All third-party tools such as APIs, payment gateways, CRMs, etc. can be connected with each other." },
                  { icon: "💪", title: "Stability", desc: "The apps perform in a dependable and stable manner which leads to pleasant user interactions." }
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
                Our Backend Development Services
              </motion.h2>

              <div className="space-y-8">
                {[
                  { title: "Backend Development Services", desc: "We build the backbone of dynamic websites, mobile applications, and enterprise software through backend architecture design and development." },
                  { title: "Backend Development Company", desc: "With the prospect of a backend developer partner, SocialHawks takes care of the technical aspects with trend-setting coding, organized databases, and safe APIs thus making your online platforms ready for the future." },
                  { title: "API Development & Integration", desc: "Tailored APIs to provide connection for payment bazaars, customer support systems, and all other outside applications to work harmoniously." },
                  { title: "Database Management", desc: "Database formats that are safe and efficient (SQL, NoSQL, MongoDB, PostgreSQL, MySQL) to ensure the accuracy of data processing." }
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
                Why Choose SocialHawks for Backend Development?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "👨‍💻", title: "Expert Backend Developers", desc: "Talented in working with Node.js, Laravel, Django, .NET, PHP, etc." },
                  { icon: "🔄", title: "Agile Methodology", desc: "Speedier result with cycle by cycle development." },
                  { icon: "☁️", title: "Cloud Integration", desc: "AWS, Google Cloud, and Azure deployment for scalability." },
                  { icon: "🧪", title: "Rigorous Testing", desc: "Performance, loading, and security testing." },
                  { icon: "🔧", title: "Continuous Support", desc: "Maintenance, monitoring, and updates will be provided after deployment." }
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
                Our Backend Development Process
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Requirement Analysis", desc: "Grasping your performance and application requirements." },
                  { step: "02", title: "System Architecture", desc: "Structuring a strong backend." },
                  { step: "03", title: "Development", desc: "A new trend of not only secure but also versatile APIs, databases, and integrations creation." },
                  { step: "04", title: "Testing & QA", desc: "Conducting tests on performance, scalability, and security." },
                  { step: "05", title: "Deployment & Support", desc: "Coming out with uninterrupted monitoring and optimization for the entire time." }
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
                Industries We Serve
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Fintech and Banking",
                  "Healthcare and Wellness",
                  "E-commerce and Retail",
                  "Logistics and Supply Chain",
                  "Education and E-learning",
                  "Corporate Enterprises"
                ].map((industry, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    {industry}
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="text-center py-16 bg-gray-900 text-white rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Power Your Business with a Strong Backend?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  The journey of your digital success starts with a solid backend. SocialHawks&apos; backend development services provide you with dependable, safe, and scalable solutions customized to your business.
                </p>
                <p className="text-lg text-gray-400 mb-8">Reach out to us today and establish a firm base for your digital platforms.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get My Backend Solution
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

export default BackendDevelopmentPage;
