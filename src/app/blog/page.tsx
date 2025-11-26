"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Bavdhan Wasn’t on My Radar... Until I Realized Everyone Smart Was Moving There",
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

];

const recentPosts = [
  {
    id: 1,
    title: "Bavdhan Wasn’t on My Radar... Until I Realized Everyone Smart Was Moving There",
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
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
                  <Link href={`/blog/${post.slug}`}>
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
                    <Link href={`/blog/${post.slug}`}>
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
                      <Link href={`/blog/${post.slug}`}>
                        <button className="px-2 py-2 bg-[#B7AC88] text-white hover:bg-[#121212] hover:text-[#B7AC88] hover:border hover:border-[#B7AC88] transition-colors duration-300 font-medium cursor-pointer">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
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
                          <h4 className="font-semibold text-[#fff] group-hover:text-[#B7AC88] transition-colors mb-1 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
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

