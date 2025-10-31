"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a] from-[#] to-[#4b432e]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b border-[#B7AC88]/60 pb-10 md:divide-x-2 md:divide-[#B7AC88]/60">
          {/* Left Section - Logo & Social */}
          <div className="flex flex-col items-left space-y-6">
            <div>
              <Image src="/images/wyce-exclucity/footer_logo.png" alt="WYCE" width={150} height={150} />

            </div>
            <div className="flex space-x-3">
              {[
                { icon: "fa-linkedin", href: "https://www.linkedin.com/company/wyce-corp/" },
                { icon: "fa-youtube", href: "https://www.youtube.com/@WYCECorp" },
                { icon: "fa-instagram", href: "https://www.instagram.com/wyce_corp/" },
                { icon: "fa-facebook-f", href: "https://www.facebook.com/profile.php?id=61569471185683" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-12 flex items-left justify-left rounded-md text-white hover:text-[#B7AC88]  transition-colors "
                >
                  <i className={`fab ${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>

            <div className="flex space-x-3">

            </div>

            
            <div className="flex space-x-3">

            </div>


            
          </div>

          {/* left Section - Links */}
          <div className="flex flex-col items-left md:items-left space-y-3 px-6">
            {[
              { name: "Overview", href: "/" },
              { name: "About", href: "#about" },
              { name: "Specification", href: "#project" },
              { name: "Floor Plan", href: "#price" },
              { name: "Amenities", href: "#amenities" }

              
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-white hover:text-[#B7AC88] transition-colors text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>


          {/* Right Section - Contact */}
          <div className="space-y-3 text-lg text-white flex flex-col items-left">
            <a 
              href="tel:+917549799799" 
              className="block hover:text-[#B7AC88] transition-colors"
            >
              +91 75497 99799
            </a>
            <a 
              href="mailto:sales@wycecorp.com" 
              className="block hover:text-[#B7AC88] transition-colors"
            >
              sales@wycecorp.com
            </a>
            <a
              href="https://maps.google.com/?q=Wyce+Exclucity,+CEC+Office,+Siddharth+Nagar,+Bavdhan,+Pune,+Maharashtra+411021"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#B7AC88] transition-colors text-left"
            >
              WYCE  Exclucity, CEC Office, <br />Siddharth Nagar, Bavdhan, <br />Pune, Maharashtra 411021
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-left text-sm text-white mt-4 space-y-2 sm:space-y-0">
          <div>
            ©2025 WYCE Exclucity. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="hover:text-[#B7AC88] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="hover:text-[#B7AC88] transition-colors"
            >
              Terms & Condition
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
