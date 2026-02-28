import Link from "next/link";

export function CapsuleGenderStory() {
  return (
    <section className="border-b border-black/10 py-16 md:py-24">
      <div className="container-luxe grid gap-8 md:grid-cols-2">
        <article className="relative overflow-hidden border border-black/10">
          <div className="relative aspect-[5/6] bg-gradient-to-b from-[#dad0bf] to-[#9e7d49]">
            <div className="media-overlay-soft absolute inset-0" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-7 text-base">
            <p className="kicker text-base/80">For Men</p>
            <h3 className="mt-3 font-display text-4xl leading-[0.96] md:text-5xl">Bold Amber Woods</h3>
            <Link className="mt-6 inline-block border-b border-base pb-1 text-[10px] uppercase tracking-[0.24em]" href="/product/amber-noir">
              Shop Men
            </Link>
          </div>
        </article>

        <article className="relative overflow-hidden border border-black/10">
          <div className="relative aspect-[5/6] bg-gradient-to-b from-[#eadfda] to-[#b58e78]">
            <div className="media-overlay-soft absolute inset-0" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-7 text-base">
            <p className="kicker text-base/80">For Women</p>
            <h3 className="mt-3 font-display text-4xl leading-[0.96] md:text-5xl">Floral Velvet Smoke</h3>
            <Link className="mt-6 inline-block border-b border-base pb-1 text-[10px] uppercase tracking-[0.24em]" href="/product/rose-ombre">
              Shop Women
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
