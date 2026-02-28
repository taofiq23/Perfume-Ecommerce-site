import Link from "next/link";

const products = [
  { slug: "velvet-oud", name: "Velvet Oud", volume: "100ml", price: "$220" },
  { slug: "amber-noir", name: "Amber Noir", volume: "90ml", price: "$195" },
  { slug: "rose-ombre", name: "Rose Ombre", volume: "75ml", price: "$175" }
];

export function SectionProducts() {
  return (
    <section className="border-y border-black/10 py-20">
      <div className="container-luxe">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-xs tracking-[0.25em] text-black/60">
              SIGNATURE LINE
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[0.95] md:text-4xl">Shop The Collection</h2>
            <p className="mt-4 max-w-lg text-xs uppercase leading-relaxed tracking-[0.08em] text-black/50">
              Our most iconic fragrances, reimagined for the modern connoisseur
            </p>
          </div>
          <Link className="btn-outline border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white" href="/collection">
            View All
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="group relative">
              <Link
                href={`/product/${product.slug}`}
                className="luxe-image block overflow-hidden"
              >
                <div className="aspect-[4/5] bg-gradient-to-b from-[#efe6d8] to-[#c5a975] transition-transform duration-500 group-hover:scale-102" />
              </Link>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl tracking-tight">{product.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-black/50">{product.volume}</p>
                </div>
                <p className="text-sm font-medium tracking-[0.08em]">{product.price}</p>
              </div>
              <button className="mt-4 w-full border border-black/10 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-all hover:border-black hover:bg-black hover:text-white">
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
