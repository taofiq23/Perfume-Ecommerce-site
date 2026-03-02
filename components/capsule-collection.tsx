"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CapsuleCategory = "all" | "men" | "women";

type CapsuleProduct = {
  slug: string;
  name: string;
  category: Exclude<CapsuleCategory, "all">;
  size: string;
  price: string;
  tone: string;
  image?: string;
};

const products: CapsuleProduct[] = [
  {
    slug: "velvet-oud",
    name: "Velvet Oud",
    category: "men",
    size: "100ml",
    price: "$220",
    tone: "from-[#e2d8c8] to-[#b59967]",
    image: "/images/product-velvet-oud.jpg"
  },
  {
    slug: "amber-noir",
    name: "Amber Noir",
    category: "men",
    size: "90ml",
    price: "$195",
    tone: "from-[#dad0bf] to-[#9e7d49]",
    image: "/images/product-amber-noir.webp"
  },
  {
    slug: "rose-ombre",
    name: "Rose Ombre",
    category: "women",
    size: "75ml",
    price: "$175",
    tone: "from-[#eadfda] to-[#b58e78]",
    image: "/images/product-rose-ombre.jpg"
  },
  {
    slug: "midnight-musk",
    name: "Midnight Musk",
    category: "women",
    size: "100ml",
    price: "$205",
    tone: "from-[#dbd7d0] to-[#7f776b]",
    image: "/images/product-midnight-musk.jpg"
  },
  {
    slug: "noir-reserve",
    name: "Noir Reserve",
    category: "men",
    size: "100ml",
    price: "$235",
    tone: "from-[#ddd5c6] to-[#8f7752]"
  },
  {
    slug: "golden-veil",
    name: "Golden Veil",
    category: "women",
    size: "90ml",
    price: "$210",
    tone: "from-[#e8ddd4] to-[#a47c66]"
  },
  {
    slug: "lunar-smoke",
    name: "Lunar Smoke",
    category: "men",
    size: "75ml",
    price: "$185",
    tone: "from-[#d9cfbe] to-[#8d6f43]"
  },
  {
    slug: "velour-iris",
    name: "Velour Iris",
    category: "women",
    size: "75ml",
    price: "$190",
    tone: "from-[#dfd9d0] to-[#8e8478]"
  }
];

export function CapsuleCollection() {
  const [activeTab, setActiveTab] = useState<CapsuleCategory>("all");

  const visibleProducts = useMemo(() => {
    if (activeTab === "all") {
      return products;
    }
    return products.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="py-12 md:py-20">
      <div className="container-luxe">
        <div className="mb-10 border-b border-black/10 pb-8 text-center">
          <p className="kicker text-xs tracking-[0.24em] text-black/60">Fragrance Wardrobe</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.92] md:text-7xl">Shop The Collection</h2>
          <p className="mx-auto mt-5 max-w-2xl text-xs uppercase leading-relaxed tracking-[0.12em] text-black/50">
            Explore signature bottles crafted for long wear, character, and modern luxury.
          </p>
        </div>

        <div className="mb-8 flex items-center gap-3 overflow-x-auto border-b border-black/10 pb-4">
          {(["all", "men", "women"] as const).map((tab) => {
            const active = activeTab === tab;
            const label = tab === "all" ? "All" : tab === "men" ? "For Him" : "For Her";
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-black/20 text-black/65 hover:border-black hover:text-black"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <article key={product.slug} className="group border border-black/10 bg-white">
              <Link href={`/product/${product.slug}`} className="block overflow-hidden border-b border-black/10">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 md:group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`aspect-[4/5] w-full bg-gradient-to-b ${product.tone} transition-transform duration-500 md:group-hover:scale-[1.03]`} />
                )}
              </Link>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl leading-[1]">{product.name}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-black/50">
                      {product.category === "men" ? "Men's" : "Women's"} / {product.size}
                    </p>
                  </div>
                  <p className="text-sm font-medium">{product.price}</p>
                </div>

                <Link
                  href={`/product/${product.slug}`}
                  className="mt-4 block w-full bg-black py-3 text-center text-xs uppercase tracking-[0.16em] text-white transition hover:bg-black/90"
                >
                  Add to Bag
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
