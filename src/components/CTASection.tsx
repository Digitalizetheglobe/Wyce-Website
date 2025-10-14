'use client';

import Link from "next/link";
import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section className="w-full bg-black px-5" style={{backgroundImage: "url('/images/bg-image.png')"}}>
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full text-center  py-10 px-8 shadow-lg bg-cover bg-center bg-no-repeat border" style={{backgroundImage: "url('/images/.png')"}}>
          {/* Small Text */}
          

          {/* Main Heading */}
          <motion.h2 
            className="text-2xl md:text-xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s Start Your WYCE 
            Journey With Us 
          </motion.h2>

          {/* Button */}
            <motion.div 
              className="flex justify-center mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="inline-block border text-[#fff] border-2 px-8 sm:px-12 py-2 text-sm sm:text-base font-bold hover:border-[#B7AC88] hover:text-[#B7AC88] transition-all">
                  Contact Us
              </Link>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

{/* <section
      className="relative bg-black/100 bg-cover bg-center bg-no-repeat text-white pb-12 sm:pb-16 md:pb-20"
      style={{ backgroundImage: "url('/images/bg-image.png')" }}
    ></section> */}
