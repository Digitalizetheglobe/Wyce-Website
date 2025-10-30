"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function ClientLayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWyceExclucity = pathname?.startsWith("/wyce-exclucity");

  return (
    <>
      {!isWyceExclucity && <Header />}
      <main>{children}</main>
      {!isWyceExclucity && <Footer />}
    </>
  );
}


