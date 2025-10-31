export default function ProjectOverview() {
  return (
    <section
      id="project-overview"
      className="relative w-full h-[90vh] md:h-[90vh] lg:h-[100vh] bg-[url('/images/wyce-exclucity/project-mobile.jpg')] md:bg-[url('/images/wyce-exclucity/project-mobile.jpg')] lg:bg-[url('/images/wyce-exclucity/project-laptop.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-12 sm:pt-16 md:pt-20 justify-start">
      <div className="w-full max-w-3xl mx-auto flex flex-col justify-center items-center min-h-[50vh] sm:min-h-[60vh]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 text-[#b7a863] font-breathney text-center px-2">
          Project Highlights
        </h2>
        <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-[#b7a863] p-6 sm:p-8 md:p-10 shadow-lg w-full mt-6 sm:mt-8 md:mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-4 sm:gap-y-5 text-md sm:text-base md:text-lg leading-relaxed mx-auto text-center max-w-6xl">
            <li>4, 3 & 2 BHK premium residences</li>
            <li>7,000 acres of green ambience</li>
            <li>70,000 sq. ft. of lifestyle amenities</li>
            <li>60% green open spaces</li>
            <li>11 High-rise towers</li>
            <li>11,000 sq. ft. grand entrance plaza</li>
            <li>Senior Citizen dedicated area</li>
            <li>8,000 sq. ft. of forest garden</li>
            <li>1,50,000 sq. ft. of podium recreation</li>
            <li>6 acres of dedicated recreational zone</li>
          </ul>
        </div>
      </div>
      </div>

    </section>
  );
}