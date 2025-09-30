'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  // Testimonials data
  const testimonials = useMemo(() => [
    {
      id: 1,
      image: "/images/logo/1.jpg",
    },
    {
      id: 2,
      image: "/images/logo/2.jpg",
    },
    {
      id: 3,
      image: "/images/logo/3.jpg",
    },
    {
      id: 4,
      image: "/images/logo/4.jpg",
    },
    {
      id: 5,
      image: "/images/logo/5.jpg",
    },
    {
      id: 6,
      image: "/images/logo/6.jpg",
    },
    {
      id: 7,
      image: "/images/logo/7.jpg",
    },
    {
      id: 8,
      image: "/images/logo/8.jpg",
    },
    {
      id: 9,
      image: "/images/logo/9.jpg",
    },
    {
      id: 10,
      image: "/images/logo/10.jpg",
    },
    {
      id: 11,
      image: "/images/logo/11.jpg",
    },
    {
      id: 12,
      image: "/images/logo/12.jpg",
    },
    {
      id: 13,
      image: "/images/logo/13.jpg",
    },
    {
      id: 14,
      image: "/images/logo/14.jpg",
    },
    {
      id: 15,
      image: "/images/logo/15.jpg",
    },
    {
      id: 16,
      image: "/images/logo/16.jpg",
    },
    {
      id: 17,
      image: "/images/logo/17.jpg",
    },
    {
      id: 18,
      image: "/images/logo/18.jpg",
    },
    {
      id: 19,
      image: "/images/logo/19.jpg",
    },
    {
      id: 20,
      image: "/images/logo/20.jpg",
    },
    {
      id: 21,
      image: "/images/logo/21.jpg",
    },
    {
      id: 22,
      image: "/images/logo/22.png",
    },
    {
      id: 23,
      image: "/images/logo/23.jpg",
    },
    {
      id: 24,
      image: "/images/logo/24.jpg",
    }
  ], []);

  const [imageErrors, setImageErrors] = useState({});
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting for client-side only features
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = testimonials.map((testimonial) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Still resolve even if image fails to load
          img.src = testimonial.image;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    if (isMounted) {
      preloadImages();
    }
  }, [testimonials, isMounted]);



  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

   

  // Multiple the testimonials array for seamless infinite scroll that extends beyond viewport
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];



  // Show loading state until images are preloaded and component is mounted
  if (!imagesLoaded || !isMounted) {
    return (
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-center items-center min-h-[120px]">
            <div className="flex space-x-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 sm:w-24 h-20 sm:h-24 bg-gray-200 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto px-3 sm:px-4 lg:px-8">
          {/* Header */}
         

          {/* Infinite Scrolling Testimonials */}
          <div className="relative">
            <div className="relative mb-8 sm:mb-12 overflow-hidden -mx-4">
            <div className="flex animate-scroll-right space-x-4 sm:space-x-6" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 bg-white rounded-lg overflow-hidden"
                > 
                  <div className="relative w-full h-full">
                    {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                      <Image
                        src={testimonial.image}
                        alt={`Client logo ${testimonial.id}`}
                        fill
                        className="object-contain"
                        priority={index < 10}
                        sizes="(max-width: 640px) 96px, 128px"
                        onError={() => handleImageError(`testimonial-${testimonial.id}-${index}`)}
                      />
                      ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                        Logo
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel with gap */}
          <div className="relative overflow-hidden mt-8 sm:mt-12 -mx-4">
            <div className="flex animate-scroll-right-slow space-x-4 sm:space-x-6" style={{width: 'max-content'}}>
              {doubledTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 bg-white rounded-lg overflow-hidden"
                > 
                  <div className="relative w-full h-full">
                    {!imageErrors[`testimonial-${testimonial.id}-${index}`] ? (
                      <Image
                        src={testimonial.image}
                        alt={`Client logo ${testimonial.id}`}
                        fill
                        className="object-contain"
                        priority={index < 10}
                        sizes="(max-width: 640px) 96px, 128px"
                        onError={() => handleImageError(`testimonial-${testimonial.id}-${index}`)}
                      />
                      ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                        Logo
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
          animation: scroll-right 120s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right 150s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-right-slow:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll-right {
            animation-duration: 70s;
          }
          .animate-scroll-right-slow {
            animation-duration: 90s;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
