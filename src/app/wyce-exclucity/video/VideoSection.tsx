"use client";

export default function VideoSection() {
  return (
    <section className="w-full h-[550px] bg-black flex items-center justify-center md:py-20 px-4 sm:px-6 md:px-8 bg-image bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/wyce-exclucity/videobg.png')" }}>
      <div className="relative w-full max-w-5xl mt-8 sm:mt-12 md:mt-20 aspect-video rounded-lg overflow-hidden shadow-lg mx-4 sm:mx-6">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/ZwJ897c0RjA?rel=0&autoplay=0&showinfo=0"
          title="Project Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
