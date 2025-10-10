"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="bg-black text-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Gallery
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Every property is more than just four walls—it’s a promise of luxury,
        comfort and growth. Step into a lifestyle
      </motion.p>

      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {/* Card 1 */}
          <motion.div
            className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img
                src="../images/landing-page/gallery/g1.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
          </motion.div>

          {/* Card 2 + small cards */}
          <motion.div
            className="col-span-2 sm:col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <img
                src="../images/landing-page/gallery/g2.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>

            <div className="grid gap-4 grid-cols-2">
              <motion.a
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src="../images/landing-page/gallery/g3.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </motion.a>

              <motion.a
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src="../images/landing-page/gallery/g4.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </motion.a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img
                src="../images/landing-page/gallery/g5.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
