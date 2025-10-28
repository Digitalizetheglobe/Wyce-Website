import React from "react";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BlogSidebar from "@/app/blog/[slug]/BlogSidebar";

// Blog content data
interface BlogData {
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
  content: string;
}

const blogContent: Record<string, BlogData> = {
  "bavhdan-wasn't-on-my-radar": {
    title: "Bavdhan Wasn’t on My Radar... Until I Realized Everyone Smart Was Moving There",
    date: "October 28, 2025",
    category: "Real Estate",
    author: "WYCE Team",
    image: "/images/blog2.jpeg",
    content: `
      <p>When you think of Pune’s dream neighbourhoods, the usual suspects come to mind - Baner,Hinjawadi, Koregaon Park. The well-known, well-hyped areas where everyone assumes you’d want to live.</p>
      <p>But over the last few years, something interesting has been happening: the people who know Pune, who know a thing or two about value and calm and long-term growth, have begun gravitating elsewhere. Quietly. Deliberately.</p>

      <h2>And that place is Bavdhan</h2>
      <p>At first, it doesn’t shout for attention. It’s not splashed across billboards or drowning in loud marketing. But that’s exactly the charm. Bavdhan is understated, effortless, and balanced, the kind of location that reveals its advantages slowly, but completely.</p>

      <h2>Here’s what makes it special : </h2>
      <h2>1. The Perfect Balance of Calm and Connectivity</h2>
      <p>Situated at the junction of convenience and calm, Bavdhan opens up to Pune's lush green hills on one side and seamlessly connects to Kothrud, Baner, and Hinjewadi. Wide roads, clean air, and quick access mean you can reach work in twenty minutes without compromising on peace. It is that rare neighborhood where you get the city's buzz without the chaos.</p>

      <h2>2. A Lifestyle That’s Quietly Evolving</h2>
      <p>But the charm of Bavdhan goes beyond its location. Boutique cafés, modern gyms, reputed schools, and cultural spaces weave a new lifestyle fabric here. The community feels young, aware, and discerning-people who prefer comfort and quality over showy addresses. It's becoming the neighborhood of choice for those who want their everyday life to flow effortlessly.</p>

      <h2>3. An Investment That Keeps Growing</h2>
      <p>For any investor, Bavdhan represents one of the most promising growth zones in Pune. Property values have seen consistent appreciation, rental demand remains strong, and infrastructure evolution in the area continues. It is a location that is maturing, rather than just developing, with great intent and potential.</p>
      <p>Not every developer considers Bavdhan to be just another project location. WYCE, for example, is setting a new benchmark with WYCE ExcluCity, a project designed around living and not just real estate. Spread across eleven acres with only eleven towers, nearly sixty percent open space, and over seventy thousand square feet of lifestyle amenities, it redefines thoughtful luxury. Every detail feels intentional, from forest gardens and cycling tracks to wellness zones and amphitheatres, everything has space to breathe.</p>

      <h2>4. Less, But Better</h2>
      <p>In this world of more-more towers, more density, more noise, WYCE has chosen restraint. It is all about space, light, and community-creating homes that exude calm yet feel connected. Bavdhan provides the perfect canvas for such mindful, well-balanced living.</p>

      <h2>5. The Quiet Realisation</h2>
      <p>Still scrolling through endless listings in crowded neighborhoods? Stop for a moment. Take a drive through Bavdhan. Watch the skyline open up, the air clear out, and the calm settle in. You might just understand why Pune's smartest homebuyers are moving here, because sometimes the best places don't need to shout; they're simply thoughtful.</p>

      <h2>Conclusion</h2>
      <p>In the end, Bavdhan isn't just another pin on Pune's real estate map-it's a mindset shift. It represents smarter, quieter kinds of urban living where space, air, and time still matter. For those who value balance over buzz, Bavdhan isn't just the next big thing-it's the right one.</p>
    `,
  },
  "a-new-12-meter-road": {
    title: "A New 12-Meter Road Transforms Connectivity to Chandani Chowk",
    date: "October 28, 2025",
    category: "Real Estate",
    author: "WYCE Team",
    image: "/images/blog-4.jpg",
    content: `
      <p>Seamless access. Zero congestion. Faster commutes.</p>
      <p>Bavdhan is witnessing a new wave of infrastructure growth and the most exciting update is the 12-meter road now under development. This upcoming stretch is set to redefine everyday travel by connecting residents OF WYCE ExcluCity directly to Chandani Chowk in just 5 minutes.</p>

      <h2>Wyce ExcluCity Journal</h2>
      <p>Bavdhan is quickly becoming one of Pune’s most promising residential destinations and there is a wave of new infrastructure which can give residents of WYCE ExcluCity the seamless connectivity which can cut travel time.</p>

      <h2>A 12-Meter Road Changing Everything in Bavdhan </h2>
      <p>The most exciting development underway is the 12-meter-wide road that will soon connect Bavdhan directly to Chandani Chowk.</p>
      <p>Once completed, this new link will cut travel time to just 5 minutes, transforming everyday connectivity for residents and commuters alike.</p>
      <p>This stretch is not just a convenience upgrade, it's a catalyst for growth. Better connectivity means higher property demand, faster development, and stronger long-term returns for investors who enter the market early.</p>
    `,
  },

};

const recentPosts = [
  {
    id: 1,
    title: "Bavdhan Wasn’t on My Radar... Until I Realized Everyone Smart Was Moving There",
    date: "October 28, 2025",
    slug: "bavhdan-wasn't-on-my-radar",
  },
  {
    id: 2,
    title: "A New 12-Meter Road Transforms Connectivity to Chandani Chowk",
    date: "October 28, 2025",
    slug: "a-new-12-meter-road",
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

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const post = blogContent[resolvedParams.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link
            href="/blog"
            className="text-[#B7AC88] hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#B7AC88] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Blog Content */}
          <div className="lg:col-span-2">
            <article className="bg-[#121212] overflow-hidden">
              {/* Featured Image */}
              <div className="h-96 bg-gray-800 overflow-hidden mb-8 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="px-6 pb-8">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-[#B7AC88] text-white">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="text-sm text-gray-400">By {post.author}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  {post.title}
                </h1>

                {/* Divider */}
                <div className="border-t border-[#D9D9D933] mb-8"></div>

                {/* Article Body */}
                <div
                  className="blog-content max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />



              </div>
            </article>
          </div>

          {/* Right Side - Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}

