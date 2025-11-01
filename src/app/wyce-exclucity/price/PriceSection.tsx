"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "../ContactModal";

export default function PricesSection() {
  const [showModal, setShowModal] = useState(false);

  const homes = [
    {
      img: "/images/wyce-exclucity/price1.png",
      title: "4BHK Homes",
      desc: "Compact, comfortable, and perfect for young professionals or small families.",
      size: "Starting from 1898 sq. ft.",
      price: "₹40 Lakhs*",
    },
    {
      img: "/images/wyce-exclucity/price2.png",
      title: "3BHK Homes",
      desc: "Spacious and ideal for growing families with extra room for comfort.",
      size: "Starting from 1256 sq. ft.",
      price: "₹60 Lakhs*",
    },
    {
      img: "/images/wyce-exclucity/price3.png",
      title: "2BHK Homes",
      desc: "Luxury living with ample space for big families and premium lifestyle.",
      size: "Starting from 834 sq. ft.",
      price: "₹90 Lakhs*",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="w-full bg-black text-white py-16 px-6  overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-4"
          variants={headingVariants}
        >
          Floor Plan 
        </motion.h2>
        <motion.p
          className="text-white-400 max-w-2xl mx-auto mb-12 font-raleway text-2xl"
          variants={descriptionVariants}
        >
          Every property is more than just four walls it&apos;s a promise of luxury,
          comfort and growth. Step into a lifestyle
        </motion.p>

        {/* Cards Container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {homes.map((home, index) => (
            <motion.div
              key={index}
              className="overflow-hidden shadow-2xl flex flex-col rounded-lg perspective-1000"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 2,
                rotateX: 2,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },  
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top Image */}
              <motion.div
                className="h-68 w-full relative bg-white overflow-hidden"
                whileHover="hover"
              >
                <motion.div variants={imageVariants}>
                  <Image
                    src={home.img}
                    alt={home.title}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Content */}
              <motion.div
                className="p-6 h-40 mx-4 -mt-14 z-10 border border-[#866448] rounded-2xl 
                  text-center text-white flex flex-col justify-between backdrop-blur-sm"
                style={{
                  backgroundImage: "url('/images/wyce-exclucity/bg-price.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                variants={contentVariants}
                whileHover="hover"
              >
                <motion.h3
                  className="text-xl md:text-2xl font-semibold "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {home.title}
                </motion.h3>


                {/* Features */}
                <motion.p
                  className="flex items-center justify-center gap-2 text-md mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span></span> {home.size}
                </motion.p>


                {/* Button */}
                <div className="flex justify-center">
                  <motion.button
                    onClick={() => setShowModal(true)}
                    className="bg-gradient-to-r bg-[white] text-black 
                      px-[20px] py-[4px] shadow-md hover:opacity-90 
                      transition text-[15px] font-medium cursor-pointer hover:text-white hover:bg-[#b7ac88] rounded-sm"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 25px rgba(183, 172, 136, 0.5)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                    }}
                  >
                    View Plan
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
