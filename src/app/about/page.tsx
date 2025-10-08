"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import aboutImg1 from "../../../public/images/about-1.png";
import aboutImg2 from "../../../public/images/about-2.png";

const About = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#D2C7A8] to-black text-white py-10 md:py-16">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">About Us</h2>
        <p className="text-gray-200 text-sm md:text-base">
          At WYCE Corp, we believe a home is more than bricks and beams —
          it’s the space where your most beautiful moments begin.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
        {/* Image Section */}
        <div className="relative md:w-1/2">
          <Image
            src={aboutImg1}
            alt="Main building"
            className="rounded-xl w-full h-auto object-cover"
          />
          <div className="absolute bottom-[-40px] left-[40px] shadow-lg rounded-lg overflow-hidden border-4 border-black w-56 md:w-72">
            <Image
              src={aboutImg2}
              alt="Overlay building"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            A Design-led Real Estate Company in Pune
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            At WYCE Corp, we believe a home is more than bricks and beams —
            it’s the space where your most beautiful moments begin. As WYCE
            Corp builders, we put heart into every project, designing homes
            that welcome joy, comfort, and connection.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#CBB27B] hover:bg-[#b89d66] text-black font-medium px-6 py-2 rounded-md transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
