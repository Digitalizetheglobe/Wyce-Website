import "./globals.css";
import type { ReactNode } from "react";
import Header from "./links/Header";
import FooterSection from "./links/Footer";


export const metadata = {
  title: "Wyse Landing Page",
  description: "Landing page built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
