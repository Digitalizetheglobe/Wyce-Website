"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import BrochureDownloadModal from "../BrochureDownloadModal";

// 🔹 Banner Hero Component with Auto-scrolling
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // Auto-open modal on tablet/mobile
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1024) {
        // Tablet and mobile - auto-open modal
        setIsBrochureModalOpen(true);
      }
    };
    
    checkScreenSize();
    // Optional: handle resize if needed
    // window.addEventListener('resize', checkScreenSize);
    // return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Desktop images
  const desktopImages = [
    "/images/landing-page/web-banner1.jpg",
    "/images/landing-page/web-banner2.jpg",
    "/images/landing-page/web-banner3.jpg",
  ];

  // Tablet images
  const tabletImages = [
    "/images/landing-page/tab-banner1.jpg",
    "/images/landing-page/tab-banner2.jpg",
    "/images/landing-page/tab-banner3.jpg",
  ];

  // Mobile images
  const mobileImages = [
    "/images/landing-page/mobile-banner1.jpg",
    "/images/landing-page/mobile-banner2.jpg",
    "/images/landing-page/mobile-banner3.jpg",
  ];

  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentTabletIndex, setCurrentTabletIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Auto-scroll for desktop images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesktopIndex((prev) => (prev + 1) % desktopImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [desktopImages.length]);

  // Auto-scroll for tablet images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTabletIndex((prev) => (prev + 1) % tabletImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [tabletImages.length]);

  // Auto-scroll for mobile images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [mobileImages.length]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Desktop Banner Images */}
      <motion.div
        className="absolute inset-0 w-full hidden lg:block"
        style={{ y, opacity }}
      >
        {desktopImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{
              opacity: index === currentDesktopIndex ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Tablet Banner Images */}
      <motion.div
        className="absolute inset-0 w-full hidden md:block lg:hidden"
        style={{ y, opacity }}
      >
        {tabletImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{
              opacity: index === currentTabletIndex ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={image}
              alt={`Tablet Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Banner Images */}
      <motion.div
        className="absolute inset-0 w-full block md:hidden"
        style={{ y, opacity }}
      >
        {mobileImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{
              opacity: index === currentMobileIndex ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={image}
              alt={`Mobile Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Optional subtle overlay for better text readability if needed later */}
      <motion.div
        className="absolute inset-0 bg-black/10"
        style={{ opacity }}
      />

      {/* Left Side Box - Project Details - Only on Desktop */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[450px] xl:w-[400px] z-20 hidden lg:flex items-center px-4 lg:px-8">
        <motion.div
          className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 lg:p-8 w-full max-w-full lg:max-w-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Logo */}
          <div className="">
            <Image
              src="/images/landing-page/wyce.png"
              alt="WYCE Exclucity"
              width={200}
              height={120}
              className="h-20 lg:h-20 w-auto"
              priority
            />
          </div>

          {/* Project Name and Location */}
          <div className="mb-2">
            <p className="text-sm lg:text-base text-gray-600">Bavdhan, Pune</p>
          </div>

          {/* Booking Status */}
          <div className="mb-4">
            <span className="inline-block bg-[#B7AC88] text-white text-xs lg:text-sm px-3 py-1 rounded-full font-semibold">
              Booking Open: Limited Time Only
            </span>
          </div>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm text-gray-600 ml-2">4.6 Stars</span>
            </div>
            <span className="text-sm text-gray-500">51 Reviews</span>
          </div>

          {/* Key Specifications */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 text-sm lg:text-base text-gray-700">
              <svg className="w-5 h-5 text-[#B7AC88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span><strong>Land Parcel:</strong> 11 Acres</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base text-gray-700">
              <svg className="w-5 h-5 text-[#B7AC88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span><strong>Floors:</strong> 11 Towers, 35 Storeys</span>
            </div>
          </div>

          {/* Offers Section */}
          <div className="mb-4 bg-gradient-to-r from-[#f8f6f0] to-[#e8e5d8] p-3 rounded-lg">
            <p className="text-xs lg:text-sm font-semibold text-gray-800 mb-2">Spot Booking Offers Available</p>
            <ul className="space-y-1 text-xs lg:text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-[#B7AC88]">✓</span>
                <span>Easy Flexipay Options</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B7AC88]">✓</span>
                <span>Get Early Buy Discounts</span>
              </li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="mb-4">
            <p className="text-sm lg:text-base text-gray-700">
              <strong className="text-gray-800">Ultra Luxurious 4, 3 & 2 BHK</strong>
            </p>
            <p className="text-base lg:text-lg font-bold text-[#B7AC88] mt-1">
              Starts At ₹ 2.30 Cr Onwards
            </p>
          </div>

          {/* Download Brochure Button */}
          <button
            onClick={() => setIsBrochureModalOpen(true)}
            className="w-full bg-[#B7AC88] hover:bg-[#9d9168] text-white px-6 py-3 rounded-lg font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >

            Book a Site Visit
          </button>
        </motion.div>
      </div>

      {/* Brochure Download Modal */}
      <BrochureDownloadModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </section>
  );
}
