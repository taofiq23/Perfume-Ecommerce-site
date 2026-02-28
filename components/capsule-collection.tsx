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
};

const products: CapsuleProduct[] = [
  {
    slug: "velvet-oud",
    name: "Velvet Oud",
    category: "men",
    size: "100ml",
    price: "$220",
    tone: "from-[#e2d8c8] to-[#b59967]"
  },
  {
    slug: "amber-noir",
    name: "Amber Noir",
    category: "men",
    size: "90ml",
    price: "$195",
    tone: "from-[#dad0bf] to-[#9e7d49]"
  },
  {
    slug: "rose-ombre",
    name: "Rose Ombre",
    category: "women",
    size: "75ml",
    price: "$175",
    tone: "from-[#eadfda] to-[#b58e78]"
  },
  {
    slug: "midnight-musk",
    name: "Midnight Musk",
    category: "women",
    size: "100ml",
    price: "$205",
    tone: "from-[#dbd7d0] to-[#7f776b]"
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
  },
  {
    slug: "obsidian-tonka",
    name: "Obsidian Tonka",
    category: "men",
    size: "100ml",
    price: "$240",
    tone: "from-[#d8d0c2] to-[#6f5b3b]"
  },
  {
    slug: "silk-amber",
    name: "Silk Amber",
    category: "women",
    size: "90ml",
    price: "$225",
    tone: "from-[#eadfcd] to-[#ae8a61]"
  },
  {
    slug: "black-saffron",
    name: "Black Saffron",
    category: "men",
    size: "75ml",
    price: "$198",
    tone: "from-[#ddd2c0] to-[#806645]"
  },
  {
    slug: "velvet-rose",
    name: "Velvet Rose",
    category: "women",
    size: "100ml",
    price: "$230",
    tone: "from-[#ead7d3] to-[#9c7464]"
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
    <section className="py-20 md:py-32">
      <div className="px-5 md:px-10">
        <div className="mb-16 border-b border-black/10 pb-12 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="kicker text-xs tracking-[0.3em] text-black/60">EXCLUSIVE FRAGRANCES</p>
            <h2 className="mt-6 font-display text-5xl leading-[0.9] md:text-7xl lg:text-8xl">Explore The Collection</h2>
            <p className="mx-auto mt-8 max-w-2xl text-sm uppercase leading-relaxed tracking-[0.1em] text-black/50">
              A curated selection of signature scents crafted with precision and passion
            </p>
          </div>
        </div>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-12 border-b border-black/10 pb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-3 text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
              activeTab === "all"
                ? "border-b-2 border-black text-black"
                : "text-black/40 hover:text-black"
            }`}
          >
            All Fragrances
          </button>
          <button
            onClick={() => setActiveTab("men")}
            className={`pb-3 text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
              activeTab === "men"
                ? "border-b-2 border-black text-black"
                : "text-black/40 hover:text-black"
            }`}
          >
            For Him
          </button>
          <button
            onClick={() => setActiveTab("women")}
            className={`pb-3 text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
              activeTab === "women"
                ? "border-b-2 border-black text-black"
                : "text-black/40 hover:text-black"
            }`}
          >
            For Her
          </button>
        </div>

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <article key={product.slug} className="group">
              <Link href={`/product/${product.slug}`} className="luxe-image block overflow-hidden">
                <div className={`relative aspect-[3/4] bg-gradient-to-b ${product.tone} transition-transform duration-700 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90">
                        {product.category === 'men' ? 'FOR HIM' : 'FOR HER'}
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90">
                        {product.size}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="mt-8 text-center">
                <p className="font-display text-3xl tracking-tight">{product.name}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/50">
                  {product.category === 'men' ? 'Men\'s Fragrance' : 'Women\'s Fragrance'}
                </p>
                <p className="mt-4 text-sm font-medium tracking-[0.1em]">
                  {product.price}
                </p>
                <button className="mt-6 w-full border border-black/20 py-3 text-xs uppercase tracking-[0.2em] transition-all hover:border-black hover:bg-black hover:text-white">
                  Add to Bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
