
import Hero from "./hero/Herosection";
import AboutProject from "./about/aboutsection";
import VideoSection from "./video/VideoSection";
import AmenitiesCarousel from "./amenties/Amenities";
import Gallery from "./gallery/GallerySection";


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

      <Gallery />

    </main>
  );
}
