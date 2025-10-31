export default function TaglineSection() {
  return (
    <section
      className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[120vh] bg-center bg-cover"
      style={{ backgroundImage: "url(/images/wyce-exclucity/tagline-laptop.jpg)" }}
      aria-label="Tagline section"
    >
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}


