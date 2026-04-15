import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Graphic Design Services | Social Media & Marketing Designs',
  description: 'Creative graphic design for social media content and advertising materials and marketing assets. We create content which grabs attention and build your brand identity.',
  openGraph: {
    title: 'Graphic Design Services | Social Media & Marketing Designs',
    description: 'Creative graphic design for social media content and advertising materials and marketing assets. We create content which grabs attention and build your brand identity.',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Graphic Design",
  "name": "Graphic Design",
  "description": "Creative graphic design services for social media, advertising, and digital campaigns. We produce scroll-stopping ad creatives, infographics, UI/UX design, and brand visuals for Pakistani businesses.",
  "provider": { "@type": "Organization", "name": "The Social Hawks", "url": "https://thesocialhawks.com" },
  "url": "https://thesocialhawks.com/services/graphic-design"
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServiceDetailPage slugOverride="graphic-design" />
    </>
  );
}
