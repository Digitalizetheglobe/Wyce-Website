"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

// Property card data
const propertyCards = [
  {
    id: 1,
    image: "/images/project-1.png",
    title: "Modern Family Flat",
    price: "₹ 95,000",
    location: "168 old town road",
    rating: "4.5"
  },
  {
    id: 2,
    image: "/images/project-2.png",
    title: "Luxury Apartment",
    price: "₹ 1,25,000",
    location: "45 new city center",
    rating: "4.8"
  },
  {
    id: 3,
    image: "/images/project-3.png",
    title: "Cozy Studio Space",
    price: "₹ 65,000",
    location: "92 garden view road",
    rating: "4.2"
  },
  {
    id: 4,
    image: "/images/project-4.png",
    title: "Premium Penthouse",
    price: "₹ 2,50,000",
    location: "15 skyline avenue",
    rating: "4.9"
  },
  {
    id: 5,
    image: "/images/project-1.png",
    title: "Modern Family Flat",
    price: "₹ 95,000",
    location: "168 old town road",
    rating: "4.5"
  }
];

export default function PhotoSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Continuous auto-scroll effect
  useEffect(() => {
    if (!isMounted) return;
    
    const autoScrollInterval = setInterval(() => {
      if (!isUserInteracting && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const containerWidth = container.clientWidth;
        const cardWidth = window.innerWidth < 640 ? containerWidth * 0.95 : 
                         window.innerWidth < 768 ? containerWidth * 0.6 : 
                         window.innerWidth < 1024 ? containerWidth * 0.45 : containerWidth * 0.3;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        // If we're at the end, scroll back to start (smooth loop)
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll to next card (one card at a time)
          container.scrollTo({
            left: container.scrollLeft + cardWidth + 16, // 16px for gap
            behavior: 'smooth'
          });
        }
        setHasScrolled(true);
      }
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(autoScrollInterval);
  }, [isUserInteracting, isMounted]);

  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    setHasScrolled(true);
    
    // Clear existing timeout
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    
    // Resume auto-scroll after 5 seconds of no interaction
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 5000);
  };

  const handleScroll = () => {
    setHasScrolled(true);
    handleUserInteraction();
  };

  return (
    <section
      className="relative bg-black/100 text-white py-12 sm:py-16 md:py-20"
      style={{ backgroundImage: "url('/images/bg-image.png')" }} >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16">
        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <p className={`text-[#B7AC88] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 ${cinzel.className}`}>
            <span className="inline-block w-8 sm:w-10 lg:w-12 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-tight font-normal">Booking Photos</span>
          </p>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="relative">
          {/* Full width container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide w-full"
            onMouseEnter={handleUserInteraction}
            onTouchStart={handleUserInteraction}
            onScroll={handleScroll}
          >
            <div className="flex gap-4 sm:gap-6 pb-4">
              {propertyCards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 w-[95%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-white overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Card Content - Black background section */}
                  <div className="p-4 sm:p-5 md:p-6 bg-[#121212] text-white">
                    {/* Title and Price Row */}
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <h3 className="text-base sm:text-lg font-bold text-white truncate pr-2">
                        {card.title}
                      </h3>
                      <span className="text-base sm:text-lg font-bold text-white whitespace-nowrap">
                        {card.price}
                      </span>
                    </div>
                    
                    {/* Location and Rating Row */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="truncate">{card.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-white whitespace-nowrap">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {card.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
