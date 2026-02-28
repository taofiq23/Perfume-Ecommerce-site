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
    <section className="bg-base-2 py-16 md:py-24">
      <div className="container-luxe grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="luxe-panel p-3">
          <div className={`relative aspect-square bg-gradient-to-b ${product.tone}`}>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.08),transparent_45%)]" />
          </div>
        </div>

        <div>
          <p className="kicker">{product.family}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.03] md:text-6xl">{product.name}</h1>
          <p className="mt-6 max-w-xl text-sm uppercase leading-relaxed tracking-[0.14em] text-secondary/72">
            {product.description}
          </p>

          <p className="mt-8 text-[10px] uppercase tracking-[0.24em]">100ml / Extrait</p>
          <p className="mt-3 text-[12px] uppercase tracking-[0.16em]">{product.price}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-primary">Add To Bag</button>
            <Link href="/collection" className="btn-outline">
              Back To Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
