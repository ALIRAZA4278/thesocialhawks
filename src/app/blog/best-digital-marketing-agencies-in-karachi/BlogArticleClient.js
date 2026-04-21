'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const COVER_IMAGE = '/images/blog/best-agencies-karachi.jpg';
const COVER_FALLBACK = 'linear-gradient(135deg, #7f20c4 0%, #5a2a7c 100%)';

const agencies = [
  {
    rank: 1,
    name: 'The Social Hawks',
    bestFor: 'Full-service branding, social media marketing, and creative production for consumer brands',
    description: 'The Social Hawks is a Karachi-based full-service digital marketing agency that works with consumer brands across food and beverage, retail, e-commerce, education, and health. With 80+ brands served since founding, the agency is known for combining brand identity, content production, social media management, SEO, and paid advertising under one roof.',
    differentiator: 'What sets The Social Hawks apart in the Karachi market is the depth of creative production \u2014 the agency handles everything from food photography and Reels production to logo design and website development, which means brands do not need to coordinate between multiple vendors.',
    services: 'Brand identity and design, social media management, SEO, paid advertising, content and writing, web and app development, video and photography, animation, and e-commerce marketing.',
    industries: 'Food and beverage, retail, apparel, e-commerce, education, healthcare, BPO.',
    clients: 'BrickLane Pizza, Dr Herbs, HIRM, The Cactus, Zaafar Fragrance.',
    suited: 'Mid-sized brands that want a single agency to own their full digital presence \u2014 from how they look to how they grow.',
    website: 'thesocialhawks.com',
    highlight: true,
  },
  {
    rank: 2,
    name: 'ArtX Pro',
    bestFor: 'Data-driven campaigns and e-commerce marketing',
    description: 'ArtX Pro is a full-service digital marketing agency in Karachi with a strong reputation in performance-based campaigns. The agency specialises in social media marketing, SEO, PPC, and e-commerce management \u2014 including Daraz, Shopify, Amazon, and Noon. Their approach leans heavily on analytics, with a focus on measurable ROI over creative-led campaigns.',
    services: 'Social media marketing, SEO, PPC, e-commerce management, web development, content writing, video production.',
    suited: 'E-commerce brands that want data-backed ad management and marketplace optimisation.',
  },
  {
    rank: 3,
    name: 'Buzz Interactive',
    bestFor: 'Performance marketing for startups and SaaS brands',
    description: 'Buzz Interactive is a Webflow-certified digital marketing agency that primarily serves global startups, SaaS companies, and e-commerce brands. While based in Pakistan, much of their client portfolio is international. They are known for high-converting campaigns, technical web development, and growth-focused marketing strategy.',
    pricing: 'From approximately PKR 103,000/month for digital marketing services.',
    suited: 'Tech startups or founders who want an internationally experienced team at Pakistan pricing.',
  },
  {
    rank: 4,
    name: 'Aspire Digital',
    bestFor: 'SEO and organic growth for local Karachi businesses',
    description: 'Aspire Digital has been operating in Karachi for over 10 years, starting \u2014 according to the founders \u2014 from a college cafeteria. The agency is particularly well-reviewed for SEO services, with clients reporting consistent improvements in organic search visibility and e-commerce traffic.',
    services: 'SEO, PPC, social media marketing, web design, graphic design, ERP services.',
    suited: 'Karachi-based businesses that want to rank higher on Google and reduce dependence on paid advertising over time.',
  },
  {
    rank: 5,
    name: 'Media Feathers',
    bestFor: 'Multi-channel marketing with outdoor advertising',
    description: 'Media Feathers is a Karachi agency that has been operating since 2016 and has expanded to the US as Media Feathers LLC. They are one of the few agencies in Karachi that combine digital marketing with out-of-home (OOH) advertising services, making them useful for brands that want both digital and physical campaign integration.',
    services: 'Social media marketing, PPC, web development, outdoor media advertising.',
    suited: 'Brands that need both online and offline marketing handled by one partner.',
  },
  {
    rank: 6,
    name: 'Artimization',
    bestFor: 'Design-led campaigns and branding',
    description: 'Artimization is a Karachi-based agency known for design-driven marketing \u2014 their strength is in branding, website design, and digital campaigns that prioritise visual identity. They work with brands that want to make a strong first impression across digital touchpoints.',
    pricing: 'SEO packages from approximately PKR 84,000 to PKR 238,000 per month.',
    suited: 'Brands in the early stages of building a visual identity, or those that feel their current brand look is holding back their marketing.',
  },
  {
    rank: 7,
    name: 'Rolling Cherry',
    bestFor: 'Social media management for small and mid-sized businesses',
    description: 'Rolling Cherry is a Karachi-based full-service digital marketing agency with strong client reviews for social media management and campaign execution. The agency is noted for its in-house team approach and competitive pricing, making it a solid option for businesses at earlier stages of digital marketing.',
    suited: 'Small businesses and SMEs looking for hands-on social media management without agency-scale costs.',
  },
  {
    rank: 8,
    name: 'Codistan Ventures',
    bestFor: 'Tech companies and FMCG brands',
    description: 'Codistan Ventures merges digital strategy with creative execution. They have a notable track record with tech companies, FMCG brands, and educational institutions in Karachi. The agency offers premium branding and full-cycle campaign management.',
    suited: 'FMCG companies, tech firms, and educational institutions that need a strategic partner with sector experience.',
  },
];

const comparisonData = [
  { agency: 'The Social Hawks', strength: 'Full-service creative + growth', bestFor: 'Consumer brands, food, retail', price: 'Contact for quote' },
  { agency: 'ArtX Pro', strength: 'Data-driven performance', bestFor: 'E-commerce, marketplace brands', price: 'Contact for quote' },
  { agency: 'Buzz Interactive', strength: 'Performance marketing', bestFor: 'Startups, SaaS, international brands', price: '~PKR 103,000/month' },
  { agency: 'Aspire Digital', strength: 'SEO and organic growth', bestFor: 'Local Karachi businesses', price: 'Contact for quote' },
  { agency: 'Media Feathers', strength: 'Digital + OOH integration', bestFor: 'Brands needing on and offline', price: 'Contact for quote' },
  { agency: 'Artimization', strength: 'Design-led branding', bestFor: 'Brand identity and campaigns', price: '~PKR 84,000/month (SEO)' },
  { agency: 'Rolling Cherry', strength: 'Social media management', bestFor: 'SMEs and small businesses', price: 'Contact for quote' },
  { agency: 'Codistan Ventures', strength: 'Strategy + creative', bestFor: 'FMCG, tech, education', price: 'Contact for quote' },
];

const pricingData = [
  { service: 'Basic social media management (1\u20132 platforms, content calendar + posting)', range: 'PKR 30,000\u201360,000/month' },
  { service: 'Social media management + content creation (photography/video)', range: 'PKR 80,000\u2013150,000/month' },
  { service: 'Full-service retainer (social, SEO, paid ads, content, design)', range: 'PKR 150,000\u2013500,000+/month' },
  { service: 'SEO-only packages', range: 'PKR 50,000\u2013250,000/month' },
  { service: 'Paid advertising management (excluding ad spend)', range: 'PKR 30,000\u201380,000/month' },
  { service: 'Website development (one-off project)', range: 'PKR 150,000\u2013800,000+' },
];

const criteria = [
  { title: 'Proven case studies with real numbers', desc: 'Any agency worth hiring should be able to show you percentage increases in reach, lead volume, revenue, or follower growth. Vague testimonials without data are a red flag.' },
  { title: 'Relevant industry experience', desc: 'A food brand and a B2B software company have completely different marketing needs. Look for an agency that has worked in your sector.' },
  { title: 'Transparent pricing', desc: 'The Karachi market ranges from PKR 30,000/month for basic social media management to PKR 500,000+ for full-service campaigns. Know what tier you are in before you talk to anyone.' },
  { title: 'Local market understanding', desc: "This matters more than it sounds. Pakistan\u2019s social media audience behaves differently to Western markets \u2014 peak engagement times, preferred formats (Reels vs. carousels), and the role of WhatsApp in the sales funnel all require local expertise." },
  { title: 'Clear reporting', desc: 'You should receive monthly reports with actual platform metrics, not just screenshots of likes.' },
];

const steps = [
  { step: '01', title: 'Define what you actually need', desc: 'Do you want more followers, more website traffic, more leads, or more sales? These require different strategies and different agencies. A social media management agency is not the same as a performance marketing agency.' },
  { step: '02', title: 'Ask for relevant case studies', desc: '"Have you worked with brands in my industry? Can you show me the results?" If an agency cannot point to comparable work, that is a risk.' },
  { step: '03', title: 'Understand who will actually work on your account', desc: 'Many agencies sell on the strength of their senior team, then hand accounts to junior executives. Ask who your day-to-day contact will be and what their experience level is.' },
  { step: '04', title: 'Clarify reporting and communication cadence', desc: 'How often will you receive reports? What metrics will they track? Will you have access to ad accounts and analytics dashboards? These are non-negotiable transparency requirements.' },
  { step: '05', title: 'Start with a trial project', desc: 'Before committing to a long-term retainer, consider starting with a one-month trial or a specific project \u2014 a campaign, a brand refresh, or a website \u2014 to assess whether the working relationship is right.' },
];

const faqs = [
  {
    q: 'What is the best digital marketing agency in Karachi?',
    a: 'The best agency depends on your specific needs. For full-service branding and social media, The Social Hawks is a strong choice for consumer brands. For SEO-focused growth, Aspire Digital has a long track record. For e-commerce performance marketing, ArtX Pro is well-regarded. There is no single "best" \u2014 there is only the best fit for your goals and budget.',
  },
  {
    q: 'How much does digital marketing cost in Karachi?',
    a: 'Basic social media management in Karachi starts at around PKR 30,000\u201360,000 per month. A full-service agency retainer covering social media, SEO, paid ads, and content typically ranges from PKR 150,000 to PKR 500,000 per month depending on scope and agency size.',
  },
  {
    q: 'How do I know if a digital marketing agency in Karachi is legitimate?',
    a: 'Look for verifiable case studies with named clients and real metrics, check Google reviews and third-party platforms like Clutch or DesignRush, ask for references from current clients, and verify that the agency can actually show you the platforms and accounts they manage.',
  },
  {
    q: 'Is it better to hire a freelancer or a digital marketing agency in Karachi?',
    a: 'Freelancers are cost-effective for specific tasks \u2014 a logo, a website, ad copy \u2014 but they lack the coordination, bandwidth, and strategic oversight of an agency. If you need consistent, multi-channel marketing that grows with your brand, an agency is the better long-term investment.',
  },
  {
    q: 'Which digital marketing agency in Karachi is best for food brands?',
    a: "The Social Hawks has specific experience in the food and beverage sector, including work with pizza brands, herbal food products, and restaurant clients. The key advantage for food brands is access to in-house food photography and videography alongside social media management, which keeps brand visuals consistent.",
  },
  {
    q: 'Do Karachi digital marketing agencies work with international clients?',
    a: 'Yes. Several agencies on this list \u2014 including Buzz Interactive and Media Feathers \u2014 have international client portfolios. Pakistan-based agencies offer significant cost advantages for international brands compared to UK or US agencies, with hourly rates typically between USD 25 and USD 70.',
  },
];

const BlogArticleClient = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />

      <motion.div
        className="min-h-screen bg-white mt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Cover Image */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-56 sm:h-72 lg:h-96 w-full">
            {!imgError ? (
              <Image
                src={COVER_IMAGE}
                alt="Best Digital Marketing Agencies in Karachi 2025"
                fill
                className="object-cover"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full" style={{ background: COVER_FALLBACK }} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          className="py-12 sm:py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="px-4 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Best Digital Marketing Agencies in Karachi</span>
              </div>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span>Last updated: April 2025</span>
              <span className="hidden sm:inline">|</span>
              <span>Reading time: 8 minutes</span>
              <span className="hidden sm:inline">|</span>
              <span>Author: The Social Hawks Team</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Best Digital Marketing Agencies in Karachi (2025 Guide)
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                Karachi is home to more than 100 digital marketing agencies &mdash; but not all of them are built equally. Some specialise in SEO, others in social media, and a handful offer the full-service approach that growing brands actually need.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                This guide breaks down the best digital marketing agencies in Karachi for 2025, what each one is known for, and how to choose the right partner for your business.
              </p>
            </motion.div>

            {/* Quick Answer Box */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-bold text-gray-900 mb-2">Quick answer:</p>
              <p className="text-gray-700 leading-relaxed">
                The best digital marketing agencies in Karachi in 2025 include <strong>The Social Hawks</strong>, ArtX Pro, Buzz Interactive, Aspire Digital, Media Feathers, Artimization, Rolling Cherry, and Codistan Ventures. The right choice depends on your budget, industry, and whether you need performance marketing, branding, or SEO as your primary focus.
              </p>
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
          <div className="px-4 mx-auto max-w-4xl">

            {/* What Makes a Good Agency */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What Makes a Good Digital Marketing Agency in Karachi?
              </motion.h2>
              <p className="text-gray-700 mb-6">
                Before jumping into the list, here is what you should actually be evaluating &mdash; because &ldquo;we deliver results&rdquo; is not a criterion.
              </p>

              <div className="space-y-4">
                {criteria.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 p-5 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* The 8 Best Agencies */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The 8 Best Digital Marketing Agencies in Karachi (2025)
              </motion.h2>

              <div className="space-y-10">
                {agencies.map((agency, idx) => (
                  <motion.div
                    key={idx}
                    className={`rounded-2xl p-6 sm:p-8 ${agency.highlight ? 'bg-gradient-to-br from-primary/5 to-primary/15 border-2 border-primary/30' : 'bg-gray-50 border border-gray-200'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-primary/40 flex-shrink-0">
                        {String(agency.rank).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{agency.name}</h3>
                        <p className="text-primary font-medium text-sm mt-1">Best for: {agency.bestFor}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">{agency.description}</p>

                    {agency.differentiator && (
                      <p className="text-gray-700 leading-relaxed mb-4">{agency.differentiator}</p>
                    )}

                    <div className="space-y-2 text-sm">
                      {agency.services && (
                        <p><span className="font-semibold text-gray-900">Services:</span> <span className="text-gray-600">{agency.services}</span></p>
                      )}
                      {agency.industries && (
                        <p><span className="font-semibold text-gray-900">Industries served:</span> <span className="text-gray-600">{agency.industries}</span></p>
                      )}
                      {agency.clients && (
                        <p><span className="font-semibold text-gray-900">Notable clients:</span> <span className="text-gray-600">{agency.clients}</span></p>
                      )}
                      {agency.pricing && (
                        <p><span className="font-semibold text-gray-900">Pricing:</span> <span className="text-gray-600">{agency.pricing}</span></p>
                      )}
                      <p><span className="font-semibold text-gray-900">Best suited for:</span> <span className="text-gray-600">{agency.suited}</span></p>
                      {agency.website && (
                        <p><span className="font-semibold text-gray-900">Website:</span> <span className="text-primary font-medium">{agency.website}</span></p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Comparison: Karachi Digital Marketing Agencies at a Glance
              </motion.h2>

              <motion.div
                className="overflow-x-auto rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 font-semibold">Agency</th>
                      <th className="text-left p-4 font-semibold">Primary Strength</th>
                      <th className="text-left p-4 font-semibold">Best For</th>
                      <th className="text-left p-4 font-semibold">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr key={idx} className={`${idx === 0 ? 'bg-primary/5 font-medium' : idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}>
                        <td className="p-4 font-semibold text-gray-900">{row.agency}</td>
                        <td className="p-4 text-gray-700">{row.strength}</td>
                        <td className="p-4 text-gray-700">{row.bestFor}</td>
                        <td className="p-4 text-gray-700">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How Much Do Digital Marketing Agencies in Karachi Charge?
              </motion.h2>
              <p className="text-gray-300 mb-8">
                Pricing in Karachi varies significantly based on the scope of services, agency size, and whether you are engaging for social media management only or a full-service retainer. Here is a realistic price guide for 2025:
              </p>

              <div className="space-y-4">
                {pricingData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-gray-200">{item.service}</span>
                    <span className="font-bold text-white whitespace-nowrap">{item.range}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-400 mt-8 text-sm italic">
                Keep in mind that the cheapest option is rarely the most cost-effective. An agency charging PKR 25,000 per month that delivers no measurable results costs more than one charging PKR 100,000 that grows your revenue.
              </p>
            </section>

            {/* How to Choose */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How to Choose the Right Digital Marketing Agency in Karachi
              </motion.h2>

              <div className="space-y-6">
                {steps.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-primary/30 flex-shrink-0">{item.step}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
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
                    className="border-b border-gray-200 pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Final Thoughts */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Final Thoughts
              </motion.h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Karachi&apos;s digital marketing industry has matured significantly in the past five years. There are now agencies with genuine specialisations, transparent pricing, and verifiable results &mdash; but you have to know what to look for.
                </p>
                <p>
                  The agencies on this list represent the best of what the city has to offer in 2025. Whichever you choose, the most important factor is fit: do they understand your industry, do they have the team to execute, and do they measure what actually matters to your business?
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 mb-2 max-w-2xl mx-auto px-4">
                  If you are a consumer brand &mdash; food, retail, apparel, e-commerce, or health &mdash; and want a partner that handles your entire digital presence:
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Get a Free Brand Analysis
                </h2>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Your Free Brand Review
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

export default BlogArticleClient;
