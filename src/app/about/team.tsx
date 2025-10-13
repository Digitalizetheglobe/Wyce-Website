'use client';
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const team = [
    {
      img: "/images/team3.jpeg",
    },
    {
      img: "/images/team1.jpeg",
    },
    {
      img: "/images/team2.jpeg",
    },
    {
      img: "/images/team.JPG",
    },

  ];

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
    <section className={`relative w-full bg-[#121212] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <div className="text-left mb-2">
          <motion.p 
            className={`text-[#fff]  text-2xl sm:text-2xl font-light pt-10 text-center`}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
             Meet The Awesome Leaders
          </motion.p>
        </div>

        {/* Subtext */}
        <motion.p 
          className="text-gray-300 mb-12 max-w-6xl mx-auto text-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          our team is the embodiment of our belief in being Greater Together.
A collective of visionaries, creators, and professionals each member brings years of expertise, fresh perspectives, and a shared commitment to excellence.
        </motion.p>

        {/* Team Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8  mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="relative bg-[#141414] overflow-hidden shadow-lg group cursor-pointer transition-all duration-300  "
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              variants={itemVariants}
            >
              <motion.div 
                className="relative w-150 h-[400px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Image
                  src={member.img}
                  fill
                  className={`object-cover transition-all duration-300 `}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
