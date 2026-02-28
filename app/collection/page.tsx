import Link from "next/link";

const collection = [
  { slug: "velvet-oud", name: "Velvet Oud", family: "Woody Oriental", price: "$220" },
  { slug: "amber-noir", name: "Amber Noir", family: "Amber Spicy", price: "$195" },
  { slug: "rose-ombre", name: "Rose Ombre", family: "Floral Smoke", price: "$175" },
  { slug: "midnight-musk", name: "Midnight Musk", family: "Musk Leather", price: "$205" }
];

export default function CollectionPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-luxe">
        <p className="kicker">Fragrance Wardrobe</p>
        <h1 className="section-title mt-5">The Collection</h1>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collection.map((item) => (
            <article key={item.slug} className="group">
              <Link href={`/product/${item.slug}`} className="luxe-image block">
                <div className="aspect-[4/5] bg-gradient-to-b from-[#ece1d0] to-[#b3925c]" />
              </Link>
              <div className="mt-5 text-center sm:text-left">
                <p className="font-display text-[34px] leading-none">{item.name}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-secondary/60">{item.family}</p>
                <p className="mt-4 text-[12px] uppercase tracking-[0.16em]">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
