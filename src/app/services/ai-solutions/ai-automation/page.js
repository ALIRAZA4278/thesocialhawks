'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../../Components/Navbar';
import Contact from '../../../Components/Contact';

const AIAutomationPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const included = [
    'Business process audit â€” identifying the 5â€“10 tasks with highest automation ROI',
    'Workflow automation using n8n, Make (Integromat), and Zapier',
    'CRM automation â€” lead routing, follow-up sequences, and pipeline management',
    'Email and WhatsApp automation for customer communication',
    'Data extraction, processing, and report generation pipelines',
    'Social media scheduling and cross-platform publishing automation',
    'Document generation â€” proposals, invoices, reports, and contracts',
    'Custom integrations between your existing tools and platforms',
  ];

  const industries = [
    {
      name: 'Restaurant chains',
      use: 'Automated order confirmation, review request, and reorder reminders via WhatsApp',
    },
    {
      name: 'E-commerce brands',
      use: 'Abandoned cart recovery, post-purchase sequences, and inventory alerts',
    },
    {
      name: 'Real estate',
      use: 'Lead routing from portals to CRM with instant WhatsApp response',
    },
    {
      name: 'Healthcare clinics',
      use: 'Appointment reminders, follow-up messages, and prescription renewal prompts',
    },
    {
      name: 'BPO / call centres',
      use: 'Automated lead scoring, handoff, and agent briefing before calls',
    },
  ];

  const faqs = [
    {
      q: 'Do I need to change all my existing software?',
      a: 'No. We build automation around the tools you already use â€” WhatsApp, Google Sheets, your CRM, your email platform. We make your existing systems work together, not replace them.',
    },
    {
      q: 'How much can automation actually save?',
      a: 'Most clients recover the cost of implementation within 60â€“90 days through time saved and error reduction. A single automated lead follow-up sequence, for example, can replace 3â€“5 hours of manual outreach weekly.',
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
            <span className="text-gray-900 font-medium">AI Automation</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6 max-w-4xl">
              Remove the Repetition. Multiply the Output.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              Business process automation using AI â€” workflow automation, CRM integration, WhatsApp
              automation, and intelligent pipelines for businesses.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Free Automation Audit
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
                Your team is spending hours every week on tasks that should take minutes â€” data
                entry, report generation, follow-up emails, appointment scheduling, lead routing,
                invoice processing, social media posting. Every hour spent on repetition is an hour
                not spent on work that actually grows your business.
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
                AI Automation uses intelligent workflow systems to take over the repetitive
                operational work in your business â€” automatically, reliably, and without human
                intervention. We identify your highest-friction processes, design the automation,
                build the system, and deploy it. You get your team&apos;s time back.
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
                Industry Use Cases
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
                  Ready to Automate Your Business?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Let us identify the exact processes in your business that are ready for
                  automation â€” and show you what&apos;s possible.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/#contact"
                    className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book a Free Automation Audit
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

export default AIAutomationPage;

