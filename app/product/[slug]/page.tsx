import Link from "next/link";

const productMap: Record<string, { name: string; family: string; price: string; description: string; tone: string }> = {
  "velvet-oud": {
    name: "Velvet Oud",
    family: "Woody Oriental",
    price: "$220",
    description:
      "Smoked oud with saffron and suede vanilla. Built for evenings and lasting presence.",
    tone: "from-[#e2d8c8] to-[#b59967]"
  },
  "amber-noir": {
    name: "Amber Noir",
    family: "Amber Spicy",
    price: "$195",
    description: "Warm amber and spice layered with resin depth and soft musk finish.",
    tone: "from-[#dad0bf] to-[#9e7d49]"
  },
  "rose-ombre": {
    name: "Rose Ombre",
    family: "Floral Smoke",
    price: "$175",
    description: "Dark rose, plum accord, and mineral woods in a modern unisex structure.",
    tone: "from-[#eadfda] to-[#b58e78]"
  },
  "midnight-musk": {
    name: "Midnight Musk",
    family: "Musk Leather",
    price: "$205",
    description: "A clean leather-musk signature with cardamom and tonka bean warmth.",
    tone: "from-[#dbd7d0] to-[#7f776b]"
  },
  "noir-reserve": {
    name: "Noir Reserve",
    family: "Dark Woody",
    price: "$235",
    description: "A richer oud-forward blend layered with incense and warm resin.",
    tone: "from-[#ddd5c6] to-[#8f7752]"
  },
  "golden-veil": {
    name: "Golden Veil",
    family: "Amber Floral",
    price: "$210",
    description: "A smooth amber-floral composition with elegant evening depth.",
    tone: "from-[#e8ddd4] to-[#a47c66]"
  },
  "lunar-smoke": {
    name: "Lunar Smoke",
    family: "Spiced Wood",
    price: "$185",
    description: "Dry woods and smoked spice designed for a modern statement trail.",
    tone: "from-[#d9cfbe] to-[#8d6f43]"
  },
  "velour-iris": {
    name: "Velour Iris",
    family: "Powdered Floral",
    price: "$190",
    description: "Velvety iris and soft musk accords with contemporary refinement.",
    tone: "from-[#dfd9d0] to-[#8e8478]"
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productMap[params.slug] ?? productMap["velvet-oud"];

  return (
    <section className="min-h-screen bg-white py-24 md:py-32">
      <div className="container-luxe grid gap-20 md:grid-cols-2 md:gap-24">
        <div className="luxe-panel overflow-hidden p-6">
          <div className={`relative aspect-[3/4] bg-gradient-to-b ${product.tone} transition-transform duration-700 hover:scale-105`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/90">EXCLUSIVE FRAGRANCE</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="kicker text-xs tracking-[0.3em] text-black/60">{product.family}</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] md:text-7xl lg:text-8xl">{product.name}</h1>
          <p className="mt-8 max-w-xl text-base uppercase leading-relaxed tracking-[0.1em] text-black/70">
            {product.description}
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Size</p>
              <p className="mt-2 text-sm font-medium tracking-[0.1em]">100ml / Extrait de Parfum</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Price</p>
              <p className="mt-2 font-display text-3xl tracking-tight">{product.price}</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <button className="flex-1 bg-black px-10 py-5 text-xs uppercase tracking-[0.3em] text-white transition-all hover:bg-black/90">
              Add To Bag
            </button>
            <Link 
              href="/collection" 
              className="flex-1 border-2 border-black px-10 py-5 text-center text-xs uppercase tracking-[0.3em] transition-all hover:bg-black hover:text-white"
            >
              Back To Collection
            </Link>
          </div>
          
          <div className="mt-16 border-t border-black/10 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Product Details</p>
            <ul className="mt-6 space-y-4 text-sm uppercase tracking-[0.1em] text-black/70">
              <li>• Long-lasting 8-10 hour wear</li>
              <li>• Crafted with natural essences</li>
              <li>• Vegan & cruelty-free formula</li>
              <li>• Includes luxury gift packaging</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
