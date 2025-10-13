"use client";
import React, { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: "400",
});

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
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
                        name: formData.fullName,
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
                    fullName: "",
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
        <div className="w-full bg-black text-white">
            {/* Banner */}
            <div className="w-full h-64 flex flex-col items-center justify-center text-center bg-[#0a0a0a] border-b border-white/20 px-4">
                <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
                <p className="text-gray-200 text-sm md:text-base w-200  ">
                    At WIDE Corp, we believe a home is more than bricks and beams<br />
                    it&apos;s the space where your most beautiful moments begin.
                </p>
            </div>

            {/* Get in Touch Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* First Row - Heading + Cards */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
                    {/* Heading */}
                    <div className="lg:w-1/3">
                        <p className={`text-[#fff] flex items-center gap-3 `}>
                            <span className="text-3xl leading-[42px] font-normal">Contact Us</span>
                        </p>           
                         <h2 className="text-xl font-bold text-[#fff]">GET IN TOUCH</h2>
                    </div>

                    {/* Cards */}
                    <div className="flex flex-col md:flex-row gap-6 lg:w-2/3">
                        {/* Location Card */}
                        <div className="bg-[#2b2b2b] p-6 flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <FaMapMarkerAlt className="text-[#B7AC88] text-xl" />
                                <h3 className="font-semibold text-lg">Location</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Plot No: 123 Bavdhan, near 16 no bus stop,
                                <br /> Pune, Maharashtra - 444110
                            </p>
                        </div>

                        {/* Communication Card */}
                        <div className="bg-[#2b2b2b] p-6 flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <FaPhoneAlt className="text-[#B7AC88] text-xl" />
                                <h3 className="font-semibold text-lg">Communication</h3>
                            </div>
                            <p className="text-gray-300 text-sm mb-1 cursor-pointer" onClick={() => {
                                window.location.href = "mailto:sales@wycecorp.com";
                            }}>sales@wycecorp.com</p>
                            <p className="text-gray-300 text-sm cursor-pointer" onClick={() => {
                                window.location.href = "tel:+917549799799";
                            }}>+91 75497 99799</p>
                            {/* <p className="text-gray-300 text-sm">+91 00000 00000</p> */}
                        </div>
                    </div>
                </div>

                {/* Second Row - Form & Contact Info */}
                <div className="bg-[#2b2b2b] p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section - Takes 2/3 width */}
                    <div className="lg:col-span-2 bg-[#00000099] p-8">
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
                        
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Column - 3 input fields */}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none"
                                />
                            </div>
                            
                            {/* Second Column - Message and Button */}
                            <div className="flex flex-col h-full">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={4}
                                    className="flex-1 p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none resize-none"
                                ></textarea>
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#B7AC88] text-white font-semibold py-2 rounded hover:bg-[#a49b76] transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isSubmitting ? "SENDING..." : "SEND"}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info + Social Links - Takes 1/3 width */}
                    <div className="flex flex-col justify-center lg:pl-4">
                        <h3 className="text-xl font-semibold mb-1">Have Any Query?</h3>
                        <h2 className="text-3xl font-bold text-[#B7AC88] mb-4">Contact Us</h2>
                        <p className="text-gray-300 mb-6 text-md">
                            Our team is here to answer your questions and provide the support you need.
                        </p>
                            <div className="flex items-center gap-4 sm:gap-6">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/wyce_corp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#B7AC88] transition-colors"
                            >
                                <i className="fa-brands fa-instagram text-2xl sm:text-3xl"></i>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/wyce-corp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#B7AC88] transition-colors"
                            >
                                <i className="fa-brands fa-linkedin text-2xl sm:text-3xl"></i>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/@WYCECorp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#B7AC88] transition-colors"
                            >
                                <i className="fa-brands fa-youtube text-2xl sm:text-3xl"></i>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/profile.php?id=61569471185683"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#B7AC88] transition-colors"
                            >
                                <i className="fa-brands fa-facebook-f text-2xl sm:text-3xl"></i>
                            </a>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;