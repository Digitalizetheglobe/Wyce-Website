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
            WYCE Exclucity by Parth, Sanket, and Balaji Group is set to redefine
            modern living in the prime locality of Bavdhan. Spanning a sprawling
            12-acre land parcel, this prestigious project introduces 11 iconic
            towers rising to 34 floors, offering a mix of spacious 2BHK, 3BHK,
            and 4BHK residences. Strategically located near Chellaram Hospital.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Experience a lifestyle that blends luxury and innovation at WYCE
            Exclucity. This upcoming residential marvel offers thoughtfully
            designed homes with exceptional layouts and premium finishes to
            cater to modern families&apos; aspirations. From the meticulously
            planned B+G+3P+34 structure to world-class amenities, the project
            creates an environment where every detail is crafted for comfort.
          </p>
        </motion.div>

        {/* Images Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
