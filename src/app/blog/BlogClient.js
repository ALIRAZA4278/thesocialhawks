'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact';

const articles = [
  {
    slug: 'best-digital-marketing-agencies-in-karachi',
    title: 'Best Digital Marketing Agencies in Karachi (2025 Guide)',
    excerpt: 'Karachi is home to more than 100 digital marketing agencies — but not all of them are built equally. This guide breaks down the best agencies for 2025, what each one is known for, and how to choose the right partner.',
    author: 'The Social Hawks Team',
    date: 'April 2025',
    readTime: '8 min read',
    category: 'Industry Guide',
  },
  {
    slug: 'social-media-marketing-cost-pakistan',
    title: 'How Much Does Social Media Marketing Cost in Pakistan? (2025 Pricing Guide)',
    excerpt: 'Social media marketing in Pakistan costs between PKR 20,000 and PKR 500,000 per month. This guide breaks down every cost category, from freelancer vs agency pricing to ad spend benchmarks.',
    author: 'The Social Hawks Team',
    date: 'April 2025',
    readTime: '9 min read',
    category: 'Pricing Guide',
  },
];

const BlogClient = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto">
      <Navbar />

      <motion.div
        className="min-h-screen bg-white mt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero */}
        <motion.div
          ref={heroRef}
          className="py-12 sm:py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="px-4 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Blog</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-700">
              Insights, guides, and expert perspectives on digital marketing from the Social Hawks team.
            </p>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="px-4 max-w-4xl mx-auto pb-16 sm:pb-20">
          <div className="space-y-6">
            {articles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="group bg-gray-50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 border border-gray-200 hover:border-primary/30 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-primary font-medium text-sm group-hover:underline">
                      Read article &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <Contact />
    </div>
  );
};

export default BlogClient;
