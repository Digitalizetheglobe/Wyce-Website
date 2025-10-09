"use client";

export default function NRIProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Free consultation to understand your requirements, budget, and investment goals.",
      duration: "Day 1",
      tasks: ["Requirement Analysis", "Budget Discussion", "Location Preferences", "Investment Strategy"]
    },
    {
      number: "02",
      title: "Property Shortlisting",
      description: "We curate a selection of properties matching your criteria with detailed reports.",
      duration: "Day 2-7",
      tasks: ["Virtual Tours", "Market Analysis", "Builder Verification", "Location Assessment"]
    },
    {
      number: "03",
      title: "Documentation & Legal",
      description: "Complete legal due diligence and documentation support with expert guidance.",
      duration: "Day 8-15",
      tasks: ["Title Verification", "Legal Clearance", "POA Preparation", "FEMA Compliance"]
    },
    {
      number: "04",
      title: "Financial Planning",
      description: "Assistance with financing, currency exchange, and tax-efficient structuring.",
      duration: "Day 16-20",
      tasks: ["Loan Processing", "NRE/NRO Setup", "Fund Transfer", "Tax Consultation"]
    },
    {
      number: "05",
      title: "Booking & Agreement",
      description: "Finalize booking with builder and execute agreements with complete transparency.",
      duration: "Day 21-25",
      tasks: ["Token Payment", "Agreement Signing", "Registration", "Payment Schedule"]
    },
    {
      number: "06",
      title: "Post-Purchase Support",
      description: "Ongoing support for construction updates, possession, and property management.",
      duration: "Ongoing",
      tasks: ["Progress Updates", "Quality Checks", "Possession Assistance", "Property Management"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#090909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Journey to <span className="text-[#B7AC88]">Homeownership</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A simple, transparent 6-step process designed specifically for NRIs
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B7AC88] via-[#B7AC88]/50 to-transparent" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="lg:w-5/12">
                  <div className="bg-[#1a1a1a] border border-[#B7AC88]/20 p-8 rounded-xl hover:border-[#B7AC88] transition-all duration-300 group">
                    {/* Number and Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-[#B7AC88]/20 group-hover:text-[#B7AC88]/40 transition-colors">
                        {step.number}
                      </span>
                      <span className="bg-[#B7AC88]/10 text-[#B7AC88] px-4 py-1 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tasks */}
                    <div className="grid grid-cols-2 gap-3">
                      {step.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#B7AC88] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-300">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle - Hidden on mobile */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#B7AC88] border-4 border-[#090909] flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-[#090909]" />
                  </div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden lg:block lg:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#B7AC88]/10 to-[#B7AC88]/5 border border-[#B7AC88]/30 p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our NRI property experts today
          </p>
          <button className="bg-[#B7AC88] text-black px-8 py-4 text-lg font-semibold hover:bg-[#a69977] transition-all duration-300 inline-flex items-center gap-2">
            Book Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


