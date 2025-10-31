"use client";
import { motion } from "framer-motion";

export default function AboutProject() {
  return (
    <section
      className="relative w-full bg-black text-white h-screen py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden bg-image bg-cover bg-center"
      style={{ backgroundImage: "url('/images/wyce-exclucity/sec2bg.png')" }}
    >
      <div
        className="relative flex items-center justify-center py-12 sm:py-14 md:py-16 px-4 sm:px-6"
        style={{
          backgroundImage: "url('/images/wyce-exclucity/cta-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

        {/* Animated Content */}
        <motion.div
          className="relative z-10 text-center text-white max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Book Now
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Let’s Start Your Real Estate <br /> Journey Today
          </motion.h2>

          <motion.button
            className="mt-8 bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            Book Site Visit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

