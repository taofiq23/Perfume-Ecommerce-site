import Link from "next/link";

export function CapsuleMediaBreaks() {
  return (
    <>
      <section className="border-y border-black/10">
        <div className="relative h-[78vh] min-h-[620px] w-full">
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/campaign-break-1-desktop.png" />
            <img
              src="/images/campaign-break-1-mobile.png"
              alt="Campaign chapter one"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="media-overlay-soft absolute inset-0" />

          <div className="absolute inset-x-0 bottom-10 md:bottom-16">
            <div className="container-luxe">
              <p className="kicker text-base/80">Campaign Sequence</p>
              <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.92] text-base md:text-[96px]">
                The New
                <br className="hidden md:block" /> Fragrance Codes
              </h2>
              <Link
                href="/story"
                className="mt-8 inline-flex h-11 items-center justify-center border border-base/80 px-6 text-xs uppercase tracking-[0.22em] text-base"
              >
                View Narrative
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 py-16 md:py-24">
        <div className="container-luxe grid gap-5 md:grid-cols-3">
          <article className="luxe-panel p-7 md:p-8">
            <p className="kicker">01 / Direction</p>
            <p className="mt-4 text-lg leading-relaxed text-secondary/85">
              Minimal compositions with generous negative space and precise typography.
            </p>
          </article>
          <article className="luxe-panel p-7 md:p-8">
            <p className="kicker">02 / Mood</p>
            <p className="mt-4 text-lg leading-relaxed text-secondary/85">
              Golden light, shadow, and skin tones create a sensual editorial identity.
            </p>
          </article>
          <article className="luxe-panel p-7 md:p-8">
            <p className="kicker">03 / Signature</p>
            <p className="mt-4 text-lg leading-relaxed text-secondary/85">
              A unified end-to-end mobile flow inspired by modern luxury fragrance houses.
            </p>
          </article>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="relative h-[70vh] min-h-[520px] w-full">
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/campaign-break-2-desktop.png" />
            <img
              src="/images/campaign-break-2-desktop.png"
              alt="Campaign chapter two"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="media-overlay-soft absolute inset-0" />
          <div className="absolute inset-x-0 bottom-8 md:bottom-12">
            <div className="container-luxe">
              <p className="kicker text-base/80">Yubi Essence Manifesto</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.93] text-base md:text-7xl">
                Two Signatures.
                <br /> One Magnetic Identity.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
