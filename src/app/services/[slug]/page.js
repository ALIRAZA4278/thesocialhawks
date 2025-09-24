'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useParams } from 'next/navigation';
import Navbar from '../../Components/Navbar';
import Contact from '../../Components/Contact';

// Service details data
const serviceDetails = {
  'brand-identity-design': {
    id: 1,
    title: "Brand Identity & Design",
    subtitle: "Crafting Distinctive Brand Experiences",
    description: "Transform your business vision into a compelling brand identity that resonates with your target audience and drives market recognition.",
    longDescription: "Our brand identity and design services encompass the complete spectrum of visual brand development. From initial concept to final execution, we create cohesive brand ecosystems that tell your unique story and establish meaningful connections with your customers. Our expert team combines strategic thinking with creative excellence to deliver brand solutions that not only look exceptional but also perform effectively in competitive markets.",
    stats: [
      { number: "500+", label: "Brands Created" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "24h", label: "Quick Turnaround" },
      { number: "15+", label: "Industries Served" }
    ],
    services: [
      "Logo Design (Iconic, 2D, 3D, Typographic, Symbolic, Illustrative, Mascot)",
      "Brand Identity Suite & Brand Guidelines",
      "Color Palettes & Typography Systems",
      "Visual Style Guide Development",
      "Animated Logo Design (2D & 3D)",
      "Presentation Design & Templates",
      "Brand Asset Creation & Management",
      "Brand Strategy & Positioning",
      "Brand Architecture & Naming",
      "Brand Voice & Messaging",
      "Trademark & Legal Support",
      "Brand Implementation Guidelines"
    ],
    process: [
      {
        step: "Discovery & Research",
        description: "We dive deep into your business, market, and target audience to understand your unique positioning and requirements.",
        icon: "🔍"
      },
      {
        step: "Concept Development",
        description: "Our team develops multiple creative concepts that align with your brand strategy and business objectives.",
        icon: "💡"
      },
      {
        step: "Design & Refinement",
        description: "We craft and refine your chosen concept into a comprehensive brand identity system.",
        icon: "🎨"
      },
      {
        step: "Guidelines & Delivery",
        description: "Complete brand guidelines and asset packages ensure consistent application across all touchpoints.",
        icon: "📋"
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
    ],
    fallback: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    benefits: [
      {
        title: "Increased Brand Recognition",
        description: "Strong brand identity increases recognition by up to 80%",
        icon: "👁️",
      },
      {
        title: "Business Value",
        description: "Strong brands command 20% higher prices on average",
        icon: "💰"
      }
    ],
    testimonials: [
      {
        text: "The brand identity they created transformed our business. We saw a 150% increase in customer engagement within 3 months.",
        author: "Sarah Johnson",
        position: "CEO, TechStart Inc.",
        rating: 5
      },
      {
        text: "Professional, creative, and results-driven. They understood our vision perfectly and delivered beyond expectations.",
        author: "Mike Chen",
        position: "Founder, GreenLife Co.",
        rating: 5
      }
    ],
    pricing: [
      {
        package: "Starter Brand Package",
        price: "$1,299",
        duration: "2-3 weeks",
        features: [
          "Logo Design (3 concepts)",
          "Basic Brand Guidelines",
          "Business Card Design",
          "Letterhead Template",
          "Color Palette & Typography",
          "2 Revision Rounds",
          "Final Files (AI, PNG, JPG)"
        ],
        popular: false
      },
      {
        package: "Professional Brand Package",
        price: "$2,499", 
        duration: "3-4 weeks",
        features: [
          "Comprehensive Logo Suite",
          "Complete Brand Identity System",
          "Detailed Brand Guidelines (20+ pages)",
          "Stationery Package (Business Cards, Letterhead, Envelope)",
          "Social Media Templates",
          "Brand Application Examples",
          "Unlimited Revisions",
          "Trademark Research Assistance",
          "All Source Files + Web Formats"
        ],
        popular: true
      },
      {
        package: "Enterprise Brand Package",
        price: "$4,999",
        duration: "4-6 weeks", 
        features: [
          "Full Brand Strategy & Positioning",
          "Comprehensive Visual Identity System",
          "Advanced Brand Guidelines (40+ pages)",
          "Complete Stationery Suite",
          "Marketing Collateral Templates",
          "Digital Asset Library",
          "Brand Implementation Support",
          "Team Training Session",
          "1-Year Brand Consultation",
          "All Formats + Print-Ready Files"
        ],
        popular: false
      }
    ],
    industries: [
      {
        name: "Technology & SaaS",
        description: "Modern, innovative brands for tech companies and startups",
        icon: "💻"
      },
      {
        name: "Healthcare & Medical",
        description: "Professional, trustworthy identities for healthcare providers",
        icon: "🏥"
      },
      {
        name: "Finance & Consulting",
        description: "Sophisticated brands for financial and consulting services",
        icon: "💼"
      },
      {
        name: "Retail & E-commerce",
        description: "Compelling brands that drive customer engagement and sales",
        icon: "🛍️"
      }
    ],
    caseStudies: [
      {
        title: "TechStart Inc. Rebranding",
        industry: "Technology",
        challenge: "Outdated brand identity limiting growth and investor confidence",
        solution: "Complete rebrand with modern, scalable visual system",
        results: "150% increase in lead generation, successful Series A funding",
        image: "/images/EXAMPLE.jpg"
      },
      {
        title: "HealthCare Plus Brand Launch",
        industry: "Healthcare", 
        challenge: "New medical practice needed trustworthy, professional identity",
        solution: "Sophisticated brand system emphasizing trust and expertise",
        results: "300% faster patient acquisition than industry average",
        image: "/images/EXAMPLE.jpg"
      }
    ],
    faq: [
      {
        question: "How long does the brand identity process take?",
        answer: "Typically 2-4 weeks depending on complexity. We provide detailed timelines during our initial consultation."
      },
      {
        question: "Do you provide trademark support?",
        answer: "Yes, we can guide you through trademark research and connect you with legal professionals for registration."
      },
      {
        question: "What file formats will I receive?",
        answer: "Complete package includes vector files (AI, EPS), raster files (PNG, JPG), and web-optimized formats."
      }
    ],
    features: [
      "Strategic Brand Positioning",
      "Creative Excellence",
      "Comprehensive Guidelines",
      "Multi-format Delivery",
      "Ongoing Support",
      "Trademark Research",
      "Industry Expertise",
      "Revision Rounds"
    ],
    cta: {
      title: "Ready to Build Your Brand?",
      description: "Let's create a brand identity that sets you apart and drives business growth.",
      buttonText: "Start Your Brand Journey"
    }
  },
  'graphic-design': {
    id: 2,
    title: "Graphic Design",
    subtitle: "Visual Communications That Convert",
    description: "Create stunning visual content that captures attention, communicates your message effectively, and drives meaningful engagement across all digital platforms.",
    longDescription: "Our graphic design services blend creativity with strategic thinking to produce visual communications that not only look amazing but also achieve your business objectives. From social media content to complex infographics, our design team creates compelling visuals that tell your story, engage your audience, and drive conversions across every touchpoint of your customer journey.",
    stats: [
      { number: "10K+", label: "Designs Created" },
      { number: "95%", label: "Approval Rate" },
      { number: "2h", label: "Average Response" },
      { number: "50+", label: "Design Categories" }
    ],
    services: [
      "Social Media Creative Posts (Static & Story Formats)",
      "Ad Creatives for Digital Campaigns",
      "Website Banners & Headers",
      "Infographics & Data Visualization",
      "Social Media Story Templates",
      "Web & UI Design Elements",
      "Digital Marketing Materials",
      "Email Newsletter Design",
      "Presentation Slide Decks",
      "E-book & Whitepaper Design",
      "Icon & Illustration Design",
      "Packaging Design Concepts"
    ],
    process: [
      {
        step: "Creative Brief",
        description: "Understanding your objectives, target audience, and visual requirements for each project.",
        icon: "📝"
      },
      {
        step: "Concept Creation",
        description: "Developing initial design concepts that align with your brand and campaign goals.",
        icon: "✨"
      },
      {
        step: "Design Development",
        description: "Refining chosen concepts into polished, ready-to-use graphic assets.",
        icon: "🎨"
      },
      {
        step: "Optimization & Delivery",
        description: "Optimizing designs for various platforms and delivering in all required formats.",
        icon: "🚀"
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    benefits: [
      {
        title: "Higher Engagement",
        description: "Visual content gets 94% more views than text-only content",
        icon: "📈"
      },
      {
        title: "Brand Consistency",
        description: "Consistent visuals increase revenue by up to 23%",
        icon: "🎯"
      },
      {
        title: "Faster Communication",
        description: "Visuals are processed 60,000x faster than text",
        icon: "⚡"
      },
      {
        title: "Better Recall",
        description: "People remember 65% of visual information after 3 days",
        icon: "🧠"
      }
    ],
    testimonials: [
      {
        text: "Their graphic designs completely transformed our social media presence. Engagement increased by 300%!",
        author: "Lisa Rodriguez",
        position: "Marketing Director, FashionForward",
        rating: 5
      },
      {
        text: "Quick turnaround, creative solutions, and always on-brand. Couldn't ask for better design partners.",
        author: "David Kim",
        position: "Brand Manager, TechFlow",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How quickly can you deliver designs?",
        answer: "Simple designs within 24-48 hours, complex projects within 3-5 business days."
      },
      {
        question: "Do you offer unlimited revisions?",
        answer: "We include 3 revision rounds. Additional revisions available at competitive rates."
      },
      {
        question: "Can you match our brand guidelines?",
        answer: "Absolutely! We work within your existing brand guidelines or help create new ones."
      }
    ],
    features: [
      "Multi-Platform Optimization",
      "Brand-Consistent Design",
      "Fast Turnaround",
      "Unlimited Revisions",
      "Performance-Focused",
      "Print-Ready Files",
      "Web Optimization",
      "Creative Innovation"
    ],
    cta: {
      title: "Elevate Your Visual Content",
      description: "Transform your ideas into compelling visuals that drive engagement and results.",
      buttonText: "Get Started with Design"
    }
  },
  'print-stationery': {
    id: 3,
    title: "Print & Stationery",
    subtitle: "Professional Print Solutions",
    description: "Comprehensive print design services that maintain brand consistency across all physical touchpoints, from business cards to large-format signage.",
    longDescription: "In our digital world, high-quality print materials still play a crucial role in professional business communications. Our print and stationery services ensure your brand maintains consistency and professionalism across all physical materials. We understand the technical requirements of print production and design with both aesthetics and functionality in mind, delivering materials that make lasting impressions.",
    services: [
      "Business Cards & Corporate Identity",
      "Letterheads & Document Templates",
      "Envelopes & Mailing Materials",
      "Flyers & Promotional Materials",
      "Brochures & Catalogs",
      "Banners & Signage",
      "Print Collateral & Marketing Materials"
    ],
    process: [
      {
        step: "Requirements Analysis",
        description: "Assessing your print needs, specifications, and brand requirements for each material."
      },
      {
        step: "Design & Layout",
        description: "Creating print-ready designs optimized for production and brand consistency."
      },
      {
        step: "Print Preparation",
        description: "Preparing files for printing with proper resolution, color profiles, and specifications."
      },
      {
        step: "Quality Control",
        description: "Ensuring final materials meet quality standards and brand guidelines."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: [
      "Print-Ready Files",
      "Brand Consistency",
      "High-Quality Output",
      "Multiple Formats",
      "Production Support"
    ],
    cta: {
      title: "Professional Print Materials",
      description: "Create print materials that reflect your brand's quality and professionalism.",
      buttonText: "Design Print Materials"
    }
  },
  'drone-shoot': {
    id: 15,
    title: "Drone Shoot",
    subtitle: "Aerial Cinematography & Photography",
    description: "Capture breathtaking aerial perspectives with professional drone cinematography and photography for real estate, events, commercials, and cinematic storytelling.",
    longDescription: "Our drone shoot service combines licensed drone pilots, cinematic camera setups, and experienced directors to deliver smooth, cinematic aerial footage. We handle flight permissions, location scouting, safety briefings, and post-production color grading so you get broadcast-quality results that elevate your visual storytelling.",
    stats: [
      { number: "4K", label: "Ultra HD Footage" },
      { number: "FAA/Local", label: "Certified Pilots" },
      { number: "24h", label: "Fast Turnaround" },
      { number: "100+", label: "Successful Flights" }
    ],
    services: [
      "Cinematic Aerial Videography (4K/6K where available)",
      "High-Resolution Aerial Photography",
      "Real Estate Aerial Tours & Flythroughs",
      "Event Coverage & Live Overviews",
      "Inspection & Survey Footage",
      "Gimbal-stabilized Shots & Dynamic Moves",
      "Geofenced/Permission Management & Flight Planning",
      "Post-production: Color Grading & Stabilization"
    ],
    process: [
      { step: "Pre-Flight Planning", description: "Site survey, permissions, and shot list creation.", icon: "🗺️" },
      { step: "Licensed Pilots", description: "Experienced, certified pilots operate to the highest safety standards.", icon: "🚁" },
      { step: "Cinematic Capture", description: "Multi-angle aerial capture using stabilized gimbals and ND filtration.", icon: "🎥" },
      { step: "Post-Production", description: "Color grading, stabilization, and edit-ready deliverables.", icon: "🎬" }
    ],
    images: ["/images/EXAMPLE.jpg"],
    fallback: "linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)",
    benefits: [
      { title: "Standout Visuals", description: "Aerial footage makes listings and campaigns stand out in a crowded market.", icon: "📸" },
      { title: "Faster Approvals", description: "Professional planning reduces reshoots and ensures compliance.", icon: "✅" }
    ],
    testimonials: [
      { text: "Their aerial footage transformed our property listings — we saw an immediate increase in inquiries.", author: "Rehan Ali", position: "Real Estate Broker", rating: 5 }
    ],
    faq: [
      { question: "Do you handle flight permissions?", answer: "Yes — we manage local permissions, no-fly checks, and site risk assessments as part of our service." },
      { question: "What safety measures do you take?", answer: "All flights are planned, risk-assessed, and flown by certified pilots with spotters when required." }
    ],
    features: ["Licensed Pilots", "4K/6K Capture", "Flight Permissions", "Full Post-Production"],
    cta: { title: "Elevate Your Visuals with Aerial Footage", description: "Book a drone shoot to add cinematic production value and unique perspectives to your project.", buttonText: "Book a Drone Shoot" }
  },
  'script-writing-storyboarding': {
    id: 16,
    title: "Script Writing & Storyboarding",
    subtitle: "From Idea to Shot-Ready Scripts",
    description: "We develop compelling scripts and detailed storyboards to ensure efficient, on-brand video production with clear creative direction.",
    longDescription: "Our pre-production service pairs creative strategists and experienced writers to craft narratives that resonate with your audience. We produce polished scripts, scene-by-scene storyboards, shot lists, and production notes so shoots run on time and creatives deliver the intended impact.",
    stats: [
      { number: "500+", label: "Scripts Written" },
      { number: "95%", label: "Production Ready" },
      { number: "48h", label: "Draft Turnaround" },
      { number: "200+", label: "Storyboards Created" }
    ],
    services: [
      "Creative Concept Development",
      "Scriptwriting (Short & Long Form)",
      "Scene Breakdown & Shot Lists",
      "Detailed Storyboards & Animatics",
      "Dialogue & Voiceover Direction",
      "Moodboards & Reference Frames",
      "Production Scheduling Notes"
    ],
    process: [
      { step: "Discovery & Brief", description: "Understand goals, tone, and target audience.", icon: "🧭" },
      { step: "Concept & Treatment", description: "High-level narrative structure and creative treatment.", icon: "✍️" },
      { step: "Script Drafting", description: "Iterative drafts with client feedback.", icon: "📄" },
      { step: "Storyboards & Animatics", description: "Frame-by-frame visualization for efficient shooting.", icon: "🖼️" }
    ],
    images: ["/images/EXAMPLE.jpg"],
    fallback: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    benefits: [
      { title: "Clear Creative Direction", description: "Reduces shoot time and creative ambiguity.", icon: "🎯" },
      { title: "Cost Efficiency", description: "Well-planned productions save on reshoots and personnel time.", icon: "💡" }
    ],
    testimonials: [
      { text: "The storyboard and script made our shoot run smoothly and saved time on set.", author: "Aisha Khan", position: "Producer", rating: 5 }
    ],
    faq: [
      { question: "Can you create animatics?", answer: "Yes, we can produce animatics to preview timing and camera moves before the shoot." },
      { question: "How many revisions are included?", answer: "We typically include two rounds of revisions with each package; additional rounds are available." }
    ],
    features: ["Concept Treatments", "Script Drafts", "Detailed Storyboards", "Animatics"],
    cta: { title: "Plan Better, Shoot Faster", description: "Get production-ready scripts and storyboards that save time and improve creative outcomes.", buttonText: "Start Pre-Production" }
  },
  'merchandising': {
    id: 4,
    title: "Merchandising",
    subtitle: "Custom Branded Merchandise",
    description: "Extend your brand into the physical world with custom merchandise that creates lasting impressions and builds brand loyalty among your audience.",
    longDescription: "Branded merchandise serves as powerful marketing tools that keep your brand visible and memorable. Our merchandising services cover everything from corporate apparel to promotional items, ensuring consistent brand representation across all physical products. We work with trusted suppliers to deliver high-quality merchandise that reflects your brand values and creates positive associations with your business.",
    services: [
      "Custom T-Shirts & Apparel",
      "Corporate Caps & Headwear",
      "Hi-Vis Vests & Safety Wear",
      "Corporate Uniforms & Workwear",
      "Promotional Freebies & Giveaways",
      "Branded Accessories",
      "Event Merchandise"
    ],
    process: [
      {
        step: "Product Selection",
        description: "Choosing the right merchandise items based on your brand, budget, and target audience."
      },
      {
        step: "Design Application",
        description: "Adapting your brand elements for optimal application on various merchandise items."
      },
      {
        step: "Sample & Approval",
        description: "Creating samples for approval before proceeding with full production runs."
      },
      {
        step: "Production & Delivery",
        description: "Managing production timeline and quality control through to final delivery."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    features: [
      "Custom Apparel & Accessories",
      "Bulk Order Management",
      "Quality Control & Supplier Vetting",
      "Branding & Design Adaptation",
      "Sustainable & Eco-Friendly Options",
      "Fulfillment & Shipping Coordination"
    ],
    cta: {
      title: "Create Custom Merchandise",
      description: "Turn your brand into tangible items that people love to use and share.",
      buttonText: "Design Merchandise"
    }
  },
  'web-digital-development': {
    id: 5,
    title: "Web & Digital Development",
    subtitle: "Complete Digital Solutions",
    description: "Full-stack web development services from startup sites to enterprise e-commerce platforms, including hosting, domains, and comprehensive technical infrastructure.",
    longDescription: "Our web and digital development services provide end-to-end solutions for your online presence. From initial planning and development to ongoing maintenance and optimization, we create digital experiences that drive business growth. Our technical expertise spans modern frameworks, security implementations, and performance optimization, ensuring your digital platforms are robust, scalable, and user-friendly.",
    services: [
      "Website Development (Startup, Business, E-commerce)",
      "E-learning Platforms & Marketplaces",
      "Domain Registration & Strategy",
      "Web Hosting (Shared to Dedicated)",
      "DNS Management & Configuration",
      "Professional Business Email Setup",
      "SSL/TLS Certificate Installation"
    ],
    process: [
      {
        step: "Planning & Architecture",
        description: "Defining project scope, technical requirements, and development roadmap."
      },
      {
        step: "Development & Testing",
        description: "Building your platform with modern technologies and rigorous testing protocols."
      },
      {
        step: "Deployment & Launch",
        description: "Deploying to production servers with proper security and performance configurations."
      },
      {
        step: "Maintenance & Support",
        description: "Ongoing maintenance, updates, and technical support for optimal performance."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    features: [
      "Modern Frameworks",
      "Responsive Design",
      "SEO Optimized",
      "Security First",
      "Scalable Solutions"
    ],
    cta: {
      title: "Build Your Digital Presence",
      description: "Create a powerful online platform that drives business growth and user engagement.",
      buttonText: "Start Development"
    }
  },
  'mobile-app-development': {
    id: 6,
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Apps",
    description: "Create powerful mobile applications for iOS, Android, and Windows with intuitive user experiences and robust functionality that engages users and drives business growth.",
    longDescription: "Mobile applications are essential for modern business success. Our mobile app development services cover the complete lifecycle from concept to deployment and beyond. We specialize in both native and cross-platform development, ensuring optimal performance and user experience across all devices. Our apps are designed with scalability, security, and user engagement at the forefront.",
    services: [
      "iOS Native App Development",
      "Android Native App Development",
      "Windows App Development",
      "Hybrid & Cross-Platform Apps",
      "Mobile App Revamp & Modernization",
      "App Store Optimization",
      "Mobile App Maintenance"
    ],
    process: [
      {
        step: "Concept & Strategy",
        description: "Defining app concept, target users, and technical approach for optimal market fit."
      },
      {
        step: "Design & Prototyping",
        description: "Creating intuitive user interfaces and interactive prototypes for validation."
      },
      {
        step: "Development & Testing",
        description: "Building robust applications with comprehensive testing across devices and platforms."
      },
      {
        step: "Launch & Optimization",
        description: "App store submission, launch support, and ongoing optimization based on user feedback."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    features: [
      "Native & Cross-Platform Expertise",
      "App Store Submission Support",
      "UX/UI Design & Prototyping",
      "Performance & Security Optimization",
      "Analytics & Crash Reporting",
      "Ongoing Maintenance Plans"
    ],
    cta: {
      title: "Launch Your Mobile App",
      description: "Transform your idea into a successful mobile application that users love.",
      buttonText: "Start App Development"
    }
  },
  'content-writing': {
    id: 7,
    title: "Content & Writing",
    subtitle: "Strategic Content Creation",
    description: "Comprehensive content services including copywriting, blog writing, SEO content, eBooks, and technical writing that drives engagement and conversions.",
    longDescription: "Content is the foundation of effective digital marketing and business communication. Our content and writing services combine strategic thinking with exceptional writing skills to create content that not only engages your audience but also drives measurable business results. From website copy to comprehensive content strategies, we help you communicate your value proposition clearly and compellingly.",
    services: [
      "Website Copy & Content Writing",
      "Strategic Blog Writing & Content Clusters",
      "SEO-Optimized Web Content",
      "Persuasive Copywriting & Sales Pages",
      "Email Sequences & Marketing Copy",
      "eBook Writing & Publishing",
      "Technical Writing & Documentation"
    ],
    process: [
      {
        step: "Content Strategy",
        description: "Developing comprehensive content strategies aligned with your business objectives."
      },
      {
        step: "Research & Planning",
        description: "Conducting thorough research and creating detailed content plans and calendars."
      },
      {
        step: "Writing & Optimization",
        description: "Creating high-quality, SEO-optimized content that resonates with your audience."
      },
      {
        step: "Review & Publishing",
        description: "Quality assurance, optimization, and strategic publishing across appropriate channels."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    features: [
      "SEO Optimized",
      "Audience-Focused",
      "Brand Voice Consistency",
      "Research-Backed",
      "Performance Tracking"
    ],
    cta: {
      title: "Transform Your Content Strategy",
      description: "Create compelling content that engages your audience and drives business growth.",
      buttonText: "Start Content Strategy"
    }
  },
  'animation-services': {
    id: 8,
    title: "Animation Services",
    subtitle: "Bringing Ideas to Life",
    description: "Professional animation services including explainer videos, motion graphics, 3D visualization, and character animation with complete production support.",
    longDescription: "Animation is a powerful medium for storytelling and explanation. Our animation services bring complex ideas to life through engaging visual narratives that capture attention and communicate effectively. From simple motion graphics to complex 3D animations, we create content that not only looks stunning but also serves your business objectives with clarity and impact.",
    services: [
      "Animated Explainer Videos (2D, 3D, Whiteboard)",
      "Motion Graphics & Visual Effects",
      "3D Product Animation & Visualization",
      "Character Animation & Development",
      "Voice-Over & Sound Design Integration",
      "Full Animation Production Services",
      "Platform-Optimized Video Delivery"
    ],
    process: [
      {
        step: "Concept & Scripting",
        description: "Developing animation concepts and scripts that effectively communicate your message."
      },
      {
        step: "Storyboarding & Design",
        description: "Creating detailed storyboards and visual designs for animation sequences."
      },
      {
        step: "Animation Production",
        description: "Bringing designs to life through professional animation and motion graphics."
      },
      {
        step: "Post-Production",
        description: "Adding sound design, voice-over, and final optimization for target platforms."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    features: [
      "Professional Production",
      "Custom Animation",
      "Voice-Over Integration",
      "Multi-Platform Delivery",
      "Engaging Storytelling"
    ],
    cta: {
      title: "Animate Your Story",
      description: "Create compelling animations that explain, engage, and convert your audience.",
      buttonText: "Start Animation Project"
    }
  },
  'video-photography': {
    id: 9,
    title: "Video & Photography",
    subtitle: "Professional Visual Storytelling",
    description: "Comprehensive video and photography services including commercial shoots, event coverage, product photography, and complete post-production excellence.",
    longDescription: "Visual content is crucial for modern marketing and brand communication. Our video and photography services provide professional-grade content that tells your story compellingly and authentically. From commercial productions to event documentation, we capture moments and create content that resonates with your audience and supports your business objectives.",
    services: [
      "Commercial & Promotional Video Production",
      "Event Videography & Coverage",
      "Professional Product Photography",
      "Corporate Headshots & Brand Photography",
      "Testimonial & Case Study Videos",
      "Video Editing & Color Grading",
      "Full-Service Production Management",
      "Drone Shoot",
      "Script Writing & Storyboarding"
    ],
    process: [
      {
        step: "Pre-Production Planning",
        description: "Detailed planning including concepts, locations, equipment, and production schedules."
      },
      {
        step: "Production & Shooting",
        description: "Professional shooting with high-end equipment and experienced production teams."
      },
      {
        step: "Post-Production",
        description: "Expert editing, color grading, and audio enhancement for polished final content."
      },
      {
        step: "Delivery & Distribution",
        description: "Optimized delivery in multiple formats for various platforms and uses."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    features: [
      "Professional Equipment",
      "Experienced Team",
      "Full-Service Production",
      "Multi-Format Delivery",
      "Quick Turnaround"
    ],
    cta: {
      title: "Capture Your Story",
      description: "Create professional video and photography content that showcases your brand.",
      buttonText: "Book Production"
    }
  },
  'digital-marketing-growth': {
    id: 10,
    title: "Digital Marketing & Growth",
    subtitle: "Comprehensive Growth Strategies",
    description: "Full-spectrum digital marketing including social media management, SEO, PPC, influencer partnerships, and performance analytics for measurable business growth.",
    longDescription: "Digital marketing success requires a strategic, multi-channel approach backed by data and continuous optimization. Our digital marketing and growth services encompass the complete spectrum of online marketing, from social media management to performance advertising. We focus on driving measurable results that contribute directly to your business growth and revenue objectives.",
    services: [
      "Strategic Social Media Management",
      "Paid Social Advertising (Meta, TikTok, LinkedIn)",
      "SEO (Search Engine Optimization)",
      "Search Engine Marketing & PPC",
      "Performance Marketing",
      "Influencer & Creator Partnerships",
      "Conversion Rate Optimization",
      "Analytics & Performance Reporting"
    ],
    process: [
      {
        step: "Strategy Development",
        description: "Creating comprehensive digital marketing strategies based on business objectives and market analysis."
      },
      {
        step: "Campaign Implementation",
        description: "Executing multi-channel campaigns with precision targeting and optimization."
      },
      {
        step: "Performance Monitoring",
        description: "Continuous monitoring and real-time optimization based on performance data."
      },
      {
        step: "Reporting & Scaling",
        description: "Detailed reporting and strategic scaling of successful campaigns for maximum ROI."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)",
    features: [
      "Multi-Channel Approach",
      "Data-Driven Decisions",
      "ROI Focused",
      "Real-Time Optimization",
      "Transparent Reporting"
    ],
    cta: {
      title: "Accelerate Your Growth",
      description: "Drive measurable business growth with strategic digital marketing campaigns.",
      buttonText: "Start Growing Today"
    }
  },
  'performance-maintenance': {
    id: 11,
    title: "Performance & Maintenance",
    subtitle: "Ongoing Digital Optimization",
    description: "Comprehensive maintenance services including performance optimization, security updates, and proactive monitoring to keep your digital assets running smoothly.",
    longDescription: "Digital platforms require ongoing care and optimization to maintain peak performance and security. Our performance and maintenance services ensure your website and digital assets continue to deliver exceptional user experiences while staying secure and up-to-date. We provide proactive monitoring and optimization that prevents issues before they impact your business.",
    services: [
      "Website Maintenance & Support",
      "Performance Optimization & Speed Enhancement",
      "Proactive Updates Management",
      "Broken Link & Functionality Monitoring",
      "Uptime Monitoring & Alerts",
      "Automated Backups & Disaster Recovery",
      "Monthly Performance & Health Reports"
    ],
    process: [
      {
        step: "Initial Assessment",
        description: "Comprehensive audit of current performance, security, and maintenance needs."
      },
      {
        step: "Optimization Implementation",
        description: "Implementing performance improvements and establishing monitoring systems."
      },
      {
        step: "Ongoing Monitoring",
        description: "Continuous monitoring with proactive issue identification and resolution."
      },
      {
        step: "Regular Reporting",
        description: "Monthly reports with performance metrics and recommended improvements."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)",
    features: [
      "Proactive Monitoring",
      "Performance Optimization",
      "Security Updates",
      "Automated Backups",
      "24/7 Support"
    ],
    cta: {
      title: "Optimize Your Digital Performance",
      description: "Ensure your digital platforms perform optimally with ongoing maintenance and optimization.",
      buttonText: "Start Maintenance Plan"
    }
  },
  'cybersecurity-protection': {
    id: 12,
    title: "Cybersecurity & Protection",
    subtitle: "Comprehensive Digital Security",
    description: "Advanced security solutions including WAF management, malware protection, vulnerability monitoring, and comprehensive disaster recovery planning.",
    longDescription: "Cybersecurity is essential for protecting your digital assets and maintaining customer trust. Our cybersecurity and protection services provide comprehensive security solutions that protect against threats while ensuring business continuity. We implement multiple layers of security and maintain proactive monitoring to identify and address potential vulnerabilities before they become problems.",
    services: [
      "Managed Web Application Firewall (WAF)",
      "Malware Scanning & Removal",
      "Vulnerability Monitoring & Patching",
      "Secure Backup & Disaster Recovery",
      "Security Audits & Assessment",
      "Threat Monitoring & Response",
      "Compliance & Security Consulting"
    ],
    process: [
      {
        step: "Security Assessment",
        description: "Comprehensive security audit to identify vulnerabilities and risk areas."
      },
      {
        step: "Protection Implementation",
        description: "Deploying security measures and establishing monitoring systems."
      },
      {
        step: "Continuous Monitoring",
        description: "24/7 monitoring for threats and proactive response to security incidents."
      },
      {
        step: "Regular Updates",
        description: "Ongoing security updates and quarterly security assessments."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #ff8a80 0%, #ff5722 100%)",
    features: [
      "Multi-Layer Protection",
      "24/7 Monitoring",
      "Rapid Response",
      "Compliance Ready",
      "Regular Audits"
    ],
    cta: {
      title: "Secure Your Digital Assets",
      description: "Protect your business with comprehensive cybersecurity solutions and monitoring.",
      buttonText: "Enhance Security"
    }
  },
  'strategy-consulting': {
    id: 13,
    title: "Strategy & Consulting",
    subtitle: "Strategic Business Growth",
    description: "Strategic business consulting including market research, content strategy, digital transformation, and advisory services for sustainable business growth.",
    longDescription: "Strategic planning and expert consultation are essential for sustainable business growth. Our strategy and consulting services provide insights, planning, and guidance that help businesses navigate complex challenges and capitalize on growth opportunities. We combine market research, strategic analysis, and practical experience to deliver actionable recommendations that drive results.",
    services: [
      "Business Strategy & Market Research",
      "Digital Transformation Consulting",
      "Content Strategy & Editorial Planning",
      "Full-Funnel Campaign Planning",
      "Competitive Analysis & Positioning",
      "Growth Strategy Development",
      "Advisory & Ongoing Consultation"
    ],
    process: [
      {
        step: "Discovery & Analysis",
        description: "Comprehensive analysis of your business, market position, and growth opportunities."
      },
      {
        step: "Strategy Development",
        description: "Creating detailed strategic plans with clear objectives and actionable steps."
      },
      {
        step: "Implementation Planning",
        description: "Developing implementation roadmaps with timelines and resource requirements."
      },
      {
        step: "Ongoing Support",
        description: "Regular consultation and strategy refinement based on market changes and results."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #b39ddb 0%, #9c27b0 100%)",
    features: [
      "Data-Driven Insights",
      "Strategic Planning",
      "Market Research",
      "Implementation Support",
      "Ongoing Consultation"
    ],
    cta: {
      title: "Accelerate Strategic Growth",
      description: "Develop and execute strategic plans that drive sustainable business growth.",
      buttonText: "Schedule Consultation"
    }
  },
  'platform-management': {
    id: 14,
    title: "Platform Management",
    subtitle: "Multi-Channel Digital Management",
    description: "Expert management of digital platforms including social media channels, advertising platforms, and comprehensive multi-channel campaign optimization.",
    longDescription: "Managing multiple digital platforms effectively requires expertise, time, and strategic coordination. Our platform management services ensure your presence across all digital channels is optimized, consistent, and driving results. We handle the complexity of multi-platform management while you focus on your core business activities.",
    services: [
      "Social Media Platform Management",
      "Google Ads & Microsoft Advertising Management",
      "Meta Ads & LinkedIn Ads Optimization",
      "Multi-Channel Campaign Coordination",
      "Platform-Specific Content Optimization",
      "Cross-Platform Analytics & Reporting",
      "Platform Policy & Compliance Management"
    ],
    process: [
      {
        step: "Platform Audit",
        description: "Comprehensive review of current platform performance and optimization opportunities."
      },
      {
        step: "Management Setup",
        description: "Establishing management protocols and optimization frameworks across platforms."
      },
      {
        step: "Active Management",
        description: "Daily management, optimization, and coordination across all platforms."
      },
      {
        step: "Performance Optimization",
        description: "Continuous optimization based on platform-specific best practices and performance data."
      }
    ],
    images: [
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg",
      "/images/EXAMPLE.jpg"
    ],
    fallback: "linear-gradient(135deg, #81c784 0%, #4caf50 100%)",
    features: [
      "Multi-Platform Expertise",
      "Consistent Management",
      "Performance Optimization",
      "Policy Compliance",
      "Unified Reporting"
    ],
    cta: {
      title: "Optimize Platform Performance",
      description: "Maximize your results across all digital platforms with expert management.",
      buttonText: "Start Platform Management"
    }
  }
};

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug;
  const service = serviceDetails[slug];

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-50px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-50px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  if (!service) {
    return (
      <div className="w-[95%] sm:w-[90%] mx-auto bg-white">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/services" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95%] sm:w-[90%] mx-auto bg-white">
      <Navbar />
      
      <motion.div 
        className="bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          className="py-5 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-purple-400/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-primary/20 rounded-full blur-3xl"
              animate={{ 
                x: [0, -25, 0],
                y: [0, 25, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/15 to-purple-300/15 rounded-full blur-3xl"
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Service Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm border border-primary/20 text-primary rounded-full text-sm font-semibold mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Professional Service
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-medium mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {service.subtitle}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {service.description}
              </motion.p>
              
          
              {/* Visual Elements */}
            
            </div>
            
            {/* Action buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
               <Link 
                href="/#contact">

              <button className="inline-flex items-center gap-2 border-2 border-primary text-[#7f20c4] hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
                </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        {service.stats && (
          <motion.div 
            className="py-16 bg-primary text-white"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {service.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      initial={{ scale: 0 }}
                      animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-white/80">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Detailed Description */}
        <motion.div 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-lg leading-relaxed text-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {service.longDescription}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={servicesRef}
          className="py-16"
          initial={{ opacity: 0 }}
          animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3 
              className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Our Services Include
            </motion.h3>
            
            <motion.p 
              className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive solutions tailored to elevate your brand and drive measurable results
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr items-stretch">
              {service.services.map((serviceItem, index) => {
                // Determine if this service item should be clickable
                let linkHref = null;
                
                if (params.slug === 'digital-marketing-growth') {
                  if (serviceItem.includes('SEO')) {
                    linkHref = `/services/${params.slug}/seo`;
                  } else if (serviceItem.includes('Influencer & Creator Partnerships')) {
                    linkHref = `/services/${params.slug}/influencer-creator-partnerships`;
                  } else if (serviceItem.includes('Paid Social Advertising')) {
                    linkHref = `/services/${params.slug}/paid-social-advertising`;
                  }
                }

                const content = (
                  <motion.div 
                    className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transition-all duration-500 overflow-hidden h-full flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                  >
                  {/* Dynamic Background Pattern */}
                  <motion.div 
                    className="absolute inset-0 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl opacity-10 transition-opacity duration-500"
                    animate={{ 
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isServicesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.2, type: "spring", stiffness: 200 }}
                      whileHover={{ rotate: 15 }}
                    >
                      {/* Dynamic Icon based on index */}
                      {index % 6 === 0 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      )}
                      {index % 6 === 1 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {index % 6 === 2 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {index % 6 === 3 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      )}
                      {index % 6 === 4 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      )}
                      {index % 6 === 5 && (
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      )}
                    </motion.div>
                    
                    {/* Service Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.4 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 transition-colors duration-500 leading-relaxed mb-3">
                        {serviceItem}
                      </h4>
                      
                      {/* Service Number */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium text-gray-500 transition-colors duration-500">
                          Service #{(index + 1).toString().padStart(2, '0')}
                        </span>
                        
                        <motion.div 
                          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-500"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Animated Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-purple-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: 'linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #6366f1, #8b5cf6, #06b6d4)',
                      backgroundClip: 'padding-box, border-box',
                      backgroundOrigin: 'padding-box, border-box'
                    }}
                  />
                  </motion.div>
                );

                // Wrap SEO card with a link to the SEO milestones page when viewing the digital marketing service
                if (linkHref) {
                  return (
                    <Link href={linkHref} key={`service-link-${index}`}>
                      {content}
                    </Link>
                  );
                }

                return (
                  <div key={`service-card-${index}`}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Sub-Services Section - Only for Digital Marketing */}
        {params.slug === 'digital-marketing-growth' && (
          <motion.div 
            className="py-16 bg-gradient-to-br from-gray-50 to-primary/5"
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Specialized Services
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Dive deeper into our specialized service areas with comprehensive strategies and expert execution
              </motion.p>
              
              <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 justify-center items-start">
                {[
                  {
                    title: 'SEO Milestones',
                    description: 'Comprehensive SEO process with detailed milestones and deliverables',
                    icon: '🔍',
                    link: `/services/${params.slug}/seo`,
                    features: ['Keyword Research', 'Technical Audit', 'Content Optimization', 'Link Building']
                  },
                  {
                    title: 'Influencer Partnerships', 
                    description: 'Connect with authentic creators and build meaningful brand partnerships',
                    icon: '🤝',
                    link: `/services/${params.slug}/influencer-creator-partnerships`,
                    features: ['Creator Vetting', 'Campaign Strategy', 'Content Management', 'Performance Tracking']
                  },
                  {
                    title: 'Paid Social Advertising',
                    description: 'High-converting social media campaigns across all major platforms',
                    icon: '📱',
                    link: `/services/${params.slug}/paid-social-advertising`,
                    features: ['Meta & Instagram Ads', 'TikTok Campaigns', 'LinkedIn Advertising', 'Twitter Promotion']
                  }
                ].map((subService, index) => (
                  <div key={index} className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group w-full flex justify-center"
                    >
                      <Link href={subService.link} className="w-full max-w-[380px]">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-primary/20 h-full text-center mx-auto flex flex-col">
                          <div className="text-center">
                            <motion.div 
                              className="text-4xl mb-4"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {subService.icon}
                            </motion.div>
                            
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                              {subService.title}
                            </h4>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {subService.description}
                            </p>
                            
                            <div className="space-y-2 mb-6">
                              {subService.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                              Explore Details
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Benefits Section */}
        {service.benefits && (
          <motion.div 
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="px-4 ">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Key Benefits
              </motion.h3>
              
              <div className="flex flex-wrap gap-8 max-w-6xl mx-auto justify-center">
                {service.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group w-full md:w-1/2 lg:w-1/4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Process Section */}
        <motion.div 
          ref={processRef}
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3 
              className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              tr ansition={{ duration: 0.6 }}
            >
              Our Process
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {service.process.map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Background decoration */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isProcessInView ? { scale: 1, rotate: 180 } : { scale: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isProcessInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.icon || (index + 1)}
                    </motion.div>
                    <motion.h4 
                      className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    >
                      {step.step}
                    </motion.h4>
                  </div>
                  <motion.p 
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        {service.images.length > 1 && (
          <motion.div 
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="px-4">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our Work Gallery
              </motion.h3>
              
              {/* Main Featured Images */}
              <div className="max-w-6xl mx-auto mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {service.images.slice(1, 3).map((image, index) => (
                    <motion.div 
                      key={index}
                      className="aspect-video relative overflow-hidden rounded-xl shadow-lg group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isProcessInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      {!imageErrors[`featured-${service.id}-${index}`] ? (
                        <Image
                          src={image}
                          alt={`${service.title} featured work ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={() => handleImageError(`featured-${service.id}-${index}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                          style={{ background: service.fallback }}
                        />
                      )}
                      <motion.div 
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Smaller Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {service.images.slice(3).map((image, index) => (
                    <motion.div 
                      key={index}
                      className="aspect-square relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {!imageErrors[`gallery-${service.id}-${index + 3}`] ? (
                        <Image
                          src={image}
                          alt={`${service.title} work ${index + 4}`}
                          fill
                          className="object-cover transition-all duration-500 group-hover:brightness-110"
                          onError={() => handleImageError(`gallery-${service.id}-${index + 3}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full transition-all duration-500 group-hover:brightness-110"
                          style={{ background: service.fallback }}
                        />
                      )}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Testimonials Section */}
        {service.testimonials && (
          <motion.div 
            className="py-16 bg-white"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="px-4">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                What Our Clients Say
              </motion.h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 relative"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    {/* Quote Icon */}
                    <motion.div 
                      className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isProcessInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    >
                      &ldquo;
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-700 leading-relaxed mb-6 italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span 
                            key={i}
                            className="text-yellow-400 text-lg"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isProcessInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, delay: 1.6 + index * 0.2 + i * 0.1 }}
                          >
                            ⭐
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Pricing Section */}
        {/* Case Studies Section */}
        {service.caseStudies && (
          <motion.div 
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Success Stories
              </motion.h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {service.caseStudies.map((study, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">{study.industry.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{study.title}</h4>
                          <p className="text-sm text-gray-600">{study.industry}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold text-primary mb-2">Results</h5>
                        <p className="text-gray-700 text-sm font-medium">{study.results}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Industries Section */}
        {service.industries && (
          <motion.div 
            className="py-16 bg-white"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Industries We Serve
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Specialized expertise across diverse industries with proven track records
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {service.industries.map((industry, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {industry.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {service.faq && (
          <motion.div 
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={isProcessInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Frequently Asked Questions
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Get answers to the most common questions about our services
              </motion.p>
              
              <div className="max-w-4xl mx-auto space-y-6">
                {service.faq.map((faqItem, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02, shadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  >
                    <motion.div 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">Q</span>
                      </div>
                      <div className="flex-1">
                        <motion.h4 
                          className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                        >
                          {faqItem.question}
                        </motion.h4>
                        <motion.p 
                          className="text-gray-600 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                        >
                          {faqItem.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Section */}
        <motion.div 
          ref={featuresRef}
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3 
              className="text-3xl lg:text-4xl font-light text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Why Choose Us
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {(service.features || []).map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center group flex-shrink-0 w-32"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-hover transition-colors shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isFeaturesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <motion.p 
                    className="text-xs font-medium text-gray-900 group-hover:text-primary transition-colors leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {feature}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div 
          className="py-16 bg-gray-900 text-white"
          initial={{ opacity: 0 }}
          animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h3 
                className="text-3xl lg:text-4xl font-light mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Our Promise to You
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">100% Satisfaction</h4>
                  <p className="text-white/80">Unlimited revisions until you&apos;re completely satisfied</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
                  <p className="text-white/80">Quick turnaround times without compromising quality</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Quality Guarantee</h4>
                  <p className="text-white/80">Professional standards backed by our reputation</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isFeaturesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl">💼</span>
                  <h4 className="text-2xl font-bold">Professional Excellence Guarantee</h4>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  We stand behind every project with our commitment to excellence. If you&apos;re not completely satisfied with our work, 
                  we&apos;ll continue refining until it exceeds your expectations – at no additional cost.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="py-20 bg-black text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full"
              animate={{ 
                x: [0, -25, 0],
                y: [0, 25, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute bottom-10 left-1/4 w-12 h-12 bg-white rounded-full"
              animate={{ 
                x: [0, 20, 0],
                y: [0, -15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h3 
              className="text-3xl lg:text-5xl font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {service.cta.title}
            </motion.h3>
            
            <motion.p 
              className="text-lg  lg:text-xl opacity-90  max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {service.cta.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col mt-10 sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl w-full sm:w-auto min-w-[200px]"
                >
                  {service.cta.buttonText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all w-full sm:w-auto min-w-[200px]"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Schedule Consultation
              </motion.button>
            </motion.div>

            <motion.div 
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={isCtaInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                >
                  24/7
                </motion.div>
                <p className="opacity-90">Support Available</p>
              </motion.div>
              
              <motion.div 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={isCtaInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 200 }}
                >
                  100%
                </motion.div>
                <p className="opacity-90">Satisfaction Guarantee</p>
              </motion.div>
              
              <motion.div 
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={isCtaInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  30+
                </motion.div>
                <p className="opacity-90">Expert Team Members</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      <Contact />
    </div>
  );
};

export default ServiceDetailPage;