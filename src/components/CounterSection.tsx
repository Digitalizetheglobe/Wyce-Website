"use client";

export default function CounterSection() {
  return (
    <section 
      className="py-1"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-15 md:gap-45">
          {/* First Counter */}
          <div className="text-center">
            <div 
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ color: "#B7AC88" }}
            >
              3
            </div>
            <div 
              className="text-lg md:text-xl"
              style={{ color: "#B7AC88" }}
            >
              Iconic Cities
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block">
            <div 
              className="w-0.5 h-28"
              style={{ backgroundColor: "#B7AC88" }}
            ></div>
          </div>

          {/* Second Counter */}
          <div className="text-center">
            <div 
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ color: "#B7AC88" }}
            >
              8k+
            </div>
            <div 
              className="text-lg md:text-xl"
              style={{ color: "#B7AC88" }}
            >
              Happy Families
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block">
            <div 
              className="w-0.5 h-28"
              style={{ backgroundColor: "#B7AC88" }}
            ></div>
          </div>

          {/* Third Counter */}
          <div className="text-center">
            <div 
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ color: "#B7AC88" }}
            >
              9+
            </div>
            <div 
              className="text-lg md:text-xl"
              style={{ color: "#B7AC88" }}
            >
              Decades of Collective<br />Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
