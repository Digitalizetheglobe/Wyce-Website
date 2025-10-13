"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Counter Animation Component
function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// 🔹 Hero Component
export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
      
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-20 pb-20 lg:px-20 text-center text-white">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-snug max-w-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          Building the Future <span className="text-[#e84627]">Together</span> & Beginning at<br/><span className="text-6xl"> Bavdhan</span>
        
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
From luxurious residences that elevate everyday living to thoughtfully designed commercial and mixed-use spaces, our projects stand as symbols of trust, design innovation, and lasting value. They embody our belief that true progress happens when passion, purpose, and partnership come together to create something extraordinary.        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-8  hover:bg-gradient-to-l border border-2 hover:border-[#B7AC88] hover:text-[#B7AC88] text-white px-6 py-3  shadow-lg hover:scale-105 transition-transform font-bold text-xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Book Site Visit
        </motion.button>

        {/* Stats Section */}
        <motion.div
          className="w-full max-w-6xl mx-auto mt-12 rounded-xl bg-[#b7ac88bd] bg-opacity-90 flex flex-col sm:flex-row justify-between items-center py-10 px-6 gap-8 shadow-lg layer-blur-effect"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          {/* Experience */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={30} suffix="+" duration={2} />
            </h3>
            <p className="text-white text-lg">Years Strong</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          {/* Masterpieces */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={6000} suffix="+" duration={2.5} />
            </h3>
            <p className="text-white text-lg">Happy Families</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          {/* Families Served */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={50} suffix="+" duration={2} />
            </h3>
            <p className="text-white text-lg">Project Delivered
</p>
          </div>

                    {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={5} suffix="M+" duration={2} />
            </h3>
            <p className="text-white text-lg">Sq.Ft Of Development</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
