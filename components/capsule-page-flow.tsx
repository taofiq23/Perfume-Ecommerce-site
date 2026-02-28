export function CapsulePageFlow() {
  return (
    <>
      <section className="relative border-b border-black/10">
        <div className="relative h-[74vh] min-h-[520px] w-full md:h-[78vh] md:min-h-[580px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#6d6354_0%,transparent_42%),linear-gradient(135deg,#2e2a24_0%,#141311_40%,#5c4f3a_100%)]" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="absolute bottom-8 left-0 right-0 md:bottom-12">
          <div className="container-luxe">
            <p className="kicker text-base/82">Noir Atelier Capsule</p>
            <h1 className="mt-4 max-w-4xl font-display text-[40px] leading-[0.94] text-base md:text-[86px]">
              The Guilty<br className="hidden md:block" />Signature
            </h1>
            <p className="mt-4 max-w-xl text-[10px] uppercase tracking-[0.28em] text-base/82 md:text-[11px]">
              Campaign 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-base-2 py-10 md:py-12">
        <div className="container-luxe text-center">
          <p className="mx-auto max-w-5xl text-sm leading-relaxed text-secondary/80 md:text-[15px]">
            A celebration of love in all its forms, the signature Gucci Guilty fragrances are
            reinterpreted with new ingredients Pour Homme and Pour Femme, offering distinctive
            and harmonious scents.
          </p>
        </div>
      </section>
    </>
  );
}
