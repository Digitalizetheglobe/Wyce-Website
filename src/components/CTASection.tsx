"use client";

import { Vujahday_Script } from "next/font/google";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function CTASection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/90"></div>
       
      <div className="relative container mx-auto px-6 lg:px-16 flex items-center justify-center">
        {/* CTA Content - Centered panel */}
        <div className="text-center w-[1210px] mx-auto bg-gradient-to-b from-[#2A1F0A] to-[#1A0F03] rounded-2xl p-12 shadow-2xl border border-[#B7AC88]/20" style={{ backgroundImage: "url('/images/cta-bg.png')" }}>
          {/* Small text at top */}
          <p className={`${vujahday.className} text-[#B7AC88] mb-6 text-lg`}>
            Book Now
          </p>
          
          {/* Main heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight mb-8">
            Let's Start Your Real Estate<br />
            Journey Today
          </h2>
          
          {/* CTA Button with gradient */}
          <button 
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: `linear-gradient(120deg, #B7AC88 0%, #6B6046 50%, #1F1403 100%)`
            }}
          >
            Contact Us
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
