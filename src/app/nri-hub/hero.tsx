"use client";

import Image from "next/image";

export default function NRIHero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="NRI Hub Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909] via-[#090909]/80 to-[#090909]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#B7AC88]/20 border border-[#B7AC88] px-4 py-2 rounded-full mb-6">
            <span className="text-[#B7AC88] text-sm md:text-base font-medium">
              🌏 Your Gateway to Indian Real Estate
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            NRI Hub - Invest in Your{" "}
            <span className="text-[#B7AC88]">Dream Home</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Seamlessly invest in premium Indian properties from anywhere in the world. 
            We handle everything from documentation to possession, making your real estate 
            journey effortless.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#B7AC88] text-black px-8 py-4 text-base md:text-lg font-semibold hover:bg-[#a69977] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
              Explore Properties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-base md:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
              Schedule Consultation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-1">500+</div>
              <div className="text-sm md:text-base text-gray-400">NRI Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-1">30+</div>
              <div className="text-sm md:text-base text-gray-400">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-1">₹500Cr+</div>
              <div className="text-sm md:text-base text-gray-400">Investments Facilitated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-1">98%</div>
              <div className="text-sm md:text-base text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


