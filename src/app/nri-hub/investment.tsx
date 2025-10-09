"use client";

import Image from "next/image";

export default function NRIInvestment() {
  const opportunities = [
    {
      type: "Residential",
      title: "Premium Apartments",
      locations: ["Mumbai", "Bangalore", "Pune", "Hyderabad"],
      roi: "8-12% Annual",
      investment: "₹50L - ₹5Cr",
      highlights: ["High Rental Yield", "Capital Appreciation", "Lifestyle Living"],
      image: "/images/project-1.png"
    },
    {
      type: "Commercial",
      title: "Office Spaces",
      locations: ["Gurgaon", "Noida", "Mumbai", "Chennai"],
      roi: "10-15% Annual",
      investment: "₹1Cr - ₹10Cr",
      highlights: ["Corporate Tenants", "Steady Returns", "Low Maintenance"],
      image: "/images/project-2.png"
    },
    {
      type: "Luxury",
      title: "Villas & Penthouses",
      locations: ["Goa", "Lonavala", "Ooty", "Coorg"],
      roi: "6-10% Annual",
      investment: "₹2Cr - ₹20Cr",
      highlights: ["Premium Lifestyle", "Holiday Homes", "Exclusive Locations"],
      image: "/images/project-3.png"
    },
    {
      type: "Plots",
      title: "Land Parcels",
      locations: ["NCR", "Bangalore", "Hyderabad", "Ahmedabad"],
      roi: "12-18% Annual",
      investment: "₹30L - ₹3Cr",
      highlights: ["High Appreciation", "Future Development", "Flexible Use"],
      image: "/images/project-4.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Investment <span className="text-[#B7AC88]">Opportunities</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Diverse portfolio options tailored for NRI investors seeking 
            stable returns and long-term growth
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] border border-[#B7AC88]/20 rounded-xl overflow-hidden hover:border-[#B7AC88] transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={opportunity.image}
                  alt={opportunity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#B7AC88] text-black px-4 py-2 rounded-full font-semibold text-sm">
                  {opportunity.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {opportunity.title}
                </h3>

                {/* Locations */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.locations.map((location, idx) => (
                    <span
                      key={idx}
                      className="bg-[#B7AC88]/10 text-[#B7AC88] px-3 py-1 rounded-full text-sm"
                    >
                      {location}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#B7AC88]/20">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Expected ROI</div>
                    <div className="text-[#B7AC88] font-bold text-lg">{opportunity.roi}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Investment Range</div>
                    <div className="text-white font-bold text-lg">{opportunity.investment}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {opportunity.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#B7AC88] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full bg-[#B7AC88] text-black py-3 font-semibold hover:bg-[#a69977] transition-colors duration-300 flex items-center justify-center gap-2">
                  View Properties
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tax Benefits Section */}
        <div className="bg-gradient-to-r from-[#B7AC88]/10 to-[#B7AC88]/5 border border-[#B7AC88]/30 p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Tax Benefits for NRI Investors
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h4 className="text-white font-semibold mb-2">Section 80C Benefits</h4>
              <p className="text-gray-400 text-sm">
                Deduction up to ₹1.5L on home loan principal repayment
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💳</div>
              <h4 className="text-white font-semibold mb-2">Section 24(b) Benefits</h4>
              <p className="text-gray-400 text-sm">
                Deduction up to ₹2L on home loan interest for self-occupied property
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-white font-semibold mb-2">Capital Gains</h4>
              <p className="text-gray-400 text-sm">
                Long-term capital gains tax exemption under Section 54
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#B7AC88] text-black px-8 py-3 font-semibold hover:bg-[#a69977] transition-colors duration-300 inline-flex items-center gap-2">
              Download Tax Guide
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


