"use client";

import { useState } from "react";

export default function NRIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can NRIs buy property in India?",
      answer: "Yes, NRIs can purchase residential and commercial properties in India. However, they cannot buy agricultural land, plantation property, or farmhouses without special permission from RBI. The purchase must be made using funds from NRE/NRO accounts or through inward remittance."
    },
    {
      question: "What documents do I need as an NRI to buy property?",
      answer: "Key documents include: Valid passport, Overseas address proof, PAN card, NRE/NRO bank account details, Power of Attorney (if purchasing remotely), and Passport-size photographs. We help you organize all required documentation efficiently."
    },
    {
      question: "How can I transfer funds from abroad for property purchase?",
      answer: "You can transfer funds through your NRE (Non-Resident External) or NRO (Non-Resident Ordinary) account. Funds can also be remitted directly from abroad through normal banking channels. All transactions must comply with FEMA regulations and proper documentation is required for amounts above ₹50 lakhs."
    },
    {
      question: "Do I need to visit India to complete the purchase?",
      answer: "Not necessarily. You can authorize someone in India through a Power of Attorney (POA) to handle the transaction on your behalf. We facilitate virtual property tours, online documentation, and digital signing to make the process seamless from abroad."
    },
    {
      question: "Can I get a home loan as an NRI?",
      answer: "Yes, many Indian banks offer home loans to NRIs. You can typically get loans up to 80-85% of the property value. The loan can be disbursed in Indian Rupees and repaid through your NRE/NRO account. We assist with loan applications and processing."
    },
    {
      question: "What are the tax implications for NRI property investors?",
      answer: "NRIs are eligible for tax deductions under Section 80C (principal repayment) and Section 24(b) (interest payment). When selling property, long-term capital gains tax applies (20% with indexation benefit). TDS of 20% is deducted on sale proceeds. We provide complete tax advisory services."
    },
    {
      question: "Can I repatriate the sale proceeds when I sell the property?",
      answer: "Yes, you can repatriate the sale proceeds of up to two residential properties in a financial year, subject to certain conditions. The amount should not exceed the original investment made through foreign exchange. Proper documentation and RBI compliance are essential."
    },
    {
      question: "How do you handle property management if I'm abroad?",
      answer: "We offer comprehensive property management services including rental management, tenant screening, maintenance coordination, rent collection, and regular property inspections. You'll receive monthly reports and updates on your investment."
    },
    {
      question: "What is the typical timeline for property purchase?",
      answer: "The entire process typically takes 25-30 days from initial consultation to booking. This includes property selection (5-7 days), legal verification (7-10 days), financial arrangements (5-7 days), and final documentation (3-5 days). Timeline may vary based on specific circumstances."
    },
    {
      question: "Are there any restrictions on renting out my property?",
      answer: "No, NRIs can freely rent out their properties in India. Rental income must be credited to your NRO account and is taxable in India. TDS of 30% is deducted on rent if it exceeds ₹50,000 per month. We can manage the entire rental process for you."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#090909] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#B7AC88]">Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about NRI property investment in India
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#B7AC88]/20 rounded-lg overflow-hidden hover:border-[#B7AC88]/50 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
              >
                <span className="text-white font-semibold text-lg md:text-xl pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#B7AC88] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-[#B7AC88]/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#B7AC88]/10 to-[#B7AC88]/5 border border-[#B7AC88]/30 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Our NRI property experts are available 24/7 to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B7AC88] text-black px-6 py-3 font-semibold hover:bg-[#a69977] transition-colors duration-300 inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Schedule a Call
            </button>
            <button className="border-2 border-[#B7AC88] text-[#B7AC88] px-6 py-3 font-semibold hover:bg-[#B7AC88] hover:text-black transition-colors duration-300 inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


