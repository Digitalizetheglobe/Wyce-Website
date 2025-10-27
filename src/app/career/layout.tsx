import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WYCE Corp Careers | Build Your Future in Real Estate",
  description: "Join WYCE Corp and build your career in real estate. Explore exciting opportunities, grow with experts, and shape Pune's skyline with innovation.",
  keywords: "Real Estate Careers in Pune, WYCE Corp Careers, Real Estate Jobs in Pune, Property Developer Jobs, Construction Jobs in Pune, Sales and Marketing Jobs Real Estate, Real Estate Company Hiring Pune, Real Estate Career Opportunities India, Join WYCE Corp Team, Real Estate Employment Pune",
  robots: "index, follow",
  authors: [{ name: "WYCE Corp" }],
  publisher: "WYCE Corp",
  alternates: {
    canonical: "https://www.wycecorp.com/career"
  }
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
