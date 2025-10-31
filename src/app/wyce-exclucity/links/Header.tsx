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
  const [showModal, setShowModal] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [error, setError] = useState("");
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

  // Validation
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      return "All fields are required.";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return "Invalid email format.";
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      return "Contact number must be 10 digits.";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setFormData({ name: "", email: "", contact: "", message: "" });
    setShowModal(false);
    setThankYou(true);

    setTimeout(() => setThankYou(false), 5000);
  };

  return (
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20 overflow-hidden">
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
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition cursor-pointer"
          >
            Contact Us →
          </button>
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
            <button
            onClick={() => {
              setShowModal(true);
              setMenuOpen(false);
            }}
            className="w-full bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition cursor-pointer"
            >
            Contact Us →
            </button>
        </div>
      )}

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#B7AC88] shadow-lg p-8 max-w-md w-full relative animate-fadeInDown">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            >
              ✖
            </button>

            {/* Title */}
            <div className="flex items-center mb-6">
              <span className="w-10 h-[2px] bg-white mr-3"></span>
              <h2 className="text-xl font-semibold text-white">Enquire Now</h2>
            </div>

            {/* Subheading */}
            <p className="text-white mb-6 text-lg w-70 text-semibold">
              Please Enter Your Details To Know More About Excelled Tremont
            </p>

            {/* Form */}
            {error && (
              <p className="bg-red-100 text-red-600 px-3 py-2 mb-4 rounded-md text-sm">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name here"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white text-black rounded focus:ring-2 focus:ring-black placeholder-gray-600"
              />
              <input
                type="email"
                placeholder="Email here"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white text-black rounded focus:ring-2 focus:ring-black placeholder-gray-600"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white text-black rounded focus:ring-2 focus:ring-black placeholder-gray-600"
                rows={3}
              />

              {/* Checkbox */}
              <label className="flex items-start space-x-2 text-xs text-white">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4"
                  required
                />
                <span>
                  I authorize representatives of 360 Realtors LLP company to Call, SMS, 
                  Email or WhatsApp me about its products and offers. This consent overrides 
                  any registration for DNC/NDNC
                </span>
              </label>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button className="bg-gradient-to-l from-[#B7AC88] to-[#1F1403] text-white px-10 text-semibold py-2 rounded-full shadow-md hover:opacity-90 transition cursor-pointer">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}


      {/* Thank You Popup */}
      {thankYou && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInDown z-50">
          ✅ Thank you! Your message has been sent.
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
  );
}
