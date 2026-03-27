'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const ProfessionalWebsiteDevelopmentPage = () => {
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
                <span className="text-gray-900 font-medium">Professional Website Development</span>
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
                  Professional Website Development Services
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Your website is not just a digital presence — it is the core of your business expansion. At The SocialHawks, we offer professional website development services that strike the perfect balance between trendsetting designs, advanced technology, and features, helping you attract new customers and retain existing ones.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get a Free Website Quote
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

            {/* Why Choose Our Professional Website Design Services */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Why Choose Our Professional Website Design Services?
              </motion.h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A robust online presence starts with an excellent website. Our website design services are professional and tailored to develop attractive, interesting, and SEO-friendly websites that suit your objectives. Below are the strategies that we implement for our clients:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: "🎨", title: "Custom Web Design", desc: "Unique layouts and visuals that resonate with your brand identity." },
                  { icon: "📱", title: "Mobile-Friendly Development", desc: "A site that runs seamlessly on any device to provide an excellent user experience." },
                  { icon: "🔍", title: "SEO-Optimized Framework", desc: "A website designed to enhance visibility and increase search rankings." },
                  { icon: "💰", title: "Conversion-Focused Approach", desc: "Leveraging UI/UX for generating more leads and sales." }
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

            {/* Our Website Design and Development Services */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Website Design and Development Services
              </motion.h2>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our company is experienced in providing bespoke website development services that not only look great but are also secure and scalable. Each design is made to be distinctive, professional, and brand voice-aligned.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We offer full website design and development services for small business sites and large-scale solutions. We cover research, wireframes, UI/UX design, coding, testing, and launch in our internal process.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our Professional Website Development Services make sure your website is more than an ordinary site; it is a growth platform. With secure coding, blinding speed load times, and simple integrations, your site is the foundation for your digital marketing campaign.
                </p>
              </div>
            </section>

            {/* Benefits of Partnering */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Benefits of Partnering with The SocialHawks
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "⚡", title: "Faster Loading Times", desc: "Performance-optimized websites and Google Core Web Vitals." },
                  { icon: "🔍", title: "Built-In SEO", desc: "Meta tags and site organization optimized for improved ranking." },
                  { icon: "🎨", title: "Creative Designs", desc: "Attractive user interfaces that suit your brand." },
                  { icon: "📈", title: "Scalable Solutions", desc: "From startups to enterprises, your site expands while your business expands." },
                  { icon: "📊", title: "Easy Analytics", desc: "The convenient way to monitor your performance." }
                ].map((item, idx) => (
                  <motion.div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Our Process */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Our Process for Website Development
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Research", desc: "Setting up goals, studying competitors, and target customers." },
                  { step: "02", title: "Wireframing & Design", desc: "Planning layout and user experience." },
                  { step: "03", title: "Development", desc: "Building secure and flexible websites with the latest technologies." },
                  { step: "04", title: "Testing & Optimization", desc: "Speed, all functions, and responsiveness are checked here." },
                  { step: "05", title: "Launch & Support", desc: "Going live with Social Media, keeping it up to date, and regularly maintaining it." }
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

            {/* Industries We Serve */}
            <section className="mb-16">
              <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Industries We Serve
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "E-commerce Brands",
                  "Corporate Businesses",
                  "Educational Platforms",
                  "Healthcare Providers",
                  "Marketplaces & Startups"
                ].map((industry, idx) => (
                  <motion.div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center font-medium text-gray-700 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ scale: 1.05 }}>
                    {industry}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-16 bg-gray-900 text-white rounded-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Have Your Website Built?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Your customers are online, so it&apos;s time to get noticed. Join The SocialHawks for expert website development that turns your imagination into a reality.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Call us for a free consultation, and let&apos;s talk about your project!
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get a Free Website Quote
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

export default ProfessionalWebsiteDevelopmentPage;
