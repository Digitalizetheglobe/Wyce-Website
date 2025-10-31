"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/wyce-exclucity/gallery/g1.jpg",
    "/images/wyce-exclucity/gallery/g2.jpg",
    "/images/wyce-exclucity/gallery/g3.jpg",
    "/images/wyce-exclucity/gallery/g4.jpg",
    "/images/wyce-exclucity/gallery/g5.jpg",
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  return (
    <section className="bg-black text-center pt-16 pb-32 px-4 sm:px-6 lg:px-8">
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
        Every property is more than just four walls—it&apos;s a promise of luxury,
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
            <div
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer"
              onClick={() => handleImageClick(images[0])}
            >
              <img
                src={images[0]}
                alt="Gallery image 1"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>
          </motion.div>

          {/* Card 2 + small cards */}
          <motion.div
            className="col-span-2 sm:col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 cursor-pointer"
              onClick={() => handleImageClick(images[1])}
            >
              <img
                src={images[1]}
                alt="Gallery image 2"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>

            <div className="grid gap-4 grid-cols-2">
              <motion.div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => handleImageClick(images[2])}
              >
                <img
                  src={images[2]}
                  alt="Gallery image 3"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </motion.div>

              <motion.div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => handleImageClick(images[3])}
              >
                <img
                  src={images[3]}
                  alt="Gallery image 4"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </motion.div>
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
            <div
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer"
              onClick={() => handleImageClick(images[4])}
            >
              <img
                src={images[4]}
                alt="Gallery image 5"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors duration-200 z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
