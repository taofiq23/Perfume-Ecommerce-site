import Link from "next/link";

export function CapsuleGenderStory() {
  return (
    <section className="border-b border-black/10 py-12 md:py-20">
      <div className="container-luxe grid gap-6 md:grid-cols-2">
        <article className="relative overflow-hidden border border-black/10">
          <img src="/images/product-amber-noir.webp" alt="Amber Noir campaign" className="h-full w-full object-cover" />
          <div className="media-overlay-soft absolute inset-0" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-base md:p-8">
            <p className="kicker text-base/80">For Men</p>
            <h3 className="mt-3 font-display text-4xl leading-[0.96] md:text-5xl">Bold Amber Woods</h3>
            <Link
              className="mt-6 inline-block border-b border-base pb-1 text-xs uppercase tracking-[0.22em]"
              href="/product/amber-noir"
            >
              Shop Men
            </Link>
          </div>
        </article>

        <article className="relative overflow-hidden border border-black/10">
          <img src="/images/product-rose-ombre.jpg" alt="Rose Ombre campaign" className="h-full w-full object-cover" />
          <div className="media-overlay-soft absolute inset-0" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-base md:p-8">
            <p className="kicker text-base/80">For Women</p>
            <h3 className="mt-3 font-display text-4xl leading-[0.96] md:text-5xl">Floral Velvet Smoke</h3>
            <Link
              className="mt-6 inline-block border-b border-base pb-1 text-xs uppercase tracking-[0.22em]"
              href="/product/rose-ombre"
            >
              Shop Women
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
