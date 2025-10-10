'use client';

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full bg-[#0B0B0B] px-5">
      <div className="max-w-7xl mx-auto">
        <div className="w-full text-center rounded-2xl py-10 px-8 shadow-lg bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/cta-bg.png')"}}>
          {/* Small Text */}
          <p className="text-sm text-gray-200 mb-2">Book Now</p>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Let&apos;s Start Your Real Estate <br className="hidden sm:block" />
            Journey Today 
          </h2>

          {/* Button */}
          <Link href="/contact" className="bg-white/10 w-50 hover:bg-white/20 text-white border border-white/20 rounded-full px-6 py-2 text-sm font-medium flex items-center justify-center mx-auto gap-2 transition-all">
            Contact Us
            <span className="text-lg">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

{/* <section
      className="relative bg-black/100 bg-cover bg-center bg-no-repeat text-white pb-12 sm:pb-16 md:pb-20"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    ></section> */}
