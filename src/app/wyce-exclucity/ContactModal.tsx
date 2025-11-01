"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        phone: "",
        email: "",
        message: "",
      });
      setSubmitStatus({ type: null, message: "" });
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          firstName: "",
          phone: "",
          email: "",
          message: "",
        });
        // Close modal after 3 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus({ type: null, message: "" });
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

  const handleCloseModal = () => {
    onClose();
    setSubmitStatus({ type: null, message: "" });
    // Reset form when closing
    setFormData({
      firstName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
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
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl leading-none"
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

            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-900/50 border border-green-600 text-green-200"
                    : "bg-red-900/50 border border-red-600 text-red-200"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {submitStatus.message}
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
                  placeholder="First Name*"
                  required
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#B7AC88] transition-colors"
                />
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
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#B7AC88] transition-colors"
                />
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
                  onChange={handleChange}
                  placeholder="Contact*"
                  required
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#B7AC88] transition-colors"
                />
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
                  className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#B7AC88] transition-colors resize-none"
                />
              </motion.div>

              <motion.label
                className="col-span-full flex items-start gap-2 text-gray-300 text-xs sm:text-sm w-full"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 flex-shrink-0 cursor-pointer accent-[#B7AC88]"
                />
                <span className="flex-1">
                  I agree with the terms and Privacy Policy and I declare that I
                  have read the information that is required in accordance.
                </span>
              </motion.label>

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
  );
}

