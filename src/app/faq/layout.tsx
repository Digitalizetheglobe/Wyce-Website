import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate FAQs for Home Buyers",
  description: "Empower your home buying experience with our real estate FAQs. Access valuable insights and expert advice to guide you through every step of the process.",
  keywords: "Real Estate FAQ, Home Buying Guide, Property Purchase Tips, Real Estate Questions India, Home Loan Queries, NRI Property FAQs, Real Estate Process Explained, Home Buying Help Pune, Real Estate Guide India, Property Buying Advice",

};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

