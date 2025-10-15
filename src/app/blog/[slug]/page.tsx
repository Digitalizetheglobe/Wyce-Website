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
  "quiet-side-of-luxury": {
    title: "The Quiet Side of Luxury: Why WYCE Believes Thoughtfulness Is the New Opulence",
    date: "October 5, 2024",
    category: "Real Estate",
    author: "WYCE Team",
    image: "/images/blog2.jpeg",
    content: `
      <h2>Understanding What Luxury Really Means</h2>
      <p>Luxury has always been linked with what's visible — high ceilings, imported fittings, grand entrances, and marble everywhere. But if you take a moment to think about it, true luxury is not about the things you see. It's about what you feel when you step inside.</p>
      <p>WYCE understands that comfort and beauty are not about noise or exaggeration. They're about calm, function, and purpose. Every home should make you pause, breathe, and feel that sense of quiet satisfaction that tells you, this is mine.</p>

      <h2>Thoughtful Design Over Extravagance</h2>
      <p>Every WYCE home begins with one simple question: How will this space make someone feel every day? That's where thoughtfulness becomes their biggest design principle.</p>
      <p>The layout of every room, the direction of natural light, the choice of textures and colors — all of it is designed with intent. It's not about adding more; it's about adding meaning.</p>
      <p>Instead of over-designing, WYCE focuses on experiences. A kitchen that makes morning routines smoother. A living area that catches the perfect light during golden hour. A balcony that becomes your quiet space to recharge after a long day.</p>
      <p>It's not decoration; it's design with empathy.</p>

      <h2>When Function Becomes an Emotion</h2>
      <p>Luxury often gets mistaken for indulgence. But the most memorable spaces are the ones that understand how people actually live. WYCE focuses on everyday comfort — homes that are practical yet warm, spacious yet intimate.</p>
      <p>Their designs blend natural materials, open layouts, and air flow that connects indoors with outdoors. It's the kind of luxury that doesn't just impress visitors but comforts you on an ordinary Tuesday.</p>

      <h2>The Art of Intentional Details</h2>
      <p>Every detail at WYCE serves a purpose. From the placement of a window that captures the morning light to the sound of water echoing softly in landscaped courtyards, nothing is random.</p>
      <p>This level of intent gives residents a sense of mindfulness in their daily lives. The surroundings don't distract you; they support you. The architecture isn't just a backdrop; it's an experience that grows on you.</p>
      <p>WYCE believes that homes should age beautifully — not go out of trend. That's why their designs are timeless, not temporary.</p>

      <h2>A Lifestyle That Reflects You</h2>
      <p>In a world where everything feels rushed, WYCE's approach feels refreshing. The homes are not meant to be just a statement of success. They're designed to mirror your values — calmness, balance, and appreciation for the little things.</p>
      <p>Thoughtful living is not about luxury at all; it's about peace. WYCE understands that true wealth lies in stillness — in spaces that give you time, not take it away.</p>

      <h2>Why Thoughtfulness is the Future of Real Estate</h2>
      <p>Modern homeowners are changing. They don't just want a property; they want an experience that supports their lifestyle. They care about light, greenery, privacy, and purpose. WYCE's thoughtful design approach isn't a trend — it's where the future of living is headed.</p>
      <p>Because tomorrow's luxury isn't about the size of your house. It's about how deeply it connects to the rhythm of your life.</p>

      <h2>Conclusion</h2>
      <p>WYCE's vision of luxury is built on empathy and design that thinks ahead. Every home feels curated — not just constructed. It's where modern architecture meets human emotion.</p>
      <p>Luxury today doesn't need to be loud. It just needs to be meaningful. And at WYCE, thoughtfulness is the new measure of elegance.</p>
    `,
  },
  "space-new-luxury": {
    title: "Space Is the New Luxury: Inside WYCE's 11-Acre Vision for the Select Few",
    date: "October 3, 2024",
    category: "Real Estate",
    author: "WYCE Team",
    image: "/images/blog3.jpeg",
    content: `
      <h2>Why Space Has Become a Rare Privilege</h2>
      <p>In most cities today, "luxury living" has started to mean living small but paying big. The skyline keeps growing taller, but the feeling of openness keeps disappearing. WYCE saw this shift and decided to build differently — to create homes that give people back what they've lost: space.</p>
      <p>At WYCE ExcluCity in Bavdhan, 11 towers are spread across 11 acres. It's not an accident or marketing tagline. It's an intentional decision to give residents freedom — to breathe, move, and live without feeling boxed in.</p>

      <h2>More Than Just Square Feet</h2>
      <p>Space is not only about measurements on paper. It's about how a home feels. WYCE focuses on layouts that allow natural light to flow, air to circulate freely, and people to live without visual or physical clutter.</p>
      <p>Each tower stands with dignity and distance, surrounded by landscaped greens, pathways, and open courtyards. From your balcony, you don't just see concrete; you see life — trees swaying, sky stretching, and people enjoying open spaces that don't feel crowded.</p>

      <h2>A Masterplan That Feels Human</h2>
      <p>The planning behind ExcluCity is based on lifestyle, not density. There's a place for everything: community gatherings, peaceful walks, children's play zones, and quiet reflection corners. The 1.5 lakh sq. ft. podium recreation area and 6 acres of open space mean weekends can happen right outside your door — no travel, no stress.</p>
      <p>It's the kind of planning that makes every day feel easy. Morning workouts under the open sky, evening chats at the campfire circle, and weekend bike rides along scenic loops. WYCE creates not just homes but an ecosystem that feels alive.</p>

      <h2>The Calm of Exclusivity</h2>
      <p>What truly sets ExcluCity apart is its balance of energy and stillness. With limited towers, every resident enjoys privacy, silence, and exclusivity that's hard to find in city developments.</p>
      <p>The crowd never overflows, elevators aren't packed, and you can always find your own corner of peace. It's designed for people who value calm over chaos and comfort over clutter.</p>

      <h2>Space That Supports the Mind</h2>
      <p>Our environment affects how we think. Cluttered spaces often lead to restless minds, while open environments bring clarity. WYCE understands this subtle connection.</p>
      <p>By giving residents breathing space, both physically and emotionally, they've created homes that promote mental well-being. It's not just about having room to move — it's about having room to think.</p>

      <h2>Conclusion</h2>
      <p>In a time when every inch of city land is overbuilt, WYCE chose to give back what really matters — space. ExcluCity's vision isn't about quantity; it's about quality of life. It's proof that the rarest form of luxury today is having the freedom to live wide, not tight.</p>
    `,
  },
  "beyond-green-walls": {
    title: "Beyond Green Walls: How WYCE Designs Homes That Breathe",
    date: "September 28, 2024",
    category: "Real Estate",
    author: "WYCE Team",
    image: "/images/project-3.png",
    content: `
      <h2>Rethinking "Green Living"</h2>
      <p>Today, almost every developer claims to build eco-friendly homes. But most of it stops at token gestures — a few planters and energy-saving lights. WYCE goes beyond that by designing a lifestyle that breathes, not just buildings that look green.</p>

      <h2>A Landscape Designed to Heal</h2>
      <p>At ExcluCity, more than 60% of the space is dedicated to greenery. There's an 8,000 sq. ft. forest garden, tree-lined cycling paths, reflexology trails, and even a Miyawaki forest retreat that creates a mini ecosystem of its own.</p>
      <p>These aren't for aesthetics alone. They're designed to calm the mind, lower stress, and reconnect residents with nature's rhythm.</p>

      <h2>Wellness in Every Corner</h2>
      <p>WYCE treats wellness as part of daily living. The homes are built to maximize airflow, natural light, and insulation, reducing the need for constant artificial comfort.</p>
      <p>The infinity pool, aqua training zone, and mind & movement studio offer ways to stay active, while the zen garden and pebble reflexology path encourage stillness. Every inch of the project is built to nurture physical and mental balance.</p>

      <h2>The Science of Breathing Spaces</h2>
      <p>WYCE's planners understand something simple yet profound: the environment you live in shapes how you feel. Clean air, sunlight, and green views can actually change your energy levels and mental clarity.</p>
      <p>By blending architecture and nature, WYCE creates spaces that regulate temperature naturally, improve air quality, and support emotional wellness — all without needing constant effort from residents.</p>

      <h2>Nature as a Constant Companion</h2>
      <p>Every home overlooks greenery, every path connects to a natural view, and every turn feels alive. It's not just "eco-friendly"; it's emotionally friendly.</p>
      <p>WYCE doesn't just build near nature; it builds with it.</p>

      <h2>Conclusion</h2>
      <p>ExcluCity is proof that sustainable living can be luxurious, comfortable, and stylish at the same time. WYCE's green philosophy isn't about labels or certifications — it's about designing a home that feels alive and helps you feel the same.</p>
    `,
  },
  "bavdhan-city-meets-serenity": {
    title: "Bavdhan: Where the City Meets Serenity",
    date: "September 25, 2024",
    category: "Real Estate",
    author: "WYCE Team",
    image: "/images/blog4.jpeg",
    content: `
      <h2>A Location That Understands Balance</h2>
      <p>Bavdhan is one of those rare neighborhoods where city energy and nature's calm coexist perfectly. WYCE chose this location for ExcluCity because it captures both — modern convenience and natural serenity.</p>

      <h2>The Perfect Blend of Access and Escape</h2>
      <p>Located close to major business hubs and social destinations, Bavdhan keeps you connected to everything that matters. Yet, when you come home, the noise fades. The air feels cleaner, the roads quieter, and life slower — in the best way possible.</p>

      <h2>Designed to Match Its Landscape</h2>
      <p>WYCE's architectural style in Bavdhan complements the area's natural terrain. The layout flows with the contours of the land, not against them. Large green belts and open courtyards preserve the spirit of the hills, creating a living space that feels integrated rather than imposed.</p>

      <h2>Everyday Life, Elevated</h2>
      <p>You can begin your morning with a walk surrounded by greenery, grab coffee at a nearby café, reach work easily, and return home to a peaceful evening view of the hills. It's the kind of balance city dwellers crave but rarely find.</p>

      <h2>Why Bavdhan Is the Future of Pune Living</h2>
      <p>As Pune grows, Bavdhan offers something irreplaceable — breathing space. It's well-connected to Baner, Kothrud, and Hinjewadi, yet feels detached from chaos. WYCE saw its potential early on: a neighborhood that can evolve without losing its soul.</p>

      <h2>Conclusion</h2>
      <p>Bavdhan isn't just an address; it's an experience. WYCE ExcluCity captures its spirit — modern yet peaceful, vibrant yet calm. It's where life finds rhythm, and every day feels like a small retreat within the city.</p>
    `,
  },
  "designing-connection": {
    title: "Designing Connection: The Subtle Luxury of Belonging at WYCE",
    date: "September 20, 2024",
    category: "Real Estate",
    author: "WYCE Team",
    image: "/images/blog5.jpeg",
    content: `
      <h2>Homes That Bring People Together</h2>
      <p>Most modern housing projects focus on privacy but forget the joy of connection. WYCE believes both can exist together. At ExcluCity, the community is designed not just for living, but for belonging.</p>

      <h2>Spaces That Spark Interaction</h2>
      <p>The project features open-air amphitheatres, conversation pavilions, designer pergolas, and campfire zones where residents naturally connect. There's even a paw park — because community includes everyone, even your pets.</p>

      <h2>Everyday Moments That Matter</h2>
      <p>It's not just about big events. WYCE designs for the small, everyday experiences — morning greetings during a walk, children playing together, evening chats under the stars. These small touches create emotional warmth that turns neighbors into friends.</p>

      <h2>A Lifestyle Beyond Four Walls</h2>
      <p>At WYCE, architecture supports relationships. By balancing private and shared areas, the design encourages community without crowding. You have your own peaceful space, yet you're never disconnected.</p>

      <h2>The Emotional Side of Modern Luxury</h2>
      <p>Luxury today isn't isolation; it's inclusion. Feeling known, supported, and understood within your community is the highest form of comfort. WYCE creates spaces that make connection effortless and genuine.</p>

      <h2>Conclusion</h2>
      <p>ExcluCity shows that real luxury is not in marble or height — it's in the sense of home that extends beyond your door. WYCE builds more than structures; it builds belonging.</p>
    `,
  },
};

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


                {/* Divider */}
                <div className="border-t border-[#D9D9D933] mt-12 mb-8"></div>

                {/* Share Section */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-white font-semibold">Share:</span>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-[#B7AC88] text-white hover:bg-white hover:text-[#B7AC88] transition-colors flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#B7AC88] text-white hover:bg-white hover:text-[#B7AC88] transition-colors flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#B7AC88] text-white hover:bg-white hover:text-[#B7AC88] transition-colors flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
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

