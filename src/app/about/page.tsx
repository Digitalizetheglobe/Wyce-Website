"use client";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import HeroSection from "./about";
import VisionMissionSection from "./VisionMissionSection";
import ValuesSection from "./ourvalues";
import VerticalExpertise from "./verticalexpertise";
import TeamSection from "./team";
import CtaSection from "@/components/CTASection";


const About = () => {
  return (
    <>
      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-3"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.div 
            className="text-gray-200 text-sm md:text-base w-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              At WYCE Corp, we believe true greatness is never built alone.
              It's the result of shared values, complementary strengths, and a common dream to create something enduring.

              Born from the union of three trusted names in real estate, WYCE Corp represents a new era of collaboration where experience meets innovation, and legacy meets vision.

              "Greater Together" is more than our philosophy it's our foundation. It reflects the spirit of partnership that drives every decision, every design, and every development we create.

              Together, we are building not just homes, but experiences.
              Not just landmarks, but legacies that redefine Pune's skyline and its way of living.
            </p>
          </motion.div>
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
