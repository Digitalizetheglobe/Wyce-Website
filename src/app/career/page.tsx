"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from '@emailjs/browser';


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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        position: "",
        resume: null as File | null
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    // EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_whdabtl';
    const EMAILJS_TEMPLATE_ID = 'template_coo5mu6';
    const EMAILJS_PUBLIC_KEY = 'T0yb7stlayE2PO5Hv';

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }, []);

    const handleApplyNow = (position: string) => {
        setFormData(prev => ({ ...prev, position }));
        setIsModalOpen(true);
        setErrors({});
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            position: "",
            resume: null
        });
        setErrors({});
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone validation
        const phoneRegex = /^\d+$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone number must contain only digits";
        } else if (formData.phone.length !== 10) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        // Resume validation
        if (!formData.resume) {
            newErrors.resume = "Resume is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // For phone field, only allow digits
        if (name === "phone") {
            const digitsOnly = value.replace(/\D/g, "");
            setFormData(prev => ({ ...prev, [name]: digitsOnly }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        
        // Clear previous errors and file if no file selected
        if (!file) {
            setFormData(prev => ({ ...prev, resume: null }));
            return;
        }
        
        // Check file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, resume: "File size must be less than 5MB" }));
            setFormData(prev => ({ ...prev, resume: null }));
            return;
        }
        
        // Check file type
        const allowedTypes = ['.pdf', '.doc', '.docx'];
        const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
        if (!allowedTypes.includes(fileExtension)) {
            setErrors(prev => ({ ...prev, resume: "Only PDF, DOC, and DOCX files are allowed" }));
            setFormData(prev => ({ ...prev, resume: null }));
            return;
        }
        
        // Valid file
        setFormData(prev => ({ ...prev, resume: file }));
        setErrors(prev => ({ ...prev, resume: "" }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            
            try {
                // Get the form element
                const form = e.target as HTMLFormElement;
                
                console.log("Form data:", {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    position: formData.position,
                    resume: formData.resume?.name
                });
                
                // Try sending with sendForm first (for file attachments)
                let response;
                try {
                    response = await emailjs.sendForm(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID,
                        form,
                        EMAILJS_PUBLIC_KEY
                    );
                } catch (sendFormError) {
                    console.log("sendForm failed, trying send method:", sendFormError);
                    
                    // Fallback to regular send method without file attachment
                    const templateParams = {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                        position: formData.position,
                        resume_name: formData.resume?.name || 'No file uploaded',
                        time: new Date().toLocaleString(),
                        to_email: 'editaddress.digital@gmail.com'
                    };
                    
                    response = await emailjs.send(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID,
                        templateParams,
                        EMAILJS_PUBLIC_KEY
                    );
                }

                console.log("Email sent successfully!", response);
                
                // Show thank you message
                setIsModalOpen(false);
                setShowThankYou(true);
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    setShowThankYou(false);
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                        position: "",
                        resume: null
                    });
                }, 3000);
                
            } catch (error) {
                console.error("Error sending email:", error);
                console.error("Error details:", {
                    message: error instanceof Error ? error.message : 'Unknown error',
                    stack: error instanceof Error ? error.stack : undefined,
                    error: error
                });
                
                // More specific error handling
                let errorMessage = "There was an error sending your application. Please try again.";
                
                if (error instanceof Error) {
                    if (error.message.includes('Invalid email')) {
                        errorMessage = "Please check your email address and try again.";
                    } else if (error.message.includes('Template')) {
                        errorMessage = "There's an issue with the email template. Please contact support.";
                    } else if (error.message.includes('Service')) {
                        errorMessage = "Email service is temporarily unavailable. Please try again later.";
                    }
                }
                
                alert(errorMessage);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="w-full bg-black text-white">
            {/* Thank You Modal */}
            {showThankYou && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#121212] border border-[#B7AC88] rounded-lg p-8 max-w-md mx-4 text-center"
                    >
                        <div className="mb-4">
                            <svg className="w-16 h-16 mx-auto text-[#B7AC88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-gray-300">
                            We have received your application. Our team will review it and get back to you soon.
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Application Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#121212] border border-[#A5A5A5] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-white">Apply for Position</h2>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                                {/* Position */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Position <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="position"
                                        value={formData.position}
                                        readOnly
                                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-600 rounded-lg text-white cursor-not-allowed"
                                    />
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white focus:outline-none focus:border-[#B7AC88] ${
                                            errors.name ? "border-red-500" : "border-gray-600"
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white focus:outline-none focus:border-[#B7AC88] ${
                                            errors.email ? "border-red-500" : "border-gray-600"
                                        }`}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        maxLength={10}
                                        className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white focus:outline-none focus:border-[#B7AC88] ${
                                            errors.phone ? "border-red-500" : "border-gray-600"
                                        }`}
                                        placeholder="Enter your 10-digit phone number"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-white focus:outline-none focus:border-[#B7AC88] resize-none ${
                                            errors.message ? "border-red-500" : "border-gray-600"
                                        }`}
                                        placeholder="Tell us about yourself and why you're interested in this position"
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>

                                {/* Resume Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Upload Resume <span className="text-red-500">*</span>
                                    </label>
                                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 hover:border-[#B7AC88] transition-colors">
                                        <input
                                            type="file"
                                            name="resume"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                            id="resume-upload"
                                            required
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer flex flex-col items-center"
                                        >
                                            <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <span className="text-gray-400 text-sm">
                                                {formData.resume ? formData.resume.name : "Click to upload your resume"}
                                            </span>
                                            <span className="text-gray-500 text-xs mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                                        </label>
                                    </div>
                                    {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                                    {formData.resume && (
                                        <p className="text-[#B7AC88] text-sm mt-2">✓ File selected: {formData.resume.name}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex-1 px-6 py-3 rounded-lg font-medium transition cursor-pointer flex items-center justify-center ${
                                            isSubmitting 
                                                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                                                : 'bg-[#B7AC88] text-white hover:bg-[#a49b76]'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            'Submit Application'
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        disabled={isSubmitting}
                                        className="px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:border-gray-400 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}

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
                                <Image 
                                    src="/images/carrer-about.jpeg" 
                                    alt="Office Environment" 
                                    fill
                                    className="object-cover"
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
                                <Image 
                                    src="/images/career-life.jpeg" 
                                    alt="Life at WYCE" 
                                    fill
                                    className="object-cover"
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
                            <button 
                                onClick={() => handleApplyNow("Pre Sales Executive")}
                                className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition cursor-pointer" 
                            >
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
                            <button 
                                onClick={() => handleApplyNow("Sales Manager")}
                                className="bg-[#B7AC88] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#a49b76] transition cursor-pointer"
                            >
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