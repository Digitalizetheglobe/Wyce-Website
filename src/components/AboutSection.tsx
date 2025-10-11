"use client";

import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function AboutSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-2 sm:py-16 md:py-5 bg-black/100"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    >
      {/* GREATER TOGETHER SECTION WITH VIDEO */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 mt-12 sm:mt-16 md:mt-10 max-w-[1320px]">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className={`${cinzel.className} text-lg sm:text-xl md:text-2xl `}>
            Greater together
          </h3>
          <p className={`${cinzel.className} text-lg sm:text-xl md:text-xl italic`}>
            because strength grows in unity
          </p>
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto rounded-lg overflow-hidden shadow-2xl">
          <video
            className="w-full h-[ 300px ] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            controls
            preload="metadata"
          >
            <source src="/images/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
