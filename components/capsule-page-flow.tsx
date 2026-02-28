export function CapsulePageFlow() {
  return (
    <>
      <section className="relative border-b border-black/10">
        <div className="relative h-[88vh] min-h-[660px] w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#6d6354_0%,transparent_42%),linear-gradient(135deg,#2e2a24_0%,#141311_40%,#5c4f3a_100%)]" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="absolute bottom-10 left-0 right-0 md:bottom-16">
          <div className="container-luxe">
            <p className="kicker text-base/82">Noir Atelier Capsule</p>
            <h1 className="mt-5 max-w-4xl font-display text-[50px] leading-[0.92] text-base md:text-[122px]">
              The Guilty<br className="hidden md:block" />Signature
            </h1>
            <p className="mt-5 max-w-xl text-[10px] uppercase tracking-[0.3em] text-base/82 md:text-[11px]">
              Campaign 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-base-2 py-24 md:py-36">
        <div className="editorial-center">
          <p className="kicker">Editorial Note</p>
          <h2 className="section-title mt-6">
            A Modern Icon Of Scent.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-[11px] uppercase leading-relaxed tracking-[0.22em] text-secondary/65">
            Composed around image-led storytelling, minimal copy, and elevated
            product focus.
          </p>
        </div>
      </section>
    </>
  );
}
