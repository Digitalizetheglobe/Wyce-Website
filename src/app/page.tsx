import HeroSection from '@/components/HeroSection';
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import ProjectSection from '@/components/ProjectSection';

import ContactSection from '@/app/wyce-exclucity/contact/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />

      <AboutSection />
      
      <CounterSection />

      <ProjectSection />

      <ContactSection />
    </main>
  );
}