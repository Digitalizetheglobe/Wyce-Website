import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-23">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="WYCE EXCLUSIVITY City"
                width={200}
                height={90}
                className="h-45 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-10 text-[16px]">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <div className="relative group">
              <Link href="/projects" className="text-white hover:text-gray-300 transition-colors flex items-center">
                Projects
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <Link href="/nri-hub" className="text-white hover:text-gray-300 transition-colors">
              Nri Hub
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link href="/career" className="text-white hover:text-gray-300 transition-colors">
              Career
            </Link>
          </nav>

          {/* Contact Us Button */}
          <div className="flex items-center">
            <button className="border-[3px] border-white border-solid text-white px-4 py-2  hover:bg-white hover:text-black transition-colors flex items-center cursor-pointer">
              Contact Us
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 cursor-pointer">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
