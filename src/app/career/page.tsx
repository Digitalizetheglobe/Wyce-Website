"use client";
import React from "react";
import { Cinzel } from "next/font/google";
import CTASection from '@/components/CTASection';

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

const Career = () => {
    return (
        <div className="w-full bg-black text-white">
            {/* Banner */}
            <div className="w-full h-80 flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-[#c2b48f] px-4">
                <h1 className="text-4xl font-semibold mb-2">Career</h1>
                <div className="w-30 h-[3px] bg-[#B7AC88] mb-3"></div>
                <p className="text-lg max-w-4xl">
                    At WYCE Corp, we believe a home is more than bricks  and beams — <br/>
                    it’s the space where your most beautiful moments begin
                </p>
            </div>

            {/* Why Join WYCE Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Images */}
                    <div className="relative">
                        <div className="relative">
                            {/* Background Office Image */}
                            <div className="w-full h-110 overflow-hidden">
                                <img 
                                    src="/images/carrer-about.png" 
                                    alt="Office Environment" 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-14 h-[1px] bg-[#B7AC88]"></span>
                            <h2 className={`text-[#B7AC88] text-3xl ${cinzel.className}`}>Why Join WYCE?</h2>
                        </div>
                        
                        <p className="text-white text-lg leading-relaxed">
                            At WYCE Real Estate, we believe success starts with our people. Whether you&apos;re a seasoned expert or just beginning your journey, we provide the tools, mentorship, and opportunities to thrive.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <img src="/images/icon.png" alt="checkmark" className="w-4 h-4 mt-2" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Career Growth :</h3>
                                    <p className="text-gray-300 text-md">Continuous learning and leadership programs.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <img src="/images/icon.png" alt="checkmark" className="w-4 h-4 mt-2" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Team Culture :</h3>
                                    <p className="text-gray-300 text-md">A collaborative environment built on trust and respect.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <img src="/images/icon.png" alt="checkmark" className="w-4 h-4 mt-2" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Impactful Work :</h3>
                                    <p className="text-gray-300 text-md">Helping families and businesses find their perfect space.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <img src="/images/icon.png" alt="checkmark" className="w-4 h-4 mt-2" />
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Diverse Roles :</h3>
                                    <p className="text-gray-300 text-md">Opportunities across sales, property management, marketing, finance, and operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Life at WYCE Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-14 h-[1px] bg-[#B7AC88]"></span>
                            <h2 className={`text-[#B7AC88] text-3xl ${cinzel.className}`}>Life at WYCE</h2>
                        </div>
                        
                        <p className="text-white text-lg leading-relaxed">
                            At WYCE, you&apos;re more than an employee—you&apos;re part of our family. From team-building events to recognition programs, we celebrate every success together. Expect an environment where your voice matters, ideas are welcomed, and your career path is limitless.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="relative">
                            <div className="w-full h-65 overflow-hidden rounded-lg border border-[#B7AC88]/20">
                                <img 
                                    src="/images/career-life.png" 
                                    alt="Life at WYCE" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Opportunities Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-14 h-[1px] bg-[#B7AC88]"></span>
                        <h2 className={`text-[#B7AC88] text-3xl ${cinzel.className}`}>Open Positions</h2>
                        <span className="w-14 h-[1px] bg-[#B7AC88]"></span>
                    </div>
                    <p className="text-white text-lg max-w-2xl mx-auto">
                        Join our team and be part of something extraordinary. Explore exciting career opportunities at WYCE.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Career Card 1 */}
                    <div className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors">
                        <h3 className="text-white text-xl font-semibold mb-2">Senior Real Estate Agent</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Lead property sales and client relationships with your expertise and passion for real estate.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Career Card 2 */}
                    <div className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors">
                        <h3 className="text-white text-xl font-semibold mb-2">Property Manager</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Oversee property operations and ensure exceptional tenant experiences and satisfaction.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Career Card 3 */}
                    <div className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors">
                        <h3 className="text-white text-xl font-semibold mb-2">Marketing Specialist</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Drive our brand presence and create compelling marketing campaigns for our properties.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Career Card 4 */}
                    <div className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors">
                        <h3 className="text-white text-xl font-semibold mb-2">Finance Analyst</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Analyze market trends and financial data to support strategic business decisions.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Career Card 5 */}
                    <div className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors">
                        <h3 className="text-white text-xl font-semibold mb-2">Customer Relations</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Build lasting relationships with clients and provide exceptional customer service experiences.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Career Card 6 */}
                    <div className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors">
                        <h3 className="text-white text-xl font-semibold mb-2">Operations Coordinator</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Coordinate daily operations and ensure smooth workflow across all departments.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* CTA Content - Centered panel */}
                    <div
                        className="text-center w-full mx-auto p-6 sm:p-8 md:p-12 lg:p-16 bg-center bg-no-repeat bg-contain bg-[#121212] rounded-lg "
                        style={{
                            backgroundImage: "url('/images/cta-bg.png')",
                            backgroundSize: "cover",
                        }}
                    >
                        {/* Small text at top */}
                        <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-gray-300">
                            Ready to grow with us?
                        </p>

                        {/* Main heading */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight mb-6 sm:mb-8 px-2">
                            Take the next step in your career with WYCE Real Estate. 
                            <br className="hidden sm:block" />
                            Explore our openings and apply today.
                        </h2>

                        {/* CTA Button with gradient */}
                        <button
                            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold sm:font-bold text-white text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                                background: "linear-gradient(120deg, #B7AC88 0%, #6B6046 50%, #1F1403 100%)",
                            }}
                        >
                            Contact Us
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Career;