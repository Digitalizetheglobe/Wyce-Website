'use client';

export default function CtaSection() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 flex justify-center items-center">
      <div className="max-w-4xl w-full text-center rounded-2xl py-14 px-8 shadow-lg" style={{background: 'linear-gradient(269.89deg, rgba(183, 172, 136, 0.4) 0.08%, rgba(183, 172, 136, 0.4) 11.14%, rgba(31, 20, 3, 0.4) 33.69%)'}}>
        {/* Small Text */}
        <p className="text-sm text-gray-200 mb-2">Book Now</p>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Let’s Start Your Real Estate <br className="hidden sm:block" />
          Journey Today
        </h2>

        {/* Button */}
        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-6 py-2 text-sm font-medium flex items-center justify-center mx-auto gap-2 transition-all">
          Contact Us
          <span className="text-lg">›</span>
        </button>
      </div>
    </section>
  );
}
