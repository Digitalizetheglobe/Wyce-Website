import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "./links/Header";
import Footer from "./links/foor";


export const metadata: Metadata = {
  title: "Wyce Exclucity - 4, 3 & 2 BHK Premium Residences in Bavdhan Pune",
  description: "Buy luxury flats in Bavdhan, Pune with WYCE Corp – offering 4, 3 & 2 BHK premium apartments designed for comfort, style, and modern living in prime city locations.",
  keywords: "flats in pune, luxury flats in pune, 2 bhk flat in pune, 3 bhk flats in pune, flats for sale in pune, 4 bhk flats in pune, buy flats in pune, flats in Bavdhan, luxury flats in pune",
  icons: {
    icon: "/images/icon.png",
  },
  verification: {
    google: "Pz5HyQPGT_xgsSYscV6Dx3WRIP2QGsx8BiDUslcveKc"
  },
  robots: "index, follow",
  authors: [{ name: "WYCE Corp" }],
  publisher: "WYCE Corp",
  alternates: {
    canonical: "https://www.wycecorp.com/wyce-exclucity"
  }
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
