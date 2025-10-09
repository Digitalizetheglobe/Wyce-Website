"use client";

import NRIHero from "./hero";
import NRIServices from "./services";
import NRIBenefits from "./benefits";
import NRIProcess from "./process";
import NRIInvestment from "./investment";
import NRIFAQ from "./faq";
import ContactSection from "@/components/ContactSection";

export default function NRIHub() {
  return (
    <main className="bg-[#090909]">
      <NRIHero />
      <NRIServices />
      <NRIBenefits />
      <NRIInvestment />
      <NRIProcess />
      <NRIFAQ />
      <ContactSection />
    </main>
  );
}


