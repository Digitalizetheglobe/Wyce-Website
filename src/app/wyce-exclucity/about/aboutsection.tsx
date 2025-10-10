"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutProject() {
  return (
    <section
      className="relative w-full bg-black text-white py-16 px-6 md:px-12 lg:px-20 xl:px-32 pt-32  overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/landing-page/sec2bg.png')" }}
    >
      {/* Overlay (optional for better readability) */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
WYCE ExcluCity, located in Central Bavdhan , is the result of three trusted names and decades of experience coming together to create an iconic project. This prestigious development is built on an expansive 11-acre land parcel , ensuring maximum breathing and moving space.

This landmark project introduces just 11 iconic high-rise towers , crafted for the select few who appreciate the epitome of exclusivity. It offers a mix of spacious premium residences: 2, 3, and 4 BHK homes.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
Experience a lifestyle that blends luxury and nature at WYCE ExcluCity. This residential marvel offers residences sized not by square feet, but by the scale of your dreams. The project is designed for elegance and rendezvous, where every convenience, recreation, and nature coexist in the most mindful way.



The environment is crafted for balance and well-being , featuring over 70,000 sq. ft. of lifestyle amenities and approximately 60% green open spaces. From the 8,000 sq. ft. forest garden to the 1,50,000 sq. ft. of podium recreation , every detail is an invitation to live the Thoughtful life.
          </p>
        </motion.div>

        {/* Images Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            { src: "/images/landing-page/sec2-1.png", alt: "Living Room" },
            { src: "/images/landing-page/sec2-2.png", alt: "Modern Interior" },
            { src: "/images/landing-page/sec2-3.png", alt: "Chandelier Hall" },
            { src: "/images/landing-page/sec2-4.png", alt: "Bedroom" },
          ].map((img, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden shadow-lg w-full h-[400px] md:h-[300px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
