"use client";
import Image from "next/image";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({
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
          <div className="mb-5 text-left">
          <p className={`text-[#b6a16b] italic text-2xl sm:text-3xl font-light ${cinzel.className}`}>
            — Our Vision 
          </p>
        </div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Our vision is to shape the future of residential real estate by consistently delivering timeless landmarks that embody thoughtful design and superior quality. We believe that true luxury is found in intent, where every detail, from the master plan to the smallest feature, is designed around how you live and feel. This thoughtful approach is not an afterthought; it is the very foundation of everything we build.            </p>
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
                      <p className={`text-[#b6a16b] italic text-2xl sm:text-3xl font-light ${cinzel.className}`}>
            — Our Mission
          </p>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
Our mission is to be a trusted Pune-based construction company, transforming industries with innovative solutions, integrity, and sustainable growth. We are committed to creating exceptional homes and communities where families can live the WYCE-crafted experience. We are built on the combined wisdom of three trusted names—Parth Developers, Saniket Builders, and Balaji Group—and are driven by a shared vision of quality, trust, and thoughtful living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
