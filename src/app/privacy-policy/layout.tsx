import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | WYCE Corp",
  description: "Read WYCE Corp's Privacy Policy to understand how we collect, use, and protect your personal information. We value your trust and ensure complete data privacy and transparency.",
  robots: "noindex, nofollow",
  authors: [{ name: "WYCE Corp" }],
  publisher: "WYCE Corp",
  alternates: {
    canonical: "https://www.wycecorp.com/privacy-policy"
  }
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
