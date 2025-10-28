"use client";
import Image from "next/image";
import { motion } from "motion/react";
export default function OurBuilder() {
  return (
    <section className={`bg-[#0d0d0d] text-white py-10 px-6 sm:px-12 lg:px-20 `}>
                <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
     
          {/* Right Text Section */}
          <div className="text-center mt-12 lg:mt-0">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-2"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span>Founders Who Built a <span className="font-breathney text-[#b6a16b] text-2xl ml-2">Dream</span></span>
            </motion.h2>
            <motion.p 
              className="text-gray-300 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Today, WYCE stands tall as a testament to their unwavering belief that when strong minds come together with one purpose  greatness follows.
            </motion.p>

          </div>
        </div>
      <div className="max-w-7xl mx-auto ">


        {/* Three Cards Section */}
        <motion.div 
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Saniket Builder Card */}
          <motion.div 
            className="rounded-xl border p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          > 
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/SANIKET-LOGO.png"
                  alt="Saniket Builder Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">
              Saniket Builder
            </h3>
            <p className="text-white text-center text-sm leading-relaxed mb-6">
                Saniket Builders, we go beyond construction — we create spaces that inspire happiness, comfort, and community.
                From homes that nurture warmth to commercial spaces that spark creativity, every project reflects thoughtful design, sustainability, and quality.
                Guided by a vision to reshape the construction landscape, we blend modern technology with timeless craftsmanship to deliver excellence that lasts.            </p>
            <div className="flex justify-center ">
              <a 
                href="https://saniket.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" mt-5 border border-2 hover:bg-[#b6a16b] text-white px-6 py-2 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Parth Developers Card */}
            <motion.div 
                    className="rounded-xl border p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                        <Image
                        src="/images/PARTH-LOGO.png"
                        alt="Parth Developer Logo"
                        width={120}
                        height={120}
                        className="object-contain"
                        />
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center mb-4 ">
                    Parth Developer
                    </h3>
                    <p className="text-white text-center text-sm leading-relaxed mb-6">
                        Parth Developers, founded in 1989 by Mr. Mahendra Jagannath Yeole, stands as a trusted name in Pune’s real estate with over 34 years of visionary expertise. Driven by experience, innovation, and a motivated team, we’ve earned the trust of both local and NRI homebuyers alike. Our mission is to craft exceptional living experiences, making us one of Pune’s most respected and forward-looking developers.                    </p>
                    <div className="flex justify-center">
                    <a 
                        href="https://www.parthdeveloper.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-2 hover:bg-[#b6a16b] text-white px-6 py-2 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                    >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                    </div>
            </motion.div>

          {/* Balaji Group Card */}
            <motion.div 
            className="rounded-xl border p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/BALAJI-LOGO.png"
                  alt="Balaji Group Logo"
                  width={120}
                  height={120}
                  className="object-contain filter grayscale"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-4">
              Balaji Group
            </h3>
            <p className="text-white text-center text-sm leading-relaxed mb-6">
                With 22 years of experience and 15+ ongoing projects, we’ve proudly delivered homes to over 3,000 happy families across 15 prime Pune locations. From affordable housing to luxury residences, our focus remains on quality, innovation, and timely delivery. What began as an entrepreneurial dream has grown into a trusted real estate legacy built on collaboration and excellence            </p>
            <div className="flex justify-center">
              <a 
                href="https://www.balajigroup.co.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 border border-2 hover:bg-[#b6a16b] text-white px-6 py-2 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
