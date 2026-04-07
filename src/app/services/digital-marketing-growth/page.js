import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Digital Marketing & Growth Services | SEO, PPC & Social',
  description: 'We manage SEO, Google Ads, social media campaigns and performance marketing solutions which bring you customers, not just traffic.',
  openGraph: {
    title: 'Digital Marketing & Growth Services | SEO, PPC & Social',
    description: 'We manage SEO, Google Ads, social media campaigns and performance marketing solutions which bring you customers, not just traffic.',
  },
};

export default function Page() {
  return <ServiceDetailPage slugOverride="digital-marketing-growth" />;
}
