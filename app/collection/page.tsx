import Link from "next/link";

const collection = [
  { slug: "velvet-oud", name: "Velvet Oud", family: "Woody Oriental", price: "$220" },
  { slug: "amber-noir", name: "Amber Noir", family: "Amber Spicy", price: "$195" },
  { slug: "rose-ombre", name: "Rose Ombre", family: "Floral Smoke", price: "$175" },
  { slug: "midnight-musk", name: "Midnight Musk", family: "Musk Leather", price: "$205" }
];

export default function CollectionPage() {
  return (
    <section className="min-h-screen bg-white py-24 md:py-32">
      <div className="container-luxe">
        <div className="mb-20 text-center">
          <p className="kicker text-xs tracking-[0.3em] text-black/60">THE COMPLETE COLLECTION</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] md:text-8xl">Fragrance Wardrobe</h1>
          <p className="mx-auto mt-8 max-w-2xl text-sm uppercase leading-relaxed tracking-[0.1em] text-black/50">
            Discover our full range of signature scents, each crafted with precision and passion
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {collection.map((item) => (
            <article key={item.slug} className="group relative">
              <Link href={`/product/${item.slug}`} className="luxe-image block overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-b from-[#ece1d0] to-[#b3925c] transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <div className="mt-8 text-center">
                <p className="font-display text-3xl tracking-tight">{item.name}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/50">{item.family}</p>
                <p className="mt-4 text-sm font-medium tracking-[0.1em]">{item.price}</p>
                <button className="mt-6 w-full border border-black/20 py-3 text-xs uppercase tracking-[0.2em] transition-all hover:border-black hover:bg-black hover:text-white">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
