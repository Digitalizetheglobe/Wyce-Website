"use client";

import { Cinzel } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });
  
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
    <section
      className="relative bg-black text-white py-12 sm:py-16 md:py-0 overflow-hidden"

    >


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1320px]">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 flex justify-center items-center text-center">
          <p
            className={`text-[#B7AC88] flex justify-center items-center gap-2 sm:gap-3`}
          >
            <span className={`${cinzel.className} text-2xl sm:text-3xl md:text-[36px] lg:text-[30px] leading-tight font-normal`}>
              WYCE Corp Built on Legacy. Growing with Vision. Greater Together.
            </span>
          </p>
        </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
          {/* Left: Map */}
          <motion.div
            className="lg:w-1/2 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-lg"
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
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-center"
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

            {/* Form with staggered inputs */}
            <motion.form
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
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
              {[
                "First Name*",
                "Email*",
                "Phone Number*",
                
                "Message",
              ].map((placeholder, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className={placeholder === "Message" ? "col-span-1 sm:col-span-2" : ""}
                >
                  {placeholder === "Select a Service" ? (
                    <select
                      className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border border-gray-600 bg-transparent text-white focus:outline-none focus:border-[#B7AC88] transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-gray-800">
                        Select a Service
                      </option>
                      <option value="service1" className="bg-gray-800">Service 1</option>
                      <option value="service2" className="bg-gray-800">Service 2</option>
                      <option value="service3" className="bg-gray-800">Service 3</option>
                    </select>
                  ) : placeholder === "Message" ? (
                    <textarea
                      className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#B7AC88] transition-colors resize-none"
                      rows={4}
                      placeholder="Message"
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full p-2.5 sm:p-3 text-sm sm:text-base rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#B7AC88] transition-colors"
                    />
                  )}
                </motion.div>
              ))}

              <motion.label
                className="col-span-full flex items-start gap-2 text-gray-300 text-xs sm:text-sm w-full"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
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

              {/* Button */}
              <motion.div
                className="col-span-full flex justify-center mt-2 w-full"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#B7AC88] to-[#1F1403] 
                              text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-md 
                              hover:scale-105 active:scale-95 transition-transform 
                              text-sm sm:text-base font-medium w-full sm:w-auto max-w-md"
                >
                  Book Site Visit
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
