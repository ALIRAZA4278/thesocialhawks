import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Build a Strong Brand | Brand Identity & Logo Design Services',
  description: 'Create memorable brand with professional brand identity and logo design. We design logos, brand guidelines and visual systems that build trust and brand recognition.',
  openGraph: {
    title: 'Build a Strong Brand | Brand Identity & Logo Design Services',
    description: 'Create memorable brand with professional brand identity and logo design. We design logos, brand guidelines and visual systems that build trust and brand recognition.',
  },
};

export default function Page() {
  return <ServiceDetailPage slugOverride="brand-identity-design" />;
}
