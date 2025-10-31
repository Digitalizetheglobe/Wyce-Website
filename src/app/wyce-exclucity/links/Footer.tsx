"use client";
import Image from "next/image";
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi"; // Feather thin phone



export default function Footer() {
  return (
    <footer
      className="relative text-white py-20 pb-5 px-[10px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/wyce-exclucity/footer-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#B7AC88] ">
        {/* Left: Logo + Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-10 py-6 md:py-0 md:pr-6">
          <h2 className="flex items-center text-3xl font-bold tracking-wide space-x-2">
            <Image
              src="/images/wyce-exclucity/footer_logo.png"
              alt="WYCE Logo"
              width={200}
              height={120}
              className="object-contain"
            />
          </h2>
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 rounded bg-gradient-to-t from-[#B7AC88] via-[#B7AC88] to-[#463e31] 
              hover:bg-gradient-to-t hover:from-[#463e31] hover:via-[#B7AC88] hover:to-[#B7AC88]"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded bg-gradient-to-t from-[#B7AC88] via-[#B7AC88] to-[#463e31] 
              hover:bg-gradient-to-t hover:from-[#463e31] hover:via-[#B7AC88] hover:to-[#B7AC88]"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="p-2 rounded bg-gradient-to-t from-[#B7AC88] via-[#B7AC88] to-[#463e31] 
              hover:bg-gradient-to-t hover:from-[#463e31] hover:via-[#B7AC88] hover:to-[#B7AC88]"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded bg-gradient-to-t from-[#B7AC88] via-[#B7AC88] to-[#463e31] 
              hover:bg-gradient-to-t hover:from-[#463e31] hover:via-[#B7AC88] hover:to-[#B7AC88]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col md:items-left space-y-3 py-6 md:px-18 align-start">
          <ul className="space-y-3 text-center md:text-left">
            <li><a href="#overview" className="hover:text-gray-400">Overview</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#project" className="hover:text-gray-400">Specification</a></li>
            <li><a href="#price" className="hover:text-gray-400">Floor Plan</a></li>
            <li><a href="#amenities" className="hover:text-gray-400">Amenities</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-3 py-6 md:pl-18 text-sm">
          <p>+91 75497 99799</p>
          <p>sales@wycecorp.com</p>
          <p className="text-center md:text-left">
            WYCE Exclucity, CEC Office,
            Siddharth Nagar, Bavdhan,
            Pune, Maharashtra 411021
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-white-400 text-md mt-6 border-t border-[#B7AC88] pt-6">
        ©2025 WYCE ExcluCity. All Rights Reserved.{" "}
      </div>

      {/* Floating Action Buttons */}
<a
  href="tel:+910000000000"
  className="fixed bottom-5 left-5 bg-[#B7AC88] text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
  aria-label="Call Us"
>
<FiPhone size={28} className="text-white" />
</a>

<a
  href="https://wa.me/910000000000"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp className="text-white text-4xl" />
</a>


    </footer>
  );
}
