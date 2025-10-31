"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Raleway } from "next/font/google";

const railway = Raleway({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
export default function VisionMissionSection() {
  return (
    <section className={`bg-[#0d0d0d] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        

        {/* First Row: Left Content, Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-6">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div 
              className="mb-5 text-left"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className={`text-[#fff]  text-3xl sm:text-2xl font-light`}>
                Creating a <span className="font-breathney text-[#b6a16b]">Positive</span> Impact
              </p>
            </motion.div>
            <motion.p 
              className={`text-gray-300 leading-relaxed text-base sm:text-lg ${railway.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our vision is to shape the future of residential real estate by consistently delivering timeless landmarks that embody thoughtful design and superior quality. We believe that true luxury is found in intent, where every detail, from the master plan to the smallest feature, is designed around how you live and feel. This thoughtful approach is not an afterthought; it is the very foundation of everything we build.
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div 
            className="flex justify-start md:justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Image
              src="/images/vision.jpeg"
              alt="Vision Image"
              width={600}
              height={400}
              className=" shadow-md w-full max-w-[500px] object-cover rounded-md"
            />
          </motion.div>
        </div>

        {/* Second Row: Left Image, Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-4">
          {/* Left Image */}
          <motion.div 
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/mission.jpeg"
              alt="Mission Image"
              width={600}
              height={300}
              className=" shadow-md w-full max-w-[500px] object-cover rounded-md"
            />
          </motion.div>

          {/* Right Content */}
          <div className="space-y-6 mt-8">
            <motion.p 
              className={`text-[#fff] text-2xl sm:text-2xl font-light `}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-breathney text-[#b6a16b] ml-2">Together</span>, We Build Better
            </motion.p>
            <motion.p 
              className={`text-gray-300 leading-relaxed text-base sm:text-lg ${railway.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are committed to creating exceptional homes and communities where families can live the WYCE-crafted experience. We are built on the combined wisdom of three trusted names Parth Developers, Saniket Builders, and Balaji Group and are driven by a shared vision of quality, trust, and thoughtful living.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
