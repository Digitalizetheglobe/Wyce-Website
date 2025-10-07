'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import ProjectSection from '@/components/ProjectSection';
import CTASection from '@/components/CTASection';
import BlogSection from '@/components/BlogSection';




export default function Home() {
  return (
    <main>
      <HeroSection />

      <AboutSection />
      
      <CounterSection />

      <ProjectSection />

      <CTASection />

    </main>
  );
}