"use client";

import Image from "next/image";
import Link from "next/link";
import { Vujahday_Script } from "next/font/google";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectSection() {
  return (
    
    <section
      className=" relative bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 md:py-20 px-0 sm:px-0 md:pl-0 lg:pl-25"
      style={{ backgroundImage: "url('/images/project-bg.png')" }}
    >

    <div className="absolute inset-0 bg-black/90"></div>


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16">
        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-12 md:mb-16">
            <p className={`text-[#B7AC88] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 ${vujahday.className}`}>
            <span className="inline-block w-8 sm:w-10 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] leading-tight font-normal">Our Projects</span>
            </p>
        </div>

        {/* first */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 pr-0 lg:pr-8 xl:pr-16">
            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-bold text-white leading-tight">
                A Design-led Real Estate<br className="hidden sm:block" />
                Company in Pune
              </h1>
            </div>
            
            {/* Description Text */}
            <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              Welcome to WYCE Corp, a thoughtfully designed development by WYCE Corp in Pune. 
              Crafted with precision and care, this project brings you modern homes that blend 
              smart design, open spaces, and vibrant community living.
            </p>
            
            {/* CTA Button */}
            <Link href="/wyce-exclucity" className="inline-block border border-[#B7AC88] text-[#B7AC88] border-2 px-8 sm:px-12 py-2 text-sm sm:text-base font-bold hover:bg-[#B7AC88] hover:text-black transition-all">
                Read More
            </Link>
          </div>


        </div>


      </div>
    </section>
  );
}
