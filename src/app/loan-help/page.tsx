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
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Loan Help</h2>
          <p className="text-gray-200 text-sm md:text-base">
            At WYCE Corp, we believe a home is more than bricks and beams —
            it's the space where your most beautiful moments begin.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
          {/* Image Section */}
        
        </div>
      </section>

      {/* Loan Help Section */}
      <section className="w-full bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Loan Help</h1>
          
          <p className="text-lg leading-relaxed mb-8">
            Indian citizens residing abroad for employment, business, or other long-term purposes often face unique challenges when seeking financial support for property investments. At Wyce Real Estate, we provide specialized loan assistance tailored for NRIs (Non-Resident Indians). Our expert team offers personalized guidance to help you secure home loans for property purchases, investments, and construction -ensuring your financial needs are handled efficiently and transparently, no matter where you are.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who Qualifies for NRI Loan Assistance</h2>
          
          <p className="text-lg mb-6">
            The following individuals are eligible for our NRI loan services:
          </p>

          <ul className="space-y-4 mb-12">
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">•</span>
              <span className="text-lg leading-relaxed">
                Government officials posted abroad under Indian missions or agencies where salaries are drawn from Government resources.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">•</span>
              <span className="text-lg leading-relaxed">
                Government employees deputed abroad on assignments with foreign governments or international organizations such as the World Bank, IMF, WHO, or ESCAP
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">•</span>
              <span className="text-lg leading-relaxed">
                Officials from State Governments and Public Sector Undertakings (PSUs) temporarily assigned or posted to overseas branches or offices.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="w-full bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">ELIGIBILITY CRITERIA OF NRIS FOR HOME LOAN -</h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">AGE</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">•</span>
              <span className="text-lg leading-relaxed">
                The loan applicant has to be 21 years of age.<span className="text-">QUALIFICATION</span>
              </span>
            </li>
          </ul>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">•</span>
              <span className="text-lg leading-relaxed">
                The NRI loan seeker has to be a graduate.<span className="text-">INCOME</span>
              </span>
            </li>
          </ul>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">•</span>
              <span className="text-lg leading-relaxed">
                The loan applicant has to have a minimum monthly income of $ 2,000 (although, this criterion may differ across HFCs). The eligibility is also determined by the stability and continuity of your employment or business.<span className="text-">PAYMENT OPTIONS</span>
              </span>
            </li>
          </ul>

        </div>
      </section>

    </>
  );
}

