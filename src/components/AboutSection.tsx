"use client";

import Image from "next/image";
import Link from "next/link";
import { Vujahday_Script } from "next/font/google";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 md:py-20 bg-black/100"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    >


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-[1320px]">
        {/* LEFT SIDE CONTENT */}
        <div>
            <p className={`text-[#B7AC88] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 ${vujahday.className}`}>
            <span className="inline-block w-8 sm:w-10 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] leading-tight font-normal">About Us</span>
            </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 sm:mb-6">
            A Design-led Real Estate <br className="hidden sm:block" /> Company in Pune
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            WYCE Corp creates thoughtfully modern homes in Pune—spaces that
            breathe, neighborhoods that feel alive. Known for integrity and
            attention to detail, we deliver value-driven, well-located, and
            enduring properties where life and dreams take shape.
          </p>

          <Link href="/about" className="border border-[#B7AC88] text-[#B7AC88] border-2 px-8 sm:px-12 py-2 text-sm sm:text-base font-bold hover:bg-[#B7AC88] hover:text-black transition-all cursor-pointer inline-block text-center">
            Read More
          </Link>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-[520px] mx-auto lg:mx-0">
          <div className="overflow-hidden">
            <Image
              src="/images/about-1.png"
              alt="Modern Living Room"
              width={250}
              height={250}
              className="object-cover w-full h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/about-2.png"
              alt="Bedroom Interior"
              width={250}
              height={250}
              className="object-cover w-full h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/about-3.png"
              alt="Luxury Lobby"
              width={250}
              height={250}
              className="object-cover w-full h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/about-4.png"
              alt="Luxury Bedroom"
              width={250}
              height={250}
              className="object-cover w-full h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
