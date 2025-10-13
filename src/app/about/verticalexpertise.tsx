'use client';
import Image from "next/image";
import { motion } from "motion/react";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});
export default function VerticalExpertise() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className={`relative w-full bg-[#0B0B0B] text-white py-40 px-6 sm:px-12 lg:px-20 `}>
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/project-bg.png" // <-- Add your topography-style background image locally
          alt="background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto ">
        {/* Heading */}
        <div className="mb-2">
          <motion.p 
            className={`text-[#fff]  text-2xl sm:text-2xl font-light text-center`}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Greater Together in Every Dimension
          </motion.p>
        </div>

        {/* Description */}
        <motion.p 
          className="text-white mb-15 text-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our culture celebrates passion and togetherness  where every individual contributes to a shared dream of excellence.
Rooted in legacy, we continue to build upon the trust and craftsmanship that have shaped our journey.
And with our channel partners, we extend this spirit of collaboration growing, innovating, and succeeding.
        </motion.p>

        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { title: "LEADERSHIP" },
            { title: "LIFE @ WYCE" },
            { title: "OUR LEGACY" },
            { title: "CHANNEL PARTNERS" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="relative"
              variants={itemVariants}
            >
              <div
                className="transition-all duration-300 p-8 bg-[#fff] hover:bg-[#3A3A3A] cursor-pointer border-r border-[#B7AC88] last:border-r-0 hover:text-white"
                style={{ minHeight: '50px' }}
              >
                <div className="flex items-center justify-center h-full">
                  <motion.h3 
                    className="text-black text-xl font-bold text-center uppercase tracking-wide hover:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
