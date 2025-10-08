"use client";

import { Vujahday_Script } from "next/font/google";
import { useState } from "react";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      className="relative bg-black text-white py-20 overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-image.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >


      <div className="relative container mx-auto px-6 lg:px-16 max-w-[1320px]">
        {/* Heading */}
        <div className="mb-10">
          <p className={`text-[#B7AC88] flex items-center gap-3 ${vujahday.className}`}>
            <span className="inline-block w-10 h-[1px] bg-[#B7AC88]"></span>
            <span className="text-[40px] leading-[42px] font-normal">Contact Us</span>
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 items-start">
          {/* Left Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full"
          >
            {/* Left Column */}
            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-md text-white placeholder-white/70 focus:outline-none focus:border-[#B7AC88]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-md text-white placeholder-white/70 focus:outline-none focus:border-[#B7AC88]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-md text-white placeholder-white/70 focus:outline-none focus:border-[#B7AC88]"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col h-full justify-between gap-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full h-[115px] px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-md text-white placeholder-white/70 focus:outline-none focus:border-[#B7AC88] resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#B7AC88] text-black font-semibold py-3 rounded-[4px] hover:bg-[#a49970] transition-all"
              >
                SEND
              </button>
            </div>
          </form>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p className="text-xl">+91 00000 00000 | +91 00000 00000</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {["facebook", "twitter", "instagram", "youtube"].map((icon, i) => (
                <a key={i} href="#" className="text-white hover:text-[#B7AC88] transition-colors">
                  <i className={`fa-brands fa-${icon} text-3xl`}></i>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <svg className="w-8 h-8 text-white mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-md leading-relaxed">
                Plot No: 123 Bavdhan, near 16.no bus stop,<br /> Pune, Maharashtra - 444110
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
