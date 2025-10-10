"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

// 🔹 Counter Component
function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to, count, rounded]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

// 🔹 Hero Component
export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/landing-page/herobg.png')" }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-50 pb-20 lg:px-20 text-center text-white">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Find the Home{" "}
          <span className="text-[#B7AC88]">You Deserve Live</span> <br />
          the Lifestyle You Desire
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Every property is more than just four walls—it's a promise of luxury,
          comfort, and growth. Step into a lifestyle where your dreams meet
          reality, and your investments create lasting value.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-8 bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Book Site Visit
        </motion.button>

        {/* Stats Section with Counters */}
        <motion.div
          className="w-full max-w-6xl mx-auto mt-12 rounded-xl bg-[#b7ac88bd] bg-opacity-90 flex flex-col sm:flex-row justify-between items-center py-10 px-6 gap-8 shadow-lg layer-blur-effect"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          {/* 1st Counter */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <Counter to={500} suffix="+" />
            </h3>
            <p className="text-white text-lg">Premium Properties</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          {/* 2nd Counter */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <Counter to={98} suffix="%" />
            </h3>
            <p className="text-white text-lg">Client Satisfaction</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          {/* 3rd Counter */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <Counter to={25} suffix="+" />
            </h3>
            <p className="text-white text-lg">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
