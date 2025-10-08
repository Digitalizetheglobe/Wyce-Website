"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const getRotateValue = (index: number) => {
    const rotations = [-8, 15, 26, -2, 1, 5, 7, -9, 6, -1];
    return rotations[index % rotations.length];
  };
  return (
    <div 
      className="mx-auto max-w-full px-4 py-20 font-sans antialiased relative bg-black/100 bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: 'url(/images/bg-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingLeft:148,
        paddingRight:145
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>
      
      <div className="relative flex items-center justify-center z-10">
        <div className="relative h-50 w-120 ">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: getRotateValue(index),
                  y: 20,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.8,
                  scale: isActive(index) ? 1 : 0.9,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : getRotateValue(index),
                  y: isActive(index) ? 0 : 10,
                  zIndex: isActive(index)
                    ? 50
                    : testimonials.length + 2 - index,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: getRotateValue(index),
                  y: -20,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-center"
              >
                <div className="relative h-50 w-full rounded-2xl bg-[#121212] border-2 border-[#B7AC88] shadow-2xl">
                  <div className="p-6 h-full flex flex-col justify-between">
                    <p className="text-white text-xl leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        draggable={false}
                        className="w-10 h-10 rounded-full object-cover border border-amber-400/50"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-3 h-3 text-amber-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-white text-sm font-medium italic">
                          — {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400/50 bg-transparent hover:bg-amber-400/10 transition-all duration-300"
        >
          <IconArrowLeft className="h-6 w-6 text-amber-400" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400/50 bg-transparent hover:bg-amber-400/10 transition-all duration-300"
        >
          <IconArrowRight className="h-6 w-6 text-amber-400" />
        </button>
      </div>
    </div>
  );
};
