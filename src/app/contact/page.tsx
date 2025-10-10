"use client";
import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { Vujahday_Script } from "next/font/google";

const vujahday = Vujahday_Script({
    subsets: ["latin"],
    weight: "400",
});

const Contact = () => {
    return (
        <div className="w-full bg-black text-white">
            {/* Banner */}
            <div className="w-full h-64 flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-[#c2b48f] px-4">
                <h1 className="text-4xl font-semibold mb-2">Contact Us</h1>
                <p className="text-lg max-w-4xl">
                    At WIDE Corp, we believe a home is more than bricks and beams<br />
                    it's the space where your most beautiful moments begin.
                </p>
            </div>

            {/* Get in Touch Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* First Row - Heading + Cards */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
                    {/* Heading */}
                    <div className="lg:w-1/3">
                        <p className={`text-[#B7AC88] flex items-center gap-3 ${vujahday.className}`}>
                            <span className="inline-block w-10 h-[1px] bg-[#B7AC88]"></span>
                            <span className="text-[34px] leading-[42px] font-normal">Contact Us</span>
                        </p>           
                         <h2 className="text-xl font-bold text-[#B7AC88]">GET IN TOUCH</h2>
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
                            <p className="text-gray-300 text-sm mb-1">wyce@gmail.com</p>
                            <p className="text-gray-300 text-sm">+91 00000 00000</p>
                            <p className="text-gray-300 text-sm">+91 00000 00000</p>
                        </div>
                    </div>
                </div>

                {/* Second Row - Form & Contact Info */}
                <div className="bg-[#2b2b2b] p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section - Takes 2/3 width */}
                    <div className="lg:col-span-2 bg-[#00000099] p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Column - 3 input fields */}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none"
                                />
                            </div>
                            
                            {/* Second Column - Message and Button */}
                            <div className="flex flex-col h-full">
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="flex-1 p-3 bg-[#1f1f1f] text-white placeholder-gray-400 rounded focus:outline-none resize-none"
                                ></textarea>
                                <button className="bg-[#B7AC88] text-white font-semibold py-2 rounded hover:bg-[#a49b76] transition mt-4">
                                    SEND
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info + Social Links - Takes 1/3 width */}
                    <div className="flex flex-col justify-center lg:pl-4">
                        <h3 className="text-xl font-semibold mb-1">Have Any Query?</h3>
                        <h2 className="text-3xl font-bold text-[#B7AC88] mb-4">Contact Us</h2>
                        <p className="text-gray-300 mb-6 text-md">
                            Our team is here to answer your questions and provide the support you need.
                        </p>
                        <div className="flex items-center gap-4 text-white text-xl">
                            <FaFacebookF className="cursor-pointer hover:text-[#B7AC88]" />
                            <FaTwitter className="cursor-pointer hover:text-[#B7AC88]" />
                            <FaInstagram className="cursor-pointer hover:text-[#B7AC88]" />
                            <FaYoutube className="cursor-pointer hover:text-[#B7AC88]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;