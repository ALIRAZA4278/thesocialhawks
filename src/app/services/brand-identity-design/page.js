import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Build a Strong Brand | Brand Identity & Logo Design Services',
  description: 'Create memorable brand with professional brand identity and logo design. We design logos, brand guidelines and visual systems that build trust and brand recognition.',
  openGraph: {
    title: 'Build a Strong Brand | Brand Identity & Logo Design Services',
    description: 'Create memorable brand with professional brand identity and logo design. We design logos, brand guidelines and visual systems that build trust and brand recognition.',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Brand Identity & Design",
  "name": "Brand Identity & Design",
  "description": "Professional logo design and brand identity development for businesses in Pakistan. We create memorable brand identities with custom logos, colour palettes, typography systems, and strategic brand guidelines that build recognition and trust.",
  "provider": { "@type": "Organization", "name": "The Social Hawks", "url": "https://thesocialhawks.com" },
  "areaServed": { "@type": "Country", "name": "Pakistan" },
  "url": "https://thesocialhawks.com/services/brand-identity-design",
  "offers": { "@type": "Offer", "priceCurrency": "PKR", "availability": "https://schema.org/InStock" }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServiceDetailPage slugOverride="brand-identity-design" />
    </>
  );
}
