"use client";
import Link from "next/link";
import footer from '../../public/images/er-logo.png'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#4b432e]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start border-b border-[#B7AC88]/60 pb-10 md:divide-x-2 md:divide-[#B7AC88]/60">
          {/* Left Section - Logo & Social */}
          <div className="flex flex-col space-y-6 pr-6">
            <div>
              <Image src={footer} alt="WYCE" width={200} height={200} />

            </div>
            <div className="flex space-x-3">
              {[
                "fa-twitter",
                "fa-youtube",
                "fa-facebook-f",
                "fa-instagram",
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-md text-white hover:bg-[#B7AC88] hover:text-black transition-colors gradient-background bg-gradient-to-b from-[#1F1403] to-[#B7AC88]"
                >
                  <i className={`fab ${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col items-start md:items-left space-y-3 px-6">
            {["Home", "About", "Services", "Contact", "Privacy Policy"].map((link, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-white hover:text-[#B7AC88] transition-colors text-lg"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col items-start md:items-left space-y-3 px-6">
            {["Home", "About", "Services", "Contact", "Privacy Policy"].map((link, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-white hover:text-[#B7AC88] transition-colors text-lg"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right Section - Contact */}
          <div className="space-y-3 text-lg text-white pl-6">
            <p>+91 00000 00000</p>
            <p>wyce@gmail.com</p>
            <p>
              Plot No 123 bawdhan, near <br />
              16 no bus stop, pune <br />
              pune - 444110
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" text-center text-lg text-white mt-6">
          ©2025 WYCE Exclucity. All Rights Reserved. Designed by{" "}
          <span className="text-[#B7AC88]">Digitalize the Globe</span>
        </div>
      </div>
    </footer>
  );
}
