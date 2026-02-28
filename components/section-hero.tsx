import Link from "next/link";

export function SectionHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,107,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.08),transparent_45%)]" />
      <div className="container-luxe relative grid min-h-[82vh] items-center gap-12 py-20 md:grid-cols-2 md:gap-16">
        <div className="reveal">
          <p className="kicker mb-5">
            New Capsule Fragrance 2026
          </p>
          <h1 className="headline max-w-xl">
            A bold scent narrative in gold, smoke, and velvet.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary/80">
            Discover the signature line designed for night elegance and modern
            identity. Clean storytelling, editorial visuals, luxury feel.
          </p>
          <div className="reveal delay-1 mt-10 flex flex-wrap gap-4">
            <Link className="btn-primary" href="/collection">
              Shop Collection
            </Link>
            <Link className="btn-outline" href="/story">
              Explore Story
            </Link>
          </div>
        </div>
        <div className="relative reveal delay-2">
          <div className="aspect-[3/4] w-full rounded-sm border border-black/10 bg-gradient-to-b from-[#ded7cb] via-[#d8c4a0] to-[#b9965c] shadow-luxe" />
          <div className="absolute -bottom-6 -left-6 border border-black/10 bg-secondary px-5 py-3 text-xs uppercase tracking-[0.22em] text-base">
            Extrait de parfum
          </div>
        </div>
      </div>
    </section>
  );
}
