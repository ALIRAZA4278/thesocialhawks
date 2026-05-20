'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const AIChatbotsPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const included = [
    'Custom chatbot trained on your business knowledge base',
    'Multi-channel deployment — website, WhatsApp, Facebook Messenger, Instagram',
    'E-commerce chatbot — product recommendations, cart recovery, order support',
    'Customer service bot — FAQ resolution, complaint handling, and escalation',
    'Sales qualification bot — budget, timeline, requirements collection',
    'Multilingual support — English, Urdu, and regional languages',
    'Analytics dashboard — conversation volumes, resolution rates, and handoff triggers',
    'Monthly training updates — keeping your bot current as your business changes',
  ];

  const industries = [
    {
      name: 'Online stores',
      use: 'Product finder chatbot that guides customers to the right product',
    },
    {
      name: 'Service businesses',
      use: 'Lead qualification bot that collects project details and books discovery calls',
    },
    {
      name: 'BPO and call centres',
      use: 'Pre-call briefing bot that qualifies and routes inbound leads',
    },
    {
      name: 'Healthcare',
      use: 'Symptom checker and appointment scheduling bot with privacy-first design',
    },
    {
      name: 'Education',
      use: 'Course finder and admissions enquiry bot available 24/7',
    },
  ];

  const faqs = [
    {
      q: 'How is an AI chatbot different from the AI receptionist?',
      a: 'The AI Receptionist focuses on inbound customer service and appointment management. AI Chatbots are broader — they handle sales conversations, product recommendations, e-commerce support, and complex multi-step workflows. Both can be combined.',
    },
    {
      q: 'How long does it take to build and deploy?',
      a: 'A standard chatbot deployment takes 2–4 weeks from brief to live. Complex e-commerce or multi-language bots may take 4–6 weeks.',
    },
    {
      q: 'How do you keep the bot accurate as my business changes?',
      a: 'We provide monthly training updates as standard. If your pricing, products, or policies change, we update the bot\'s knowledge base within 48 hours of notification.',
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
            <span className="text-gray-900 font-medium">AI Chatbots</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6 max-w-4xl">
              Conversations That Convert — at Any Scale, at Any Hour.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Custom-trained AI chatbots built for your specific business — deployed across every
              channel where your customers talk to you.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Build Your Custom AI Chatbot
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
                Your customers want instant answers. Your team can only handle so many conversations
                at once. The gap between customer expectations and human capacity is widening — and
                every conversation that falls through costs you a sale.
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
                AI Chatbots by The Social Hawks are custom-trained conversational systems built for
                your specific business — not generic, out-of-the-box bots that frustrate customers
                with irrelevant responses. We train your chatbot on your products, services, FAQs,
                pricing, and brand voice, then deploy it across every channel where your customers
                talk to you.
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
                  Ready to Scale Your Customer Conversations?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let&apos;s build a chatbot that actually works — trained on your business, deployed
                  where your customers are.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Build Your Custom AI Chatbot
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

export default AIChatbotsPage;
