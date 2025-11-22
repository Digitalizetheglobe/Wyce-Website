"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  { name: "Overview", path: "#overview" },
  { name: "About", path: "#about" },
  { name: "Specification", path: "#project" },
  { name: "Floor Plan", path: "#price" },
  { name: "Amenities", path: "#amenities" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [-100, 0]);
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <>
    <motion.header 
      className="bg-black text-white fixed top-0 w-full z-50 shadow-md"
      style={{ 
        y: headerY,
        opacity: headerOpacity
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isScrolled ? 0 : -100,
        opacity: isScrolled ? 1 : 0
      }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/wyce-exclucity/logo.png"
            alt="Wyse Logo"
            width={130}
            height={50}
            className="w-auto h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav (center) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10">
          {navItems.map((item, index) => (
            <Link
              key={`${item.path}-${index}`}
              href={item.path}
              className={`${
                pathname === item.path
                  ? "text-yellow-400 font-medium"
                  : "text-gray-200 hover:text-yellow-400"
              } transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button (right) */}
        <div className="hidden md:flex">
          <a
            href="tel:7549799799"
            className="border-2 lg:border-[3px] border-white border-solid text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm lg:text-base hover:bg-white hover:text-black transition-colors flex items-center cursor-pointer"
          >
            <span className="hidden xl:inline">Instant a CallBack</span>
            <span className="xl:hidden">Contact</span>
            <svg
              className="ml-1 h-3 w-3 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none text-2xl cursor-pointer"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={`${item.path}-${index}`}
              href={item.path}
              className={`block ${
                pathname === item.path
                  ? "text-yellow-400 font-medium"
                  : "text-gray-200 hover:text-yellow-400"
              } transition-colors`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:7549799799"
            onClick={() => setMenuOpen(false)}
            className="w-full bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition cursor-pointer text-center block"
          >
            Instant a CallBack →
          </a>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </motion.header>
    </>
  );
}
