'use client';
import Image from "next/image";
import { motion } from "motion/react";

export default function TeamSection() {

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
        duration: 0.6
      }
    },
  };

  return (
    <section className={`relative w-full bg-[#121212] text-white py-8 sm:py-12 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-2">
          <motion.p 
            className={`text-[#fff] text-xl sm:text-2xl md:text-3xl lg:text-2xl font-light pt-6 sm:pt-8 md:pt-10 mb-4`}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
             Meet The <span className="font-breathney text-[#b6a16b]">Awesome</span> Leaders
          </motion.p>
        </div>

        {/* Subtext */}
        <motion.p 
          className="text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-6xl mx-auto text-center text-sm sm:text-base md:text-lg px-4"
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
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="relative bg-[#141414] overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 "
              variants={itemVariants}
            >
              <motion.div 
                className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Image
                  src={member.img}
                  alt="Team member"
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
