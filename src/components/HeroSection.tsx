import Image from 'next/image';
import herobg from '../../public/images/hero-bg.png'

export default function HeroSection() {
    return (
        <div className="relative pt-0 pb-8 sm:pb-20 md:pb-15 w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#090909] to-[#B7AC88]">
            {/* Social Sidebar - Outside the banner */}
            <div className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col gap-6 sm:gap-8 lg:gap-10 z-[5] hidden md:flex">
                <div className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <div className="text-white text-xs sm:text-sm lg:text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                        Instagram
                    </div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#B7AC88] rounded-full"></div>

                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <div className="text-white text-xs sm:text-sm lg:text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                        Twitter
                    </div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#B7AC88] rounded-full"></div>

                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <div className="text-white text-xs sm:text-sm lg:text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                        Facebook
                    </div>


                </div>
            </div>

            {/* Banner Container */}
            <div className="relative w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1350px] h-[500px] sm:h-[600px] md:h-[670px] flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl lg:rounded-3xl mx-auto"
                style={{
                    backgroundImage: `url(${herobg.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >

                {/* Content Wrapper */}
                <div className="relative w-full h-full flex items-center px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
                    {/* Text Content */}
                    <div className="relative z-[3] max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] ml-0 sm:ml-4 md:ml-8 lg:ml-10 xl:ml-20">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)]">
                            Shaping Skylines With Unmatched quality
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed mb-6 sm:mb-8 md:mb-10 drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)] max-w-full sm:max-w-[450px] md:max-w-[600px]">
                            Every project we create is more than concrete and steel; it&apos;s a vision brought to life with unmatched precision, designed to elevate the way you live and experience luxury.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-9 py-3 sm:py-4 md:py-[18px] bg-[#B7AC88]/90 text-white text-sm sm:text-base font-semibold capitalize hover:bg-[#B7AC88] hover:translate-x-1 transition-all duration-300"
                        >
                            Explore properties
                            <span className="text-lg sm:text-xl">›</span>
                        </a>
                    </div>

                    {/* Progress Bars */}
                    <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-[5%] sm:right-[10%] lg:right-[15%] flex gap-2 sm:gap-3 md:gap-4 z-[4]">
                        <div className="w-12 sm:w-16 md:w-20 h-1 bg-white cursor-pointer"></div>
                        <div className="w-12 sm:w-16 md:w-20 h-1 bg-white/30 cursor-pointer hover:bg-white/70 transition-all duration-300"></div>
                        <div className="w-12 sm:w-16 md:w-20 h-1 bg-white/30 cursor-pointer hover:bg-white/70 transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}