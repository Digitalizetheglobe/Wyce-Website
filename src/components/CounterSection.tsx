"use client";

export default function CounterSection() {
  return (
    <section 
      className="py-8 sm:py-12 md:py-16"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-40">
          {/* First Counter */}
          <div className="text-center">
            <div 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4"
              style={{ color: "#B7AC88" }}
            >
              30+
            </div>
            <div 
              className="text-base sm:text-lg md:text-xl"
              style={{ color: "#B7AC88" }}
            >
              Years Strong
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block">
            <div 
              className="w-0.5 h-20 md:h-28"
              style={{ backgroundColor: "#B7AC88" }}
            ></div>
          </div>

          {/* Second Counter */}
          <div className="text-center">
            <div 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4"
              style={{ color: "#B7AC88" }}
            >
              6,000+
            </div>
            <div 
              className="text-base sm:text-lg md:text-xl"
              style={{ color: "#B7AC88" }}
            >
              Happy Families
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block">
            <div 
              className="w-0.5 h-20 md:h-28"
              style={{ backgroundColor: "#B7AC88" }}
            ></div>
          </div>

          {/* Third Counter */}
          <div className="text-center">
            <div 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4"
              style={{ color: "#B7AC88" }}
            >
              50+
            </div>
            <div 
              className="text-base sm:text-lg md:text-xl px-4"
              style={{ color: "#B7AC88" }}
            >
              Project Delivered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
