'use client';
import Image from "next/image";
import { useState } from "react";
import CtaSection from "./cta";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});


export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      name: "Jontray Doe",
      role: "Non Executive Chairmen",
      desc: "Jontray is responsible for guiding the company strategically.",
      img: "/images/team1.png",
    },
    {
      name: "Emma Doe",
      role: "MD, CEO",
      desc: "Emma leads the company with strategic vision and operational excellence.",
      img: "/images/team2.png",
    },
    {
      name: "Charlotte Doe",
      role: "Heads HR",
      desc: "Charlotte manages human resources with focus on team development and culture.",
      img: "/images/team3.png",
    },
  ];

  return (
    <section className={`relative w-full bg-[#121212] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <div className="text-left mb-6">
          <p className={`text-[#b6a16b] italic text-2xl sm:text-3xl font-light pt-10 ${cinzel.className}`}>
            — Meet The Awesome Team
          </p>
        </div>

        {/* Subtext */}
        <p className="text-gray-300 mb-12 max-w-6xl mx-auto text-left">
          Every property is more than just four walls—it&apos;s a promise of luxury,<br />
          comfort and growth. Step into a lifestyle.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mb-12">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="relative bg-[#141414] rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 border border-gray-800 hover:border-[#b6a16b]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[320px]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className={`object-cover transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-70' : 'opacity-100'
                  }`}
                />
                
                {/* Gradient overlay - visible on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Text overlay - visible on hover */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-lg font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-xs text-gray-300 mb-1">{member.role}</p>
                  <p className="text-xs text-gray-300 leading-tight">{member.desc}</p>
                </div>
              </div>
              
              {/* Default text below image - visible when not hovered */}
              <div className={`bg-black transition-all duration-300 overflow-hidden ${
                hoveredIndex === index ? 'max-h-0 p-0 opacity-0' : 'max-h-32 p-6 opacity-100'
              }`}>
                <div className="w-full h-px bg-[#b6a16b] mb-4"></div>
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaSection />
    </section>
  );
}
