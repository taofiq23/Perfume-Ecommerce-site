export function CapsuleMediaBreaks() {
  return (
    <>
      <section className="border-y border-black/10">
        <div className="relative h-[84vh] min-h-[620px] w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,#7e6a46_0%,transparent_35%),linear-gradient(160deg,#161411_0%,#221f1b_35%,#5b4a34_100%)]" />
          <div className="media-overlay-soft absolute inset-0" />
          <div className="absolute bottom-10 left-0 right-0 md:bottom-16">
            <div className="container-luxe">
              <p className="kicker text-base/80">Campaign Sequence</p>
              <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.92] text-base md:text-[96px]">
                The New<br className="hidden md:block" />Fragrance Codes
              </h2>
              <button className="mt-8 inline-flex h-11 items-center justify-center border border-base/80 px-6 text-[10px] uppercase tracking-[0.24em] text-base">
                Watch Campaign
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 py-24 md:py-36">
        <div className="editorial-center max-w-3xl">
          <p className="kicker">Yubi Essence Manifesto</p>
          <h2 className="section-title mt-6">
            Two Signatures. One Magnetic Identity.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-[11px] uppercase leading-relaxed tracking-[0.22em] text-secondary/65">
            Structured pacing, cinematic imagery, and disciplined typography in
            one cohesive luxury experience.
          </p>
        </div>
      </section>
    </>
  );
}
