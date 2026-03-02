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
              <div className="relative overflow-hidden">
                <Link
                  href={`/product/${product.slug}`}
                  className="luxe-image block"
                >
                  <div className="aspect-[4/5] bg-gradient-to-b from-[#efe6d8] to-[#c5a975] transition-all duration-500 md:group-hover:scale-105">
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/15 transition-all duration-300 md:bg-black/0 md:group-hover:bg-black/40">
                      <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-all duration-300 md:flex md:group-hover:opacity-100">
                        <div className="text-center p-6">
                          <div className="mb-4">
                            <span className="inline-block border border-white/50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white">
                              Quick View
                            </span>
                          </div>
                          <p className="text-xs uppercase tracking-[0.15em] text-white/90 mt-4">
                            Signature Fragrance
                          </p>
                        </div>
                      </div>
                      <p className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.14em] text-white/95 md:hidden">
                        Signature Fragrance
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl tracking-tight">{product.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-black/50">{product.volume}</p>
                  </div>
                  <p className="text-sm font-medium tracking-[0.08em]">{product.price}</p>
                </div>
                <div className="mt-4 md:hidden">
                  <Link
                    href={`/product/${product.slug}`}
                    className="block w-full bg-black py-3 text-center text-xs uppercase tracking-[0.15em] text-white"
                  >
                    Add to Cart
                  </Link>
                </div>
                {/* Hidden button that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 hidden translate-y-full opacity-0 transition-all duration-300 md:block md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <button className="w-full bg-black py-3 text-xs uppercase tracking-[0.15em] text-white transition-all hover:bg-black/90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
