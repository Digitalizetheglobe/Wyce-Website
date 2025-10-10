"use client";

import { useState, useEffect } from "react";

export default function AmenitiesCarousel() {
  const groups = [
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-01.svg", text: "Cricket Practise Pitch" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-02.svg", text: "Dual Indoor Badminton Courts" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-03.svg", text: "Paw Park" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-04.svg", text: "Theatrum" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-05.svg", text: "Premium Indoor Fitness Club" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-06.svg", text: "Active Play Lawn" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-07.svg", text: "Open-air Fitness Studio" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-08.svg", text: "Central Events Lawn" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-09.svg", text: "Alfresco Celebration Lawn" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-10.svg", text: "Soundscape Studio" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-11.svg", text: "Infinity Pool with Lounge Deck" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-12.svg", text: "Pickleball Court" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-13.svg", text: "Tennis Court" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-14.svg", text: "Indoor Squash Lounge" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-15.svg", text: "Library" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-16.svg", text: "Pool Table" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-17.svg", text: "Strickar" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-18.svg", text: "Open-air Amphitheater with Stage Seating" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-19.svg", text: "Basketball Zone (Full Court" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-20.svg", text: "Creative Kids' Discovery Zone" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-21.svg", text: "Suite Tranquil" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-22.svg", text: "The Forum Entrance" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-24.svg", text: "Cafeteria" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-25.svg", text: "Table Tennis" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-25.svg", text: "Table Tennis" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-26.svg", text: "Native Miyawaki Forest Retreat" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-27.svg", text: "Classic Game Lounge" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-28.svg", text: "Zen Pebble Reflexology Trail" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-29.svg", text: "Aquaskade" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-30.svg", text: "The Cloud Lounge" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-32.svg", text: "Scenic Cycling Loop" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-33.svg", text: "Conversation Pavillion" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-51.svg", text: "Skating Rink" },

    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-34.svg", text: "The Climber's Cove" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-35.svg", text: "Little Explorer Zone" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-36.svg", text: "Mind and Movement Studio" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-37.svg", text: "Campfire Circle" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-38.svg", text: "Designer Pergola Lounge" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-39.svg", text: "Herbal Luxe" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-40.svg", text: "Strickar" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-42.svg", text: "Luxury Steam & Sauna Suite" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-50.svg", text: "Flutter Garden" },
    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-44.svg", text: "The Knight and Crown" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-45.svg", text: "Work and Well Studio" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-49.svg", text: "The Foos" },

    ],
    [
      { icon: "/images/landing-page/icons/wyce_icons[1]-47.svg", text: "Velvet Entrance" },
      { icon: "/images/landing-page/icons/wyce_icons[1]-48.svg", text: "The Breezway" },
    ]
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Auto scroll every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % groups.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + groups.length) % groups.length);
  };

  // नेहमी 4 consecutive groups दिसतील (12 amenities)
  const visibleGroups = [
    groups[startIndex],
    groups[(startIndex + 1) % groups.length],
    groups[(startIndex + 2) % groups.length],
    groups[(startIndex + 3) % groups.length],
  ];

  return (
    <div className="w-full flex flex-col items-center py-12 relative px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="w-full text-center mb-12 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B7AC88] font-Raleway">
          Premium Amenities
        </h2>
        <p className="text-white-400 max-w-4xl mx-auto mt-4 font-raleway text-lg sm:text-xl md:text-2xl px-4">
          Experience Elevated Living WYCE Exclucity properties come packed with lifestyle-enhancing
          features that cater to all age groups.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1400px] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-500 ease-in-out">
          {visibleGroups.map((group, gIndex) => (
            <div key={gIndex} className="flex flex-col gap-6">
              {group.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-20 h-20 bg-gradient-to-b from-[#B7AC88] to-[#47351B] rounded-full p-3 object-contain"
                  />
                  <span className="text-base sm:text-lg md:text-xl font-medium font-Raleway text-[#B7AC88]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}