import phoneBg from '../../public/images/phone.jpg'
import tabBg from '../../public/images/tab.jpg'
import laptopBg from '../../public/images/laptop.jpg'

export default function HeroSection() {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat text-white  bg-black/100" style={{ backgroundImage: "url('/images/bg-image.png')" }}>
            {/* Social Sidebar - Outside the banner */}
            <div className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col gap-6 sm:gap-8 lg:gap-10 z-[5] hidden md:flex">

        </div>


            {/* Banner Container */}
            <div className="relative w-full h-[750px] sm:h-[700px] md:h-[780px] flex items-center justify-center overflow-hidden"
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