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
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    firstName?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

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

  // Prevent body scroll when modal is open and handle escape key
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setShowModal(false);
          setSubmitStatus({ type: null, message: "" });
          setFormData({ firstName: "", phone: "", email: "", message: "" });
          setIsCheckboxChecked(false);
          setFieldErrors({});
        }
      };
      
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "firstName":
        if (!value.trim()) {
          return "First name is required.";
        }
        if (value.trim().length < 2) {
          return "First name must be at least 2 characters.";
        }
        return "";
      case "email":
        if (!value.trim()) {
          return "Email is required.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address.";
        }
        return "";
      case "phone":
        if (!value.trim()) {
          return "Contact number is required.";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value.replace(/\s|-/g, ""))) {
          return "Please enter a valid 10-digit phone number.";
        }
        return "";
      case "message":
        // Message is optional, so no validation needed
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof fieldErrors];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    } else {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof fieldErrors];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: typeof fieldErrors = {};
    let isValid = true;

    // Validate all fields
    const firstNameError = validateField("firstName", formData.firstName);
    const emailError = validateField("email", formData.email);
    const phoneError = validateField("phone", formData.phone);

    if (firstNameError) {
      errors.firstName = firstNameError;
      isValid = false;
    }
    if (emailError) {
      errors.email = emailError;
      isValid = false;
    }
    if (phoneError) {
      errors.phone = phoneError;
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Reset any previous status messages
    setSubmitStatus({ type: null, message: "" });
    
    // Validate checkbox first (quick check)
    if (!isCheckboxChecked) {
      setSubmitStatus({
        type: "error",
        message: "Please accept the terms and conditions to continue.",
      });
      return;
    }
    
    // Validate all form fields
    const isValid = validateForm();
    
    if (!isValid) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      // Scroll to first error if any
      setTimeout(() => {
        const firstErrorField = document.querySelector('.border-red-500');
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://leadquest.corelto.co/public/companies/040487f0-dbe9-485a-bb4b-ab881fa7fdbb/leads-all",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.firstName,
            mobile: formData.phone,
            email: formData.email,
            project: "Wyce ExcluCity",
            source: "Website",
            sub_source: "",
            user_email: "",
            comment: formData.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your interest! We have received your inquiry and will get back to you shortly.",
        });
        // Reset form
        setFormData({
          firstName: "",
          phone: "",
          email: "",
          message: "",
        });
        setIsCheckboxChecked(false);
        setFieldErrors({});
        // Close modal after 3 seconds on success
        setTimeout(() => {
          setShowModal(false);
          setSubmitStatus({ type: null, message: "" });
          setFieldErrors({});
        }, 3000);
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

  return (
    <>
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
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
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
            onClick={() => {
              setShowModal(true);
              setSubmitStatus({ type: null, message: "" });
              setIsCheckboxChecked(false);
              setFieldErrors({});
            }}
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
              setSubmitStatus({ type: null, message: "" });
              setIsCheckboxChecked(false);
              setFieldErrors({});
            }}
            className="w-full bg-gradient-to-r from-[#B7AC88] to-[#1F1403] hover:bg-gradient-to-l hover:bg-from-[#1F1403] hover:bg-to-[#B7AC88] text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition cursor-pointer"
            >
            Contact Us →
            </button>



            
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
      <style jsx global>{`
        /* Custom checkbox styling for modal */
        .modal-checkbox {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #B7AC88;
        }
        .modal-checkbox:checked {
          accent-color: #B7AC88;
          background-color: #B7AC88;
        }
      `}</style>
    </motion.header>

    {/* Contact Modal - Rendered outside header to avoid z-index issues */}
    {showModal && (
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
        onClick={(e) => {
          // Close modal when clicking on the overlay (not on the modal content)
          if (e.target === e.currentTarget && e.currentTarget === e.target) {
            setShowModal(false);
            setSubmitStatus({ type: null, message: "" });
            setFormData({ firstName: "", phone: "", email: "", message: "" });
            setIsCheckboxChecked(false);
            setFieldErrors({});
          }
        }}
        onMouseDown={(e) => {
          // Prevent accidental closes
          if (e.target !== e.currentTarget) {
            e.preventDefault();
          }
        }}
      >
        <div 
          className="bg-[#B7AC88] shadow-xl p-6 sm:p-8 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseDown={(e) => e.stopPropagation()}
          style={{ 
            position: 'relative', 
            zIndex: 10000,
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => {
              setShowModal(false);
              setSubmitStatus({ type: null, message: "" });
              setFormData({ firstName: "", phone: "", email: "", message: "" });
              setIsCheckboxChecked(false);
              setFieldErrors({});
            }}
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer hover:text-gray-200 transition-colors z-10"
            type="button"
          >
            ✖
          </button>

          {/* Title */}
          <div className="flex items-center mb-6">
            <span className="w-10 h-[2px] bg-white mr-3"></span>
            <h2 className="text-xl font-semibold text-white">Enquire Now</h2>
          </div>

          {/* Subheading */}
          <p className="text-white mb-6 text-base font-semibold">
            Please Enter Your Details To Know More About Wyce ExcluCity
          </p>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`mb-4 p-4 rounded-lg text-sm flex items-start gap-3 ${
                submitStatus.type === "success"
                  ? "bg-green-900/90 border-2 border-green-400 text-green-50 shadow-lg"
                  : "bg-red-900/80 border-2 border-red-500 text-red-100"
              }`}
            >
              {submitStatus.type === "success" ? (
                <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className="flex-1 font-medium">{submitStatus.message}</span>
            </div>
          )}

          {/* Form */}
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            noValidate
          >
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full px-4 py-3 bg-white text-black rounded focus:ring-2 placeholder-gray-600 focus:outline-none transition-colors ${
                  fieldErrors.firstName 
                    ? "border-2 border-red-500 focus:ring-red-500" 
                    : "border-0 focus:ring-black"
                }`}
              />
              {fieldErrors.firstName && (
                <p className="mt-1 text-xs text-red-200 font-medium">{fieldErrors.firstName}</p>
              )}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full px-4 py-3 bg-white text-black rounded focus:ring-2 placeholder-gray-600 focus:outline-none transition-colors ${
                  fieldErrors.email 
                    ? "border-2 border-red-500 focus:ring-red-500" 
                    : "border-0 focus:ring-black"
                }`}
              />
              {fieldErrors.email && (
                <p className="mt-1 text-xs text-red-200 font-medium">{fieldErrors.email}</p>
              )}
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Contact* (10 digits)"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                maxLength={10}
                className={`w-full px-4 py-3 bg-white text-black rounded focus:ring-2 placeholder-gray-600 focus:outline-none transition-colors ${
                  fieldErrors.phone 
                    ? "border-2 border-red-500 focus:ring-red-500" 
                    : "border-0 focus:ring-black"
                }`}
              />
              {fieldErrors.phone && (
                <p className="mt-1 text-xs text-red-200 font-medium">{fieldErrors.phone}</p>
              )}
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black rounded focus:ring-2 focus:ring-black placeholder-gray-600 focus:outline-none resize-none border-0"
                rows={3}
              />
            </div>

            {/* Checkbox */}
            <label 
              htmlFor="consent-checkbox"
              className="flex items-start space-x-2 text-xs text-white cursor-pointer group"
            >
              <div className="relative mt-1 flex-shrink-0">
                <input
                  type="checkbox"
                  id="consent-checkbox"
                  className="absolute top-0 left-0 w-[18px] h-[18px] opacity-0 z-10 cursor-pointer"
                  checked={isCheckboxChecked}
                  onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                  required
                />
                <div
                  className={`w-[18px] h-[18px] border-2 rounded flex items-center justify-center transition-all cursor-pointer relative ${
                    isCheckboxChecked
                      ? "bg-[#B7AC88] border-[#B7AC88]"
                      : "bg-transparent border-white group-hover:border-[#B7AC88]"
                  }`}
                >
                  {isCheckboxChecked && (
                    <svg
                      className="w-3 h-3 text-white pointer-events-none"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
              </div>
              <span className="flex-1 cursor-pointer select-none">
                I authorize representatives of 360 Realtors LLP company to Call, SMS, 
                Email or WhatsApp me about its products and offers. This consent overrides 
                any registration for DNC/NDNC
              </span>
            </label>

            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-l from-[#B7AC88] to-[#1F1403] text-white px-10 font-semibold py-2 rounded-full shadow-md hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    )}
    </>
  );
}
