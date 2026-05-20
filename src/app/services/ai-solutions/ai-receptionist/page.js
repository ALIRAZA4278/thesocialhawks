'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const AIReceptionistPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const included = [
    'Custom AI receptionist trained on your business — services, pricing, FAQs, policies',
    'WhatsApp Business integration — instant automated response to inbound messages',
    'Website chat widget — live on your site within 48 hours of setup',
    'Instagram DM automation — respond to every enquiry, every time',
    'Appointment booking integration — connects to your calendar and books automatically',
    'Lead qualification — collects name, budget, service needed, and contact details',
    'Human handoff system — escalates to your team when a human touch is needed',
    'Arabic, Urdu, and English language support',
  ];

  const industries = [
    {
      name: 'Clinics and hospitals',
      use: '24/7 appointment booking, symptom triage, and insurance FAQ handling',
    },
    {
      name: 'Real estate agencies',
      use: 'Instant property enquiry response, viewing booking, and agent handoff',
    },
    {
      name: 'Restaurants',
      use: 'Table reservations, menu questions, order status, and delivery queries',
    },
    {
      name: 'Educational institutions',
      use: 'Admissions enquiries, course information, and fee structure responses',
    },
    {
      name: 'E-commerce brands',
      use: 'Order tracking, return policy, product recommendations, and complaint handling',
    },
  ];

  const faqs = [
    {
      q: 'Will customers know they\'re talking to an AI?',
      a: 'We design AI receptionists to be transparent when asked directly, while still feeling natural and helpful. Most clients find customers prefer the instant response over waiting for a human.',
    },
    {
      q: 'Can the AI book appointments in my actual calendar?',
      a: 'Yes — we integrate with Google Calendar, Calendly, and most booking platforms. The AI checks real-time availability and books confirmed appointments automatically.',
    },
    {
      q: 'What happens when a customer asks something the AI doesn\'t know?',
      a: 'The AI either finds the closest answer from its training data or hands the conversation off to a human team member with the full conversation history.',
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
            <span className="text-gray-900 font-medium">AI Receptionist</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6 max-w-4xl">
              Your Best Receptionist Works 24 Hours a Day and Never Calls in Sick.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Every missed call, every unanswered WhatsApp message, every lead that waits more than
              5 minutes is a customer lost. Deploy an AI receptionist that responds instantly, every
              time.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                See the AI Receptionist in Action
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
                Every missed call, every unanswered WhatsApp message, every lead that waits more
                than 5 minutes for a response is a customer lost. Research shows that businesses
                that respond to enquiries within 5 minutes are 21x more likely to qualify the lead
                than those that respond within 30 minutes. Most Pakistani businesses respond in
                hours — or not at all.
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
                The AI Receptionist is a conversational AI system deployed on your WhatsApp,
                website chat, Instagram DMs, or phone line. It responds to customer enquiries
                instantly, qualifies leads, books appointments, answers FAQs, and hands off to a
                human agent only when necessary — around the clock, every day of the year.
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
                  Never Miss Another Lead
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  See your AI receptionist answer a live enquiry before you commit to anything.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    See the AI Receptionist in Action
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

export default AIReceptionistPage;
