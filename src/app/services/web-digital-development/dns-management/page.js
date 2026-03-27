import PageClient from './PageClient';

export const metadata = {
  title: 'DNS Management & Configuration | The Social Hawks',
  description: "We handle DNS so you don't have to deal with it. A records, MX, CNAME, SPF, DKIM, DMARC — all configured properly. Migrations and DNSSEC setup included.",
  openGraph: {
    title: 'DNS Management & Configuration | The Social Hawks',
    description: "We handle DNS so you don't have to deal with it. A records, MX, CNAME, SPF, DKIM, DMARC — all configured properly. Migrations and DNSSEC setup included.",
  },
};

export default function Page() {
  return <PageClient />;
}
