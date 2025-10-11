'use client';
import Image from "next/image";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});
export default function VerticalExpertise() {
  return (
    <section className={`relative w-full bg-[#0B0B0B] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/project-bg.png" // <-- Add your topography-style background image locally
          alt="background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto ">
        {/* Heading */}
        <div className="mb-6">
          <p className={`text-[#b6a16b] italic text-2xl sm:text-3xl font-light ${cinzel.className}`}>
            — Our Vertical Expertise
          </p>
        </div>

        {/* Description */}
        <p className="text-white mb-15 max-w-2xl">
          WYCE Corp Developers: Building homes, workspaces, and hospitality
          experiences with innovation, quality, and care.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {[
            { title: "LEADERSHIP" },
            { title: "LIFE @ WYCE" },
            { title: "OUR LEGACY" },
            { title: "CHANNEL PARTNERS" },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div
                className="transition-all duration-300 p-8 bg-[#2A2A2A] hover:bg-[#3A3A3A] cursor-pointer border-r border-[#B7AC88] last:border-r-0"
                style={{ minHeight: '50px' }}
              >
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-white text-lg font-medium text-center uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
