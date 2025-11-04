"use client";
import { motion } from "framer-motion";

export default function BavdhanSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Mobile Background */}
      <div
        className="block md:hidden relative w-full min-h-[100vh] flex items-start pt-20 justify-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan-mobile.png')" }}
      >

      </div>

      {/* Tablet Background */}
      <div
        className="hidden md:block lg:hidden relative w-full min-h-[100vh] flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan-tab.png')" }}
      >

      </div>

      {/* Laptop/Desktop Background */}
      <div 
        className="hidden lg:block relative w-full h-[120vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/wyce-exclucity/bavdhan.png')" }}
      >

      </div>
    </section>
  );
}
