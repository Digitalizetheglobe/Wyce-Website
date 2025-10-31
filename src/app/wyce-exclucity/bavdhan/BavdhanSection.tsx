"use client";
import { motion } from "framer-motion";

export default function BavdhanSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Mobile Background */}
      <div
        className="block md:hidden relative w-full min-h-[110vh] flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan-mobile.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl text-center"
        >
          <p className="text-[#b8ae8a] text-5xl sm:text-4xl md:text-5xl mb-3 ">
            Experience <span className="font-bold">Wyce Exclucity.</span>
          </p>
          <p className="text-[#b8ae8a] text-5xl sm:text-4xl md:text-5xl mb-3">
            Pune&apos;s most
          </p>
          <p className="text-[#b8ae8a] text-5xl sm:text-4xl md:text-5xl">
            Prestigious project
          </p>
        </motion.div>
      </div>

      {/* Tablet Background */}
      <div
        className="hidden md:block lg:hidden relative w-full min-h-[70vh] flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan-tab.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl text-center pt-20"
        >
          <p className="text-[#b8ae8a] text-2xl sm:text-4xl md:text-5xl mb-3">
            Experience <span className="font-bold">Wyce Exclucity.</span>
          </p>
          <p className="text-[#b8ae8a] text-2xl sm:text-4xl md:text-5xl mb-3">
            Pune&apos;s most
          </p>
          <p className="text-[#b8ae8a] text-2xl sm:text-4xl md:text-5xl">
            Prestigious project
          </p>
        </motion.div>
      </div>

      {/* Laptop/Desktop Background */}
      <div 
        className="hidden lg:block relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-15 md:top-12 lg:top-45 right-120 z-10 left-45 w-300"
        >
          <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-7xl mb-6 ">
            Experience 
          </p>
          <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-7xl mb-6 ">
             <span className="font-bold">Wyce Exclucity.</span>
          </p>
          <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-7xl mb-6 ">
            Pune&apos;s most
          </p>
          <p className="text-[#b8ae8a] text-base sm:text-lg md:text-xl lg:text-7xl  mb-6">
            Prestigious project
          </p>
        </motion.div>
      </div>
    </section>
  );
}
