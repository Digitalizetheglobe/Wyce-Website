"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Quiet Side of Luxury: Why WYCE Believes Thoughtfulness Is the New Opulence",
    excerpt:
      "Luxury has always been linked with what's visible — high ceilings, imported fittings, grand entrances. But true luxury is not about what you see. It's about what you feel when you step inside.",
    category: "Real Estate",
    date: "October 5, 2024",
    image: "/images/blog2.jpeg",
    slug: "quiet-side-of-luxury",
  },
  {
    id: 2,
    title: "Space Is the New Luxury: Inside WYCE's 11-Acre Vision for the Select Few",
    excerpt:
      "In most cities today, luxury living has started to mean living small but paying big. WYCE saw this shift and decided to build differently — to create homes that give people back what they've lost: space.",
    category: "Real Estate",
    date: "October 3, 2024",
    image: "/images/blog3.jpeg",
    slug: "space-new-luxury",
  },
  {
    id: 3,
    title: "Beyond Green Walls: How WYCE Designs Homes That Breathe",
    excerpt:
      "Almost every developer claims to build eco-friendly homes. But most of it stops at token gestures. WYCE goes beyond that by designing a lifestyle that breathes, not just buildings that look green.",
    category: "Real Estate",
    date: "September 28, 2024",
    image: "/images/project-3.png",
    slug: "beyond-green-walls",
  },
  {
    id: 4,
    title: "Bavdhan: Where the City Meets Serenity",
    excerpt:
      "Bavdhan is one of those rare neighborhoods where city energy and nature's calm coexist perfectly. WYCE chose this location for ExcluCity because it captures both — modern convenience and natural serenity.",
    category: "Real Estate",
    date: "September 25, 2024",
    image: "/images/blog4.jpeg",
    slug: "bavdhan-city-meets-serenity",
  },
  {
    id: 5,
    title: "Designing Connection: The Subtle Luxury of Belonging at WYCE",
    excerpt:
      "Most modern housing projects focus on privacy but forget the joy of connection. WYCE believes both can exist together. At ExcluCity, the community is designed not just for living, but for belonging.",
    category: "Real Estate",
    date: "September 20, 2024",
    image: "/images/blog5.jpeg",
    slug: "designing-connection",
  },
];

const recentPosts = [
  {
    id: 1,
    title: "The Quiet Side of Luxury: Why WYCE Believes Thoughtfulness Is the New Opulence",
    date: "October 5, 2024",
    slug: "quiet-side-of-luxury",
  },
  {
    id: 2,
    title: "Space Is the New Luxury: Inside WYCE's 11-Acre Vision for the Select Few",
    date: "October 3, 2024",
    slug: "space-new-luxury",
  },
  {
    id: 3,
    title: "Beyond Green Walls: How WYCE Designs Homes That Breathe",
    date: "September 28, 2024",
    slug: "beyond-green-walls",
  },
  {
    id: 4,
    title: "Bavdhan: Where the City Meets Serenity",
    date: "September 25, 2024",
    slug: "bavdhan-city-meets-serenity",
  },
  {
    id: 5,
    title: "Designing Connection: The Subtle Luxury of Belonging at WYCE",
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
      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20" >
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">WYCE<span className="font-breathney text-[#b6a16b] ml-2 ">Journal</span> </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Explore the world of WYCE stories of design, innovation, and life beyond the ordinary.
            Because in every detail, Thoughtful is Beautiful.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
          {/* Image Section */}
        
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
                    <div className="h-120 bg-gray-200 overflow-hidden cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                        <button className="px-6 py-2 bg-[#B7AC88] text-white hover:bg-[#121212] hover:text-[#B7AC88] hover:border hover:border-[#B7AC88] transition-colors duration-300 font-medium cursor-pointer">
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
              <div className="sticky top-25 space-y-6">
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
                          <h4 className="font-semibold text-[#fff] group-hover:text-[#B7AC88] transition-colors mb-1 line-clamp-2">
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

