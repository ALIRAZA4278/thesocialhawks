'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const AIAgentsPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const included = [
    'Custom AI Agent design and deployment for your specific use case',
    'Research and intelligence agents â€” market monitoring, competitor analysis, trend reports',
    'Customer service agents â€” full resolution capability for complex multi-turn conversations',
    'Operations agents â€” data analysis, reporting, and decision-support',
    'Content agents â€” brief-to-draft content generation with brand voice training',
    'Sales agents â€” outreach, qualification, follow-up, and pipeline management',
    'Integration with your existing tools â€” CRM, Slack, Google Workspace, and custom databases',
    'Agent monitoring dashboard â€” activity logs, performance metrics, and quality controls',
  ];

  const industries = [
    {
      name: 'Marketing agencies',
      use: 'Content agent that drafts weekly social media content from a brief',
    },
    {
      name: 'E-commerce brands',
      use: 'Customer service agent that resolves tier-1 complaints and processes returns',
    },
    {
      name: 'Financial services',
      use: 'Research agent that monitors market news and competitor product changes',
    },
    {
      name: 'Healthcare',
      use: 'Clinical notes summarisation agent that converts appointment recordings into structured documentation',
    },
    {
      name: 'BPO / call centres',
      use: 'Real-time call coaching agent that provides agents with suggested responses during live calls',
    },
  ];

  const faqs = [
    {
      q: 'What\'s the difference between AI automation and AI agents?',
      a: 'Automation follows fixed rules â€” if X happens, do Y. AI Agents make decisions. They can read context, judge the best response, handle exceptions, and complete tasks that have never been explicitly programmed. Agents are significantly more capable and more complex to build.',
    },
    {
      q: 'Is my data safe with an AI agent?',
      a: 'Yes. All AI Agents we build are deployed with enterprise data security standards. Your data does not train external AI models. We use private, isolated deployment environments for all sensitive business applications.',
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
            <span className="text-gray-900 font-medium">AI Agents</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6 max-w-4xl">
              Your Smartest Team Member Never Sleeps, Never Forgets, and Scales Instantly.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Custom AI Agents trained on your data, connected to your tools, and deployed to handle
              high-cognition work that would otherwise require a senior team member.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore AI Agent Solutions for Your Business
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
                Certain business functions require judgment, research, and multi-step decision
                making â€” not just rule-based automation. Writing research summaries, monitoring
                competitor activity, analysing customer feedback, generating weekly reports, or
                managing complex customer escalations all require a level of intelligence that basic
                automation cannot deliver.
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
                AI Agents are autonomous intelligent systems that can perceive context, reason
                through problems, take actions, and complete multi-step tasks without human
                instruction at every step. We build custom AI Agents for Pakistani businesses â€”
                trained on your data, connected to your tools, and deployed to handle the
                high-cognition work that would otherwise require a senior team member.
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
                Industries We Serve
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
                  Deploy Intelligence Across Your Business
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Tell us what your AI agent needs to do. We&apos;ll design, build, and deploy it â€”
                  connected to your tools, trained on your data.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore AI Agent Solutions for Your Business
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

export default AIAgentsPage;

