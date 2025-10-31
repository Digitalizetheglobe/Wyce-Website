"use client";

import { useState } from "react";
// removed motion, AnimatePresence import

export default function AmenitiesCarousel() {
  // Flatten all amenities into a single array
  const allAmenities = [
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-01.svg", text: "Cricket Practise Pitch" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-02.svg", text: "Dual Indoor Badminton Courts" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-03.svg", text: "Paw Park" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-04.svg", text: "Theatrum" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-05.svg", text: "Premium Indoor Fitness Club" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-06.svg", text: "Active Play Lawn" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-07.svg", text: "Open-air Fitness Studio" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-08.svg", text: "Central Events Lawn" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-09.svg", text: "Alfresco Celebration Lawn" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-10.svg", text: "Soundscape Studio" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-11.svg", text: "Infinity Pool with Lounge Deck" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-12.svg", text: "Pickleball Court" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-13.svg", text: "Tennis Court" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-14.svg", text: "Indoor Squash Lounge" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-15.svg", text: "Library" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-16.svg", text: "Pool Table" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-17.svg", text: "Strickar" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-18.svg", text: "Open-air Amphitheater with Stage Seating" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-19.svg", text: "Basketball Zone (Full Court" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-20.svg", text: "Creative Kids' Discovery Zone" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-21.svg", text: "Suite Tranquil" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-22.svg", text: "The Forum Entrance" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-24.svg", text: "Cafeteria" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-25.svg", text: "Table Tennis" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-26.svg", text: "Native Miyawaki Forest Retreat" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-27.svg", text: "Classic Game Lounge" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-28.svg", text: "Zen Pebble Reflexology Trail" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-29.svg", text: "Aquaskade" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-30.svg", text: "The Cloud Lounge" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-32.svg", text: "Scenic Cycling Loop" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-33.svg", text: "Conversation Pavillion" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-51.svg", text: "Skating Rink" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-34.svg", text: "The Climber's Cove" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-35.svg", text: "Little Explorer Zone" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-36.svg", text: "Mind and Movement Studio" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-37.svg", text: "Campfire Circle" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-38.svg", text: "Designer Pergola Lounge" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-39.svg", text: "Herbal Luxe" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-40.svg", text: "Strickar" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-42.svg", text: "Luxury Steam & Sauna Suite" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-50.svg", text: "Flutter Garden" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-44.svg", text: "The Knight and Crown" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-45.svg", text: "Work and Well Studio" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-49.svg", text: "The Foos" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-47.svg", text: "Velvet Entrance" },
      { icon: "/images/wyce-exclucity/icons/wyce_icons[1]-48.svg", text: "The Breezway" },
  ];

  const tabs = ["Nature", "Sports & Activity ", "Social & Entertainment"];
  const [activeTab, setActiveTab] = useState(0);

  // Nature View - Peace, Crafted Like Poetry
  const NatureView = () => {
    const natureAmenities = [
      { icon: "/images/wyce-exclucity/icon/i1.png", text: "Herbal Luxe" },
      { icon: "/images/wyce-exclucity/icon/i5.png", text: "Flutter Garden" },
      { icon: "/images/wyce-exclucity/icon/i2.png", text: "Lawn Area" },
      { icon: "/images/wyce-exclucity/icon/i6.png", text: "Native Miyawaki Forest Retreat" },
      { icon: "/images/wyce-exclucity/icon/i3.png", text: "Woodland Grove" },
      { icon: "/images/wyce-exclucity/icon/i7.png", text: "Zen Pebble Reflexology Trail" },
      { icon: "/images/wyce-exclucity/icon/i4.png", text: "Central Events Lawn" },
      { icon: "/images/wyce-exclucity/icon/i8.png", text: "Tranquil Jogging & Wellness Loop" },
    ];

    return (
      <div className="w-full lg:w-[1400px] min-h-[600px] lg:min-h-[800px] px-6 lg:bg-[url('/images/wyce-exclucity/am1.png')] bg-contain bg-center bg-no-repeat">
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 py-8 lg:py-10 h-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16 h-full min-h-[400px] lg:min-h-[650px]">
            {/* Left Side - Images Collage */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-6 hidden lg:block">
              
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pt-20 sm:pt-0">
              {/* Title Section */}
              <div className="mb-8 lg:mb-10 lg:mb-14 text-center lg:text-left">
                <h2 className="text-3xl lg:text-3xl font-Raleway font-normal text-[#2a2a2a] mb-2 leading-tight">
                  Peace, Crafted Like
                </h2>
                <h3 className="text-3xl lg:text-2xl font-breathney text-[#B7AC88] -mt-2 leading-tight">
                  Poetry
                </h3>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:gap-x-0 lg:gap-y-8 w-full max-w-md lg:max-w-none justify-items-center lg:justify-items-start">
                {natureAmenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 lg:gap-2"
                  >
                    <div className="flex-shrink-0 w-12 h-12 lg:w-20 lg:h-14">
                      <img
                        src={item.icon}
                        alt={item.text}
                        className="w-full h-full object-contain"
                        style={{ 
                          filter: "none",
                          color: "#B7AC88"
                        }}
                      />
                    </div>
                    <span className="text-sm lg:text-lg font-normal text-[#2a2a2a]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Design 1: Grid Carousel View - Sports & Activity
  const GridView = () => {
    const outdoorAmenities = [
      { icon: "/images/wyce-exclucity/icon/i9.png", text: "Cricket Practice Pitch" },
      { icon: "/images/wyce-exclucity/icon/i10.png", text: "Active Play Lawn" },
      { icon: "/images/wyce-exclucity/icon/i11.png", text: "Kids' Play Area" },
      { icon: "/images/wyce-exclucity/icon/i12.png", text: "Basketball Zone (Full Court)" },
      { icon: "/images/wyce-exclucity/icon/i13.png", text: "Open-Air Fitness Studio" },
      { icon: "/images/wyce-exclucity/icon/i14.png", text: "Covered-Dual Badminton Courts" },
    ];

    const indoorAmenities = [
      { icon: "/images/wyce-exclucity/icon/i15.png", text: "Chess Table" },
      { icon: "/images/wyce-exclucity/icon/i16.png", text: "Table Tennis" },
      { icon: "/images/wyce-exclucity/icon/i17.png", text: "Pool Table" },
      { icon: "/images/wyce-exclucity/icon/i18.png", text: "Indoor Arcade & Games Studio" },
      { icon: "/images/wyce-exclucity/icon/i19.png", text: "Drawing Room" },
      { icon: "/images/wyce-exclucity/icon/i20.png", text: "Foosball" },
      { icon: "/images/wyce-exclucity/icon/i21.png", text: "Soundscape Studio" },
      { icon: "/images/wyce-exclucity/icon/i22.png", text: "Classic Game Lounge" },

    ];

    // Flatten all amenities for mobile/tablet grid view
    const allSportsAmenities = [...indoorAmenities, ...outdoorAmenities];

    return (
      <div className="w-full lg:w-[1400px] min-h-[700px] md:min-h-[750px] lg:min-h-[800px] px-6 relative lg:bg-[url('/images/wyce-exclucity/am2.png')] bg-contain bg-center bg-no-repeat">
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 py-8 lg:py-10 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16 h-full min-h-[400px] lg:min-h-[650px]">
            {/* Left Side - Text Content positioned on background image */}
            <div className="w-full lg:w-2/3 flex flex-col relative z-10 items-center lg:items-start">
              {/* Title Section */}
              <div className="mb-8 lg:mb-5 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-Raleway font-normal text-black mb-2 leading-tight">
                  Created to make you exclaim
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-4xl font-breathney text-[#B7AC88] mt-2 lg:ml-4 leading-tight">
                  just one more game!
                </h3>
              </div>

              {/* Mobile/Tablet View - 2 Column Grid (like NatureView) */}
              <div className="lg:hidden w-full">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full max-w-md justify-items-center">
                  {allSportsAmenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 w-full"
                    >
                      <div className="flex-shrink-0 w-12 h-12">
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="w-full h-full object-contain"
                          style={{ 
                            filter: "none",
                            color: "#B7AC88"
                          }}
                        />
                      </div>
                      <span className="text-sm font-normal text-[#2a2a2a] font-Raleway">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop View - Two Column Layout for Amenities */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-none justify-items-start">

                                {/* Indoor Activities */}
                <div className="flex flex-col w-full items-start">
                  <h4
                    className="text-lg lg:text-xl font-Raleway font-semibold text-[#2a2a2a] mb-4"
                  >
                    Indoor Activities:
                  </h4>
                  <div className="flex flex-col w-full items-start">
                    {indoorAmenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 pb-2 pt-2 relative justify-start w-full"
                      >
                        <div className="flex-shrink-0 w-14 h-14">
                          <img
                            src={item.icon}
                            alt={item.text}
                            className="w-full h-full object-contain"
                            style={{ 
                              filter: "none",
                              color: "#B7AC88"
                            }}
                          />
                        </div>
                        <span className="text-lg font-normal text-[#2a2a2a] font-Raleway">
                          {item.text}
                        </span>
                        {/* Custom Border - visible on laptop */}
                        <div 
                          className="absolute bottom-0 bg-[#B7AC88]/70"
                          style={{ 
                            width: "calc(60% - 20px)",
                            height: "2px",
                            left: "56px"
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outdoor Indulgences */}
                <div className="flex flex-col w-full items-start">
                  <h4
                    className="text-lg lg:text-xl font-Raleway font-semibold text-[#2a2a2a] mb-4"
                  >
                    Outdoor Indulgences:
                  </h4>
                  <div className="flex flex-col w-full items-start">
                    {outdoorAmenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center pb-2 pt-2 relative justify-start w-full"
                      >
                        <div className="flex-shrink-0 w-14 h-14">
                          <img
                            src={item.icon}
                            alt={item.text}
                            className="w-full h-full object-contain"
                            style={{ 
                              filter: "none",
                              color: "#B7AC88"
                            }}
                          />
                        </div>
                        <span className="text-lg font-normal text-[#2a2a2a] font-Raleway ml-3">
                          {item.text}
                        </span>
                        {/* Custom Border - visible on laptop */}
                        <div 
                          className="absolute bottom-0 bg-[#B7AC88]/70"
                          style={{ 
                            width: "calc(60% - 20px)",
                            height: "2px",
                            left: "56px"
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>


          </div>
        </div>
      </div>
    );
  };

  // Design 2B: Social & Entertainment - Left Content on Banner (a3.png)
  const SocialEntertainmentView = () => {
    // Two-column amenity lists as per provided screenshot
    const leftColumn = [
      { icon: "/images/wyce-exclucity/icon/i25.png", text: "Campfire Circle" },
      { icon: "/images/wyce-exclucity/icon/i26.png", text: "Conversation Pavillion" },
      { icon: "/images/wyce-exclucity/icon/i27.png", text: "Paw Park" },
      { icon: "/images/wyce-exclucity/icon/i28.png", text: "Alfresco Celebration Lawn" },
      { icon: "/images/wyce-exclucity/icon/i29.png", text: "Designer Pergola Lounge" },

    ];

    const rightColumn = [
      { icon: "/images/wyce-exclucity/icon/i33.png", text: "Velvet Entrance" },
      { icon: "/images/wyce-exclucity/icon/i34.png", text: "The Breezway" },
      { icon: "/images/wyce-exclucity/icon/i35.png", text: "Work and Well Studio" },
      { icon: "/images/wyce-exclucity/icon/i36.png", text: "The Knight and Crown" },
      { icon: "/images/wyce-exclucity/icon/i37.png", text: "The Forum Entrance" },
      { icon: "/images/wyce-exclucity/icon/i38.png", text: "Cafeteria" },
    ];

    // Flatten all amenities for mobile/tablet grid view
    const allSocialAmenities = [...leftColumn, ...rightColumn];

    return (
      <div className="w-full lg:w-[1400px] min-h-[700px] md:min-h-[750px] lg:min-h-[700px] px-6 relative lg:bg-[url('/images/wyce-exclucity/am3.png')] bg-contain bg-center bg-no-repeat">
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 py-8 lg:py-0 h-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16 h-full min-h-[400px] lg:min-h-[650px]">
            {/* Left Side - Text Content only; right-side image is part of banner */}
            <div className="w-full lg:w-2/3 flex flex-col relative z-10 lg:pt-15 items-center lg:items-start lg:pl-50">
              {/* Title Section */}
              <div className="mb-6 lg:mb-8 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-Raleway font-normal text-black mb-2 leading-tight">
                  Social Connections,
                </h2>
                <h3 className="text-2xl md:text-5xl lg:text-4xl font-breathney text-[#B7AC88] mt-2 lg:ml-4 leading-tight">
                  Mindfully
                </h3>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-Raleway font-normal text-black mb-2 leading-tight">
                  Designed
                </h3>
              </div>

              {/* Mobile/Tablet View - 2 Column Grid (like NatureView) */}
              <div className="lg:hidden w-full">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full max-w-md justify-items-center">
                  {allSocialAmenities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 w-full"
                    >
                      <div className="flex-shrink-0 w-12 h-12">
                        <img src={item.icon} alt={item.text} className="w-full h-full object-contain" style={{ filter: "none", color: "#B7AC88" }} />
                      </div>
                      <span className="text-sm font-normal font-Raleway text-[#2a2a2a]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop View - Two Column Amenities List */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-x-10 gap-y-5 w-full max-w-none justify-items-start">
                {/* Right column */}
                <div className="flex flex-col w-full items-start">
                  {rightColumn.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 py-2 justify-start w-full"
                    >
                      <div className="flex-shrink-0 w-14 h-14">
                        <img src={item.icon} alt={item.text} className="w-full h-full object-contain" style={{ filter: "none", color: "#B7AC88" }} />
                      </div>
                      <span className="text-lg font-normal font-Raleway text-[#2a2a2a]">{item.text}</span>
                    </div>
                  ))}
                </div>
                {/* Left column */}
                <div className="flex flex-col w-full items-start">
                  {leftColumn.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 py-2 justify-start w-full"
                    >
                      <div className="flex-shrink-0 w-14 h-14">
                        <img src={item.icon} alt={item.text} className="w-full h-full object-contain" style={{ filter: "none", color: "#B7AC88" }} />
                      </div>
                      <span className="text-lg font-normal font-Raleway text-[#2a2a2a]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Design 3: Masonry Layout
  const MasonryView = () => (
    <div className="relative w-full max-w-[1400px] overflow-hidden px-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {allAmenities.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-6 group bg-gradient-to-br from-[#47351B]/40 to-[#B7AC88]/20 rounded-xl p-5 border border-[#B7AC88]/30 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div
                className="w-16 h-16 bg-gradient-to-br from-[#B7AC88] to-[#47351B] rounded-lg p-3 flex-shrink-0"
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-sm font-medium font-Raleway text-[#B7AC88] text-center sm:text-left flex-1">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Design 4: Horizontal Scroll
  const ScrollView = () => (
    <div className="relative w-full max-w-[1400px] overflow-hidden px-4">
      <div className="overflow-x-auto scrollbar-hide pb-6">
        <div
          className="flex gap-6 min-w-max"
        >
          {allAmenities.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 group bg-gradient-to-br from-[#47351B]/40 to-[#B7AC88]/20 rounded-xl p-6 border border-[#B7AC88]/30 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div
                  className="w-20 h-20 bg-gradient-to-br from-[#B7AC88] to-[#47351B] rounded-full p-4"
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-base font-semibold font-Raleway text-[#B7AC88] leading-tight">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-[#B7AC88]/60 text-sm mt-4 font-Raleway">
        ← Drag to scroll →
      </p>
    </div>
  );

  // Design 5: Mosaic Layout
  const MosaicView = () => {
    const mosaicLayout = [
      { item: allAmenities[0], size: "large" },
      { item: allAmenities[1], size: "medium" },
      { item: allAmenities[2], size: "small" },
      { item: allAmenities[3], size: "medium" },
      { item: allAmenities[4], size: "large" },
      { item: allAmenities[5], size: "small" },
      { item: allAmenities[6], size: "medium" },
      { item: allAmenities[7], size: "small" },
      { item: allAmenities[8], size: "large" },
      { item: allAmenities[9], size: "medium" },
      { item: allAmenities[10], size: "small" },
      { item: allAmenities[11], size: "large" },
      { item: allAmenities[12], size: "medium" },
      { item: allAmenities[13], size: "small" },
      { item: allAmenities[14], size: "medium" },
      { item: allAmenities[15], size: "large" },
      { item: allAmenities[16], size: "small" },
      { item: allAmenities[17], size: "medium" },
      { item: allAmenities[18], size: "large" },
      { item: allAmenities[19], size: "small" },
      { item: allAmenities[20], size: "medium" },
      { item: allAmenities[21], size: "small" },
      { item: allAmenities[22], size: "large" },
      { item: allAmenities[23], size: "medium" },
    ];

    return (
      <div className="relative w-full max-w-[1400px] overflow-hidden px-4">
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr"
        >
          {mosaicLayout.map(({ item, size }, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-[#47351B]/40 to-[#B7AC88]/20 rounded-xl border border-[#B7AC88]/30 cursor-pointer overflow-hidden ${
                size === "large"
                  ? "col-span-2 row-span-2 p-8"
                  : size === "medium"
                  ? "col-span-1 row-span-2 p-6"
                  : "col-span-1 row-span-1 p-4"
              }`}
            >
              <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                <div
                  className={`bg-gradient-to-br from-[#B7AC88] to-[#47351B] rounded-xl p-3 ${
                    size === "large" ? "w-28 h-28" : size === "medium" ? "w-20 h-20" : "w-16 h-16"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <h3
                  className={`font-Raleway text-[#B7AC88] font-medium ${
                    size === "large"
                      ? "text-lg"
                      : size === "medium"
                      ? "text-base"
                      : "text-sm"
                  }`}
                >
                  {item.text}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#B7AC88]/0 to-[#B7AC88]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="w-full flex flex-col items-center pb-0 relative  bg-white"    >

      {/* Heading */}
      <div
        className="w-full text-center mb-12 mt-20"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-[#a78631] font-Raleway"
        >  Premium
            <span className="font-breathney text-[#a78631]  text-[20px] sm:text-xl md:text-xl lg:text-3xl">Amenities</span>
        </h2>
        <p
          className="text-gray-700 max-w-4xl mx-auto mt-4 font-Raleway text-2xl"
        >
          Experience Elevated Living WYCE Exclucity properties come packed with lifestyle-enhancing
          features that cater to all age groups.
        </p>
      </div>

      {/* Tab Navigation */}
          <div
        className="flex flex-wrap justify-center gap-4 px-4"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className="relative px-6 py-2 font-Raleway text-lg font-medium text-[#b7ac88] transition-colors duration-300 cursor-pointer"
          >
            {tab}
            {activeTab === index && (
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#B7AC88]"
              />
            )}
          </button>
            ))}
          </div>

      {/* Content Area */}
      <div
        key={activeTab}
      >
        {activeTab === 0 && <NatureView />}
        {activeTab === 1 && <GridView />}
        {activeTab === 2 && <SocialEntertainmentView />}
        {activeTab === 3 && <MasonryView />}
        {activeTab === 4 && <ScrollView />}
        {activeTab === 5 && <MosaicView />}
      </div>
    </div>
  );
}
