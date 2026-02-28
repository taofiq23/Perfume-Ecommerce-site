import Link from "next/link";

const products = [
  { slug: "velvet-oud", name: "Velvet Oud", volume: "100ml", price: "$220" },
  { slug: "amber-noir", name: "Amber Noir", volume: "90ml", price: "$195" },
  { slug: "rose-ombre", name: "Rose Ombre", volume: "75ml", price: "$175" }
];

export function SectionProducts() {
  return (
    <section className="py-24 md:py-28">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">
              Signature Line
            </p>
            <h2 className="section-title mt-5">Shop The Collection</h2>
          </div>
          <Link className="btn-outline" href="/collection">
            View All
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="group">
              <Link
                href={`/product/${product.slug}`}
                className="luxe-image block"
              >
                <div className="aspect-[4/5] bg-gradient-to-b from-[#efe6d8] to-[#c5a975]" />
              </Link>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl">{product.name}</p>
                  <p className="text-sm text-secondary/70">{product.volume}</p>
                </div>
                <p className="text-sm tracking-[0.12em]">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
