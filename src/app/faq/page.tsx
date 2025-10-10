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
    question: "WHO IS Wyce?",
    answer: "WYCE Exclucity is a luxurious, large-scale residential project in Bavdhan, Pune, developed by Parth, Saniket, and Balaji Group. This RERA-registered project spans 12 acres with 11 high-rise towers offering premium 2, 3, and 4 BHK apartments. The project perfectly blends modern luxury and nature, dedicating over 60% of the land to open green spaces and offering more than 50 world-class amenities."
  },
  {
    id: 2,
    question: "WHAT IS PIO?",
    answer: "PIO (Person of Indian Origin) refers to a person who was a citizen of India at any time or whose parents, grandparents, or great-grandparents were citizens of India. PIOs can invest in Indian real estate under certain conditions and are eligible for various investment benefits in projects like WYCE Exclucity."
  },
  {
    id: 3,
    question: "Any person of full age and capacity?",
    answer: "Yes, any person of full age (18 years and above) and sound mind can invest in WYCE Exclucity. This includes Indian nationals, NRIs, PIOs, and foreign nationals (subject to applicable laws and regulations). We ensure all legal requirements are met for different categories of investors."
  },
  {
    id: 4,
    question: "What are the payment plans available?",
    answer: "WYCE Exclucity offers flexible payment plans including construction-linked plans, down payment schemes, and easy EMI options. Our financial team will work with you to create a payment schedule that suits your financial situation and investment goals."
  },
  {
    id: 5,
    question: "What amenities are included in the project?",
    answer: "WYCE Exclucity offers over 50 world-class amenities including swimming pools, fitness centers, landscaped gardens, children's play areas, clubhouse, sports facilities, security systems, and much more. The project is designed to provide a complete lifestyle experience for residents."
  }
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number>(1);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id);
  };

  return (
    <div className="min-h-screen bg-black">

         <section className="w-full text-white py-10 md:py-16" style={{background: 'linear-gradient(180deg, #090909 0%, #B7AC88 100%)'}}>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Loan Help</h2>
          <p className="text-gray-200 text-sm md:text-base">
            At WYCE Corp, we believe a home is more than bricks and beams —
            it's the space where your most beautiful moments begin.
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
                <div key={item.id} className="bg-gray-900/50 p-6 rounded-xl border border-[#B7AC88] hover:border-white transition-colors cursor-pointer">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-center justify-between group cursor-pointer"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-[#B7AC88] transition-colors">
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
              <div className="relative h-[600px] lg:h-[450px] overflow-hidden">
                <Image
                  src="/images/faq.png"
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
