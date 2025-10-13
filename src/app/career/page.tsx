"use client";
import React from "react";
import { Cinzel } from "next/font/google";
import CTASection from '@/components/CTASection';
import { motion } from "framer-motion";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Career = () => {
    return (
        <div className="w-full bg-black text-white">
            {/* Banner */}
            <div className="w-full h-80 flex flex-col items-center justify-center text-center bg-[#0a0a0a] border-b border-white/20 px-4">
                <motion.h1 
                    className="text-3xl font-bold  mb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    Career
                </motion.h1>
                <motion.p 
                    className="text-lg max-w-6xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    At WYCE Corp, we believe a home is more than bricks  and beams
                    it&apos;s the space where your most beautiful moments begin
                </motion.p>
            </div>

            {/* Why Join WYCE Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Images */}
                    <motion.div 
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="relative">
                            {/* Background Office Image */}
                            <div className="w-full h-80 overflow-hidden">
                                <img 
                                    src="/images/carrer-about.jpeg" 
                                    alt="Office Environment" 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <motion.div 
                            className="flex items-center gap-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className={`text-[#fff] text-2xl `}>Why Join WYCE?</h2>
                        </motion.div>
                        
                        <motion.p 
                            className="text-white text-lg leading-relaxed"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            Joining WYCE means becoming part of a culture that values collaboration over competition, creativity over convention, and integrity over everything.
                            Here, every idea matters, every role contributes, and every individual helps shape the future of modern living.
                            We don&apos;t just build spaces  we build possibilities.
                            And together, we&apos;re redefining what it means to be Greater Together.
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            Because when we grow, you grow.
                            And when we create thoughtfully, it&apos;s truly beautiful.
                        </motion.p>
                        
                        {/* <div className="space-y-4">
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
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Life at WYCE Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6">
                        <motion.div 
                            className="flex items-center gap-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className={`text-[#fff] text-2xl`}>Life at WYCE</h2>
                        </motion.div>
                        
                        <motion.p 
                            className="text-white text-lg leading-relaxed"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            Life at WYCE is built on the same foundation as our projects  thoughtfulness, collaboration, and purpose.
                            We believe that when people feel valued and inspired, they create work that inspires others.</motion.p>

                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                            >Here, creativity meets clarity. Innovation meets empathy. And every individual contributes to something larger  a collective vision of redefining how people live, work, and grow.</motion.p>

                           <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: 0.3 }}
                           > From brainstorming ideas that shape skylines to celebrating small wins that build team spirit, WYCE is a space where ambition feels personal and success feels shared.</motion.p>

                           <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: 0.4 }}
                           > We nurture talent, encourage learning, and empower every voice because we believe that together, we don&apos;t just build projects, we build possibilities.
                            At WYCE, Thoughtful is Beautiful in our designs, in our culture, and in the way we grow together.  
                        </motion.p>
                    </div>

                    {/* Right Side - Image */}
                    <motion.div 
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="relative">
                            <div className="w-full h-120 overflow-hidden border border-[#B7AC88]/20">
                                <img 
                                    src="/images/career-life.jpeg" 
                                    alt="Life at WYCE" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Career Opportunities Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <motion.div 
                        className="flex items-center justify-center gap-3 mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className={`text-[#fff] text-2xl`}>Open Positions</h2>
                    </motion.div>
                    <motion.p 
                        className="text-white text-lg max-w-2xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        Join our team and be part of something extraordinary. Explore exciting career opportunities at WYCE.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Career Card 1 */}
                    <motion.div 
                        className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h3 className="text-white text-xl font-semibold mb-2">Pre Sales Executive</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Ensure prompt and professional communication to enhance customer experience..
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Career Card 2 */}
                    <motion.div 
                        className="bg-[#121212] border border-[#A5A5A5] p-6 rounded-lg hover:border-[#B7AC88] transition-colors"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-white text-xl font-semibold mb-2">Sales Manager</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Build strong customer relationships and ensure high satisfaction levels.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#B7AC88] text-sm font-medium">Full Time</span>
                            <button className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition">
                                Apply Now
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>



        </div>
    );
};

export default Career;