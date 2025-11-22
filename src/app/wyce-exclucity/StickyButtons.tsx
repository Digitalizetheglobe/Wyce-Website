"use client";

import { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import ContactModal from "./ContactModal";

export default function StickyButtons() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Phone number from footer
  const phoneNumber = "+917549799799";
  const whatsappNumber = "917549799799"; // Without + for WhatsApp URL

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Left Side - Call and WhatsApp Buttons (Icon Only) */}
      <div className="fixed left-4 bottom-4 z-50 flex flex-col gap-3">
        {/* Call Now Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="bg-[#B7AC88] text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center hover:bg-[#9d9168]"
          aria-label="Call Now"
        >
          <FaPhone size={20} />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center hover:bg-[#20BA5A]"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Right Side - Scroll to Top and I'M Interested Button */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 items-end">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-[#B7AC88] text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center hover:bg-[#9d9168] cursor-pointer"
          aria-label="Scroll to Top"
        >
          <ChevronUp size={24} />
        </button>

        {/* I'M Interested Button */}
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="w-35 bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-5 py-3  shadow-md hover:opacity-90 transition cursor-pointer"
          aria-label="I'm Interested"
        >
          I&apos;m Interested
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

