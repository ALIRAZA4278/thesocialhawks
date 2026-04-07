import serviceDetails from './serviceData';
import ServiceDetailClient from './ServiceDetailClient';

// Custom meta descriptions per service slug
const serviceMeta = {
  'brand-identity-design': {
    title: 'Build a Strong Brand | Brand Identity & Logo Design Services',
    description: 'Create memorable brand with professional brand identity and logo design. We design logos, brand guidelines and visual systems that build trust and brand recognition.',
  },
  'graphic-design': {
    title: 'Graphic Design Services | Social Media & Marketing Designs',
    description: 'Creative graphic design for social media content and advertising materials and marketing assets. We create content which grabs attention and build your brand identity.',
  },
  'print-stationery': {
    title: 'Print & Stationery Design Services | Business Cards & More',
    description: 'We offer professional design for print materials and stationery including business cards, brochures, flyers and corporate stationery to keep your brand consistent.',
  },
  'merchandising': {
    title: 'Custom Branded Merchandise | Corporate & Promotional Items',
    description: 'Branded custom merchandise which includes apparel and promotional items that increase the visibility and leave the lasting impact of a brand.',
  },
  'web-digital-development': {
    title: 'Web & Digital Development Services | The Social Hawks',
    description: 'We develop websites, online stores, and web apps. We also provide hosting and domain services. We ensure fast website performance and clean code.',
  },
  'mobile-app-development': {
    title: 'Mobile App Development | iOS, Android & Cross-Platform Apps',
    description: 'We create mobile apps which support iOS Android and cross-platform development that provide strong performance to match the growth needs of your company.',
  },
  'content-writing': {
    title: 'Content Writing Services | SEO Content & Website Copy',
    description: 'SEO blog writing, website content, and marketing copy that attract traffic and turn them into customers - professional content writing services.',
  },
  'animation-services': {
    title: 'Animation Services | 2D, 3D & Explainer Video Animation',
    description: 'We provide animation services including explainer videos, motion graphics and 3D animations to help clients present their complex ideas in an engaging way.',
  },
  'video-photography': {
    title: 'Professional Video Production & Photography Services',
    description: 'We provide videography and photography services including commercial shoots product photography and brand videos to enhance your marketing materials.',
  },
  'digital-marketing-growth': {
    title: 'Digital Marketing & Growth Services | SEO, PPC & Social',
    description: 'We manage SEO, Google Ads, social media campaigns and performance marketing solutions which bring you customers, not just traffic.',
  },
  'performance-maintenance': {
    title: 'Website Maintenance & Performance Optimization Services',
    description: 'We provide maintenance services which include performance optimization, security updates and monitoring to ensure its operational effectiveness.',
  },
  'cybersecurity-protection': {
    title: 'Website Security & Cybersecurity Services | Malware Protection',
    description: 'Include advanced cybersecurity services in protecting your website such as malware protection, threat monitoring, firewall management, and disaster recovery.',
  },
  'strategy-consulting': {
    title: 'Digital Strategy & Business Consulting Services',
    description: 'We provide strategic consulting services which include market research, digital strategy development and growth to help businesses make data-based decisions.',
  },
  'platform-management': {
    title: 'Social Media Management & Platform Advertising Services',
    description: 'We manage your social media and ad platforms handling content and campaign optimization to improve engagement and performance.',
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const custom = serviceMeta[slug];
  const service = serviceDetails[slug];

  if (custom) {
    return {
      title: custom.title,
      description: custom.description,
      openGraph: {
        title: custom.title,
        description: custom.description,
      },
    };
  }

  if (service) {
    return {
      title: `${service.title} Services | The Social Hawks`,
      description: service.description,
      openGraph: {
        title: `${service.title} Services | The Social Hawks`,
        description: service.description,
      },
    };
  }

  return {
    title: 'Service | The Social Hawks',
    description: 'Professional digital services by The Social Hawks.',
  };
}

export default function Page() {
  return <ServiceDetailClient />;
}
