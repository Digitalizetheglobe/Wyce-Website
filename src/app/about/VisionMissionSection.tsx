"use client";
import Image from "next/image";

export default function VisionMissionSection() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-left">
          <p className="text-[#b6a16b] italic text-2xl sm:text-3xl font-light">
            — Our Vision & Mission
          </p>
        </div>

        {/* First Row: Left Content, Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              WYCE Corp is a trusted Pune-based construction company,
              transforming industries with innovative solutions, integrity,
              and sustainable growth.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/vision.png"
              alt="Vision Image"
              width={600}
              height={400}
              className="rounded-md shadow-md w-full max-w-[500px] object-cover"
            />
          </div>
        </div>

        {/* Second Row: Left Image, Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/mission.png"
              alt="Mission Image"
              width={600}
              height={400}
              className="rounded-md shadow-md w-full max-w-[500px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              WYCE Corp is a trusted Pune-based construction company,
              transforming industries with innovative solutions, integrity,
              and sustainable growth.
            </p>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              WYCE Corp is a trusted Pune-based construction company,
              transforming industries with innovative solutions, integrity,
              and sustainable growth with innovative solutions, integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
