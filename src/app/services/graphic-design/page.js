import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Graphic Design Services | Social Media & Marketing Designs',
  description: 'Creative graphic design for social media content and advertising materials and marketing assets. We create content which grabs attention and build your brand identity.',
  openGraph: {
    title: 'Graphic Design Services | Social Media & Marketing Designs',
    description: 'Creative graphic design for social media content and advertising materials and marketing assets. We create content which grabs attention and build your brand identity.',
  },
};

export default function Page() {
  return <ServiceDetailPage slugOverride="graphic-design" />;
}
