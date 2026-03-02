import Link from "next/link";

const wishlistItems = [
  { slug: "velvet-oud", name: "Velvet Oud", price: "$220", tone: "from-[#e2d8c8] to-[#b59967]" },
  { slug: "amber-noir", name: "Amber Noir", price: "$195", tone: "from-[#dad0bf] to-[#9e7d49]" },
  { slug: "rose-ombre", name: "Rose Ombre", price: "$175", tone: "from-[#eadfda] to-[#b58e78]" }
];

export default function WishlistPage() {
  return (
    <section className="space-y-6">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Wishlist</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Saved Favorites</h2>
        <p className="account-subtitle">Keep track of fragrances and move them to your bag when ready.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {wishlistItems.map((item) => (
          <article key={item.slug} className="account-panel p-4">
            <Link href={`/product/${item.slug}`} className="block overflow-hidden border border-black/10">
              <div className={`aspect-[4/5] bg-gradient-to-br ${item.tone}`} />
            </Link>
            <div className="mt-4">
              <p className="font-display text-2xl">{item.name}</p>
              <p className="mt-1 text-sm text-black/70">{item.price}</p>
            </div>
            <div className="mt-4 grid gap-2">
              <button className="account-btn-primary w-full">Add to Bag</button>
              <button className="account-btn-outline w-full">Remove</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
