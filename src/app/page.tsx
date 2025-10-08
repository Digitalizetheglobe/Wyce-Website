'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import ProjectSection from '@/components/ProjectSection';
import CTASection from '@/components/CTASection';
import BlogSection from '@/components/BlogSection';
import AnimatedTestimonialsDemo from '@/components/TestimonialSection';
import PhotoSection from '@/components/PhotoSection';
import ContactSection from '@/components/ContactSection';




export default function Home() {
  return (
    <main>
      <HeroSection />

      <AboutSection />
      
      <CounterSection />

      <ProjectSection />

      <CTASection />

      <BlogSection/>

      <AnimatedTestimonialsDemo />

      <PhotoSection />

      <ContactSection />
    </main>
  );
}