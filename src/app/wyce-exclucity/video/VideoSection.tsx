"use client";

export default function VideoSection() {
  return (
    <section
      className="w-full h-[550px] bg-black flex items-center justify-center md:py-20 px-4 bg-image bg-cover bg-center"
      style={{ backgroundImage: "url('/images/landing-page/videobg.png')" }}
    >
      <div className="relative w-full max-w-5xl mt-50 aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/GlVcJfG7KbA?si=yGv7CFACQ_v8-LC5"
          title="Project Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
