"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// 🔹 Video Hero Component
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden "
    >
      {/* Full-screen Video */}
      <motion.div
        className="absolute inset-0 w-full"
        style={{ y, opacity }}
      >
        <iframe
          className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          src="https://www.youtube.com/embed/Up1m6u-qcCU?controls=0&autoplay=1&mute=1&loop=1&playlist=Up1m6u-qcCU&modestbranding=1&rel=0&playsinline=1"
          title="Hero Video"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          style={{
            pointerEvents: 'none',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100%',
            minWidth: '100%'
          }}
        />
      </motion.div>

      {/* Optional subtle overlay for better text readability if needed later */}
      <motion.div
        className="absolute inset-0 bg-black/10"
        style={{ opacity }}
      />
    </section>
  );
}
