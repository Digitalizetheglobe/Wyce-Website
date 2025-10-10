"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "🏡 The Quiet Side of Luxury: Why WYCE Believes Thoughtfulness Is the New Opulence",
    excerpt:
      "Luxury has always been linked with what's visible — high ceilings, imported fittings, grand entrances. But true luxury is not about what you see. It's about what you feel when you step inside.",
    category: "Real Estate",
    date: "October 5, 2024",
    image: "/images/project-1.png",
    slug: "quiet-side-of-luxury",
  },
  {
    id: 2,
    title: "🌇 Space Is the New Luxury: Inside WYCE's 11-Acre Vision for the Select Few",
    excerpt:
      "In most cities today, luxury living has started to mean living small but paying big. WYCE saw this shift and decided to build differently — to create homes that give people back what they've lost: space.",
    category: "Real Estate",
    date: "October 3, 2024",
    image: "/images/project-2.png",
    slug: "space-new-luxury",
  },
  {
    id: 3,
    title: "🌿 Beyond Green Walls: How WYCE Designs Homes That Breathe",
    excerpt:
      "Almost every developer claims to build eco-friendly homes. But most of it stops at token gestures. WYCE goes beyond that by designing a lifestyle that breathes, not just buildings that look green.",
    category: "Real Estate",
    date: "September 28, 2024",
    image: "/images/project-3.png",
    slug: "beyond-green-walls",
  },
  {
    id: 4,
    title: "🏞️ Bavdhan: Where the City Meets Serenity",
    excerpt:
      "Bavdhan is one of those rare neighborhoods where city energy and nature's calm coexist perfectly. WYCE chose this location for ExcluCity because it captures both — modern convenience and natural serenity.",
    category: "Real Estate",
    date: "September 25, 2024",
    image: "/images/project-4.png",
    slug: "bavdhan-city-meets-serenity",
  },
  {
    id: 5,
    title: "💬 Designing Connection: The Subtle Luxury of Belonging at WYCE",
    excerpt:
      "Most modern housing projects focus on privacy but forget the joy of connection. WYCE believes both can exist together. At ExcluCity, the community is designed not just for living, but for belonging.",
    category: "Real Estate",
    date: "September 20, 2024",
    image: "/images/project-1.png",
    slug: "designing-connection",
  },
];

const recentPosts = [
  {
    id: 1,
    title: "🏡 The Quiet Side of Luxury: Why WYCE Believes Thoughtfulness Is the New Opulence",
    date: "October 5, 2024",
    slug: "quiet-side-of-luxury",
  },
  {
    id: 2,
    title: "🌇 Space Is the New Luxury: Inside WYCE's 11-Acre Vision for the Select Few",
    date: "October 3, 2024",
    slug: "space-new-luxury",
  },
  {
    id: 3,
    title: "🌿 Beyond Green Walls: How WYCE Designs Homes That Breathe",
    date: "September 28, 2024",
    slug: "beyond-green-walls",
  },
  {
    id: 4,
    title: "🏞️ Bavdhan: Where the City Meets Serenity",
    date: "September 25, 2024",
    slug: "bavdhan-city-meets-serenity",
  },
  {
    id: 5,
    title: "💬 Designing Connection: The Subtle Luxury of Belonging at WYCE",
    date: "September 20, 2024",
    slug: "designing-connection",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <>

      <section className="w-full text-white py-10 md:py-16" style={{background: 'linear-gradient(180deg, #090909 0%, #B7AC88 100%)'}}>
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">NRI INVESTMENT</h2>
          <p className="text-gray-200 text-sm md:text-base">
            At WYCE Corp, we believe a home is more than bricks and beams —
            it's the space where your most beautiful moments begin.
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">NRI INVESTMENT</h1>
            
            <div className="space-y-6 text-base leading-relaxed">
              <p>
                An Indian citizen holding a valid Indian passport who has been residing outside India for a continuous period of not less than one year immediately preceding the date of his return to India, or who has been outside India for more than 182 days in the aggregate during the twelve months immediately preceding the date of his return to India, is considered as a Non-Resident Indian (NRI) under the Foreign Exchange Management Act (FEMA).
              </p>
              
              <p>
                NRIs can invest in real estate in India without any restrictions. They can purchase any number of residential or commercial properties in India. However, there are certain guidelines and procedures that need to be followed while making such investments.
              </p>
              
              <p>
                The Reserve Bank of India (RBI) has laid down specific rules and regulations for NRI investments in Indian real estate. These rules are designed to facilitate NRI investments while ensuring compliance with foreign exchange regulations.
              </p>
            </div>
          </div>

          {/* Legal Information Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Legal Information</h2>
            
            <p className="mb-8 text-base leading-relaxed">
              At Wyce Real Estate, we believe in transparency and helping our clients make informed decisions. Below, we've compiled essential legal guidelines to assist you in purchasing a home or property in India.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. No RBI Permission Required:</h3>
                <p className="ml-4 text-base leading-relaxed">
                  NRIs do not need prior permission from the Reserve Bank of India (RBI) to purchase immovable property in India. The purchase can be made using funds remitted to India through normal banking channels or from funds held in NRE/FCNR accounts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">2. Payment Methods:</h3>
                <p className="ml-4 text-base leading-relaxed">
                  Payment for the property must be made in Indian Rupees through normal banking channels. NRIs can use funds from their NRE (Non-Resident External), NRO (Non-Resident Ordinary), or FCNR (Foreign Currency Non-Resident) accounts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Property Types Allowed:</h3>
                <p className="ml-4 text-base leading-relaxed">
                  NRIs can purchase residential and commercial properties without any restrictions. However, they cannot purchase agricultural land, plantation property, or farmhouse property unless it's inherited or gifted.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Documentation Required:</h3>
                <p className="ml-4 text-base leading-relaxed">
                  Standard property purchase documentation along with proof of NRI status, passport copy, visa details, and address proof from the country of residence. A Power of Attorney may be required if the NRI cannot be physically present during the transaction.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Tax Implications:</h3>
                <p className="ml-4 text-base leading-relaxed">
                  NRIs are subject to Indian tax laws on rental income and capital gains from property sales. TDS (Tax Deducted at Source) may apply on rental income and capital gains. It's advisable to consult with a tax advisor for specific tax implications.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">6. Repatriation of Sale Proceeds:</h3>
                <p className="ml-4 text-base leading-relaxed">
                  NRIs can repatriate the sale proceeds of up to two residential properties, subject to certain conditions. The amount repatriated cannot exceed the amount paid for the property in foreign exchange or the amount received through inward remittance.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      

    </>
  );
}

