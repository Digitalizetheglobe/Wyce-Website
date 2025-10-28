import React from "react";
import HeroSection from "./about";
import VisionMissionSection from "./VisionMissionSection";
import ValuesSection from "./ourvalues";
import VerticalExpertise from "./verticalexpertise";
import TeamSection from "./team";
import OurBuilder from "./our-builders";
import AnimatedHeader from "./AnimatedHeader";
import { Metadata } from "next";
import CounterSection from "./countersection";


export const metadata: Metadata = {
  title: "WYCE Corp | Real Estate Developers in Pune",
  description: "Discover your dream property with WYCE Corp, Pune's leading real estate developer. Explore premium projects, elegant spaces, and trusted real estate services today!",
  keywords: "flats in pune, luxury flats in pune, 2 bhk flat in pune, 3 bhk flats in pune, flats for sale in pune, 4 bhk flats in pune, buy flat in pune, flats in Bavdhan, luxury flats in pune, Real Estate Developer",
  robots: "index, follow",
  authors: [{ name: "WYCE Corp" }],
  publisher: "WYCE Corp",
  alternates: {
    canonical: "https://www.wycecorp.com/about"
  }

};

const About = () => {
  return (
    <>
      <AnimatedHeader />
      <HeroSection />
      <CounterSection />
      <VisionMissionSection />
      <OurBuilder />
      <ValuesSection />
      <VerticalExpertise />
      <TeamSection />
    </>
  );
};

export default About;