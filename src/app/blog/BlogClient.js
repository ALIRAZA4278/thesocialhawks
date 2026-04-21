'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    coverImage: '/images/blog/best-agencies-karachi.jpg',
    fallback: 'linear-gradient(135deg, #7f20c4 0%, #5a2a7c 100%)',
  },
  {
    slug: 'social-media-marketing-cost-pakistan',
    title: 'How Much Does Social Media Marketing Cost in Pakistan? (2025 Pricing Guide)',
    excerpt: 'Social media marketing in Pakistan costs between PKR 20,000 and PKR 500,000 per month. This guide breaks down every cost category — from freelancer vs agency pricing to ad spend benchmarks.',
    author: 'The Social Hawks Team',
    date: 'April 2025',
    readTime: '9 min read',
    category: 'Pricing Guide',
    coverImage: '/images/blog/social-media-cost-pakistan.jpg',
    fallback: 'linear-gradient(135deg, #1a1a2e 0%, #7f20c4 100%)',
  },
];

const BlogCard = ({ article, index, isInView }) => {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] transition-shadow duration-300 cursor-pointer"
    >
      <Link href={`/blog/${article.slug}`} className="block">
        {/* Cover Image */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden">
          {!imgError ? (
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s ease' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full" style={{ background: article.fallback }} />
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                {article.category}
              </span>
            </div>
          </div>

          {/* Arrow icon top-right */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
              className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200"
            style={{ color: hovered ? 'var(--primary)' : '' }}
          >
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          {/* Read link */}
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
            <span>Read article</span>
            <motion.span animate={{ x: hovered ? 4 : 0 }}>→</motion.span>
          </div>
        </div>

        {/* Hover dark overlay (full card) */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            pointerEvents: hovered ? 'auto' : 'none',
            backgroundColor: 'rgba(31, 34, 53, 0.88)',
          }}
        >
          {/* Blur circles decoration */}
          <div className="absolute -top-8 -left-8 w-56 h-56 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(127,32,196,0.45) 0%, transparent 70%)', filter: 'blur(50px)' }} />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(127,32,196,0.3) 0%, transparent 70%)', filter: 'blur(45px)' }} />

          <div className="relative z-10 text-center max-w-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">{article.category}</span>
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            </div>

            <motion.h3
              className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
              transition={{ delay: 0.08, duration: 0.3 }}
            >
              {article.title}
            </motion.h3>

            <motion.span
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-gray-900 px-7 py-3 rounded-full font-semibold text-sm shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              Read Article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const BlogClient = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isCardsInView = useInView(cardsRef, { once: true, margin: '-50px' });

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
          <div className="px-4 max-w-5xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Blog</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">Insights & Guides</span>
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Expert perspectives on digital marketing, pricing, strategy, and growth — written for brands in Pakistan.
            </p>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          ref={cardsRef}
          className="px-4 max-w-5xl mx-auto pb-16 sm:pb-20"
          initial={{ opacity: 0 }}
          animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {articles.map((article, idx) => (
              <BlogCard key={article.slug} article={article} index={idx} isInView={isCardsInView} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <Contact />
    </div>
  );
};

export default BlogClient;
