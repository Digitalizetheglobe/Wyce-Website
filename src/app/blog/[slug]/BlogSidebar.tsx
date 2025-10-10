"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

interface RecentPost {
  id: number;
  title: string;
  date: string;
  slug: string;
}

interface BlogSidebarProps {
  recentPosts: RecentPost[];
}

export default function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="sticky top-25 space-y-6">
      {/* Search Form */}
      <div className="bg-[#121212] shadow-md p-6">
        <h3 className="text-xl text-white mb-4">Blog Search</h3>
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
        <h3 className="text-xl text-[#fff] mb-6">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((recentPost, index) => (
            <div key={recentPost.id}>
              <Link href={`/blog/${recentPost.slug}`}>
                <div className="group cursor-pointer">
                  <h4 className="font-semibold text-[#fff] group-hover:text-[#B7AC88] transition-colors mb-1 line-clamp-2">
                    {recentPost.title}
                  </h4>
                  <p className="text-sm text-gray-500">{recentPost.date}</p>
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
  );
}

