"use client";

import Image from "next/image";
import { Vujahday_Script } from "next/font/google";

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function BlogSection() {
  return (
    <section
      className="relative bg-black/90 text-white py-20 pl-25" >
        <div className="relative container mx-auto px-6 lg:px-16">
            {/* SECTION HEADER */}
            <div className="mb-16 ">
                <p className={`text-[#B7AC88] mb-8 flex items-center gap-3 ${vujahday.className}`}>
                <span className="inline-block w-10 h-[1px] bg-[#B7AC88]"></span>
                <span className="text-[40px] leading-[42px] font-normal">Blogs & Articles</span>
                </p>
            </div>
        </div>
    </section>
  );
}
