"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { submitLead } from "@/utils/submitLead";
import SuccessPopup from "@/components/SuccessPopup";


export default function ContactSection() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
    
    // Submit in background (non-blocking)
    setIsSubmitting(false);
    submitLead(
      {
        name: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      () => {
        console.log("✅ Form submission confirmed successful");
      },
      (error) => {
        setShowSuccessPopup(false);
        setErrorMessage(error || "Something went wrong. Please try again later.");
      }
    );
  };

  return (
    <>
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message="✅ Message sent successfully!"
      />
    <section
      id="contact"
      className="relative bg-black text-white pb-16 sm:py-5 md:py-10 overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-image.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1320px]">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 flex justify-center items-center text-center">
          <p
            className={`text-[#fff] flex justify-center items-center gap-2 sm:gap-3 w-250`}
          >
            <span className={`text-lg sm:text-lg md:text-[20px] lg:text-lg leading-tight font-normal`}>
              At WYCE, being Greater Together means merging experience with fresh vision, heritage with modernity, and ambition with purpose.
             We’re not just building structures; we’re building relationships, trust, and a shared future that stands the test of time.
            </span>
          </p>
        </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
          {/* Left: Map */}
          <motion.div
            className="lg:w-1/2 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2469819588523!2d73.77255937465202!3d18.517737869261904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0051ba19c1%3A0xe048a525eae24a02!2sWYCE%20Exclucity!5e0!3m2!1sen!2sin!4v1760088958517!5m2!1sen!2sin"
             
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:w-1/2 w-full p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-2xl mb-3 sm:mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              className="mb-4 sm:mb-6 text-center text-sm sm:text-base text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We would like to hear from you. Please send us a message by filling
              out the form below and we will get back with you shortly.
            </motion.p>

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

            {/* Form with staggered inputs */}
            <motion.form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 sm:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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
                  placeholder="First Name*"
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
                  placeholder="Message*"
                  rows={4}
                  required
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

              {/* Button */}
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
        </div>


      </div>
    </section>
  </>
  );
}
