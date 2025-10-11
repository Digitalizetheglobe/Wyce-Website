import Image from 'next/image';
import phoneBg from '../../public/images/phone.jpg'
import tabBg from '../../public/images/tab.jpg'
import laptopBg from '../../public/images/laptop.jpg'

export default function HeroSection() {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat text-white  bg-black/100" style={{ backgroundImage: "url('/images/bg-image.png')" }}>
            {/* Social Sidebar - Outside the banner */}
            <div className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col gap-6 sm:gap-8 lg:gap-10 z-[5] hidden md:flex">
            {/* Instagram */}
            <a
                href="https://www.instagram.com/wyce_corp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300"
            >
                <div className="text-white text-xs sm:text-sm lg:text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                Instagram
                </div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#B7AC88] rounded-full"></div>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/company/wyce-corp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300"
            >
                <div className="text-white text-xs sm:text-sm lg:text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                LinkedIn
                </div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#B7AC88] rounded-full"></div>
            </a>

            {/* Facebook */}
            <a
                href="https://www.facebook.com/profile.php?id=61569471185683"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300"
            >
                <div className="text-white text-xs sm:text-sm lg:text-[17px] font-bold tracking-[2px] uppercase [writing-mode:vertical-rl] rotate-180">
                Facebook
                </div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#B7AC88] rounded-full"></div>

            </a>
        </div>


            {/* Banner Container */}
            <div className="relative w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1350px] h-[500px] sm:h-[600px] md:h-[670px] flex items-center justify-center overflow-hidden  mx-auto"
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