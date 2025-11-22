"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "@/utils/submitLead";
import SuccessPopup from "@/components/SuccessPopup";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
    
    // Download brochure PDF
    const downloadBrochure = () => {
      const link = document.createElement('a');
      link.href = '/images/landing-page/Brochure.pdf';
      link.download = 'broucher.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
    // Download brochure after a short delay to ensure form submission is processed
    setTimeout(() => {
      downloadBrochure();
    }, 500);
    
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
            className="relative bg-black border border-[#866448] rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl leading-none cursor-pointer"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Form Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-center text-[#B7AC88] font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Book Site Visit
            </motion.h2>

            {/* Error Message */}
            {errorMessage && (
              <motion.div
                className="mb-6 p-4 rounded-md bg-red-900/50 border border-red-600 text-red-200"
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
              className="grid grid-cols-1 gap-3 sm:gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
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
                  className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.firstName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-600 focus:border-[#B7AC88]"
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.firstName}</p>
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
                  className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-600 focus:border-[#B7AC88]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.email}</p>
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
                  className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none transition-colors ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-600 focus:border-[#B7AC88]"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.phone}</p>
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
                  rows={4}
                  className={`w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border bg-transparent text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-600 focus:border-[#B7AC88]"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.message}</p>
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
                <label className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm w-full">
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
                  <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.consent}</p>
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
                              disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "Book Site Visit"}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

