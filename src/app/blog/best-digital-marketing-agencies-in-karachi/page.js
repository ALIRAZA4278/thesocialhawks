import BlogArticleClient from './BlogArticleClient';

export const metadata = {
  title: 'Best Digital Marketing Agencies in Karachi (2025 Guide) | The Social Hawks',
  description: 'Discover the top 8 digital marketing agencies in Karachi for 2025. Compare services, pricing, and specialisations to find the right partner for your brand.',
  keywords: 'digital marketing agencies Karachi, best digital marketing agency Karachi, digital marketing Karachi 2025, social media agency Karachi, SEO agency Karachi',
  openGraph: {
    title: 'Best Digital Marketing Agencies in Karachi (2025 Guide)',
    description: 'Discover the top 8 digital marketing agencies in Karachi for 2025. Compare services, pricing, and specialisations to find the right partner for your brand.',
    type: 'article',
    publishedTime: '2025-04-01T00:00:00.000Z',
    modifiedTime: '2025-04-15T00:00:00.000Z',
    authors: ['The Social Hawks Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agencies in Karachi (2025 Guide)',
    description: 'Discover the top 8 digital marketing agencies in Karachi for 2025. Compare services, pricing, and specialisations to find the right partner for your brand.',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Digital Marketing Agencies in Karachi (2025 Guide)",
  "description": "Discover the top 8 digital marketing agencies in Karachi for 2025. Compare services, pricing, and specialisations to find the right partner for your brand.",
  "image": "https://thesocialhawks.com/images/logo.png",
  "datePublished": "2025-04-01",
  "dateModified": "2025-04-15",
  "author": { "@type": "Organization", "name": "The Social Hawks", "url": "https://thesocialhawks.com" },
  "publisher": {
    "@type": "Organization",
    "name": "The Social Hawks",
    "logo": { "@type": "ImageObject", "url": "https://thesocialhawks.com/images/logo.png" }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://thesocialhawks.com/blog/best-digital-marketing-agencies-in-karachi"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best digital marketing agency in Karachi?",
      "acceptedAnswer": { "@type": "Answer", "text": "The best agency depends on your specific needs. For full-service branding and social media, The Social Hawks is a strong choice for consumer brands. For SEO-focused growth, Aspire Digital has a long track record in Karachi. For e-commerce performance marketing, ArtX Pro is well-regarded. There is no single best — there is only the best fit for your goals and budget." }
    },
    {
      "@type": "Question",
      "name": "How much do digital marketing agencies charge in Karachi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Digital marketing agency fees in Karachi range from PKR 30,000 per month for basic social media management to PKR 500,000+ per month for full-service retainers covering social media, SEO, paid advertising, content production, and web maintenance. Most growing brands spend between PKR 80,000 and PKR 250,000 per month for meaningful results." }
    },
    {
      "@type": "Question",
      "name": "How do I know if a digital marketing agency in Karachi is legitimate?",
      "acceptedAnswer": { "@type": "Answer", "text": "Look for verifiable case studies with named clients and real metrics, check Google reviews and platforms like Clutch or DesignRush, ask for references from current clients, and verify the agency can show you the actual accounts and dashboards they manage. Legitimate agencies are transparent about what they measure and how they report results." }
    },
    {
      "@type": "Question",
      "name": "Is it better to hire a freelancer or a digital marketing agency in Karachi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Freelancers are cost-effective for specific one-off tasks — a logo, a website, ad copy. For consistent multi-channel marketing that grows with your brand, an agency delivers better long-term return on investment. An agency provides strategic oversight, a full team across disciplines, accountability through reporting, and the ability to scale output as your brand grows." }
    },
    {
      "@type": "Question",
      "name": "Which digital marketing agency in Karachi is best for food brands?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Social Hawks has specific experience in the food and beverage sector, including work with pizza brands, herbal food products, and restaurant clients. The key advantage for food brands is access to in-house food photography and videography alongside social media management, which keeps brand visuals consistent and reduces coordination across multiple vendors." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogArticleClient />
    </>
  );
}
