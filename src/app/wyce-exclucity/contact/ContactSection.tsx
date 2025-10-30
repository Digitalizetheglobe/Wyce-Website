"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <>
      {/* Top Image with fade-in */}
      <motion.section
        className="relative bg-black w-full h-[400px] overflow-hidden"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/wyce-exclucity/contact-bg.png"
          alt="Contact Background"
          width={1200}
          height={400}
          className="w-full"
          priority
        />
      </motion.section>

      {/* Contact Section */}
      <section className="relative -mt-45 z-10 w-full bg-transparent text-white px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Map */}
          <motion.div
            className="lg:w-1/2 w-full h-[550px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.003792580299!2d-77.0376840846477!3d38.89874527957095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b9e4b2e6b1%3A0x5b6ed4b5df95f78e!2sWashington%20DC!5e0!3m2!1sen!2sin!4v1597845236575!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:w-1/2 w-full p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-semibold mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h2>
            <motion.p
              className="mb-6 text-center"
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                "Select a Service",
                "Message",
              ].map((placeholder, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className={placeholder === "Message" ? "col-span-2" : ""}
                >
                  {placeholder === "Select a Service" ? (
                    <select
                      className="w-full p-3 rounded border border-gray-600 bg-transparent text-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a Service
                      </option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                    </select>
                  ) : placeholder === "Message" ? (
                    <textarea
                      className="w-full p-3 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400"
                      rows={4}
                      placeholder="Message"
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full p-3 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400"
                    />
                  )}
                </motion.div>
              ))}

              <motion.label
                className="col-span-1 md:col-span-2 flex items-start gap-2 text-gray-300"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <input type="checkbox" className="mt-1" />
                I agree with the terms and Privacy Policy and I declare that I
                have read the information that is required in accordance.
              </motion.label>

              {/* Button */}
              <motion.div
                className="col-span-1 md:col-span-2 flex justify-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button
                  className="bg-gradient-to-r from-[#B7AC88] to-[#1F1403] 
                              text-white px-6 py-2 rounded-full shadow-md 
                              hover:scale-105 transition-transform text-sm"
                >
                  Book Site Visit
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
