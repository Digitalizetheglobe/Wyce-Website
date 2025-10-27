import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRI property investment | WYCE Corp",
  description: "Simplify your NRI property investment with WYCE Corp. Our dedicated desk offers seamless support from selection to possession, ensuring a trusted experience worldwide.",
  keywords: "NRI Property Investment in India, NRI Property Investment in Pune, NRI Real Estate Investment, Buy Property in India for NRI, NRI Home Buying in India, NRI Real Estate Developers in Pune, Property for NRI in India, Secure NRI Property Investment, NRI Real Estate Services India, Trusted Developers for NRI Buyers in Pune, NRI property investment",
  alternates: {
    canonical: "https://www.wycecorp.com/nri-hub"
  }
};

export default function BlogPage() {
 

  return (
    <>

      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20 ">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">
            NRI <span className="font-breathney text-[#b6a16b] ml-1 sm:ml-2 text-[12px] sm:text-xl md:text-xl lg:text-xl">INVESTMENT</span>
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            WYCE Corp Bringing you closer to home, wherever you are.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
          {/* Image Section */}
        
        </div>
      </section>

      <section className="w-full text-white py-10 md:py-16 bg-black">
        
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* NRI Investment Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">NRI Property <span className="font-breathney text-[#b6a16b] text-xl">INVESTMENT</span></h1>
            
            <div className="space-y-6 text-base leading-relaxed">
              <p>
                Our dedicated NRI Desk is designed to simplify the entire process from property selection and legal formalities to documentation and possession so you can invest confidently, wherever you are in the world. With a legacy of delivering 80+ projects and 50+ landmarks, WYCE stands for trust, transparency, and thoughtful living  values that matter most when you’re making a long-distance investment.
              </p>
              <p>
                For Non-Resident Indians, owning a home in India is more than an investment  it’s an emotional connection to roots, family, and a sense of belonging. At WYCE Corp, we understand this sentiment deeply. Our dedicated NRI Desk has been created to simplify every step of your home-buying journey, offering a seamless, transparent, and trusted experience no matter where you are in the world.
              </p>  
              <p>
                With over 80+ completed projects and 50+ landmarks delivered by our founding partners, WYCE Corp represents a legacy built on trust, craftsmanship, and thoughtful design. Whether you’re looking for a home for your family, an investment for the future, or simply a place that keeps you connected to India, we ensure the process is effortless and reassuring.
              </p>
              <p>
                Our NRI Desk provides end-to-end assistance from project discovery and virtual walkthroughs to legal documentation, registration, and possession. We also assist with home loan coordination, currency compliance, and Power of Attorney procedures, ensuring all formalities adhere to RBI and FEMA guidelines. Our tie-ups with leading Indian banks make financing simple and efficient for NRIs, OCIs, and PIOs alike.
              </p>
              <p>
                Understanding the challenges of distance, our team offers personalized digital support, including virtual meetings, video tours, real-time construction updates, and progress reports. We also extend post-possession services such as rental management and resale assistance, so your property remains in safe hands even after handover.
              </p>
              <p>
                At WYCE Corp, we believe that “Thoughtful is Beautiful”  and that philosophy extends to how we care for our NRI clients. Every detail, every conversation, and every step is designed to make your home-buying experience smooth, secure, and satisfying.
              </p>
              <p>
                For dedicated assistance, reach out to our NRI Relationship Team at:
                +91 7549799799   Sales@wycecorp.com
              </p>
              
            </div>
          </div>


          
        </div>
      </section>
      

    </>
  );
}

