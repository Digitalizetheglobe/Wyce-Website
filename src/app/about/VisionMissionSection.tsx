"use client";
import Image from "next/image";
import { Vujahday_Script } from "next/font/google";
const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});
export default function VisionMissionSection() {
  return (
    <section className={`bg-[#0d0d0d] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        

        {/* First Row: Left Content, Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-6">
          {/* Left Content */}
          <div className="space-y-6">
          <div className="mb-12 text-left">
          <p className={`text-[#b6a16b] italic text-2xl sm:text-3xl font-light ${vujahday.className}`}>
            — Our Vision & Mission
          </p>
        </div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              WYCE Corp is a trusted Pune-based construction company,
              transforming industries with innovative solutions, integrity,
              and sustainable growth.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-start md:justify-end">
            <Image
              src="/images/vision.png"
              alt="Vision Image"
              width={600}
              height={400}
              className=" shadow-md w-full max-w-[500px] object-cover"
            />
          </div>
        </div>

        {/* Second Row: Left Image, Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-4">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/mission.png"
              alt="Mission Image"
              width={600}
              height={300}
              className=" shadow-md w-full max-w-[500px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 mt-8">
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
