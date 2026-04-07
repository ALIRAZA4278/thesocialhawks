import ServiceDetailPage from '../[slug]/ServiceDetailClient';

export const metadata = {
  title: 'Web & Digital Development Services | The Social Hawks',
  description: 'We develop websites, online stores, and web apps. We also provide hosting and domain services. We ensure fast website performance and clean code.',
  openGraph: {
    title: 'Web & Digital Development Services | The Social Hawks',
    description: 'We develop websites, online stores, and web apps. We also provide hosting and domain services. We ensure fast website performance and clean code.',
  },
};

export default function Page() {
  return <ServiceDetailPage slugOverride="web-digital-development" />;
}
