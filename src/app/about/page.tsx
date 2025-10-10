"use client";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import HeroSection from "./about";
import VisionMissionSection from "./VisionMissionSection";
import ValuesSection from "./ourvalues";
import VerticalExpertise from "./verticalexpertise";
import TeamSection from "./team";


const About = () => {
  return (
    <>
      <section className="w-full text-white py-10 md:py-16" style={{background: 'linear-gradient(180deg, #090909 0%, #B7AC88 100%)'}}>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">About Us</h2>
          <p className="text-gray-200 text-sm md:text-base">
            At WYCE Corp, we believe a home is more than bricks and beams —
            it&apos;s the space where your most beautiful moments begin.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
          {/* Image Section */}
        
        </div>
      </section>
      <HeroSection />
      <VisionMissionSection />
      <ValuesSection />
      <VerticalExpertise />
      <TeamSection />
    </>
  );
};

export default About;
