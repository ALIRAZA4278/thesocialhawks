import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Web & Digital Development Services | The Social Hawks',
  description: 'We develop websites, online stores, and web apps. We also provide hosting and domain services. We ensure fast website performance and clean code.',
  openGraph: {
    title: 'Web & Digital Development Services | The Social Hawks',
    description: 'We develop websites, online stores, and web apps. We also provide hosting and domain services. We ensure fast website performance and clean code.',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development",
  "name": "Web & Digital Development",
  "description": "Professional website and e-commerce development for businesses in Pakistan. We build fast, scalable, mobile-friendly websites using WordPress and custom solutions, plus full backend development and e-commerce platforms for online stores.",
  "provider": { "@type": "Organization", "name": "The Social Hawks", "url": "https://thesocialhawks.com" },
  "areaServed": { "@type": "Country", "name": "Pakistan" },
  "url": "https://thesocialhawks.com/services/web-digital-development",
  "offers": { "@type": "Offer", "priceCurrency": "PKR", "availability": "https://schema.org/InStock" }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServiceDetailPage slugOverride="web-digital-development" />
    </>
  );
}
