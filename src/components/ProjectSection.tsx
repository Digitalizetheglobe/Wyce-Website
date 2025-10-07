"use client";

import Image from "next/image";
import { Vujahday_Script } from "next/font/google";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 pl-25 h-570"
      style={{ backgroundImage: "url('/images/project-bg.png')" }}
    >

    <div className="absolute inset-0 bg-black/80"></div>


      <div className="relative container mx-auto px-6 lg:px-16">
        {/* SECTION HEADER */}
        <div className="mb-16 ">
            <p className={`text-[#B7AC88] mb-8 flex items-center gap-3 ${vujahday.className}`}>
            <span className="inline-block w-10 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-[40px] leading-[42px] font-normal">Our Projects</span>
            </p>
        </div>

        {/* first */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8 pr-8 lg:pr-16">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-4xl xl:text-[40px] font-bold text-white leading-tight">
                A Design-led Real Estate<br />
                Company in Pune
              </h1>
            </div>
            
            {/* Description Text */}
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              Welcome to WYCE Corp, a thoughtfully designed development by WYCE Corp in Pune. 
              Crafted with precision and care, this project brings you modern homes that blend 
              smart design, open spaces, and vibrant community living.
            </p>
            
            {/* CTA Button */}
            <button className="border border-[#B7AC88] text-[#B7AC88] border-2 px-12 py-2 font-bold hover:bg-[#B7AC88] hover:text-black transition-all">
                Read More
            </button>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative lg:ml-0 -mr-6 lg:-mr-16">
            <Image
              src="/images/project-1.png"
              alt="Modern residential complex with high-rise towers and green spaces"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* second */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-10">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8 pr-8 lg:pr-16">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-4xl xl:text-[40px] font-bold text-white leading-tight">
                A Design-led Real Estate<br />
                Company in Pune
              </h1>
            </div>
            
            {/* Description Text */}
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              Welcome to WYCE Corp, a thoughtfully designed development by WYCE Corp in Pune. 
              Crafted with precision and care, this project brings you modern homes that blend 
              smart design, open spaces, and vibrant community living.
            </p>
            
            {/* CTA Button */}
            <button className="border border-[#B7AC88] text-[#B7AC88] border-2 px-12 py-2 font-bold hover:bg-[#B7AC88] hover:text-black transition-all">
                Read More
            </button>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative lg:ml-0 -mr-6 lg:-mr-16">
            <Image
              src="/images/project-2.png"
              alt="Modern residential complex with high-rise towers and green spaces"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* third */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-10">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8 pr-8 lg:pr-16">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-4xl xl:text-[40px] font-bold text-white leading-tight">
                A Design-led Real Estate<br />
                Company in Pune
              </h1>
            </div>
            
            {/* Description Text */}
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              Welcome to WYCE Corp, a thoughtfully designed development by WYCE Corp in Pune. 
              Crafted with precision and care, this project brings you modern homes that blend 
              smart design, open spaces, and vibrant community living.
            </p>
            
            {/* CTA Button */}
            <button className="border border-[#B7AC88] text-[#B7AC88] border-2 px-12 py-2 font-bold hover:bg-[#B7AC88] hover:text-black transition-all">
                Read More
            </button>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative lg:ml-0 -mr-6 lg:-mr-16">
            <Image
              src="/images/project-3.png"
              alt="Modern residential complex with high-rise towers and green spaces"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* fourth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-10">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8 pr-8 lg:pr-16">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-4xl xl:text-[40px] font-bold text-white leading-tight">
                A Design-led Real Estate<br />
                Company in Pune
              </h1>
            </div>
            
            {/* Description Text */}
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              Welcome to WYCE Corp, a thoughtfully designed development by WYCE Corp in Pune. 
              Crafted with precision and care, this project brings you modern homes that blend 
              smart design, open spaces, and vibrant community living.
            </p>
            
            {/* CTA Button */}
            <button className="border border-[#B7AC88] text-[#B7AC88] border-2 px-12 py-2 font-bold hover:bg-[#B7AC88] hover:text-black transition-all">
                Read More
            </button>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="relative lg:ml-0 -mr-6 lg:-mr-16">
            <Image
              src="/images/project-4.png"
              alt="Modern residential complex with high-rise towers and green spaces"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
