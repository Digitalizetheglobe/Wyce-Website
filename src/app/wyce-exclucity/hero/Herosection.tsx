"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Counter Animation Component
function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// 🔹 Hero Component
export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
            name: formData.name,
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
          message: "Thank you! Your site visit has been booked successfully.",
        });
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsModalOpen(false);
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

  const openModal = () => {
    setIsModalOpen(true);
    setSubmitStatus({ type: null, message: "" });
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSubmitStatus({ type: null, message: "" });
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
      
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-20 pb-20 lg:px-20 text-center text-white">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-snug max-w-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          Building the Future <span className="text-[#e84627]">Together</span> & Beginning at<br/><span className="text-6xl"> Bavdhan</span>
        
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
From luxurious residences that elevate everyday living to thoughtfully designed commercial and mixed-use spaces, our projects stand as symbols of trust, design innovation, and lasting value. They embody our belief that true progress happens when passion, purpose, and partnership come together to create something extraordinary.        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={openModal}
          className="mt-8  hover:bg-gradient-to-l border-2 hover:border-[#B7AC88] hover:text-[#B7AC88] text-white px-6 py-3  shadow-lg hover:scale-105 transition-transform font-bold text-xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Book Site Visit
        </motion.button>

        {/* Stats Section */}
        <motion.div
          className="w-full max-w-6xl mx-auto mt-12 rounded-xl bg-[#b7ac88bd] bg-opacity-90 flex flex-col sm:flex-row justify-between items-center py-7 px-6 gap-8 shadow-lg layer-blur-effect"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          {/* Experience */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={11} suffix="" duration={2} />
            </h3>
            <p className="text-white text-lg">Acres</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          {/* Masterpieces */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={11} suffix="" duration={2.5} />
            </h3>
            <p className="text-white text-lg">Towers</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          {/* Families Served */}
          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={60} suffix="%" duration={2} />
            </h3>
            <p className="text-white text-lg">Open Space</p>
          </div>

                    {/* Divider */}
          <div className="w-16 h-px bg-white/40 my-4 sm:my-0 sm:w-px sm:h-12 mx-auto sm:mx-6" />

          <div className="flex-1 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              <AnimatedCounter end={50} suffix="+" duration={2} />
            </h3>
            <p className="text-white text-lg">Lifestyle Amenities</p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">Book Site Visit</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6">
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
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88] focus:border-transparent"
                    placeholder="Enter your full name"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88] focus:border-transparent"
                    placeholder="Enter your email address"
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88] focus:border-transparent"
                    placeholder="Enter your phone number"
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
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7AC88] focus:border-transparent resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-[#B7AC88] text-white hover:bg-[#9A8B6B] transition-colors duration-200 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "BOOKING..." : "Book Site Visit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
