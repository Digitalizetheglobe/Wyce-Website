"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return num.toLocaleString();
  };

  return (
    <div ref={counterRef}>
      {formatNumber(count)}{suffix}
    </div>
  );
}


export default function HeroSection() {

    const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="relative bg-[#0d0d0d] text-white pt-12 sm:pt-16 md:pt-20 overflow-hidden text-center">
        <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
     
          {/* Right Text Section */}
          <div className="text-center mt-12 lg:mt-0">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-2"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span>A collective of</span>
              <span className="font-breathney text-[#b6a16b] text-5xl ml-2">visionaries</span>
              <span>shaping tomorrow&apos;s skyline</span>
            </motion.h1>
            <motion.p 
              className="text-gray-300 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At WYCE Corp, we believe a home is more than bricks and beams 
              it&apos;s the space where your most beautiful moments begin. 
              As WYCE Corp, we put heart into every project, 
              designing homes that welcome joy, comfort, and connection.
            </motion.p>

          </div>
        </div>


      </section>
    </>
  );
}
