"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PricesSection() {

  const homes = [
    {
      img: "/images/landing-page/price1.png",
      title: "2BHK Homes",
      desc: "Compact, comfortable, and perfect for young professionals or small families.",
      size: "Starting from 450 sq. ft.",
      price: "₹40 Lakhs*",
    },
    {
      img: "/images/landing-page/price2.png",
      title: "3BHK Homes",
      desc: "Spacious and ideal for growing families with extra room for comfort.",
      size: "Starting from 650 sq. ft.",
      price: "₹60 Lakhs*",
    },
    {
      img: "/images/landing-page/price3.png",
      title: "4BHK Homes",
      desc: "Luxury living with ample space for big families and premium lifestyle.",
      size: "Starting from 900 sq. ft.",
      price: "₹90 Lakhs*",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-6 pt-40">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-4">
          Prices
        </h2>
        <p className="text-white-400 max-w-2xl mx-auto mb-12 font-raleway text-2xl">
          Every property is more than just four walls—it’s a promise of luxury,
          comfort and growth. Step into a lifestyle
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {homes.map((home, index) => (
            <motion.div
              key={index}
              className="overflow-hidden shadow-xl flex flex-col rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Top Image */}
              <div className="h-68 w-full relative bg-white">
                <Image
                  src={home.img}
                  alt={home.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div
                className="p-4 mx-4 -mt-14 z-10 border border-[#866448] rounded-2xl 
                  text-center text-white flex flex-col justify-between"
                style={{
                  backgroundImage: "url('/images/landing-page/bg-price.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{home.title}</h3>
                <p className="text-sm md:text-lg mb-5">{home.desc}</p>

                {/* Features */}
                <p className="flex items-center justify-center gap-2 text-md mb-2">
                  <span>🏠</span> {home.size}
                </p>
                <p className="flex items-center justify-center gap-2 text-md mb-6">
                  <span>💰</span> {home.price}
                </p>

                {/* Button */}
                <div className="flex justify-center">
                  <motion.button
                    onClick={() => setShowModal(true)}
                    className="bg-gradient-to-r from-[#B7AC88] to-[#1F1403] text-white 
                      px-[28px] py-[10px] rounded-full shadow-md hover:opacity-90 
                      transition text-xs font-medium cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
