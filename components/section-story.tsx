export function SectionStory() {
  return (
    <section className="border-y border-black/10 bg-secondary py-24 text-base md:py-28">
      <div className="container-luxe grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="kicker text-accent/90">Maison Story</p>
          <h2 className="section-title mt-4 text-base">
            Crafted for identities that speak before words.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-base/80">
            NOIR ATELIER blends French perfumery discipline with contemporary
            minimalism. Every bottle is built like an editorial object: precise,
            elegant, unforgettable.
          </p>
        </div>
        <div className="aspect-[4/5] border border-base/20 bg-gradient-to-b from-[#4f4a42] via-[#2d2a26] to-[#141311]" />
      </div>
    </section>
  );
}
