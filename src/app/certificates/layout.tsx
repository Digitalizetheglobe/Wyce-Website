import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EC Certificates | WYCE Corp",
  description: "View Environmental Clearance certificates and public notices for WYCE Corp projects in Pune.",
  keywords: "EC certificate, environmental clearance, WYCE Corp certificates, Pune real estate certificates",
  robots: "index, follow",
  authors: [{ name: "WYCE Corp" }],
  publisher: "WYCE Corp",
  alternates: {
    canonical: "https://www.wycecorp.com/certificates"
  }
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
