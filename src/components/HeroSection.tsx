import Image from 'next/image';
import phoneBg from '../../public/images/phone.jpg'
import tabBg from '../../public/images/tab.jpg'
import laptopBg from '../../public/images/laptop.jpg'

export default function HeroSection() {
    return (
        <div className="relative pt-0 pb-8 sm:pb-20 md:pb-15 w-full  flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#090909] to-[#B7AC88]">
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
                    backgroundImage: `url(${phoneBg.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                {/* Tablet background */}
                <div 
                    className="absolute inset-0 hidden sm:block lg:hidden"
                    style={{
                        backgroundImage: `url(${tabBg.src})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />
                
                {/* Laptop/Desktop background */}
                <div 
                    className="absolute inset-0 hidden lg:block"
                    style={{
                        backgroundImage: `url(${laptopBg.src})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />


            </div>
        </div>
    );
}