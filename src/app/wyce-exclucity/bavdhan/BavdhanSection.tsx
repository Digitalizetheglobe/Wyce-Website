"use client";
import { motion } from "framer-motion";

export default function BavdhanSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Mobile Background - visible on mobile devices */}
      <div 
        className="block md:hidden relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan-mobile.jpg')" }}
      >
        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-8 md:top-12 lg:top-16 left-0 right-0 z-10 px-4 md:px-8 text-left"
        >

        </motion.div>
      </div>

      {/* Tablet Background - visible on tablet devices */}
      <div 
        className="hidden md:block lg:hidden relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan-tab.jpg')" }}
      >
        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-8 md:top-12 lg:top-16 left-0 right-0 z-10 px-4 md:px-8 text-left"
        >
          <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-2xl font-medium uppercase">
            EXPERIENCE WYCE exclucity — PUNE'S MOST PRESTIGIOUS PROJECT IN
          </p>
        </motion.div>
      </div>

      {/* Laptop Background - visible on desktop/laptop devices */}
      <div 
        className="hidden lg:block relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan.png')" }}
      >
        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-15 md:top-12 lg:top-45 right-120 z-10 left-45 w-192"
        >
        <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-6xl mb-6 ">
          Experience <span className="font-bold">Wyce Exclucity.</span>
        </p>
        <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-6xl mb-6 ">
          Pune's most
        </p>
        <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-6xl  mb-6">
          Prestigious project in
        </p>


        </motion.div>
      </div>
    </section>
  );
}
