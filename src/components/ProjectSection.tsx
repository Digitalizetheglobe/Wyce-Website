"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";
import { motion } from "motion/react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectSection() {
  return (
    
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/images/project-bg.png')" }}
    >

    <div className="absolute inset-0 bg-black/90"></div>


      <div className="relative max-w-7xl mx-auto text-center">
        {/* SECTION HEADER */}
        <motion.div 
          className=""
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
            <p className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
            We&apos;re <span className="font-breathney text-[#b6a16b]">Believers</span>
            </p>
        </motion.div>

        {/* first */}
        <div className="flex justify-center">
          {/* CONTENT */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl mx-auto px-4">

            {/* Description Text */}
            <motion.p 
              className="text-white text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed mt-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Every WYCE project begins with one simple idea  to design spaces that strengthen relationships. From thoughtful layouts and community-driven amenities to honest timelines and transparent dealings, every decision is made with one question in mind: &quot;Will this make life better for our customers?&quot;
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link href="/wyce-exclucity" className="inline-block border text-[#fff] border-2 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-bold hover:border-[#B7AC88] hover:text-[#B7AC88] transition-all duration-300">
                  Read More
              </Link>
            </motion.div>
          </div>


        </div>


      </div>
    </section>
  );
}
