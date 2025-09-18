'use client';
import { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 2,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 3,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 4,
      image: "/images/EXAMPLE.jpg",
    },
    {
      id: 5,
      image: "/images/EXAMPLE.jpg",
    }
  ];

  

  const [imageErrors, setImageErrors] = useState({});

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

   

  // Multiple the testimonials array for seamless infinite scroll that extends beyond viewport
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="w-[95%] sm:w-[90%] mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
         

          {/* Infinite Scrolling Testimonials */}
          <div className="relative mb-8 sm:mb-12 overflow-hidden -mx-4">
            <div className="flex animate-scroll-right space-x-3 sm:space-x-4" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="mb-b flex-shrink-0 w-20 sm:w-24 bg-gray-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
                > 

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                      {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(`testimonial-${testimonial.id}-${index}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: testimonial.fallback }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel with gap */}
          <div className="relative overflow-hidden mt-8 sm:mt-12 -mx-4">
            <div className="flex animate-scroll-right-slow space-x-3 sm:space-x-4" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-20 sm:w-24 bg-gray-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-500"
                > 

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                      {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(`testimonial-${testimonial.id}-${index}`)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: testimonial.fallback }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 6s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right 12s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-right-slow:hover {
          animation-play-state: paused;
        }

        .banner-hover:hover {
          background-color: #000000 !important;
        }



        .group:hover .avatar-container {
          gap: 0.105rem;
          margin-left: 0;
          margin-right: 0;
        }

        .group:hover .avatar-container > * {
          margin-left: 0;
          margin-right: 0;
        }

        /* hide horizontal scrollbar for avatar container */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        @media (max-width: 640px) {
          .banner-hover {
            padding: 0.75rem;
            align-items: center;
          }
          .banner-hover .avatar-container {
            justify-content: center;
            width: 100%;
          }
          .banner-hover p {
            text-align: center;
            margin-left: 0;
            margin-top: 0.25rem;
          }
        }

        @media (max-width: 640px) {
          .animate-scroll-right {
            animation-duration: 12s;
          }
          .animate-scroll-right-slow {
            animation-duration: 24s;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
