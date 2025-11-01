"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricesSection() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          setShowModal(false);
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
    setShowModal(false);
    setSubmitStatus({ type: null, message: "" });
    // Reset form when closing
    setFormData({
      firstName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const homes = [
    {
      img: "/images/wyce-exclucity/price1.png",
      title: "4BHK Homes",
      desc: "Compact, comfortable, and perfect for young professionals or small families.",
      size: "Starting from 1898 sq. ft.",
      price: "₹40 Lakhs*",
    },
    {
      img: "/images/wyce-exclucity/price2.png",
      title: "3BHK Homes",
      desc: "Spacious and ideal for growing families with extra room for comfort.",
      size: "Starting from 1256 sq. ft.",
      price: "₹60 Lakhs*",
    },
    {
      img: "/images/wyce-exclucity/price3.png",
      title: "2BHK Homes",
      desc: "Luxury living with ample space for big families and premium lifestyle.",
      size: "Starting from 834 sq. ft.",
      price: "₹90 Lakhs*",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="w-full bg-black text-white py-16 px-6  overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#B7AC88] mb-4"
          variants={headingVariants}
        >
          Floor Plan 
        </motion.h2>
        <motion.p
          className="text-white-400 max-w-2xl mx-auto mb-12 font-raleway text-2xl"
          variants={descriptionVariants}
        >
          Every property is more than just four walls it&apos;s a promise of luxury,
          comfort and growth. Step into a lifestyle
        </motion.p>

        {/* Cards Container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {homes.map((home, index) => (
            <motion.div
              key={index}
              className="overflow-hidden shadow-2xl flex flex-col rounded-lg perspective-1000"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 2,
                rotateX: 2,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },  
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top Image */}
              <motion.div
                className="h-68 w-full relative bg-white overflow-hidden"
                whileHover="hover"
              >
                <motion.div variants={imageVariants}>
                  <Image
                    src={home.img}
                    alt={home.title}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Content */}
              <motion.div
                className="p-6 h-40 mx-4 -mt-14 z-10 border border-[#866448] rounded-2xl 
                  text-center text-white flex flex-col justify-between backdrop-blur-sm"
                style={{
                  backgroundImage: "url('/images/wyce-exclucity/bg-price.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                variants={contentVariants}
                whileHover="hover"
              >
                <motion.h3
                  className="text-xl md:text-2xl font-semibold "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {home.title}
                </motion.h3>


                {/* Features */}
                <motion.p
                  className="flex items-center justify-center gap-2 text-md mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span></span> {home.size}
                </motion.p>


                {/* Button */}
                <div className="flex justify-center">
                  <motion.button
                    onClick={() => setShowModal(true)}
                    className="bg-gradient-to-r bg-[white] text-black 
                      px-[20px] py-[4px] shadow-md hover:opacity-90 
                      transition text-[15px] font-medium cursor-pointer hover:text-white hover:bg-[#b7ac88] rounded-sm"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 25px rgba(183, 172, 136, 0.5)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                    }}
                  >
                    View Plan
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
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
    </section>
  );
}
