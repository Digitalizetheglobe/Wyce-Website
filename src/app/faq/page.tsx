"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the location of the project?",
    answer: "WYCE Exclucity is located in Bavdhan, Pune a prime location that seamlessly connects you to the city’s major destinations while keeping you close to nature and tranquility."
  },
  {
    id: 2,
    question: "What configurations are available?",
    answer: "The project offers premium 2 BHK ,3 BHK & 4BHK residences, designed with spacious layouts, modern architecture, and thoughtful planning to elevate everyday living."
  },
  {
    id: 3,
    question: "Is the project RERA registered?",
    answer: "Yes, WYCE Exclucity is RERA approved. You can verify the details on the official RERA website using our registration number P52100077762, P52100077827."
  },
  {
    id: 4,
    question: "What makes WYCE Exclucity different from other projects?",
    answer: "Every detail at WYCE Exclucity reflects our philosophy  “Thoughtful is Beautiful.” From the layout and natural light to community spaces and design sensibility, the project blends luxury with meaning  creating homes that feel personal, peaceful, and complete."
  },
  {
    id: 5,
    question: "Are there eco-friendly or sustainable features?",
    answer: "Yes, WYCE Exclucity is designed with sustainability in mind featuring rainwater harvesting, solar lighting, waste management systems, and energy-efficient infrastructure."
  },
  {
    id: 6,
    question: "Is there a sample flat available for viewing?",
    answer: "Yes, a show apartment is available for on-site visits, allowing you to experience the design, finishes, and lifestyle before making a decision."
  },
  {
    id: 7,
    question: "How can I book a site visit or get more details?",
    answer: "Simply fill out the enquiry form on this website or call our sales team to schedule a personalized walk-through of WYCE Exclucity."
  }
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number>(1);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id);
  };

  return (
    <div className="min-h-screen bg-black">
      
      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Quick Facts</h2>
          <p className="text-gray-200 text-sm md:text-base">
            At WYCE Corp, we believe a home is more than bricks and beams 
            it&apos;s the space where your most beautiful moments begin.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
          {/* Image Section */}
        
        </div>
      </section>



      {/* FAQ Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* FAQ Accordion - Each question in separate box */}
            <div className="space-y-4">
              {faqData.map((item) => (
                <div key={item.id} className="bg-gray-900/50 p-3  border border-[#B7AC88] hover:border-white transition-colors cursor-pointer">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-center justify-between group cursor-pointer"
                  >
                    <h3 className="text-md font-bold text-white group-hover:text-[#B7AC88] transition-colors">
                      {item.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {openItem === item.id ? (
                        <svg 
                          className="w-6 h-6 text-[#B7AC88] transition-transform cursor-pointer" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg 
                          className="w-6 h-6 text-white group-hover:text-[#B7AC88] transition-colors" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </button>
                  
                  {openItem === item.id && (
                    <div className="mt-4 animate-fade-in-up">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative h-[600px] lg:h-[440px] overflow-hidden">
                <Image
                  src="/images/faq1.jpeg"
                  alt="Real Estate Consultation"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
