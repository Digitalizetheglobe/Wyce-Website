import Image from 'next/image';
import herobg from '../../public/images/hero-bg.png'

export default function HeroSection() {
    return (
        <div className="relative py-15 pb-25 w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#090909] to-[#B7AC88]">
            {/* Social Sidebar - Outside the banner */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-10 z-[5]">
                <div className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <div className="text-white text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                        Instagram
                    </div>
                    <div className="w-3 h-3 bg-[#B7AC88] rounded-full"></div>

                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <div className="text-white text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                        Twitter
                    </div>
                    <div className="w-3 h-3 bg-[#B7AC88] rounded-full"></div>

                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <div className="text-white text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                        Facebook
                    </div>


                </div>
            </div>

            {/* Banner Container */}
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden "
                style={{
                    backgroundImage: `url(${herobg.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '670px',
                    width: '1350px',
                    margin: '0 auto',
                    borderRadius: '1.5rem'
                }}
            >

                {/* Content Wrapper */}
                <div className="relative w-full h-full flex items-center px-20 lg:px-16 md:px-10">
                    {/* Text Content */}
                    <div className="relative z-[3] max-w-[700px] ml-20 lg:ml-10 md:ml-0">
                        <h1 className="text-7xl lg:text-6xl md:text-5xl font-bold text-white leading-tight mb-8 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)]">
                            Shaping Skylines With Unmatched quality
                        </h1>
                        <p className="text-lg text-white leading-relaxed mb-10 drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)] max-w-[600px]">
                            Every project we create is more than concrete and steel; it&apos;s a vision brought to life with unmatched precision, designed to elevate the way you live and experience luxury.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 px-9 py-[18px] bg-[#B7AC88]/90 text-white text-base font-semibold capitalize hover:bg-[#B7AC88] hover:translate-x-1 transition-all duration-300"
                        >
                            Explore properties
                            <span className="text-xl">›</span>
                        </a>
                    </div>

                    {/* Center Slider with Background Images */}
                    <div className="absolute right-[15%] top-1/2 -translate-y-1/2 z-[4] lg:right-[10%] md:hidden">
                        <div className="w-[600px] h-[400px] lg:w-[500px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                            {/* Background Image for Slider */}
                            <Image
                                src="/images/hero-bg.png"
                                alt="Luxury Building"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay for the slider */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                            {/* Video Play Button inside slider */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-[100px] h-[100px] lg:w-[80px] lg:h-[80px] rounded-full border-[3px] border-white bg-white/15 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/25 transition-all duration-300">
                                    <div className="w-0 h-0 border-l-[25px] border-l-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="absolute bottom-20 right-[15%] flex gap-4 z-[4] lg:right-[10%] md:bottom-10 md:right-10">
                        <div className="w-20 h-1 bg-white cursor-pointer"></div>
                        <div className="w-20 h-1 bg-white/30 cursor-pointer hover:bg-white/70 transition-all duration-300"></div>
                        <div className="w-20 h-1 bg-white/30 cursor-pointer hover:bg-white/70 transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}