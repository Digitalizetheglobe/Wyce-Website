
import Hero from "./hero/Herosection";
import AboutProject from "./about/aboutsection";
import VideoSection from "./video/VideoSection";
import AmenitiesCarousel from "./amenties/Amenities";
import Gallery from "./gallery/GallerySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Luxury Flats in Bavdhan, Pune | WYCE Exclucity",
  description: "WYCE Exclucity in Bavdhan, Pune offers spacious 2, 3 & 4 BHK luxury flats with modern amenities, excellent connectivity, and a premium lifestyle.",
  keywords: "flats in bavdhan, 2 bhk flats in bavdhan, luxury flats in bavdhan, 3 bhk flats in Bavdhan, 4 bhk flats in Bavdhan, flats for sale in bavdhan, premium homes near kothrud, flats in Pune",
  alternates: {
    canonical: "https://www.wycecorp.com/wyce-exclucity"
  }
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
