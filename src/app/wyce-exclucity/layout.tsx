import "./globals.css";
import type { ReactNode } from "react";
import Header from "./links/Header";
import Footer from "./links/foor";


export const metadata = {
  title: "Wyse Landing Page",
  description: "Landing page built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
