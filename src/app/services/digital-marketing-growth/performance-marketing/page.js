import PageClient from './PageClient';

export const metadata = {
  title: 'You Pay for Results | Performance Marketing',
  description: "We track every dollar spent across all ad channels- search, social, affiliate, native & programmatic. You define the KPIs and we'll deliver results.",
  openGraph: {
    title: 'You Pay for Results | Performance Marketing',
    description: "We track every dollar spent across all ad channels- search, social, affiliate, native & programmatic. You define the KPIs and we'll deliver results.",
  },
};

export default function Page() {
  return <PageClient />;
}
