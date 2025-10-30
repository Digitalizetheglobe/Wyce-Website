"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNriDropdownOpen, setIsNriDropdownOpen] = useState(false);
  const [isMobileNriDropdownOpen, setIsMobileNriDropdownOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        "https://leadquest.corelto.co/public/companies/040487f0-dbe9-485a-bb4b-ab881fa7fdbb/leads-all",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: contactFormData.fullName,
            mobile: contactFormData.phone,
            email: contactFormData.email,
            project: "Wyce ExcluCity",
            source: "Website",
            sub_source: "",
            user_email: "",
            comment: contactFormData.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setContactFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsContactModalOpen(false);
          setSubmitStatus({ type: null, message: "" });
        }, 2000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
    setSubmitStatus({ type: null, message: "" });
  };
  
  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setContactFormData({ fullName: "", phone: "", email: "", message: "" });
    setSubmitStatus({ type: null, message: "" });
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
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
              <button
                onClick={closeContactModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleContactFormSubmit} className="p-6">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-900/50 border border-green-600 text-green-200"
                      : "bg-red-900/50 border border-red-600 text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-4">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={contactFormData.fullName}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88] focus:text-black text-black focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88]  focus:text-black text-black focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88]  focus:text-black text-black focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactFormChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88]  focus:text-black text-black focus:border-transparent resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeContactModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-[#B7AC88] text-white hover:bg-[#9A8B6B] transition-colors duration-200 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
