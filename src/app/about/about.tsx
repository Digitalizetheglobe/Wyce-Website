"use client";
import Image from "next/image";


export default function HeroSection() {
  return (
    <>
      <section className="reltive bg-[#0d0d0d] text-white py-16  overflow-hidden text-center">
        <div className="max-w-full px-10 sm:px-10 md:px-60 lg:px- mx-autoitems-center">
     
          {/* Right Text Section */}
          <div className="text-center mt-12 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              A Design-led Real Estate Company in Pune
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At WYCE Corp, we believe a home is more than bricks and beams — 
              it&apos;s the space where your most beautiful moments begin. 
              As WYCE Corp builders, we put heart into every project, 
              designing homes that welcome joy, comfort, and connection.
            </p>

          </div>
        </div>

        <div className="container mx-auto px-8 sm:px-6 md:px-15 lg:px-25">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-20">
            {/* First Counter */}
            <div className="text-center">
              <div 
                className="text-5xl sm:text-6xl md:text-5xl font-thin mb-3 md:mb-4"
                style={{ color: "#fff" }}
              >
                30+
              </div>
              <div 
                className="text-base sm:text-lg md:text-xl"
                style={{ color: "#fff" }}
              >
                Years Strong
              </div>
            </div>

            {/* Divider Line */}
            <div className="hidden md:block">
              <div 
                className="w-0.5 h-20 md:h-28"
                style={{ backgroundColor: "#fff" }}
              ></div>
            </div>

            {/* Second Counter */}
            <div className="text-center">
              <div 
                className="text-5xl sm:text-6xl md:text-5xl font-thin mb-3 md:mb-4"
                style={{ color: "#fff" }}
              >
                6,000+
              </div>
              <div 
                className="text-base sm:text-lg md:text-xl"
                style={{ color: "#fff" }}
              >
                Happy Families
              </div>
            </div>

            {/* Divider Line */}
            <div className="hidden md:block">
              <div 
                className="w-0.5 h-20 md:h-28"
                style={{ backgroundColor: "#fff" }}
              ></div>
            </div>

            {/* Third Counter */}
            <div className="text-center">
              <div 
                className="text-5xl sm:text-6xl md:text-5xl font-thin mb-3 md:mb-4"
                style={{ color: "#fff" }}
              >
                50+
              </div>
              <div 
                className="text-base sm:text-lg md:text-xl px-4"
                style={{ color: "#fff" }}
              >
                Project Delivered
              </div>
            </div>

                      {/* Divider Line */}
            <div className="hidden md:block">
              <div 
                className="w-0.5 h-20 md:h-28"
                style={{ backgroundColor: "#fff" }}
              ></div>
            </div>

              <div className="text-center">
              <div 
                className="text-5xl sm:text-6xl md:text-5xl font-thin mb-3 md:mb-4"
                style={{ color: "#fff" }}
              >
                5M+
              </div>
              <div 
                className="text-base sm:text-lg md:text-xl px-4"
                style={{ color: "#fff" }}
              >
                SqFt Of Development
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
