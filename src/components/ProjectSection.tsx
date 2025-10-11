"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectSection() {
  return (
    
    <section
      className=" relative bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 md:py-20 px-0 sm:px-0 "
      style={{ backgroundImage: "url('/images/project-bg.png')" }}
    >

    <div className="absolute inset-0 bg-black/90"></div>


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 text-center">
        {/* SECTION HEADER */}
        <div className="">
            <p className={`text-[#B7AC88] flex items-center justify-center gap-2 sm:gap-3 ${cinzel.className}`}>
            <span className="inline-block w-8 sm:w-10 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-2xl sm:text-3xl md:text-[36px] lg:text-[30px] leading-tight font-normal">We&apos;re Believers</span>
            </p>
        </div>

        {/* first */}
        <div className="flex justify-center">
          {/* CONTENT */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl">

            {/* Description Text */}
            <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              Every WYCE project begins with one simple idea  to design spaces that strengthen relationships. From thoughtful layouts and community-driven amenities to honest timelines and transparent dealings, every decision is made with one question in mind: &quot;Will this make life better for our customers?&quot;
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="/wyce-exclucity" className="inline-block border border-[#B7AC88] text-[#B7AC88] border-2 px-8 sm:px-12 py-2 text-sm sm:text-base font-bold hover:bg-[#B7AC88] hover:text-black transition-all">
                  Read More
              </Link>
            </div>
          </div>


        </div>


      </div>
    </section>
  );
}
