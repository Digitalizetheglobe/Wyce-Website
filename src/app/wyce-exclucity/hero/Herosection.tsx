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
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Full-screen Video */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
        >
          <source src="/images/wyce-exclucity/about-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Optional subtle overlay for better text readability if needed later */}
      <motion.div
        className="absolute inset-0 bg-black/10"
        style={{ opacity }}
      />
    </section>
  );
}
