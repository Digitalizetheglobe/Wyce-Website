"use client";
import Image from "next/image";


export default function HeroSection() {
  return (
    <>
      <section className="relative bg-[#0d0d0d] text-white py-16 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <Image
              src="/images/about.png"
              alt="Main Building"
              width={600}
              height={400}
              className="rounded-md shadow-lg object-cover w-full"
            />

            {/* Overlapping Image
            <div className="absolute bottom-[-40px] left-[60%] transform -translate-x-1/2">
              <Image
                src="/images/building-small.jpg"
                alt="Small Building"
                width={280}
                height={200}
                className="rounded-md shadow-2xl border-4 border-black"
              />
            </div> */}
          </div>

          {/* Right Text Section */}
          <div className="text-left mt-12 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              A Design-led Real Estate Company in Pune
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At WYCE Corp, we believe a home is more than bricks and beams — 
              it&apos;s the space where your most beautiful moments begin. 
              As WYCE Corp builders, we put heart into every project, 
              designing homes that welcome joy, comfort, and connection.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
