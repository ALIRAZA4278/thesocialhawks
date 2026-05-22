'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const AISolutionsPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Solutions',
    name: 'AI Solutions',
    description:
      'AI automation, chatbots, receptionist, lead generation, agents, SaaS development, and AI consulting for businesses.',
    provider: {
      '@type': 'Organization',
      name: 'The Social Hawks',
      url: 'https://thesocialhawks.com',
    },
    url: 'https://thesocialhawks.com/services/ai-solutions',
  };

  const stats = [
    { value: '78%', label: 'of businesses using AI automation report reduced operational costs' },
    { value: '24/7', label: 'AI systems serve your customers without overtime, holidays, or sick days' },
    { value: '3x', label: 'faster lead response time with AI — the biggest predictor of conversion' },
    { value: '67%', label: 'of consumers prefer messaging a brand over calling — AI makes that scalable' },
  ];

  const subServices = [
    {
      title: 'AI Automation',
      slug: 'ai-automation',
      tagline: 'Remove the Repetition. Multiply the Output.',
      icon: '⚙️',
      desc: 'Automate repetitive workflows — data entry, follow-ups, scheduling, and reporting — so your team focuses on growth.',
    },
    {
      title: 'AI Receptionist',
      slug: 'ai-receptionist',
      tagline: 'Your Best Receptionist Works 24 Hours a Day.',
      icon: '🤖',
      desc: 'Instant WhatsApp, website chat, and Instagram DM responses that qualify leads and book appointments around the clock.',
    },
    {
      title: 'AI Chatbots',
      slug: 'ai-chatbots',
      tagline: 'Conversations That Convert — at Any Scale.',
      icon: '💬',
      desc: 'Custom-trained bots deployed across every channel your customers use — website, WhatsApp, Facebook, Instagram.',
    },
    {
      title: 'AI Lead Generation',
      slug: 'ai-lead-generation',
      tagline: 'More Qualified Leads. Zero Guessing.',
      icon: '🎯',
      desc: 'Intelligent targeting, automated qualification, and instant lead response that turns ad spend into actual sales.',
    },
    {
      title: 'AI Agents',
      slug: 'ai-agents',
      tagline: 'Never Sleeps, Never Forgets, Scales Instantly.',
      icon: '🧠',
      desc: 'Autonomous AI that reasons, researches, and completes multi-step tasks — from content drafting to competitor analysis.',
    },
    {
      title: 'SaaS Development',
      slug: 'saas-development',
      tagline: 'Build the Software Product. Own the Market.',
      icon: '🚀',
      desc: 'Full-stack SaaS platforms from MVP to global scale — product strategy, UI/UX, AI integration, and cloud deployment.',
    },
    {
      title: 'AI Product Development',
      slug: 'ai-product-development',
      tagline: 'Build AI Into Your Product First.',
      icon: '🔬',
      desc: 'Embed intelligent search, recommendations, generation, and RAG systems into your existing or new software product.',
    },
    {
      title: 'AI Consulting & Strategy',
      slug: 'ai-consulting-strategy',
      tagline: 'Clarity on AI Before You Spend a Rupee.',
      icon: '📊',
      desc: 'AI readiness assessment, opportunity mapping, ROI analysis, and a prioritised implementation roadmap for your business.',
    },
  ];

  const whyAI = [
    {
      icon: '⚡',
      title: 'Speed at Scale',
      desc: 'AI responds to every customer, every lead, and every request instantly — without adding headcount.',
    },
    {
      icon: '💰',
      title: 'Lower Operating Costs',
      desc: 'Automate repetitive work and recover hours of staff time every week, compounding savings month over month.',
    },
    {
      icon: '📈',
      title: 'Compounding Intelligence',
      desc: 'AI systems learn and improve over time. The longer they run, the better they perform for your business.',
    },
    {
      icon: '🌍',
      title: 'Compete Globally',
      desc: 'Businesses can now deploy the same AI infrastructure as multinationals — at a fraction of the cost.',
    },
    {
      icon: '🎯',
      title: 'More Qualified Revenue',
      desc: 'AI qualifies, scores, and nurtures leads automatically — so your sales team closes, not chases.',
    },
    {
      icon: '🔒',
      title: 'Enterprise-Grade Security',
      desc: 'All AI systems we build use private, isolated environments. Your data never trains external models.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'We map your business processes, identify the highest-ROI AI opportunities, and define a clear scope before any build begins.',
    },
    {
      step: '02',
      title: 'Strategy & Roadmap',
      description: 'We deliver a prioritised AI roadmap with build vs. buy recommendations, ROI estimates, and a sequenced implementation plan.',
    },
    {
      step: '03',
      title: 'Build & Integrate',
      description: 'Our team designs, develops, and deploys your AI system — integrating with your existing tools: CRM, WhatsApp, website, and more.',
    },
    {
      step: '04',
      title: 'Test & Optimise',
      description: 'Every system is tested against real scenarios before going live. We tune for accuracy, speed, and edge-case handling.',
    },
    {
      step: '05',
      title: 'Monitor & Improve',
      description: 'Post-launch monitoring, monthly performance reviews, and continuous training keep your AI system ahead of the curve.',
    },
  ];

  const industries = [
    { icon: '🏥', name: 'Healthcare & Clinics' },
    { icon: '🏢', name: 'Real Estate' },
    { icon: '🛒', name: 'E-commerce & Retail' },
    { icon: '🎓', name: 'Education & EdTech' },
    { icon: '📞', name: 'BPO & Call Centres' },
    { icon: '🍔', name: 'Food & Hospitality' },
    { icon: '💼', name: 'B2B Services' },
    { icon: '🏦', name: 'Financial Services' },
    { icon: '⚙️', name: 'Manufacturing' },
  ];

  const benefits = [
    {
      icon: '🕐',
      title: '24/7 Customer Coverage',
      desc: 'Your AI systems serve customers, qualify leads, and book appointments at 3am on a public holiday — without a single overtime claim.',
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      desc: 'Every AI interaction generates data. Our systems surface patterns, performance metrics, and actionable insights automatically.',
    },
    {
      icon: '🔗',
      title: 'Seamless Integration',
      desc: 'We build AI around the tools you already use — WhatsApp, Google Workspace, your CRM, your website. No migration, no disruption.',
    },
    {
      icon: '🌍',
      title: 'Built for You',
      desc: 'Urdu language support, local payment gateways, and use cases tested against the realities of your business and consumer behaviour.',
    },
  ];

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="px-4">
            {/* Breadcrumb */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">AI Solutions</span>
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
                  AI Solutions for Businesses Ready to Lead.
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The most forward-thinking brands are already using artificial intelligence to automate operations,
                  serve customers around the clock, generate more qualified leads, and build products that compete globally.
                  The Social Hawks AI Solutions division makes that accessible — not just to multinationals, but to every brand
                  that is serious about growing in 2025 and beyond.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book a Free AI Consultation
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
          <div className="px-4 mx-auto">

            {/* Stats Strip */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-3">{stat.value}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Why AI Now */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why AI — and Why Now?
              </motion.h2>
              <p className="text-lg text-gray-600 mb-10 max-w-3xl">
                In 2025, your customer doesn&apos;t care whether they&apos;re talking to a human or an AI — they care whether they
                get an answer instantly, whether that answer is correct, and whether the experience feels seamless. Brands
                that deploy AI systems deliver all three. Those that wait are already behind.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyAI.map((item, idx) => (
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

            {/* Sub-services Grid */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our AI Services
              </motion.h2>
              <p className="text-gray-300 mb-10 text-lg max-w-2xl">
                Eight specialised AI disciplines, each designed to solve a specific business problem and deliver measurable results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subServices.map((service, idx) => (
                  <Link key={idx} href={`/services/ai-solutions/${service.slug}`} className="block">
                    <motion.div
                      className="group bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <div className="text-3xl mb-3">{service.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1">{service.desc}</p>
                      <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
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
                How We Deliver AI Solutions
              </motion.h2>

              <div className="space-y-6">
                {process.map((p, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-xl shadow-sm flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-5xl font-bold text-primary/30 flex-shrink-0">{p.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-gray-700">{p.description}</p>
                    </div>
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
                Industries We Serve
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-primary hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h3 className="font-medium text-gray-900">{industry.name}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why The Social Hawks for AI?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((b, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl mb-3">{b.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{b.desc}</p>
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
                  Ready to Deploy AI in Your Business?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Book a free AI readiness assessment and walk away with a clear picture of which AI systems will deliver
                  the highest ROI for your specific business — no jargon, no pressure.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book a Free AI Consultation
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

export default AISolutionsPage;
