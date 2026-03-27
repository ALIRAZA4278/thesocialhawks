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
