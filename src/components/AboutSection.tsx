"use client";

import { motion } from "motion/react";


export default function AboutSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-2 sm:py-16 md:py-5 bg-black/100"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    >
      {/* GREATER TOGETHER SECTION WITH VIDEO */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 mt-12 sm:mt-16 md:mt-10 max-w-[1320px]">
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className={` text-lg sm:text-xl md:text-2xl `}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Greater Together
          </motion.h3>
          <motion.p 
            className={` text-lg sm:text-xl md:text-lg `}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At WYCE, being Greater Together means combining experience, innovation, and a shared vision to redefine excellence in real estate.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-[1200px] mx-auto rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <video
            className="w-full h-[ 300px ] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            controls
            preload="metadata"
          >
            <source src="/images/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
