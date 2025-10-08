'use client';
import Image from "next/image";

export default function VerticalExpertise() {
  return (
    <section className="relative w-full bg-[#0B0B0B] text-white py-20">
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/project-bg.png" // <-- Add your topography-style background image locally
          alt="background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-6">
          <p className="text-[#b6a16b] italic text-2xl sm:text-3xl font-light">
            — Our Vertical Expertise
          </p>
        </div>

        {/* Description */}
        <p className="text-white mb-15 max-w-2xl">
          WYCE Corp Developers: Building homes, workspaces, and hospitality
          experiences with innovation, quality, and care.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {[
            { title: "Residential", icon: "/images/bldg.png" },
            { title: "Commercial", icon: "/images/bldg.png" },
            { title: "Hospitality", icon: "/images/bldg.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="transition-all duration-300 p-10 rounded-xl shadow-lg relative"
              style={{background: 'linear-gradient(180deg, #B7AC88 0%, #1F1403 107.96%)'}}
            >
              {/* Icon */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-md" style={{background: 'linear-gradient(180deg, #B7AC88 0%, #1F1403 100%)'}}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>

              {/* Text */}
              <div className="mt-10 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
