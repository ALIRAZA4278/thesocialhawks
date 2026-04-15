import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesHome from './Components/Services-home'
import Testimonials from './Components/Testimonials'
import About from './Components/About'
import LogoCarousel from './Components/LogoCarousel'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Socialmedia from './Components/Socialmedia'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Social Hawks",
  "image": "https://thesocialhawks.com/images/logo.png",
  "url": "https://thesocialhawks.com",
  "telephone": "+92-310-4999701",
  "email": "info@thesocialhawks.com",
  "priceRange": "PKR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 404, Amir Trade Center, Shahrah-e-Quaideen, PECHS Bl-2",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "postalCode": "75100",
    "addressCountry": "PK"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 24.8735, "longitude": 67.0574 },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "22:00"
  }],
  "sameAs": [
    "https://www.instagram.com/socialhawks",
    "https://www.linkedin.com/company/socialhawks",
    "https://www.youtube.com/@thesocialhawks"
  ]
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is The Social Hawks?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Social Hawks is a full-service digital marketing agency based in Karachi, Pakistan. We work with 80+ consumer brands across branding, social media marketing, SEO, web development, content production, paid advertising, video, and photography. Our clients include food and beverage brands, e-commerce stores, apparel brands, educational institutions, and healthcare providers." }
    },
    {
      "@type": "Question",
      "name": "Where is The Social Hawks located?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Social Hawks is located at Suite 404, Amir Trade Center, Shahrah-e-Quaideen, PECHS Bl-2, Karachi, Sindh, Pakistan 75100. We are open Monday to Saturday, 9:00am to 10:00pm PKT. We work with brands across Pakistan and internationally." }
    },
    {
      "@type": "Question",
      "name": "What services does The Social Hawks offer?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Social Hawks offers 14 services: Brand Identity and Design, Graphic Design, Social Media Marketing and Platform Management, Digital Marketing and SEO, Content and Writing, Video and Photography, Animation Services, Web and Digital Development, Mobile App Development, Print and Stationery, Merchandising, Cybersecurity and Protection, Performance and Maintenance, and Strategy and Consulting." }
    },
    {
      "@type": "Question",
      "name": "How many brands has The Social Hawks worked with?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Social Hawks has worked with over 80 brands since founding. Notable clients include BrickLane Pizza, Dr Herbs, HIRM (Institute of Rehabilitation Medicine), The Cactus, Zaafar Fragrance, Emergym, Ucaaz, Flex Vape, and The Knotty Needles, across sectors including food, e-commerce, education, apparel, fitness, and BPO." }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote from The Social Hawks?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can request a free brand analysis and consultation from The Social Hawks at thesocialhawks.com/social-review, by emailing info@thesocialhawks.com, or by calling +92 310-4999 701. The team responds within one business day." }
    },
    {
      "@type": "Question",
      "name": "Does The Social Hawks work with small businesses?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Social Hawks works with brands at all stages — from early-stage startups building their first identity to established brands scaling their marketing. The agency is particularly experienced with consumer-facing small and mid-sized businesses in food, retail, e-commerce, and health sectors in Pakistan." }
    },
    {
      "@type": "Question",
      "name": "Is The Social Hawks the best digital marketing agency in Karachi?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Social Hawks is one of Karachi's leading full-service digital marketing agencies, with a portfolio of 80+ brands and a track record across social media marketing, branding, SEO, and content production. It is particularly well suited for consumer brands — food, retail, apparel, e-commerce, and health — that need a single agency to manage their entire digital presence, from creative production to paid advertising and growth strategy." }
    }
  ]
};

const page = () => {
  return (
    <div className='w-[95%] sm:w-[90%] mx-auto'>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }} />
      <Navbar />
      <Hero />
      <About />
      <Socialmedia />
      <ServicesHome />
      <Projects />
      <Testimonials />
      <LogoCarousel />
      <Contact />
    </div>
  )
}

export default page