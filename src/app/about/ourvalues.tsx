"use client";
import Image from "next/image";

import { Cinzel } from "next/font/google";
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export default function ValuesSection() {
  


  const values = [
    {
      icon: "/images/icon1.png",
      title: "Innovation",
      text: "We deliver innovative solutions to meet future challenges and opportunities.",
    },
    {
      icon: "/images/icon2.png",
      title: "Perseverance",
      text: "We deliver innovative solutions to meet future challenges and opportunities.",
    },
    {
      icon: "/images/icon3.png",
      title: "Quality Spaces",
      text: "We deliver innovative solutions to meet future challenges and opportunities.",
    },
  ];

  return (
    <section className={`bg-[#121212] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 flex justify-between items-start">
          <div>
            <p className={`text-[#b6a16b] italic text-2xl sm:text-3xl font-light mb-4 ${cinzel.className}`}>
              — Our Values
            </p>
            <p className="text-gray-300 max-w-2xl text-base">
              WYCE Corp is a trusted Pune-based construction company, transforming industries
              with innovative solutions, integrity, and sustainable growth.
            </p>
          </div>

          {/* Arrows */}
          
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((item, index) => (
            <div
              key={index}
              className="text-left space-y-6"
            >
              {/* Icon */}
              <div className="flex justify-left">
                <div className="w-20 h-20 border border-[#b6a16b] rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              
              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
