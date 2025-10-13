"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function ValuesSection() {
  


  const values = [
    {
      icon: "/images/icon1.png",
      title: "Integrity",
      text: "We believe trust is earned through transparency and honesty. Every decision we make reflects our unwavering commitment to do what’s right  for our customers, our partners, and our people.",
    },
    {
      icon: "/images/icon2.png",
      title: "Collaboration",
      text: "Our greatest strength lies in unity. By bringing together diverse legacies, ideas, and expertise, we create something far greater than what any one of us could achieve alone.",
    },
    {
      icon: "/images/icon3.png",
      title: "Excellence",
      text: "We don’t just build projects; we perfect experiences. From planning to delivery, every detail reflects our pursuit of quality and our promise to exceed expectations.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <section className={`bg-[#121212] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.p 
            className={`text-[#fff] text-2xl sm:text-2xl font-light mb-4 `}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            The WYCE Way
          </motion.p>
          <motion.p 
            className="text-gray-300 max-w-5xl text-lg text-base mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At WYCE Corp, every milestone we achieve and every space we create is guided by values that define who we are..They are the foundation of our collaboration, the compass for our vision, and the strength behind our promise to build a future that&apos;s truly Greater Together.
          </motion.p>
        </div>

        {/* Three Column Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="text-left space-y-6"
              variants={itemVariants}
            >
              {/* Icon */}
              <motion.div 
                className="flex justify-left"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 border border-[#b6a16b] rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-xl font-semibold text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {item.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-gray-300 text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
