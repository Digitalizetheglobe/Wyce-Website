
import Hero from "./hero/Herosection";
import AboutProject from "./about/aboutsection";
import VideoSection from "./video/VideoSection";
import AmenitiesCarousel from "./amenties/Amenities";
import PricesSection from "./price/PriceSection";
import Gallery from "./gallery/GallerySection";
import CtaSection from "./CTA/CtaSection";
import ContactSection from "./contact/ContactSection";


export const metadata = {
  title: "WYCE Exclucity - Premium Properties in Bavdhan",
  description: "Experience luxury living at WYCE Exclucity with 2BHK, 3BHK, and 4BHK residences in Bavdhan, Pune. World-class amenities and modern lifestyle.",
};

export default function WyceExclucityPage() {
  return (
    <main className="bg-black overflow-x-hidden">

      <Hero />
      <AboutProject />
      <VideoSection />
      <AmenitiesCarousel />
      <PricesSection />
      <Gallery />
      <CtaSection />
      <ContactSection />

    </main>
  );
}
