'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

const COVER_IMAGE = '/images/blog/social-media-cost-pakistan.jpg';
const COVER_FALLBACK = 'linear-gradient(135deg, #1a1a2e 0%, #7f20c4 100%)';

const tiers = [
  {
    name: 'Tier 1 — Basic',
    range: 'PKR 20,000 to PKR 50,000 per month',
    description: 'At this level you are typically working with a freelancer or a very small agency. You can expect content scheduling on one to two platforms, basic graphic design using templates, and minimal strategy. There is usually no professional photography, no video production, and limited reporting.',
    note: 'This tier works for very early-stage businesses that simply need a social presence while they figure out their marketing. It does not work for brands that are actively trying to grow, generate leads, or compete in a crowded market.',
    gets: '10–15 posts per month, template-based design, one platform, basic captions.',
    doesntGet: 'Original content production, paid ad management, strategy, analytics, community management.',
  },
  {
    name: 'Tier 2 — Standard',
    range: 'PKR 50,000 to PKR 120,000 per month',
    description: 'This is where most serious small businesses in Pakistan should start. At this level you can expect a content calendar, original graphic design (not just templates), basic Reel or video editing, caption writing, community management (responding to comments and DMs), and a monthly performance report.',
    note: 'A good agency at this tier will cover two platforms properly — typically Facebook and Instagram — and will have a clear content strategy aligned with your brand goals.',
    gets: '15–20 posts per month, original design, two platforms, Reels production, captions, community management, monthly reporting.',
    doesntGet: 'Professional photography or videography, paid ad management, cross-platform strategy beyond two channels.',
  },
  {
    name: 'Tier 3 — Growth',
    range: 'PKR 120,000 to PKR 250,000 per month',
    description: 'This is a full social media management package from a capable agency. At this level you should expect a dedicated account manager, a monthly strategy session, original content production (including some photography or video), multi-platform management, and detailed analytics. Paid ad management may be included or priced separately.',
    note: 'This is the tier that growing brands — restaurants, e-commerce stores, clothing brands, health brands — typically need to see consistent, measurable results.',
    gets: '20–30 pieces of content per month, original photography or video included or partially included, 3–4 platforms, paid ad management, strategy meetings, competitor analysis, detailed reporting.',
    doesntGet: 'Full-scale monthly shoots, dedicated videographer, influencer management (usually priced separately).',
  },
  {
    name: 'Tier 4 — Full-Service',
    range: 'PKR 250,000 to PKR 500,000+ per month',
    description: 'At this level you are essentially outsourcing your entire marketing function to an agency. A full-service retainer includes brand strategy, content production (professional photography and video), social media management across all relevant platforms, paid advertising, SEO, and often website maintenance.',
    note: 'This tier suits brands that are scaling rapidly, have multiple product lines or locations, or are operating in highly competitive categories.',
    gets: 'Everything — strategy, production, distribution, paid media, analytics, and ongoing optimisation as a unified service.',
    doesntGet: null,
  },
];

const pricingFactors = [
  { title: 'Agency size and experience', desc: 'A solo freelancer, a small boutique agency, and a full-service agency all charge differently — and deliver differently. An established agency with a portfolio of 80+ brands carries overheads that a freelancer does not, but also brings systems, accountability, and strategic depth that freelancers typically cannot match.' },
  { title: 'Content production requirements', desc: 'Text-and-graphic posts cost far less to produce than original food photography, product videos, or animated Reels. Brands in food and beverage, fashion, or lifestyle almost always need higher production budgets.' },
  { title: 'Number of platforms', desc: 'Managing one Instagram account is not the same as managing Facebook, Instagram, TikTok, LinkedIn, and YouTube simultaneously.' },
  { title: 'Ad spend management', desc: 'Many agencies charge a management fee on top of your actual ad spend. This is separate from their retainer.' },
  { title: 'Reporting and strategy', desc: 'Basic monthly reports take an hour. Detailed analytics with campaign insights, competitor tracking, and strategic recommendations take considerably more.' },
];

const freelancerComparison = [
  { label: 'Monthly cost', freelancer: 'PKR 15,000–40,000', small: 'PKR 40,000–120,000', full: 'PKR 120,000–500,000+' },
  { label: 'Strategy', freelancer: 'Limited', small: 'Basic', full: 'Comprehensive' },
  { label: 'Content production', freelancer: 'Graphic design only', small: 'Design + basic video', full: 'Design, photo, video' },
  { label: 'Platforms managed', freelancer: '1–2', small: '2–3', full: '3–5+' },
  { label: 'Paid ad management', freelancer: 'Rarely', small: 'Sometimes', full: 'Usually included' },
  { label: 'Reporting', freelancer: 'Minimal', small: 'Monthly summary', full: 'Detailed monthly' },
  { label: 'Accountability', freelancer: 'Low', small: 'Medium', full: 'High' },
  { label: 'Scalability', freelancer: 'Very limited', small: 'Limited', full: 'Built for scale' },
];

const hiddenCosts = [
  { title: 'Photography and videography', desc: 'If your agency does not include original content production, you will need to pay for it separately. A professional half-day product shoot in Karachi typically costs PKR 25,000 to PKR 80,000. Monthly food photography for a restaurant brand can run PKR 15,000 to PKR 40,000 per session. Reels and short-form video production adds another PKR 20,000 to PKR 60,000 per shoot.' },
  { title: 'Influencer marketing', desc: 'A nano-influencer in Pakistan (10,000–50,000 followers) may charge PKR 5,000 to PKR 25,000 per post. A mid-tier influencer (100,000–500,000 followers) typically charges PKR 30,000 to PKR 150,000. These costs are almost always separate from agency fees.' },
  { title: 'Graphic design tools and software', desc: 'Most agencies absorb this internally, but if you are managing things in-house, expect to pay for Adobe Creative Cloud (PKR 7,000–15,000/month) or similar tools.' },
  { title: 'Platform fees', desc: 'Meta Ads require a credit or debit card linked to your Business Manager, and charges are billed in USD, which means exchange rate fluctuations affect your effective spend in PKR.' },
  { title: 'Strategy and setup', desc: 'Many agencies charge a one-time onboarding or setup fee — typically PKR 15,000 to PKR 50,000 — to cover brand discovery, platform audits, and the initial content framework. This is separate from your monthly retainer.' },
];

const budgetTips = [
  { title: 'Set clear goals before hiring anyone', desc: 'Do you want more followers, more website traffic, more leads, or more direct sales? The answer changes which platforms you prioritise and what success looks like. An agency that does not ask this question in the first meeting is one to avoid.' },
  { title: 'Separate your management fee from your ad spend', desc: 'Always understand which budget goes to the agency and which goes directly to the platform. Conflating the two leads to budget confusion and makes it impossible to evaluate either efficiently.' },
  { title: 'Prioritise content quality over posting frequency', desc: 'Three high-quality Reels per week will outperform ten low-quality static posts every time on the Pakistani Instagram and TikTok audience.' },
  { title: 'Ask for monthly reporting on real metrics', desc: 'Follower count is a vanity metric. What matters is reach, engagement rate, click-through rate, cost per lead, and conversion. If an agency cannot report on these, find one that can.' },
  { title: 'Do not go too cheap too early', desc: 'Agencies charging PKR 15,000 to PKR 25,000 per month cannot deliver what growing brands need. There are costs in running an agency — team salaries, tools, ad account management, design software — and fees at that level mean corners are being cut somewhere.' },
];

const socialHawksIncludes = [
  { title: 'Brand management and strategy', desc: 'Monthly strategy sessions, content calendar planning, brand voice guidelines, competitor monitoring.' },
  { title: 'Content production', desc: 'Original graphic design, food and product photography coordination, Reel and video production, animated posts, story templates.' },
  { title: 'Platform management', desc: 'Publishing, scheduling, hashtag strategy, community management (comments, DMs, and engagement).' },
  { title: 'Paid advertising', desc: 'Meta Ads (Facebook and Instagram) campaign setup and management, audience targeting, A/B testing, performance reporting. Ad spend is billed separately at cost.' },
  { title: 'Reporting', desc: 'Monthly analytics report covering reach, engagement, follower growth, lead volume, and ad performance. Quarterly strategy reviews.' },
];

const faqs = [
  {
    q: 'How much does social media marketing cost in Pakistan per month?',
    a: 'Social media marketing in Pakistan costs between PKR 20,000 and PKR 500,000 per month depending on the level of service. For most growing small and mid-sized businesses, a realistic budget for a proper agency retainer covering two to three platforms, original content, and community management sits between PKR 50,000 and PKR 150,000 per month, with ad spend budgeted separately.',
  },
  {
    q: 'Is ad spend included in social media marketing packages in Pakistan?',
    a: 'No — in almost all cases, ad spend (what you pay to Facebook and Instagram to run ads) is separate from the agency\'s management fee. Your agency charges for the strategy, creative, and management of campaigns; you pay the platform directly for the actual ad exposure. Always clarify this before signing a contract.',
  },
  {
    q: 'How much should a small business in Karachi spend on Facebook ads per month?',
    a: 'A minimum viable Facebook ad budget for a local Karachi business is around PKR 30,000 to PKR 50,000 per month. Below this, campaigns do not receive enough data to optimise properly. This is separate from any agency management fee.',
  },
  {
    q: 'What is a reasonable social media marketing budget for a restaurant in Pakistan?',
    a: 'A restaurant in Pakistan typically needs PKR 80,000 to PKR 150,000 per month total — covering agency management (PKR 50,000–80,000), content production including food photography (PKR 15,000–30,000 per shoot), and a minimum monthly ad spend of PKR 30,000–50,000 on Facebook and Instagram to drive reach and bookings.',
  },
  {
    q: 'What do social media marketing agencies in Pakistan charge for ad management?',
    a: 'Most Pakistani agencies charge a management fee of PKR 20,000 to PKR 60,000 per month to manage your paid advertising campaigns — on top of your actual ad spend. Some agencies charge a percentage of ad spend (typically 15–20%) instead of a flat fee.',
  },
  {
    q: 'How much does content creation cost separately in Pakistan?',
    a: 'Content creation pricing in Pakistan varies by type. A professional half-day photography shoot typically costs PKR 25,000 to PKR 80,000. Monthly Reel production (four to six videos) runs PKR 40,000 to PKR 100,000. Graphic design for social media (10–20 posts per month) typically costs PKR 15,000 to PKR 40,000 depending on complexity.',
  },
  {
    q: 'Is it better to hire a freelancer or an agency for social media marketing in Pakistan?',
    a: 'For brands in early stages or with very limited budgets, a freelancer is a practical starting point. For brands that are actively growing and need consistent output, strategic direction, paid ad management, and accountability, an agency delivers substantially better return on investment. The cost difference is real, but so is the difference in output and results.',
  },
];

const summaryTable = [
  { service: 'Basic social media management (freelancer, 1 platform)', range: '15,000 – 40,000' },
  { service: 'Standard agency package (2 platforms, design, captions)', range: '50,000 – 120,000' },
  { service: 'Growth package (multi-platform, production, paid ads)', range: '120,000 – 250,000' },
  { service: 'Full-service agency retainer', range: '250,000 – 500,000+' },
  { service: 'Facebook ad spend (minimum viable)', range: '30,000 – 50,000' },
  { service: 'Instagram ad spend (minimum viable)', range: '20,000 – 40,000' },
  { service: 'Food/product photography (per shoot)', range: '25,000 – 80,000' },
  { service: 'Reel production (per month, 4–6 videos)', range: '40,000 – 100,000' },
  { service: 'Influencer marketing (nano, per post)', range: '5,000 – 25,000' },
  { service: 'Influencer marketing (mid-tier, per post)', range: '30,000 – 150,000' },
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
                alt="Social Media Marketing Cost in Pakistan 2025"
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
                <span className="text-gray-900 font-medium">Social Media Marketing Cost in Pakistan</span>
              </div>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span>Last updated: April 2025</span>
              <span className="hidden sm:inline">|</span>
              <span>Reading time: 9 minutes</span>
              <span className="hidden sm:inline">|</span>
              <span>Author: The Social Hawks Team</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                How Much Does Social Media Marketing Cost in Pakistan? (2025 Pricing Guide)
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Social media marketing in Pakistan costs between PKR 20,000 and PKR 500,000 per month, depending on the number of platforms, the level of content production, whether paid advertising is included, and the size and experience of the agency you hire. For most small and mid-sized businesses in Karachi and Lahore, a realistic starting budget for meaningful results sits between <strong>PKR 50,000 and PKR 150,000 per month</strong> &mdash; excluding ad spend.
              </p>
            </motion.div>

            {/* Quick Summary Box */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-700 leading-relaxed">
                This guide breaks down every cost category clearly, so you know exactly what you are paying for, what you are not, and how to avoid the most common budgeting mistakes Pakistani brands make.
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

            {/* Why Costs Vary */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Social Media Marketing Costs Vary So Much in Pakistan
              </motion.h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Before looking at the numbers, it helps to understand why the range is so wide &mdash; from PKR 20,000 a month to PKR 500,000 and beyond.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The biggest driver is <strong>scope</strong>. &ldquo;Social media marketing&rdquo; means different things to different people. At the low end, it can mean someone scheduling three posts a week on one platform. At the high end, it means a full team handling strategy, content production (photography, video, graphic design), community management, paid advertising, influencer coordination, reporting, and monthly optimisation across four or five platforms.
              </p>
              <p className="text-gray-700 mb-6">Other factors that affect pricing include:</p>

              <div className="space-y-4">
                {pricingFactors.map((item, idx) => (
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

            {/* Cost Breakdown Tiers */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Social Media Marketing Cost Breakdown: What Each Tier Buys You in Pakistan (2025)
              </motion.h2>

              <div className="space-y-8">
                {tiers.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    className="rounded-2xl border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="bg-gray-900 text-white p-5 sm:p-6">
                      <h3 className="text-xl font-bold">{tier.name}</h3>
                      <p className="text-primary font-semibold mt-1">{tier.range}</p>
                    </div>
                    <div className="p-5 sm:p-6 space-y-4">
                      <p className="text-gray-700 leading-relaxed">{tier.description}</p>
                      <p className="text-gray-600 text-sm italic">{tier.note}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="bg-green-50 p-4 rounded-xl">
                          <p className="font-semibold text-green-800 text-sm mb-1">What you get:</p>
                          <p className="text-green-700 text-sm">{tier.gets}</p>
                        </div>
                        {tier.doesntGet && (
                          <div className="bg-red-50 p-4 rounded-xl">
                            <p className="font-semibold text-red-800 text-sm mb-1">What you don&apos;t get:</p>
                            <p className="text-red-700 text-sm">{tier.doesntGet}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Ad Spend Section */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Cost of Ad Spend: What Pakistanis Actually Pay for Facebook and Instagram Ads
              </motion.h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Agency fees are only part of the picture. If you run paid social media campaigns &mdash; which you almost certainly should &mdash; you need a separate budget for the actual ad spend that goes to Meta (Facebook and Instagram).
              </p>

              {/* Facebook Ads */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Facebook Ad Costs in Pakistan (2025)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">Cost per click (CPC)</span>
                    <span className="font-semibold text-white sm:block"> PKR 140 – 422</span>
                  </div>
                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">Cost per 1,000 impressions (CPM)</span>
                    <span className="font-semibold text-white sm:block"> PKR 280 – 1,100</span>
                  </div>
                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">Cost per lead</span>
                    <span className="font-semibold text-white sm:block"> PKR 281 – 845</span>
                  </div>
                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">Cost per page like</span>
                    <span className="font-semibold text-white sm:block"> PKR 273 – 308</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  For a new or small business just starting with Facebook ads, a daily budget of PKR 1,500 to PKR 3,000 is a reasonable starting point to gather useful performance data.
                </p>
              </motion.div>

              {/* Instagram Ads */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">Instagram Ad Costs in Pakistan (2025)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">Cost per click (CPC)</span>
                    <span className="font-semibold text-white sm:block"> PKR 8 – 350</span>
                  </div>
                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">Cost per 1,000 impressions (CPM)</span>
                    <span className="font-semibold text-white sm:block"> PKR 150 – 500</span>
                  </div>
                  <div className="flex justify-between sm:block">
                    <span className="text-gray-400">Cost per engagement</span>
                    <span className="font-semibold text-white sm:block"> PKR 5 – 20</span>
                  </div>
                </div>
              </motion.div>

              {/* Key callout */}
              <motion.div
                className="bg-primary/20 border border-primary/40 p-5 rounded-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white leading-relaxed text-sm">
                  <strong>Key:</strong> Ad spend is always separate from your agency management fee. If an agency quotes you PKR 80,000 per month for social media management, that PKR 80,000 does not include a single rupee of Facebook or Instagram spend. Your actual ad budget sits on top of the management fee.
                </p>
              </motion.div>

              {/* How much ad spend */}
              <div>
                <h3 className="text-lg font-bold mb-3">How much ad spend do you actually need?</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  For a local Karachi business running awareness and lead generation campaigns on Facebook and Instagram, a minimum viable monthly ad budget is around <strong className="text-white">PKR 30,000 to PKR 50,000</strong>. Below this, your campaigns do not get enough data to optimise. Most established brands in Pakistan&apos;s competitive categories (food, fashion, real estate, education) spend PKR 80,000 to PKR 300,000 per month in ad spend alone, separate from agency fees.
                </p>
              </div>
            </section>

            {/* Freelancer vs Agency Comparison */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Freelancer vs. Agency: What Is the Cost Difference?
              </motion.h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Many businesses in Pakistan start with freelancers and later move to agencies. Here is a realistic comparison for 2025.
              </p>

              <motion.div
                className="overflow-x-auto rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="text-left p-4 font-semibold"></th>
                      <th className="text-left p-4 font-semibold">Freelancer</th>
                      <th className="text-left p-4 font-semibold">Small Agency</th>
                      <th className="text-left p-4 font-semibold">Full-Service Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {freelancerComparison.map((row, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}>
                        <td className="p-4 font-semibold text-gray-900">{row.label}</td>
                        <td className="p-4 text-gray-700">{row.freelancer}</td>
                        <td className="p-4 text-gray-700">{row.small}</td>
                        <td className="p-4 text-gray-700">{row.full}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>

              <p className="text-gray-600 mt-6 text-sm italic leading-relaxed">
                The cheapest option is almost never the most cost-effective. A freelancer charging PKR 20,000 per month who delivers no measurable engagement or leads costs your business far more than one month of fees &mdash; it costs you time, opportunity, and the months spent not growing.
              </p>
            </section>

            {/* What Social Hawks Includes */}
            <section className="mb-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What The Social Hawks Includes in Its Packages
              </motion.h2>
              <p className="text-gray-700 mb-6">
                For context, here is what a full-service package at The Social Hawks covers for consumer brands:
              </p>

              <div className="space-y-4">
                {socialHawksIncludes.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-5 rounded-xl shadow-sm"
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

              <p className="text-gray-700 mt-6 text-sm leading-relaxed">
                This is what a real agency retainer looks like when it is structured properly &mdash; not just posting, but owning the full function of your brand&apos;s social presence.
              </p>

              <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a Free Brand Analysis
                </Link>
              </motion.div>
            </section>

            {/* Hidden Costs */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Hidden Costs Pakistani Businesses Often Overlook
              </motion.h2>
              <p className="text-gray-700 mb-6">
                When budgeting for social media marketing in Pakistan, several costs catch brands off guard.
              </p>

              <div className="space-y-4">
                {hiddenCosts.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-50 p-5 rounded-xl border-l-4 border-gray-300"
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

            {/* Is PKR 50,000 Enough */}
            <section className="mb-16 bg-gray-900 text-white rounded-3xl p-8 sm:p-12">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Is PKR 50,000 Per Month Enough for Social Media Marketing in Pakistan?
              </motion.h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Yes &mdash; but only if it is allocated correctly. PKR 50,000 per month can get you solid social media management from a mid-sized agency covering two platforms, original design, consistent posting, and basic reporting. What it cannot cover is professional photography, paid ad management, and multi-platform strategy simultaneously.
              </p>

              <h3 className="text-lg font-bold mb-4">A practical breakdown for a PKR 50,000 budget:</h3>
              <div className="space-y-3">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-300 text-sm">Agency management fee (two platforms, design, captions, scheduling, community management)</span>
                  <span className="font-bold text-white whitespace-nowrap ml-4">PKR 40,000</span>
                </motion.div>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-gray-300 text-sm">Graphic design assets (additional custom creatives beyond the package)</span>
                  <span className="font-bold text-white whitespace-nowrap ml-4">PKR 10,000</span>
                </motion.div>
                <motion.div
                  className="bg-primary/20 border border-primary/40 p-4 rounded-xl flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-gray-200 text-sm">Ad spend budget (separate &mdash; minimum for paid reach)</span>
                  <span className="font-bold text-white whitespace-nowrap ml-4">PKR 20,000–30,000</span>
                </motion.div>
              </div>

              <p className="text-gray-400 mt-6 text-sm">
                So while PKR 50,000 per month is a workable starting point for management fees, realistically budget <strong className="text-white">PKR 70,000–90,000 total</strong> when you add ad spend.
              </p>
            </section>

            {/* Budget Tips */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How to Get the Most Value From Your Social Media Marketing Budget in Pakistan
              </motion.h2>

              <div className="space-y-6">
                {budgetTips.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-primary/30 flex-shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
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

            {/* Summary Table */}
            <section className="mb-16">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Summary: Social Media Marketing Costs in Pakistan at a Glance
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
                      <th className="text-left p-4 font-semibold">Service</th>
                      <th className="text-left p-4 font-semibold">Typical Cost Range (PKR/month)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summaryTable.map((row, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}>
                        <td className="p-4 text-gray-800">{row.service}</td>
                        <td className="p-4 font-semibold text-gray-900 whitespace-nowrap">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </section>

            {/* Final Section */}
            <section className="mb-16">
              <p className="text-gray-700 leading-relaxed mb-4">
                Social media marketing in Pakistan has never been more competitive &mdash; and the gap between brands that invest properly and those that underinvest is widening. Pakistan is home to nearly 80 million social media users, representing over 31% of the population, with 194 million active cellular connections and 117 million internet users as of late 2025. That audience is real, it is growing, and it is accessible &mdash; but only to brands that show up with the right budget behind them.
              </p>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12 sm:py-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 mb-2 max-w-2xl mx-auto px-4">
                  If you are a consumer brand in Karachi and want a clearer picture of what your specific social media marketing should cost:
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
