"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "../app/wyce-exclucity/ContactModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNriDropdownOpen, setIsNriDropdownOpen] = useState(false);
  const [isMobileNriDropdownOpen, setIsMobileNriDropdownOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };
  
  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <header className="bg-[#090909] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-20 lg:h-23 cursor-pointer">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="WYCE exclucity City"
                width={400}
                height={280}
                className="h-10 sm:h-10 lg:h-30 xl:h-15 w-auto cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10 text-sm xl:text-[16px] cursor-pointer font-medium">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors cursor-pointer">
              Our Story
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/wyce-exclucity" className="text-white hover:text-gray-300 transition-colors flex items-center">
                Our Project
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsNriDropdownOpen(true)}
              onMouseLeave={() => setIsNriDropdownOpen(false)}
            >
              <button className="text-white hover:text-gray-300 transition-colors flex items-center py-2">
                NRI Desk
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isNriDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isNriDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-md shadow-lg py-2">
                    <Link 
                      href="/nri-hub" 
                      className="block px-4 py-2 text-white hover:bg-[#B7AC88] hover:text-black  transition-colors"
                    >
                      NRI Investment
                    </Link>
                    <Link 
                      href="/loan-help" 
                      className="block px-4 py-2 text-white hover:bg-[#B7AC88] hover:text-black transition-colors"
                    >
                      Loan Help
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block px-4 py-2 text-white hover:bg-[#B7AC88] hover:text-black transition-colors"
                    >
                      Quick Facts
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blogs
            </Link>
            <Link href="/career" className="text-white hover:text-gray-300 transition-colors">
              Careers
            </Link>
          </nav>
          <div className="hidden lg:flex items-center">
            <button
              onClick={openContactModal}
              className="border-2 lg:border-[3px] border-white border-solid text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm lg:text-base hover:bg-white hover:text-black transition-colors flex items-center cursor-pointer"
            >
              <span className="hidden xl:inline">Contact Us</span>
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
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 cursor-pointer p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#090909] border-t border-gray-800">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/wyce-exclucity" 
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <div>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileNriDropdownOpen(!isMobileNriDropdownOpen)}
                >
                  <span>Nri Hub</span>
                  <svg 
                    className={`h-4 w-4 transition-transform ${isMobileNriDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileNriDropdownOpen && (
                  <div className="pl-6 space-y-1">
                    <Link 
                      href="/nri-hub" 
                      className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      NRI Investment
                    </Link>
                    <Link 
                      href="/loan-help" 
                      className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Loan Help
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/career" 
                className="block px-3 py-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
              <div className="px-3 py-2">
                <button 
                  onClick={() => {
                    openContactModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border-2 border-white border-solid text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors flex items-center justify-center cursor-pointer"
                >
                  Contact Us
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </header>
  );
}
