"use client";

import React, { useState } from "react";



export default function BlogPage() {
 

  return (
    <>

      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20 ">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">NRI INVESTMENT</h2>
          <p className="text-gray-200 text-sm md:text-base">
            At WYCE Corp, we believe a home is more than bricks and beams 
            it&apos;s the space where your most beautiful moments begin.
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">NRI Property Investment</h1>
            
            <div className="space-y-6 text-base leading-relaxed">
              <p>
                Understanding Non-Resident Indians (NRIs)
                The Non-Resident Indians (NRIs) are recognized under the Foreign Exchange Regulatory Act, 1973. An Indian citizen who holds a valid Indian passport and who stays abroad for employment, business, or other circumstances indicating an uncertain duration of stay is a NRI.
                Our Commitment to You
                We have curated this section for NRIs who are interested in buying or selling properties and investing in properties in India. We also have a dedicated team for the same. Our main objective is to assist you in addressing any issues or uncertainties you may have regarding NRI property investment. As professionals, we are committed to providing you with the best possible service.
                Legal Information (Law and Procedure)
                Below, we have gathered fundamental legal details to aid you in purchasing a property in India.
                Non-resident Indians holding Indian passports do not require any permission from the Reserve Bank of India (RBI) for acquiring immovable property for bona-fide residential purposes.
                The purchase consideration may be paid by remittance of funds from abroad through normal banking channels or out of NRO/ NRE/ FCNR accounts.
                We advise you to get a copy of the title report by the solicitor of the property. It is important to ensure there are no conditions written in fine print or specific reservations made by the state government.
                You should also look for specific clearance reports. For instance, if the construction is near a seafront, you will need to check for a Coastal Regulation Zone (CRZ) clearance. If the project is being constructed over or in the close vicinity of a heritage building, you must check for any heritage reservations for the premises. This ensures you do not get stuck with a property that is or may get caught in any disputes.  
              </p>
              
            </div>
          </div>


          
        </div>
      </section>
      

    </>
  );
}

