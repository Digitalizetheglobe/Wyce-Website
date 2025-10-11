"use client";
import Link from "next/link";
import footer from '../../public/images/logo.png'
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
              <Image src={footer} alt="WYCE" width={150} height={150} />

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
                  className="w-9 h-9 flex items-center justify-center rounded-md text-white hover:bg-[#B7AC88] hover:text-black transition-colors gradient-background bg-gradient-to-b from-[#1F1403] to-[#B7AC88]"
                >
                  <i className={`fab ${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col items-start md:items-left space-y-3 px-6">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Nri Hub", href: "/nri-hub" },
              { name: "Blog", href: "/blog" }
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

          {/* Center Section - Links */}
          <div className="flex flex-col items-start md:items-left space-y-3 px-6">
            {[
              { name: "WYCE  Exclucity", href: "/wyce-exclucity" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "FAQs", href: "/faq" },
              { name: "Publication", href: "#" }
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
          <div className="space-y-3 text-lg text-white pl-6">
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
              className="block hover:text-[#B7AC88] transition-colors"
            >
              WYCE  Exclucity, CEC Office, <br />Siddharth Nagar, Bavdhan, <br />Pune, Maharashtra 411021
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="text-center text-lg text-white mt-6">
  ©2025 WYCE Exclucity. All Rights Reserved. Designed by{" "}
  <a
    href="https://digitalizetheglobe.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#B7AC88] hover:underline"
  >
    Digitalize the Globe
  </a>
</div>

      </div>
    </footer>
  );
}
