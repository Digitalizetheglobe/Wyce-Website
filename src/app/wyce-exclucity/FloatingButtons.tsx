"use client";
import { useState } from "react";
import ContactUs from "./contact/ContactSection"; // Import your Contact component

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar Buttons */}
      <div className="fixed top-1/3 right-0 z-50 flex flex-col gap-4">
        {/* Enquire Form Button */}
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-b from-[#B7AC88] to-[#1F1403] text-white px-4 py-2 rounded-l-md shadow-lg transform -rotate-90 origin-bottom-left"
        >
          ENQUIRE FORM
        </button>

        {/* Download Brochure Button */}
        <a
          href="/broucher/broucher.pdf"
          download
          className="bg-gradient-to-b from-[#B7AC88] to-[#1F1403] text-white px-4 py-2 rounded-l-md shadow-lg transform -rotate-90 origin-bottom-left"
        >
          DOWNLOAD BROCHURE
        </a>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] w-[90%] md:w-[70%] lg:w-[60%] p-6 rounded-lg relative overflow-y-auto max-h-[90vh]">
            {/* Close Btn */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white text-xl font-bold"
            >
              ✕
            </button>

            {/* Contact Form Inside Popup */}
            <ContactUs />
          </div>
        </div>
      )}
    </>
  );
}
