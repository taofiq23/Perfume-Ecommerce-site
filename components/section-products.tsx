import Link from "next/link";

const products = [
  { slug: "velvet-oud", name: "Velvet Oud", volume: "100ml", price: "$220" },
  { slug: "amber-noir", name: "Amber Noir", volume: "90ml", price: "$195" },
  { slug: "rose-ombre", name: "Rose Ombre", volume: "75ml", price: "$175" }
];

export function SectionProducts() {
  return (
    <section className="border-y border-black/10 py-32">
      <div className="container-luxe">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="kicker text-sm tracking-[0.3em]">
              SIGNATURE LINE
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[0.9] md:text-7xl">Shop The Collection</h2>
            <p className="mt-6 max-w-xl text-sm uppercase leading-relaxed tracking-[0.1em] text-secondary/70">
              Our most iconic fragrances, reimagined for the modern connoisseur
            </p>
          </div>
          <Link className="btn-outline border-2 border-black px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white" href="/collection">
            View All Fragrances
          </Link>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="group relative">
              <Link
                href={`/product/${product.slug}`}
                className="luxe-image block overflow-hidden"
              >
                <div className="aspect-[3/4] bg-gradient-to-b from-[#efe6d8] to-[#c5a975] transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <div className="mt-8 flex items-start justify-between gap-6">
                <div>
                  <p className="font-display text-3xl tracking-tight">{product.name}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/60">{product.volume}</p>
                </div>
                <p className="text-sm font-medium tracking-[0.1em]">{product.price}</p>
              </div>
              <button className="mt-8 w-full border border-black py-3 text-xs uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white">
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
