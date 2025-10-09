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
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about WYCE Exclucity and our services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* FAQ Accordion - Each question in separate box */}
            <div className="space-y-4">
              {faqData.map((item) => (
                <div key={item.id} className="bg-gray-900/50 p-6 rounded-xl border border-amber-600/30 hover:border-amber-600/50 transition-colors">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {openItem === item.id ? (
                        <svg 
                          className="w-6 h-6 text-amber-400 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg 
                          className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" 
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
              <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/faq.png"
                  alt="Real Estate Consultation"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Need More Information?
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    Our expert team is here to help you with any questions about WYCE Exclucity.
                  </p>
                  <button className="bg-amber-600 hover:bg-amber-700 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                    Contact Us Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional FAQ Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our team of experts is ready to assist you with any queries about WYCE Exclucity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our sales team</p>
              <p className="text-amber-400 font-semibold">+91 00000 00000</p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information via email</p>
              <p className="text-amber-400 font-semibold">wyce@gmail.com</p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-gray-300 mb-4">Come to our sales office</p>
              <p className="text-amber-400 font-semibold">Plot No: 123 Bavdhan, Pune</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
