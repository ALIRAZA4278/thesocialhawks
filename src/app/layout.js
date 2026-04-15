import Script from 'next/script';
import "./globals.css";

export const metadata = {
  title: "The Social Hawks | Digital Marketing Agency for Brands",
  description: "We are focused on strategy and creativity. As a digital marketing agency we offer web development, SEO, branding, and social media services to grow businesses.",
  keywords: "digital marketing, social media management, content creation, branding, web development, SEO, graphic design",
  authors: [{ name: "The Social Hawks" }],
  creator: "The Social Hawks",
  publisher: "The Social Hawks",
  metadataBase: new URL('https://thesocialhawks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The Social Hawks | Digital Marketing Agency for Brands",
    description: "We are focused on strategy and creativity. As a digital marketing agency we offer web development, SEO, branding, and social media services to grow businesses.",
    url: 'https://thesocialhawks.com',
    siteName: 'The Social Hawks',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Social Hawks | Digital Marketing Agency for Brands",
    description: "We are focused on strategy and creativity. As a digital marketing agency we offer web development, SEO, branding, and social media services to grow businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'bOFpGzsYOqzOPJsEdSd1yWALn2vOc1lCyPxXDnvstq8',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CMEN3XHTKG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CMEN3XHTKG');
          `}
        </Script>

        {/* Block 1 — Organization Schema (all pages) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Social Hawks",
            "alternateName": "SocialHawks",
            "url": "https://thesocialhawks.com",
            "logo": "https://thesocialhawks.com/images/logo.png",
            "description": "The Social Hawks is a full-service digital marketing agency based in Karachi, Pakistan, serving 80+ brands across branding, social media marketing, SEO, web development, content production, paid advertising, video, photography, and creative services.",
            "foundingLocation": { "@type": "Place", "name": "Karachi, Pakistan" },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Suite 404, Amir Trade Center, Shahrah-e-Quaideen, PECHS Bl-2",
              "addressLocality": "Karachi",
              "addressRegion": "Sindh",
              "postalCode": "75100",
              "addressCountry": "PK"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+92-310-4999701",
              "email": "info@thesocialhawks.com",
              "contactType": "customer service",
              "availableLanguage": ["English", "Urdu"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "09:00",
                "closes": "22:00"
              }
            },
            "sameAs": [
              "https://www.instagram.com/socialhawks",
              "https://www.linkedin.com/company/socialhawks",
              "https://www.youtube.com/@thesocialhawks"
            ],
            "areaServed": [
              { "@type": "City", "name": "Karachi" },
              { "@type": "Country", "name": "Pakistan" }
            ],
            "knowsAbout": [
              "Digital Marketing", "Social Media Marketing", "Search Engine Optimization",
              "Brand Identity Design", "Content Marketing", "Paid Advertising",
              "Web Development", "E-commerce Marketing", "Video Production", "Photography"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity & Design" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Digital Marketing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & App Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content & Writing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video & Photography" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Animation Services" } }
              ]
            }
          }) }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: 'sans-serif', fontWeight: 400 }}
      >
        {children}
      </body>
    </html>
  );
}
