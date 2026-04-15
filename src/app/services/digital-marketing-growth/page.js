import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Digital Marketing & Growth Services | SEO, PPC & Social',
  description: 'We manage SEO, Google Ads, social media campaigns and performance marketing solutions which bring you customers, not just traffic.',
  openGraph: {
    title: 'Digital Marketing & Growth Services | SEO, PPC & Social',
    description: 'We manage SEO, Google Ads, social media campaigns and performance marketing solutions which bring you customers, not just traffic.',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Search Engine Optimization",
  "name": "Digital Marketing & SEO",
  "description": "Full-service SEO and digital marketing for Pakistani businesses. We deliver on-page SEO, off-page link building, technical SEO audits, local SEO for Karachi and Pakistan, Google Ads management, and performance tracking to increase organic visibility and drive measurable growth.",
  "provider": { "@type": "Organization", "name": "The Social Hawks", "url": "https://thesocialhawks.com" },
  "areaServed": { "@type": "Country", "name": "Pakistan" },
  "url": "https://thesocialhawks.com/services/digital-marketing-growth",
  "offers": { "@type": "Offer", "priceCurrency": "PKR", "availability": "https://schema.org/InStock" }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServiceDetailPage slugOverride="digital-marketing-growth" />
    </>
  );
}
