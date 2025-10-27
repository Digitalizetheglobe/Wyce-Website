import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | WYCE Corp",
  description: "Review WYCE Corp's Terms and Conditions to learn about our policies, website usage, services, and legal guidelines for a transparent real estate experience.",

};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
