"use client";

import Image from "next/image";
import Link from "next/link";
import { Vujahday_Script } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

// Blog card data
const blogCards = [
  {
    id: 1,
    image: "/images/project-1.png",
    date: "October 5, 2024",
    category: "Real Estate",
    title: "🏡 The Quiet Side of Luxury: Why WYCE Believes Thoughtfulness Is the New Opulence",
    description: "Luxury has always been linked with what's visible — high ceilings, imported fittings, grand entrances. But true luxury is not about what you see. It's about what you feel when you step inside.",
    author: "by WYCE Team",
    slug: "quiet-side-of-luxury"
  },
  {
    id: 2,
    image: "/images/project-2.png",
    date: "October 3, 2024",
    category: "Real Estate",
    title: "🌇 Space Is the New Luxury: Inside WYCE's 11-Acre Vision for the Select Few",
    description: "In most cities today, luxury living has started to mean living small but paying big. WYCE saw this shift and decided to build differently — to create homes that give people back what they've lost: space.",
    author: "by WYCE Team",
    slug: "space-new-luxury"
  },
  {
    id: 3,
    image: "/images/project-3.png",
    date: "September 28, 2024",
    category: "Real Estate",
    title: "🌿 Beyond Green Walls: How WYCE Designs Homes That Breathe",
    description: "Almost every developer claims to build eco-friendly homes. But most of it stops at token gestures. WYCE goes beyond that by designing a lifestyle that breathes, not just buildings that look green.",
    author: "by WYCE Team",
    slug: "beyond-green-walls"
  },
  {
    id: 4,
    image: "/images/project-4.png",
    date: "September 25, 2024",
    category: "Real Estate",
    title: "🏞️ Bavdhan: Where the City Meets Serenity",
    description: "Bavdhan is one of those rare neighborhoods where city energy and nature's calm coexist perfectly. WYCE chose this location for ExcluCity because it captures both — modern convenience and natural serenity.",
    author: "by WYCE Team",
    slug: "bavdhan-city-meets-serenity"
  },
  {
    id: 5,
    image: "/images/project-1.png",
    date: "September 20, 2024",
    category: "Real Estate",
    title: "💬 Designing Connection: The Subtle Luxury of Belonging at WYCE",
    description: "Most modern housing projects focus on privacy but forget the joy of connection. WYCE believes both can exist together. At ExcluCity, the community is designed not just for living, but for belonging.",
    author: "by WYCE Team",
    slug: "designing-connection"
  }
];

export default function BlogSection() {
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
          <p className={`text-[#B7AC88] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 ${vujahday.className}`}>
            <span className="inline-block w-8 sm:w-10 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-tight font-normal">Blogs & Articles</span>
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
              {blogCards.map((card) => (
                <Link
                  key={card.id}
                  href={`/blog/${card.slug}`}
                  className="flex-shrink-0 w-[95%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Card Image */}
                  <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 sm:p-6 bg-gray-800 text-white">
                    {/* Date and Category */}
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden sm:inline">{card.date}</span>
                        <span className="sm:hidden">{card.date.split(' ').slice(0, 2).join(' ')}</span>
                      </div>
                      <span className="text-xs sm:text-sm text-[#B7AC88] font-medium">
                        {card.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#B7AC88] transition-colors">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 line-clamp-3">
                      {card.description}
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      {card.author}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
