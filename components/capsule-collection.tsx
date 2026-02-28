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
  }
];

export function CapsuleCollection() {
  const [activeTab, setActiveTab] = useState<CapsuleCategory>("all");

  const visibleProducts = useMemo(() => {
    if (activeTab === "all") {
      return products.slice(0, 6);
    }
    return products.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Fragrances</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.96] md:text-5xl">Explore The Collection</h2>
          </div>
          <Link href="/collection" className="hidden border-b border-secondary pb-1 text-[10px] uppercase tracking-[0.24em] md:inline-block">
            View All
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 border-b border-black/10 pb-6 md:justify-start">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-2 text-[10px] uppercase tracking-[0.28em] transition ${
              activeTab === "all"
                ? "border-b border-secondary text-secondary"
                : "text-secondary/55 hover:text-secondary"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("men")}
            className={`pb-2 text-[10px] uppercase tracking-[0.28em] transition ${
              activeTab === "men"
                ? "border-b border-secondary text-secondary"
                : "text-secondary/55 hover:text-secondary"
            }`}
          >
            For Men
          </button>
          <button
            onClick={() => setActiveTab("women")}
            className={`pb-2 text-[10px] uppercase tracking-[0.28em] transition ${
              activeTab === "women"
                ? "border-b border-secondary text-secondary"
                : "text-secondary/55 hover:text-secondary"
            }`}
          >
            For Women
          </button>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <article key={product.slug} className="group">
              <Link href={`/product/${product.slug}`} className="luxe-image block">
                <div className={`relative aspect-[4/5] bg-gradient-to-b ${product.tone}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.08),transparent_45%)]" />
                </div>
              </Link>
              <div className="mt-6 text-center sm:text-left">
                <p className="font-display text-[36px] leading-none">{product.name}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.26em] text-secondary/60">
                  {product.size}
                </p>
                <p className="mt-4 text-[12px] uppercase tracking-[0.18em]">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
