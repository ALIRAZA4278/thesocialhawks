import PageClient from './PageClient';

export const metadata = {
  title: 'Shopify Website Development | Custom Stores That Sell',
  description: 'We build custom Shopify stores with stunning themes, seamless checkout experiences, and powerful integrations that help you scale your e-commerce business.',
  openGraph: {
    title: 'Shopify Website Development | Custom Stores That Sell',
    description: 'We build custom Shopify stores with stunning themes, seamless checkout experiences, and powerful integrations that help you scale your e-commerce business.',
  },
};

export default function Page() {
  return <PageClient />;
}
