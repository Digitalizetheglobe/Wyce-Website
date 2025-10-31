"use client";

import Link from "next/link";
import { motion } from "motion/react";


export default function ProjectSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundImage: "url('/images/project-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* SECTION HEADER */}
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            We&apos;re <span className="font-breathney text-[#b6a16b]">Believers</span>
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Description Text */}
          <motion.p 
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed px-2 sm:px-4 md:px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Every WYCE project begins with one simple idea  to design spaces that strengthen relationships. From thoughtful layouts and community-driven amenities to honest timelines and transparent dealings, every decision is made with one question in mind: &quot;Will this make life better for our customers?&quot;
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            className="flex justify-center pt-2 sm:pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link 
              href="/wyce-exclucity" 
              className="inline-block border text-[#fff] border-2 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-bold hover:border-[#B7AC88] hover:text-[#B7AC88] transition-all duration-300 rounded-sm"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
