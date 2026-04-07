import PageClient from './PageClient';

export const metadata = {
  title: 'Backend Development | APIs, Databases & Cloud Infrastructure',
  description: 'The stuff behind the screen that makes everything work. APIs, databases, cloud setups on AWS and Azure. We use Node.js, Laravel, Django, .NET — depends on the job.',
  openGraph: {
    title: 'Backend Development | APIs, Databases & Cloud Infrastructure',
    description: 'The stuff behind the screen that makes everything work. APIs, databases, cloud setups on AWS and Azure. We use Node.js, Laravel, Django, .NET — depends on the job.',
  },
};

export default function Page() {
  return <PageClient />;
}
