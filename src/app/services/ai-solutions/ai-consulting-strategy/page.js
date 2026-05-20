'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const AIConsultingStrategyPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const included = [
    'AI readiness assessment — data, tools, team capability, and culture',
    'Opportunity mapping — identifying the top 5 AI use cases for your specific business',
    'ROI analysis for each identified AI opportunity',
    'Build vs. buy recommendation for each use case',
    'AI vendor and tool evaluation — which platforms are worth investing in',
    'AI implementation roadmap — prioritised, sequenced, and budgeted',
    'Team AI literacy training — helping your team work with AI tools effectively',
    'Ongoing AI advisory retainer — quarterly strategy sessions as the AI landscape evolves',
  ];

  const industries = [
    {
      name: 'Manufacturing',
      use: 'Identifying where AI can reduce quality control costs and predict equipment failure',
    },
    {
      name: 'Financial services',
      use: 'Evaluating AI for fraud detection, customer scoring, and regulatory reporting',
    },
    {
      name: 'Retail and FMCG',
      use: 'AI for demand forecasting, personalised marketing, and supply chain optimisation',
    },
    {
      name: 'Healthcare',
      use: 'AI strategy for patient experience, clinical documentation, and operational efficiency',
    },
    {
      name: 'Education',
      use: 'AI roadmap for learning personalisation and administrative automation',
    },
  ];

  const faqs = [
    {
      q: 'Is AI Consulting useful if we\'re a small business?',
      a: 'Absolutely. Small businesses often see a faster ROI from AI than large enterprises because their processes are simpler and the implementation is quicker. A single well-chosen AI automation can free up 10–15 hours per week for a small team.',
    },
    {
      q: 'How is this different from Strategy & Consulting?',
      a: 'Our Strategy & Consulting service focuses on marketing and digital strategy. AI Consulting & Strategy focuses specifically on artificial intelligence — identifying, evaluating, and planning AI adoption across your entire business, not just marketing.',
    },
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
          className="py-12 sm:py-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/ai-solutions" className="hover:text-primary transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">AI Consulting &amp; Strategy</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6 max-w-4xl">
              Clarity on AI Before You Spend a Rupee on It.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Honest, specific AI guidance from practitioners who build AI systems every day — no
              generic frameworks, no technology-first thinking.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Free AI Readiness Assessment
              </Link>
            </motion.div>
          </motion.div>
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

            {/* Problem Section */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Problem
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Every business leader in Pakistan right now is asking the same question: &ldquo;How do we
                use AI in our business?&rdquo; The challenge is that AI is vast, fast-moving, and full of
                hype. Without expert guidance, businesses either do nothing — waiting until the
                picture is clearer — or invest in the wrong tools and wonder why they see no return.
              </motion.p>
            </section>

            {/* Solution Section */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Solution
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                The Social Hawks AI Consulting &amp; Strategy service cuts through the noise. We assess
                your business, identify the specific AI opportunities with the highest ROI for your
                context, and build a clear, prioritised AI roadmap that your team can actually
                execute. No generic frameworks, no technology-first thinking — just honest, specific
                guidance from practitioners who build AI systems every day.
              </motion.p>
            </section>

            {/* What's Included */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What&apos;s Included
              </motion.h2>
              <div className="space-y-4">
                {included.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-800 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Industry Use Cases */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Industries We Advise
              </motion.h2>
              <div className="space-y-4">
                {industries.map((industry, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="font-bold text-primary mb-2 text-lg">{industry.name}</h3>
                    <p className="text-gray-300 leading-relaxed">{industry.use}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Q: {faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">A: {faq.a}</p>
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
                  Get Your AI Roadmap
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  In a single session, we&apos;ll identify your top AI opportunities and tell you exactly
                  what to build, buy, or defer. No obligation, no fluff.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book a Free AI Readiness Assessment
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

export default AIConsultingStrategyPage;
