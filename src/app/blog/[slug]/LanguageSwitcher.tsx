"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleLanguageChange = (lang: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (lang === "en") {
            params.delete("lang");
        } else {
            params.set("lang", lang);
        }
        const query = params.toString();
        router.push(`${pathname}${query ? `?${query}` : ""}`);
    };

    return (
        <select
            value={currentLang}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="ml-auto px-2 py-1 bg-[#B7AC88] text-white hover:bg-[#121212] hover:text-[#B7AC88] hover:border hover:border-[#B7AC88] transition-colors duration-300 font-medium cursor-pointer"
        >
            <option value="en">English</option>
            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            {/* <option value="gu">Gujarati</option> */}
        </select>
    );
}
