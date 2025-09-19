'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Portfolio = () => {
  // Portfolio projects data based on the attached images
  const projects = [
    {
      id: 1,
      category: "Marketing",
      title: "Men's Health Supplement Brand",
      brand: "Healing Shilajit",
      description: "Premium health supplement branding with dark, sophisticated design approach focusing on natural healing properties.",
      image: "/images/portfolio-1.jpg",
      fallback: "linear-gradient(135deg, #2D5016 0%, #1a2e0b 100%)",
      color: "#2D5016",
      industry: "Health & Wellness"
    },
    {
      id: 2,
      category: "Marketing", 
      title: "Skincare Brand",
      brand: "Urapra",
      description: "Modern skincare brand with vibrant pink aesthetics, targeting young women with premium beauty solutions.",
      image: "/images/portfolio-2.jpg",
      fallback: "linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)",
      color: "#FF69B4",
      industry: "Beauty & Skincare"
    },
    {
      id: 3,
      category: "Branding",
      title: "Healthcare Supplements Brand", 
      brand: "TRU Nutrition",
      description: "Clean, minimalist supplement brand focusing on transparency and natural ingredients with yellow brand identity.",
      image: "/images/portfolio-3.jpg",
      fallback: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
      color: "#FFD700",
      industry: "Health & Nutrition"
    },
    {
      id: 4,
      category: "Photography",
      title: "Fragrance Brand",
      brand: "ABC Fragrances",
      description: "Luxury fragrance photography with dramatic black aesthetics, emphasizing premium quality and sophistication.",
      image: "/images/portfolio-4.jpg", 
      fallback: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
      color: "#1a1a1a",
      industry: "Luxury Fragrance"
    }
  ];

  const [imageErrors, setImageErrors] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className=" mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          <div className="flex  items-center justify-center gap-2 mb-4 sm:mb-6 xl:mb-8">
            <div className="w-2 h-2 xl:w-3 xl:h-3 bg-primary rounded-full"></div>
            <span className="text-gray-600 text-xs sm:text-sm xl:text-base uppercase tracking-wider">Experience Matters</span>
            <div className="w-2 h-2 xl:w-3 xl:h-3 bg-primary rounded-full"></div>
          </div>
          
          {/* Just the main heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-tight text-gray-900">
            Proven Results Across{' '}
            <br className="hidden sm:block" />
            Diverse Industries
          </h2>
        </div>

        {/* Portfolio Cards */}
        <div className="space-y-8  sm:space-y-10 lg:space-y-12 xl:space-y-16 mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          {projects.map((project, index) => (
            <div key={project.id} className="w-full max-w-5xl mx-auto">
              <motion.div
                className="group relative bg-gray-100 rounded-xl sm:rounded-2xl xl:rounded-3xl overflow-hidden cursor-pointer w-full mb-4 sm:mb-6"
                style={{ aspectRatio: '16/10' }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
              {/* Background Image */}
              <div className="absolute inset-0">
                {!imageErrors[`portfolio-${project.id}`] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(`portfolio-${project.id}`)}
                  />
                ) : (
                  <div 
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    style={{ background: project.fallback }}
                  />
                )}
              </div>

              {/* Overlay - Initially Hidden */}
              <div className={`absolute inset-0 bg-black/80 transition-all duration-500 ${
                hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 p-4 sm:p-6 xl:p-8 2xl:p-10 flex flex-col justify-between text-white">
                  {/* Top Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <div 
                        className="w-3 h-3 xl:w-4 xl:h-4 rounded-full"
                        style={{ backgroundColor: project.color }}
                      ></div>
                      <span className="text-xs sm:text-sm xl:text-base font-medium text-gray-300 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 sm:mb-4 xl:mb-6 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed mb-6 xl:mb-8 2xl:mb-10">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <div className="mb-6 xl:mb-8 2xl:mb-10">
                      <p className="text-sm xl:text-base 2xl:text-lg text-gray-400 mb-2">Industry</p>
                      <p className="text-base xl:text-lg 2xl:text-xl font-medium">{project.industry}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm xl:text-base 2xl:text-lg text-gray-400 mb-2">Brand</p>
                        <p className="text-base xl:text-lg 2xl:text-xl font-bold">{project.brand}</p>
                      </div>
                      
                      <div className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-300">
                        <svg 
                          className="w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-white transform rotate-45" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Label - Always Visible */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 xl:p-10 2xl:p-12 transition-all duration-500 ${
                hoveredCard === project.id ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg xl:rounded-xl 2xl:rounded-2xl p-4 sm:p-6 xl:p-8 2xl:p-10">
                  <div className="flex items-center gap-3 xl:gap-4 mb-3 xl:mb-4 2xl:mb-6">
                    <div 
                      className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full"
                      style={{ backgroundColor: project.color }}
                    ></div>
                    <span className="text-sm xl:text-base 2xl:text-lg font-medium text-gray-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
              </div>

              </motion.div>
              
              {/* Card Label underneath (like in reference image) */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color }}
                    ></div>
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
                
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-300 cursor-pointer">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white transform rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description and CTA Section */}
        <div className="text-center">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-8 xl:mb-10 max-w-4xl mx-auto">
            Growth is not an accident. It is the result of great strategic planning plus disciplined execution.
          </p>
          
          <button className="inline-flex items-center gap-2 xl:gap-3 px-6 sm:px-8 xl:px-10 2xl:px-12 py-3 xl:py-4 2xl:py-5 bg-primary text-white rounded-full text-sm sm:text-base xl:text-lg 2xl:text-xl font-medium hover:bg-primary-hover transition-all duration-300 group">
            Book a free consultation
            <svg 
              className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 text-center">
          <div className="inline-flex items-center gap-4 xl:gap-6 bg-gray-50 rounded-full px-6 sm:px-8 xl:px-10 2xl:px-12 py-4 xl:py-5 2xl:py-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer group">
            <span className="text-sm sm:text-base xl:text-lg 2xl:text-xl font-medium text-gray-700">
              View More Case Studies
            </span>
            <div className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg 
                className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        .group:hover .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        /* Enhanced card animations for big screens */
        @media (min-width: 1024px) {
          .group:hover {
            transform: scale(1.02);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        }

        /* Ensure cards maintain proper aspect ratio */
        .space-y-6 > div,
        .space-y-8 > div,
        .space-y-10 > div,
        .space-y-12 > div {
          min-height: 300px;
        }

        @media (min-width: 1024px) {
          .space-y-6 > div,
          .space-y-8 > div,
          .space-y-10 > div,
          .space-y-12 > div {
            min-height: 400px;
          }
        }

        @media (min-width: 1280px) {
          .space-y-6 > div,
          .space-y-8 > div,
          .space-y-10 > div,
          .space-y-12 > div {
            min-height: 500px;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;