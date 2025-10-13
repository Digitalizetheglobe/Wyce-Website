"use client";

import { useState } from "react";

export default function AmenitiesSection() {
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
          message: "Thank you! Your message has been sent successfully.",
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
  // Exactly 12 amenities as shown in the image
  const amenities = [
    { icon: "/images/landing-page/icons/wyce_icons[1]-01.svg", text: "Cricket Practise Pitch" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-02.svg", text: "Dual Indoor Badminton Courts" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-03.svg", text: "Paw Park" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-04.svg", text: "Theatrum" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-05.svg", text: "Premium Indoor Fitness Club" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-06.svg", text: "Active Play Lawn" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-07.svg", text: "Open-air Fitness Studio" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-08.svg", text: "Central Events Lawn" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-09.svg", text: "Alfresco Celebration Lawn" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-10.svg", text: "Soundscape Studio" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-11.svg", text: "Infinity Pool with Lounge Deck" },
    { icon: "/images/landing-page/icons/wyce_icons[1]-12.svg", text: "Pickleball Court" },
  ];

  return (
    <div 
      className="w-full flex flex-col items-center py-12 relative px-4 sm:px-6 lg:px-8 mt-15 min-h-screen"
      style={{
        backgroundImage: "url('/images/landing-page/amenities-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="w-full text-center mb-12 mt-20">
          <h2 className="text-4xl md:text-5xl text-white font-bold font-Raleway mb-4">
            Amenities
          </h2>
          <p className="text-white max-w-4xl mx-auto mt-2 text-lg sm:text-xl md:text-lg px-4">
            Experience Elevated Living WYCE Exclucity come packed with lifestyle-enhancing
            features that cater to all age groups.
          </p>
        </div>

      {/* Amenities Grid - 4x3 layout */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 justify-items-center">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-[#887f65] rounded-lg shadow-lg p-3 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
            >
              <div className="flex-shrink-0">
                <img
                  src={amenity.icon}
                  alt={amenity.text}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">
                {amenity.text}
              </span>
            </div>
          ))}
        </div>

        {/* Know More Button */}
        <div className="text-center">
          <button 
            onClick={openModal}
            className="border text-white font-semibold py-3 px-8 transition-colors duration-300 text-lg cursor-pointer hover:text-[#B7AC88] hover:border-[#B7AC88]"
          >
            Know More
          </button>
        </div>
      </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">Get More Information</h3>
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
                  {isSubmitting ? "SENDING..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}