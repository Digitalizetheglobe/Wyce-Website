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
      className=" relative bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 md:py-20 px-0 sm:px-0 "
      style={{ backgroundImage: "url('/images/project-bg.png')" }}
    >

    <div className="absolute inset-0 bg-black/90"></div>


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 text-center">
        {/* SECTION HEADER */}
        <motion.div 
          className=""
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
            <p className={` flex items-center justify-center gap-2 sm:gap-3`}>
            <span className="text-2xl sm:text-3xl md:text-[36px] lg:text-2xl leading-tight font-normal">We&apos;re Believers</span>
            </p>
        </motion.div>

        {/* first */}
        <div className="flex justify-center">
          {/* CONTENT */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl">

            {/* Description Text */}
            <motion.p 
              className="text-white text-sm sm:text-base lg:text-lg xl:text-sm leading-relaxed"
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
              <Link href="/wyce-exclucity" className="inline-block border text-[#fff] border-2 px-8 sm:px-12 py-2 text-sm sm:text-base font-bold hover:border-[#B7AC88] hover:text-[#B7AC88] transition-all">
                  Read More
              </Link>
            </motion.div>
          </div>


        </div>


      </div>
    </section>
  );
}
