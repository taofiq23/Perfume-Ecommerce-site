export function SectionCinematic() {
  return (
    <section className="relative border-y border-black/10 bg-secondary text-base">
      <div className="sticky top-20 h-[72vh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(200,169,107,0.18),transparent_45%),linear-gradient(180deg,#3e3932_0%,#1f1f1f_70%)]" />
        <div className="container-luxe relative flex h-full items-end pb-16">
          <div className="max-w-2xl reveal">
            <p className="kicker text-accent">Cinematic Capsule</p>
            <h2 className="section-title mt-4 text-base">
              A visual language of shadow, skin, and scent.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-base/80">
              Built with editorial spacing and immersive composition to create
              the high-fashion fragrance mood you requested.
            </p>
          </div>
        </div>
      </div>

      <div className="container-luxe grid gap-7 py-20 md:grid-cols-3">
        <article className="luxe-panel p-8">
          <p className="kicker text-accent">01</p>
          <p className="mt-4 text-lg leading-relaxed text-base/85">
            Hero storytelling with dramatic, clean visual hierarchy.
          </p>
        </article>
        <article className="luxe-panel p-8">
          <p className="kicker text-accent">02</p>
          <p className="mt-4 text-lg leading-relaxed text-base/85">
            Minimal copy blocks and wide breathing space for luxury feel.
          </p>
        </article>
        <article className="luxe-panel p-8">
          <p className="kicker text-accent">03</p>
          <p className="mt-4 text-lg leading-relaxed text-base/85">
            Refined motion cues that keep premium mood without clutter.
          </p>
        </article>
      </div>
    </section>
  );
}
