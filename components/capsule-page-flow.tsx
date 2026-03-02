import Link from "next/link";

export function CapsulePageFlow() {
  return (
    <>
      <section className="relative border-b border-black/10">
        <div className="relative h-[66vh] min-h-[500px] w-full md:h-[82vh] md:min-h-[640px]">
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/hero-desktop.png" />
            <img
              src="/images/hero-mobile.png"
              alt="Yubi Essence hero campaign"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="absolute inset-x-0 bottom-6 md:bottom-12">
          <div className="container-luxe">
            <p className="kicker text-base/82">Yubi Essence Capsule</p>
            <h1 className="mt-4 max-w-4xl font-display text-[42px] leading-[0.92] text-base md:text-[92px]">
              Elixir of
              <br className="hidden md:block" /> Magnetic Desire
            </h1>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/collection" className="btn-primary">
                Shop Fragrance
              </Link>
              <Link href="/story" className="btn-outline border-base/75 text-base hover:bg-base hover:text-secondary">
                Discover Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-base-2 py-12 md:py-16">
        <div className="container-luxe text-center">
          <p className="mx-auto max-w-4xl text-sm uppercase leading-relaxed tracking-[0.14em] text-secondary/70 md:text-base">
            Yubi Essence unveils a new fragrance chapter built on sensual woods,
            radiant florals, and modern elegance. A mobile-first campaign
            experience designed with cinematic rhythm and premium composition.
          </p>
        </div>
      </section>
    </>
  );
}
