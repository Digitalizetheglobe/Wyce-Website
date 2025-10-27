import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WYCE Corp | Real Estate Blog for Investors & Buyers",
  description: "Explore WYCE Corp’s blog for real estate news, market trends, NRI investment tips, and insights into Pune’s evolving property landscape.",
  keywords: "Real Estate Blog, Real Estate Blog India, Real Estate Blog Pune, Property Investment Blog, Home Buying Tips India, Real Estate Market Trends, NRI Property Investment Blog, Real Estate News Pune, Real Estate Investment Tips, Property Advice Blog, Real Estate Developers in Pune, Real Estate Updates India, Pune Property Market Blog, Real Estate Insights India, Real Estate Industry News",

};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
