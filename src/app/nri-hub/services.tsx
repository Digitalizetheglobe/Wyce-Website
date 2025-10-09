"use client";

export default function NRIServices() {
  const services = [
    {
      icon: "🏠",
      title: "Property Selection",
      description: "Curated selection of premium properties across major Indian cities with verified builders and RERA compliance.",
      features: ["Virtual Tours", "Detailed Reports", "Location Analysis"]
    },
    {
      icon: "📄",
      title: "Legal Assistance",
      description: "Complete legal support including documentation, title verification, and compliance with FEMA regulations.",
      features: ["Power of Attorney", "Title Verification", "Legal Documentation"]
    },
    {
      icon: "💰",
      title: "Financial Planning",
      description: "Expert guidance on home loans, NRE/NRO accounts, and tax-efficient investment strategies.",
      features: ["Loan Assistance", "Repatriation Support", "Tax Guidance"]
    },
    {
      icon: "🔑",
      title: "Property Management",
      description: "End-to-end property management including rental services, maintenance, and regular updates.",
      features: ["Rental Management", "Maintenance", "Regular Reporting"]
    },
    {
      icon: "🌐",
      title: "Virtual Support",
      description: "Complete virtual assistance with online documentation, video calls, and digital signing capabilities.",
      features: ["Video Consultations", "Digital Signing", "Online Tracking"]
    },
    {
      icon: "✈️",
      title: "Site Visit Coordination",
      description: "Organized site visits during your India trips with accommodation, transport, and builder meetings.",
      features: ["Itinerary Planning", "Builder Meetings", "Property Tours"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#090909] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="text-[#B7AC88]">NRI Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Everything you need to invest in Indian real estate from abroad, 
            all under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#B7AC88]/20 p-8 rounded-lg hover:border-[#B7AC88] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[#B7AC88]">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


