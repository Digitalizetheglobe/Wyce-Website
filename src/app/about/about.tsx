"use client";
import Image from "next/image";
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

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
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
      <section className="reltive bg-[#0d0d0d] text-white py-16  overflow-hidden text-center">
        <div className="max-w-full px-10 sm:px-10 md:px-60 lg:px- mx-autoitems-center">
     
          {/* Right Text Section */}
          <div className="text-center mt-12 lg:mt-0">
            <motion.h2 
              className="text-3xl sm:text-2xl  mb-4"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              A collective of visionaries shaping tomorrow&apos;s skyline
            </motion.h2>
            <motion.p 
              className="text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At WYCE Corp, we believe a home is more than bricks and beams 
              it&apos;s the space where your most beautiful moments begin. 
              As WYCE Corp builders, we put heart into every project, 
              designing homes that welcome joy, comfort, and connection.
            </motion.p>

          </div>
        </div>

        <div className="container mx-auto px-8 sm:px-6 md:px-15 lg:px-25">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* First Counter */}
          <motion.div className="text-center" variants={itemVariants} transition={{ duration: 0.6 }}>
            <div 
              className="text-5xl sm:text-6xl md:text-4xl font-thin"
              style={{ color: "#fff" }}
            >
              <AnimatedCounter end={30} suffix="+" />
            </div>
            <div 
              className="text-base sm:text-lg md:text-lg"
              style={{ color: "#fff" }}
            >
              Years Strong
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div className="hidden md:block" variants={itemVariants} transition={{ duration: 0.6 }}>
            <div 
              className="w-0.5 h-20 md:h-28"
              style={{ backgroundColor: "#fff" }}
            ></div>
          </motion.div>

          {/* Second Counter */}
          <motion.div className="text-center" variants={itemVariants} transition={{ duration: 0.6 }}>
            <div 
              className="text-5xl sm:text-6xl md:text-4xl font-thin"
              style={{ color: "#fff" }}
            >
              <AnimatedCounter end={6000} suffix="+" />
            </div>
            <div 
              className="text-base sm:text-lg md:text-lg"
              style={{ color: "#fff" }}
            >
              Happy Families
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div className="hidden md:block" variants={itemVariants} transition={{ duration: 0.6 }}>
            <div 
              className="w-0.5 h-20 md:h-28"
              style={{ backgroundColor: "#fff" }}
            ></div>
          </motion.div>

          {/* Third Counter */}
          <motion.div className="text-center" variants={itemVariants} transition={{ duration: 0.6 }}>
            <div 
              className="text-5xl sm:text-6xl md:text-4xl font-thin"
              style={{ color: "#fff" }}
            >
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div 
              className="text-base sm:text-lg md:text-lg px-4"
              style={{ color: "#fff" }}
            >
              Project Delivered
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div className="hidden md:block" variants={itemVariants} transition={{ duration: 0.6 }}>
            <div 
              className="w-0.5 h-20 md:h-28"
              style={{ backgroundColor: "#fff" }}
            ></div>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants} transition={{ duration: 0.6 }}>
            <div 
              className="text-5xl sm:text-6xl md:text-4xl font-thin"
              style={{ color: "#fff" }}
            >
              <AnimatedCounter end={5} suffix="M+" />
            </div>
            <div 
              className="text-base sm:text-lg md:text-lg px-4"
              style={{ color: "#fff" }}
            >
              Sq.Ft Of Development
            </div>
          </motion.div>
        </motion.div>
        </div>
      </section>
    </>
  );
}
