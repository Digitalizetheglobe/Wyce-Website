"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


export default function AboutProject() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden"
      style={{ backgroundImage: "url('/images/wyce-exclucity/about-banner.webp')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Call to Action Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-xl sm:text-2xl text-[#a78631] md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 px-2">WYCE EXCLU
            <span className="font-breathney text-[#a78631] text-base sm:text-lg md:text-xl lg:text-2xl">City</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 px-2">
            Residence by Excellence
          </p>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg px-2">
            Some homes aren't built—they're destined. WYCE exclucity is where luxury meets innovation, creating a rhythm of modern living.
          </p>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg px-2">
            Spread across 12 acres in Bavdhan, this architectural marvel features 11 iconic towers of 34 floors, offering serene, premium living.
          </p>
          <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg px-2">
            Experience refined spaces, elegant design, and a lifestyle crafted for those who seek exclucity and excellence.
          </p>

        </motion.div>

        {/* Product Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#b6a16b] mb-2 px-2">
            EXQUISITE 2BHK, 3BHK & 4BHK LUXURY RESIDENCES
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#b6a16b] px-2">
            AT BAVDHAN, NEAR CHELLARAM HOSPITAL
          </p>
        </motion.div>

        {/* Brochure Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

        <button className="w-40 bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-5 py-3 rounded-full shadow-md hover:opacity-90 transition cursor-pointer"
            >
            Contact Us →
        </button>
        </motion.div>
      </div>
    </section>
  );
}
