import Hero from "./hero/Herosection";
import AboutSection from "./about/aboutsection";
import BavdhanSection from "./bavdhan/BavdhanSection";
import Amenities from "./amenties/Amenities";
import PriceSection from "./price/PriceSection";
import ProjectOverview from "./project/ProjectOverview";
import GallerySection from "./gallery/GallerySection";
import ContactSection from "./contact/ContactSection";
import StickyButtons from "./StickyButtons";
// import TaglineSection from "./tagline/TaglineSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      <section id="overview">
        <Hero />
      </section>
      
      {/* Other Sections */}
      <section id="about">
        <AboutSection />
      </section>
      <BavdhanSection />
      <section id="price">
        <PriceSection />
      </section>
      <section id="amenities">
        <Amenities />
      </section>
      <section id="project">
        <ProjectOverview />
      </section>
      {/* <TaglineSection /> */}
      <GallerySection />
      <ContactSection />
      
      {/* Sticky Buttons */}
      <StickyButtons />
    </div>
  );
}
