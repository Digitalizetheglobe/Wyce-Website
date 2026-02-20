"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Blog posts data
const blogPosts = [ {
    id: 23,
    title: "A Golden Presence: Pujya Acharya Bhagwant Bhuvanbhushan Surishvarji Maharaj Saheb at WYCE Exclucity",
    excerpt:
      "A spiritually significant visit by Pujya Acharya Bhagwant Bhuvanbhushan Surishvarji Maharaj Saheb at WYCE Exclucity, Bavdhan, marking the vision for a Shwetambar Murtipujak Jain Mandir within the community.",
    category: "Spiritual",
    date: "February 20, 2026",
    language: "en",
    hasTranslations: true,
    image: "/images/guruji12.jpg",
    slug: "golden-presence-pujya-acharya-bhuvanbhushan-surishvarji-wyce-exclucity",
  },{
    id: 25,
    title: "Why 2026 is the Best Year to Invest in a 3 BHK in Bavdhan, Pune",
    excerpt:
      "Understand why 2026 is a pivotal year to invest in a 3 BHK in Bavdhan, Pune, with aligned infrastructure, rising demand for larger homes, and long-term growth potential.",
    category: "Real Estate",
    date: "February 20, 2026",
    image: "/images/blog11.jpeg",
    slug: "why-2026-best-year-invest-3-bhk-in-bavdhan-pune",
  },
  {
    id: 24,
    title: "4 BHK Luxury Flats in Pune: Project Overview, Location & Design Details",
    excerpt:
      "Explore how 4 BHK luxury flats in Bavdhan, Pune—especially at Wyce Exclucity—combine spacious layouts, green planning, and strategic connectivity for long-term value.",
    category: "Luxury Real Estate",
    date: "February 20, 2026",
    image: "/images/blog7.jpeg",
    slug: "4-bhk-luxury-flats-in-pune-project-overview-location-design-details",
  },
 
  {
    id: 22,
    title:
      'The "Reverse Migration" Trend: Why HNIs are Moving from Baner/Kothrud to Bavdhan',
    excerpt:
      "HNIs and discerning professionals are quietly moving away from congested hubs like Baner and Kothrud to Bavdhan's low-density, hillside luxury—discover why Wyce Residences has become the premium choice in West Pune.",
    category: "Real Estate",
    date: "February 20, 2026",
    image: "/images/blog10.jpeg",
    slug: "reverse-migration-hnis-baner-kothrud-to-bavdhan",
  },
  {
    id: 21,
    title:
      'The "Wellness-First" Architecture: Beyond Gyms to Bio-Luminous Spaces in Wyce Residences',
    excerpt:
      "Wyce Residences in Bavdhan redefines luxury with wellness-first, bio-luminous architecture that maximizes natural light, ventilation, biophilic design, and acoustic comfort for holistic well-being.",
    category: "Design & Wellness",
    date: "February 20, 2026",
    image: "/images/blog9.jpeg",
    slug: "wellness-first-architecture-bio-luminous-wyce-residences",
  },
  {
    id: 20,
    title:
      "Smart Home 2.0: Predictive Automation for the Global Indian at Wyce Residences",
    excerpt:
      "Go beyond basic automation with Wyce's AI-enabled luxury residences in Bavdhan, where Smart Home 2.0 predicts your preferences, optimizes energy, and delivers effortless, connected living.",
    category: "Technology & Lifestyle",
    date: "February 20, 2026",
    image: "/images/blog8.jpeg",
    slug: "smart-home-2-0-predictive-automation-wyce-residences",
  },
  {
    id: 19,
    title:
      'The "Micro-Hub" Advantage: Bavdhan’s 15-Minute Lifestyle at Wyce Residences',
    excerpt:
      "Explore how Bavdhan has evolved into Pune's most desirable micro-hub, where Wyce Residences offers a true 15-minute lifestyle with schools, healthcare, dining, and nature all within easy reach.",
    category: "Lifestyle & Location",
    date: "February 20, 2026",
    image: "/images/blog71.jpeg",
    slug: "micro-hub-advantage-bavdhan-15-minute-lifestyle",
  },
  {
    id: 18,
    title:
      'Transitioning from "Asset" to "Legacy": The Rise of 4.5 BHK & Multi-Generational Suites at Wyce Residences',
    excerpt:
      "Discover why HNIs and NRIs are choosing Wyce’s intelligently designed 4.5 BHK and multi-generational suites in Bavdhan to create future-ready homes and lasting family legacies.",
    category: "Real Estate & Family Living",
    date: "February 20, 2026",
    image: "/images/blog6.jpeg",
    slug: "asset-to-legacy-rise-of-4-5-bhk-wyce-residences",
  },
  

  {
    id: 17,
    title: "Apartments for Sale in Pune | 4, 3 & 2 BHK Flats at Best Price",
    excerpt:
      "Experience modern living in Pune with spacious homes, premium amenities, prime connectivity, and thoughtfully designed residences for long-term comfort.",
    category: "Real Estate",
    date: "January 15, 2026",
    image: "/images/blog3.jpeg",
    slug: "apartments-for-sale-in-pune",
  },
  {
    id: 16,
    title: "2 BHK Flats in Bavdhan Pune Price Location Best Deals",
    excerpt:
      "Explore the best 2 BHK flats in Bavdhan, Pune. Uncover pricing details, prime locations, and exclusive offers to secure your perfect living space.",
    category: "Real Estate",
    date: "January 20, 2026",
    image: "/images/blog2.jpeg",
    slug: "2-bhk-flats-in-bavdhan-pune-price-location-best-deals",
  },
  {
    id: 15,
    title: "Spacious 3 BHK in Bavdhan, Pune – Luxury Living Near Kothrud",
    excerpt:
      "Discover luxury living in Bavdhan, Pune with our spacious 3 BHK apartments. Enjoy modern amenities and proximity to Kothrud for a vibrant lifestyle.",
    category: "Real Estate",
    date: "January 27, 2026",
    image: "/images/blog5.jpeg",
    slug: "spacious-3-bhk-in-bavdhan-pune-luxury-living-near-kothrud",
  },
  {
    id: 14,
    title: "Your Q4 Power Move: The First-Time Homebuyer's Guide to Maximum Tax Planning and High ROI",
    excerpt:
      "The period from December to March (Q4) is crunch time for finance professionals everywhere. For a first-time homebuyer, this window represents the absolute best time to secure a Home Loan and lock in crucial tax benefits for the current fiscal year (FY 2025-26). If you are looking for smart investment options that simultaneously reduce your tax burden, stop paying rent and start investing in a residential project in a high-growth market like Pune.",
    category: "Real Estate",
    date: "December 16, 2025",
    image: "/images/blog4.jpeg",
    slug: "q4-home-buying-guide-tax-savings-high-roi-first-time-buyers",
  },
  {
    id: 13,
    title: "The NRI's Guide to Hassle-Free Property Management in Pune: From Purchase to Payout",
    excerpt:
      "NRI Investments in Pune have surged, driven by excellent capital appreciation potential and favorable currency exchange rates. However, one challenge consistently concerns the overseas investor: how to manage a property effectively from thousands of miles away. The traditional headache of remote management—tenant screening, maintenance emergencies, tax compliance, and legal paperwork—no longer has to be a barrier to securing a lucrative Return on Investment (ROI).",
    category: "Real Estate",
    date: "December 13, 2025",
    image: "/images/blog3.jpeg",
    slug: "nri-property-management-in-pune-hassle-free-investment-guide",
  },
  {
    id: 12,
    title: "Decoding the Dollar-Rupee Advantage: Why NRI Investments in Pune are Surging",
    excerpt:
      "For Non-Resident Indians (NRIs) globally, the end of the year often signifies a time for family visits, but increasingly, it marks the optimal window for strategic financial decisions, especially in real estate. This Tax Season (December/January), a confluence of macroeconomic factors—chiefly the favorable dollar-rupee exchange rate and Pune's inherent stability—is driving a massive surge in NRI Investments in Pune.",
    category: "Real Estate",
    date: "December 11, 2025",
    image: "/images/blog2.jpeg",
    slug: "decoding-the-dollar-rupee-advantage-why-nri-investments-in-pune-are-surging",
  },
  {
    id: 11,
    title: "The New Rule of 5: How Infrastructure is Redefining Pune's Property ROI Game",
    excerpt:
      "The old adage in real estate was 'Location, Location, Location.' Today, in Pune, it has been rewritten: 'Location, powered by Connectivity, equals exponential High ROI.' Pune is undergoing an unprecedented infrastructure transformation, moving beyond congested city limits to embrace a future defined by high-speed movement.",
    category: "Real Estate",
    date: "December 10, 2025",
    image: "/images/blog-4.jpg",
    slug: "the-new-rule-of-5-how-infrastructure-is-redefining-punes-property-roi-game",
  },
  {
    id: 10,
    title: "Rent vs. EMI: Why Your Pune Home Loan Puts Substantially More Money Back in Your Wallet",
    excerpt:
      "For years, the 'Rent vs. Buy' debate has dominated financial planning, especially for ambitious professionals in dynamic cities like Pune. The reality, particularly as the Tax Season (December/January) approaches, is that when you factor in tax savings and Pune's explosive real estate growth, investing in a residential project far outshines renting, making it the smarter financial decision.",
    category: "Real Estate",
    date: "December 7, 2025",
    image: "/images/blog4.jpeg",
    slug: "rent-vs-emi-why-your-pune-home-loan-puts-substantially-more-money-back-in-your-wallet",
  },
  {
    id: 1,
    title: "Bavdhan Wasn't on My Radar... Until I Realized Everyone Smart Was Moving There",
    excerpt:
      "When you think of Pune’s dream neighbourhoods, the usual suspects come to mind - Baner,Hinjawadi, Koregaon Park. The well-known, well-hyped areas where everyone assumes you’d want to live.",
    category: "Real Estate",
    date: "October 28, 2025",
    image: "/images/blog2.jpeg",
    slug: "bavdhan-wasn't-on-my-radar",
  },
  {
    id: 2,
    title: "A New 12-Meter Road Transforms Connectivity to Chandani Chowk",
    excerpt:
      "Bavdhan is witnessing a new wave of infrastructure growth and the most exciting update is the 12-meter road now under development. This upcoming stretch is set to redefine everyday travel by connecting residents OF WYCE ExcluCity directly to Chandani Chowk in just 5 minutes.",
    category: "Real Estate",
    date: "October 28, 2025",
    image: "/images/blog-4.jpg",
    slug: "a-new-12-meter-road",
  },
  {
    id: 3,
    title: "3 BHK and 4 BHK in Bavdhan: Investment vs. Lifestyle—Which Configuration is Right for You?",
    excerpt:
      "Choosing a new home is one of the biggest decisions you'll ever make, especially in a prime location like Bavdhan, Pune. When exploring the thriving real estate market here, the choice often comes down to a 3 BHK or a 4 BHK apartment. This decision is not just about size; it's about aligning your purchase with your ultimate goal—be it a growing lifestyle or a smart investment.",
    category: "Real Estate",
    date: "November 15, 2025",
    image: "/images/blog5.jpeg",
    slug: "3-bhk-and-4-bhk-in-bavdhan-investment-vs-lifestyle-which-configuration-is-right-for-you",
  },
  {
    id: 4,
    title: "Beyond the Square Footage: A Deep Dive into Wyce's Exclusive Design Philosophy",
    excerpt:
      "In the bustling real estate market of Pune, particularly in a coveted location like Bavdhan, many developers promise luxury. But at Wyce Corp, we believe true luxury extends far beyond the square footage. It's an immersive experience, a thoughtful integration of aesthetics, functionality, and sustainability, culminating in what we proudly call Wyce's Exclusive Design Philosophy.",
    category: "Real Estate",
    date: "November 20, 2025",
    image: "/images/blog3.jpeg",
    slug: "beyond-the-square-footage-a-deep-dive-into-wyces-exclusive-design-philosophy",
  },
  {
    id: 5,
    title: "The 3 Investment Types in Real Estate That Guarantee Long-Term Wealth (And Where Wyce Fits In)",
    excerpt:
      "Learn the three proven real estate investment types—capital appreciation, rental yield, and dual utility—and discover how Wyce Corp in Bavdhan, Pune, helps investors build long-term wealth with premium 3 & 4 BHK residences.",
    category: "Real Estate",
    date: "November 21, 2025",
    image: "/images/blog4.jpeg",
    slug: "the-3-investment-types-in-real-estate-that-guarantee-long-term-wealth-and-where-wyce-fits-in",
  },
  {
    id: 6,
    title: "Tax Benefits and Compliance for NRIs Investing with Wyce Corp in Pune",
    excerpt:
      "Maximize your ROI as an NRI investing in Bavdhan, Pune real estate with Wyce Corp. Discover tax benefits on home loans, rental income deductions, capital gains advantages, and DTAA compliance for a seamless, profitable investment.",
    category: "Real Estate",
    date: "November 22, 2025",
    image: "/images/blog2.jpeg",
    slug: "tax-benefits-and-compliance-for-nris-investing-with-wyce-corp-in-pune",
  },
  {
    id: 7,
    title: "A Global Lifestyle, Back Home: What Makes Wyce Residences Ideal for the Returning NRI",
    excerpt:
      "Invest in Wyce Residences in Bavdhan, Pune, and enjoy a seamless NRI homecoming with 2, 3 & 4 BHK luxury flats, world-class amenities, strategic connectivity, and complete support for a global-standard lifestyle.",
    category: "Real Estate",
    date: "November 23, 2025",
    image: "/images/blog3.jpeg",
    slug: "a-global-lifestyle-back-home-what-makes-wyce-residences-ideal-for-the-returning-nri",
  },
  {
    id: 8,
    title: "Wyce Corp's 7 Pillars of Exclusivity: Experience The Difference of a World-Class Home",
    excerpt:
      "Discover what defines a premium residence in Bavdhan with Wyce Corp's 7 Pillars of Exclusivity. Explore luxury 2, 3 & 4 BHK flats combining superior construction, world-class amenities, smart technology, and strategic location for NRIs and investors in Pune.",
    category: "Real Estate",
    date: "November 25, 2025",
    image: "/images/blog5.jpeg",
    slug: "wyce-corps-7-pillars-of-exclusivity-experience-the-difference-of-a-world-class-home",
  },
  {
    id: 9,
    title: "Your End-of-Year Wealth Plan: The Ultimate Home Loan Tax Benefit Checklist for FY 2025-26",
    excerpt:
      "Maximize your tax savings with our comprehensive guide to home loan tax benefits for FY 2025-26. Learn about Section 80C and Section 24(b) deductions, and discover how ready-to-move-in properties like Wyce Exclucity can help you save immediately.",
    category: "Real Estate",
    date: "December 5, 2025",
    image: "/images/blog2.jpeg",
    slug: "your-end-of-year-wealth-plan-the-ultimate-home-loan-tax-benefit-checklist-for-fy-2025-26",
  },

];

const recentPosts = [
  {
    id: 18,
    title: "Golden Presence at WYCE Exclucity Bavdhan | Jain Temple Vision",
    date: "February 20, 2026",
    slug: "golden-presence-pujya-acharya-bhuvanbhushan-surishvarji-wyce-exclucity",
  },
  {
    id: 17,
    title: "Apartments for Sale in Pune | 4, 3 & 2 BHK Flats at Best Price",
    date: "January 15, 2026",
    slug: "apartments-for-sale-in-pune",
  },
  {
    id: 16,
    title: "2 BHK Flats in Bavdhan Pune Price Location Best Deals",
    date: "January 20, 2026",
    slug: "2-bhk-flats-in-bavdhan-pune-price-location-best-deals",
  },
  {
    id: 15,
    title: "Spacious 3 BHK in Bavdhan, Pune – Luxury Living Near Kothrud",
    date: "January 27, 2026",
    slug: "spacious-3-bhk-in-bavdhan-pune-luxury-living-near-kothrud",
  },
  {
    id: 14,
    title: "Your Q4 Power Move: The First-Time Homebuyer's Guide to Maximum Tax Planning and High ROI",
    date: "December 16, 2025",
    slug: "q4-home-buying-guide-tax-savings-high-roi-first-time-buyers",
  },
  {
    id: 13,
    title: "The NRI's Guide to Hassle-Free Property Management in Pune: From Purchase to Payout",
    date: "December 13, 2025",
    slug: "nri-property-management-in-pune-hassle-free-investment-guide",
  },
  {
    id: 12,
    title: "Decoding the Dollar-Rupee Advantage: Why NRI Investments in Pune are Surging",
    date: "December 11, 2025",
    slug: "decoding-the-dollar-rupee-advantage-why-nri-investments-in-pune-are-surging",
  },
  {
    id: 11,
    title: "The New Rule of 5: How Infrastructure is Redefining Pune's Property ROI Game",
    date: "December 10, 2025",
    slug: "the-new-rule-of-5-how-infrastructure-is-redefining-punes-property-roi-game",
  },
  {
    id: 10,
    title: "Rent vs. EMI: Why Your Pune Home Loan Puts Substantially More Money Back in Your Wallet",
    date: "December 7, 2025",
    slug: "rent-vs-emi-why-your-pune-home-loan-puts-substantially-more-money-back-in-your-wallet",
  },
  {
    id: 1,
    title: "Bavdhan Wasn't on My Radar... Until I Realized Everyone Smart Was Moving There",
    date: "October 28, 2025",
    slug: "bavdhan-wasn't-on-my-radar",
  },
  {
    id: 2,
    title: "A New 12-Meter Road Transforms Connectivity to Chandani Chowk",
    date: "October 28, 2025",
    slug: "a-new-12-meter-road",
  },
  {
    id: 3,
    title: "3 BHK and 4 BHK in Bavdhan: Investment vs. Lifestyle—Which Configuration is Right for You?",
    date: "November 15, 2025",
    slug: "3-bhk-and-4-bhk-in-bavdhan-investment-vs-lifestyle-which-configuration-is-right-for-you",
  },
  {
    id: 4,
    title: "Beyond the Square Footage: A Deep Dive into Wyce's Exclusive Design Philosophy",
    date: "November 20, 2025",
    slug: "beyond-the-square-footage-a-deep-dive-into-wyces-exclusive-design-philosophy",
  },
  {
    id: 5,
    title: "The 3 Investment Types in Real Estate That Guarantee Long-Term Wealth (And Where Wyce Fits In)",
    date: "November 21, 2025",
    slug: "the-3-investment-types-in-real-estate-that-guarantee-long-term-wealth-and-where-wyce-fits-in",
  },
  {
    id: 6,
    title: "Tax Benefits and Compliance for NRIs Investing with Wyce Corp in Pune",
    date: "November 22, 2025",
    slug: "tax-benefits-and-compliance-for-nris-investing-with-wyce-corp-in-pune",
  },
  {
    id: 7,
    title: "A Global Lifestyle, Back Home: What Makes Wyce Residences Ideal for the Returning NRI",
    date: "November 23, 2025",
    slug: "a-global-lifestyle-back-home-what-makes-wyce-residences-ideal-for-the-returning-nri",
  },
  {
    id: 8,
    title: "Wyce Corp's 7 Pillars of Exclusivity: Experience The Difference of a World-Class Home",
    date: "November 25, 2025",
    slug: "wyce-corps-7-pillars-of-exclusivity-experience-the-difference-of-a-world-class-home",
  },
  {
    id: 9,
    title: "Your End-of-Year Wealth Plan: The Ultimate Home Loan Tax Benefit Checklist for FY 2025-26",
    date: "December 5, 2025",
    slug: "your-end-of-year-wealth-plan-the-ultimate-home-loan-tax-benefit-checklist-for-fy-2025-26",
  },
  // {
  //   id: 3,
  //   title: "Beyond Green Walls: How WYCE Designs Homes That Breathe",
  //   date: "September 28, 2024",
  //   slug: "beyond-green-walls",
  // },
  // {
  //   id: 4,
  //   title: "Bavdhan: Where the City Meets Serenity",
  //   date: "September 25, 2024",
  //   slug: "bavdhan-city-meets-serenity",
  // },
  // {
  //   id: 5,
  //   title: "Designing Connection: The Subtle Luxury of Belonging at WYCE",
  //   date: "September 20, 2024",
  //   slug: "designing-connection",
  // },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<Record<string, string>>({});

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  const handleLanguageChange = (slug: string, lang: string) => {
    setSelectedLanguages(prev => ({ ...prev, [slug]: lang }));
  };

  return (
    <>
      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20" >
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">WYCE<span className="font-breathney text-[#b6a16b] ml-2 ">Journal</span> </h1>
          <p className="text-gray-200 text-sm md:text-base">
            Explore the world of WYCE stories of design, innovation, and life beyond the ordinary.
            Because in every detail, Thoughtful is Beautiful.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Content placeholder for future additions */}
        </div>
      </section>

      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Blog Posts */}
            <div className="lg:col-span-2 space-y-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#121212] overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Blog Card Image */}
                  <Link href={`/blog/${post.slug}${selectedLanguages[post.slug] && selectedLanguages[post.slug] !== 'en' ? `?lang=${selectedLanguages[post.slug]}` : ''}`}>
                    <div className="relative h-120 bg-gray-200 overflow-hidden cursor-pointer">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Blog Card Content */}
                  <div className="p-6">
                    <Link href={`/blog/${post.slug}${selectedLanguages[post.slug] && selectedLanguages[post.slug] !== 'en' ? `?lang=${selectedLanguages[post.slug]}` : ''}`}>
                      <h2 className="text-2xl font-bold text-white mb-3 hover:text-[#B7AC88] transition-colors cursor-pointer">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-white mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Divider Line */}
                    <div className="border-t border-[#D9D9D933] my-4"></div>

                    {/* Footer Section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#B7AC88] text-white">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* {(post as any).hasTranslations ? (
                          <select
                            name="language"
                            id={`language-${post.id}`}
                            value={selectedLanguages[post.slug] || "en"}
                            onChange={(e) => handleLanguageChange(post.slug, e.target.value)}
                            className="px-2 py-2 bg-[#B7AC88] text-white hover:bg-[#121212] hover:text-[#B7AC88] hover:border hover:border-[#B7AC88] transition-colors duration-300 font-medium cursor-pointer"
                          >
                            <option className="bg-[#121212] text-white" value="en">English</option>
                            <option className="bg-[#121212] text-white" value="mr">Marathi</option>
                            <option className="bg-[#121212] text-white" value="hi">Hindi</option>
                            </select>
                        ) : null} */}
                        <Link href={`/blog/${post.slug}${selectedLanguages[post.slug] && selectedLanguages[post.slug] !== 'en' ? `?lang=${selectedLanguages[post.slug]}` : ''}`}>
                          <button className="px-2 py-1.5 bg-[#B7AC88] text-white hover:bg-[#121212] hover:text-[#B7AC88] hover:border hover:border-[#B7AC88] transition-colors duration-300 font-medium cursor-pointer">
                            Read More
                          </button>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6 self-start">
                {/* Search Form */}
                <div className="bg-[#121212] shadow-md p-6">
                  <h3 className="text-xl text-white mb-4">
                    Blog Search
                  </h3>
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-[#B7AC88] rounded-lg bg-black text-white placeholder-gray-400 focus:text-[#B7AC88] focus:outline-none focus:ring-2 focus:ring-[#B7AC88] focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#B7AC88] transition-colors"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                </div>

                {/* Recent Posts */}
                <div className="bg-[#121212] shadow-md p-6">
                  <h3 className="text-xl text-[#fff] mb-6">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={post.id}>
                        <Link href={`/blog/${post.slug}`}>
                          <div className="group cursor-pointer">
                            <h4 className="font-semibold text-[#fff] group-hover:text-[#B7AC88] transition-colors mb-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                              {post.title}
                            </h4>
                            <p className="text-sm text-gray-500">{post.date}</p>
                          </div>
                        </Link>
                        {index < recentPosts.length - 1 && (
                          <div className="border-b border-[#D9D9D933] mt-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

