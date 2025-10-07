"use client";

import Image from "next/image";
import { Vujahday_Script } from "next/font/google";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    >


      <div className="relative container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 w-330">
        {/* LEFT SIDE CONTENT */}
        <div>
            <p className={`text-[#B7AC88] mb-8   flex items-center gap-3 ${vujahday.className}`}>
            <span className="inline-block w-10 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-[42px] leading-[42px] font-normal">About Us</span>
            </p>

          <h2 className="text-4xl md:text-4xl font-bold leading-snug mb-6">
            A Design-led Real Estate <br /> Company in Pune
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            WYCE Corp creates thoughtfully modern homes in Pune—spaces that
            breathe, neighborhoods that feel alive. Known for integrity and
            attention to detail, we deliver value-driven, well-located, and
            enduring properties where life and dreams take shape.
          </p>

          <button className="border border-[#B7AC88] text-[#B7AC88] border-2 px-12 py-2 font-bold hover:bg-[#B7AC88] hover:text-black transition-all">
            Read More
          </button>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-8 w-130">
          <div className="overflow-hidden">
            <Image
              src="/images/about-1.png"
              alt="Modern Living Room"
              width={200}
              height={200}
              className="object-cover w-[250px] h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/about-2.png"
              alt="Bedroom Interior"
              width={200}
              height={200}
              className="object-cover w-[250px] h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/about-3.png"
              alt="Luxury Lobby"
              width={200}
              height={200}
              className="object-cover w-[250px] h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/about-4.png"
              alt="Luxury Bedroom"
              width={200}
              height={200}
              className="object-cover w-[250px] h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
