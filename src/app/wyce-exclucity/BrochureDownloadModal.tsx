"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "@/utils/submitLead";
import SuccessPopup from "@/components/SuccessPopup";
import Image from "next/image";

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureDownloadModal({ isOpen, onClose }: BrochureDownloadModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [consentAccepted, setConsentAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    firstName?: string;
    email?: string;
    phone?: string;
    message?: string;
    consent?: string;
  }>({});

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        phone: "",
        email: "",
        message: "",
      });
      setConsentAccepted(false);
      setErrorMessage(null);
      setShowSuccessPopup(false);
      setErrors({});
    }
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    const numbersOnly = value.replace(/\D/g, "");
    // Limit to 10 digits
    const limitedValue = numbersOnly.slice(0, 10);
    
    setFormData((prev) => ({ ...prev, phone: limitedValue }));
    
    // Clear phone error when user types
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsentAccepted(e.target.checked);
    // Clear consent error when user checks
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setShowSuccessPopup(false);
    
    // Validation
    const newErrors: {
      firstName?: string;
      email?: string;
      phone?: string;
      message?: string;
      consent?: string;
    } = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    // Validate email - must contain "@"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain '@'";
    }
    
    // Validate phone number - must be exactly 10 digits
    if (!formData.phone || formData.phone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    // Validate consent checkbox
    if (!consentAccepted) {
      newErrors.consent = "Please accept the terms and Privacy Policy to continue";
    }
    
    // If there are errors, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Clear any previous errors
    setErrors({});
    
    // Show success immediately (optimistic UI)
    setShowSuccessPopup(true);
    
    // Reset form immediately
    setFormData({
      firstName: "",
      phone: "",
      email: "",
      message: "",
    });
    setConsentAccepted(false);
    
    // Safely reset form if element exists
    if (e.currentTarget) {
      e.currentTarget.reset();
    }
    
    // Close modal after 3 seconds
    setTimeout(() => {
      onClose();
      setShowSuccessPopup(false);
    }, 3000);
    
    // Submit in background (non-blocking)
    setIsSubmitting(false); // Form is already reset, so we're done
    submitLead(
      {
        name: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      () => {
        // Success callback (optional - already showed success)
        console.log("✅ Form submission confirmed successful");
      },
      (error) => {
        // Error callback - show error if submission fails
        setShowSuccessPopup(false);
        setErrorMessage(error || "Something went wrong. Please try again later.");
      }
    );
  };

  const handleCloseModal = () => {
    onClose();
    setErrorMessage(null);
    setShowSuccessPopup(false);
    setErrors({});
    // Reset form when closing
    setFormData({
      firstName: "",
      phone: "",
      email: "",
      message: "",
    });
    setConsentAccepted(false);
  };

  return (
    <>
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message="✅ Message sent successfully!"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full h-[95vh] lg:h-auto lg:max-h-[90vh] overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors text-2xl sm:text-3xl leading-none cursor-pointer z-10"
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">
                {/* Left Side - We Promise Section - Visible on all screens */}
                <div className="bg-gradient-to-br from-[#f8f6f0] to-[#e8e5d8] p-4 sm:p-6 lg:p-8 lg:p-10 lg:w-2/5 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">We Promise</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#B7AC88] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Instant Call Back</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Get immediate response from our team</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#B7AC88] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Free Site Visit</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Schedule a complimentary property tour</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#B7AC88] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Unmatched Price</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Best deals and exclusive offers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="p-4 sm:p-6 lg:p-8 lg:p-10 lg:w-3/5 flex flex-col flex-1 min-h-0">
                  {/* Form Heading */}
                  <motion.h2
                    className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-4 lg:mb-6 text-center text-gray-800 font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Register Here And Avail The <span className="text-[#B7AC88]">Best Offers!!</span>
                  </motion.h2>

                  {/* Error Message */}
                  {errorMessage && (
                    <motion.div
                      className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-700"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-2 sm:space-y-3 flex-1 flex flex-col"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Name*"
                        required
                        className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.firstName
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-[#B7AC88]"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.firstName}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        required
                        className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-[#B7AC88]"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Contact* (10 digits)"
                        required
                        maxLength={10}
                        className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-[#B7AC88]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.phone}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={2}
                        className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-white text-gray-800 placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-[#B7AC88]"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message}</p>
                      )}
                    </motion.div>

                    <motion.div
                      className="col-span-full"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm w-full">
                        <input
                          type="checkbox"
                          checked={consentAccepted}
                          onChange={handleConsentChange}
                          className={`mt-1 w-4 h-4 flex-shrink-0 cursor-pointer accent-[#B7AC88] ${
                            errors.consent ? "ring-2 ring-red-500" : ""
                          }`}
                        />
                        <span className="flex-1">
                          I agree with the terms and Privacy Policy and I declare that I
                          have read the information that is required in accordance.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.consent}</p>
                      )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      className="col-span-full flex justify-center mt-2 w-full"
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="border hover:text-[#B7AC88] hover:border-[#B7AC88] cursor-pointer
                                    text-white px-6 sm:px-12 py-2 sm:py-3 shadow-md text-bold border-2
                                    hover:scale-105 active:scale-95 transition-transform 
                                    text-sm sm:text-base font-bold w-full sm:w-auto max-w-md
                                    disabled:opacity-50 disabled:cursor-not-allowed bg-[#B7AC88]"
                      >
                        {isSubmitting ? "SENDING..." : "Get Instant Call Back"}
                      </button>
                    </motion.div>
                  </motion.form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

