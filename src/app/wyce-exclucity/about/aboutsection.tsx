"use client";
import { motion } from "framer-motion";


export default function AboutProject() {
  return (
    <section
      className="relative w-full  bg-cover bg-center bg-no-repeat flex items-center justify-center py-20 px-6 md:px-12 lg:px-20 xl:px-32"
      style={{ backgroundImage: "url('/images/wyce-exclucity/about-banner.webp')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-justify md:text-center">

        {/* Call to Action Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-2xl sm:text-2xl text-[#a78631] md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center">WYCE EXCLU
            <span className="font-breathney text-[#a78631]  text-[20px] sm:text-xl md:text-xl lg:text-2xl">City</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center" style={{ lineHeight: '1.8' }}>
            Residence by Excellencez
          </p>
          <p className="text-gray-800 text-lg text-justify md:text-center" style={{ lineHeight: '2.2' }}>
            Some homes aren't built they're destined. WYCE Exclucity redefines urban luxury where innovation and elegance flow in harmony.
          </p>
          <p className="text-gray-800 text-lg text-justify md:text-center" style={{ lineHeight: '2.2' }}>
            Spread across 11 acres in Bavdhan, this architectural masterpiece rises through 11 iconic towers of 35 floors, offering a serene and elevated lifestyle.Experience refined living, timeless design, and a world crafted for those who seek exclusivity and excellence.
          </p>


        </motion.div>

        {/* Product Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#b6a16b] mb-2 text-center">
            EXQUISITE 4BHK, 3BHK & 2BHK LUXURY RESIDENCES
          </h3>
          <p className="text-lg md:text-xl font-semibold text-[#b6a16b] text-center">
            AT BAVDHAN, NEAR CHELLARAM HOSPITAL
          </p>
        </motion.div>

        {/* Brochure Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

        <button 
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="w-40 bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-5 py-3  shadow-md hover:opacity-90 transition cursor-pointer"
        >
            Enquire Now →
        </button>

        </motion.div>
      </div>
    </section>
  );
}
