"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Category = "all" | "men" | "women";

type Product = {
  slug: string;
  name: string;
  category: Exclude<Category, "all">;
  price: string;
  tone: string;
};

const products: Product[] = [
  {
    slug: "velvet-oud",
    name: "YUBI ESSENCE VELVET OUD, 90ML",
    category: "men",
    price: "$220",
    tone: "from-[#ddd4c5] to-[#9d7f4f]"
  },
  {
    slug: "amber-noir",
    name: "YUBI ESSENCE AMBER NOIR, 90ML",
    category: "men",
    price: "$195",
    tone: "from-[#d6cec0] to-[#927347]"
  },
  {
    slug: "rose-ombre",
    name: "YUBI ESSENCE ROSE OMBRE, 75ML",
    category: "women",
    price: "$175",
    tone: "from-[#e6d8d3] to-[#a87e70]"
  },
  {
    slug: "midnight-musk",
    name: "YUBI ESSENCE MIDNIGHT MUSK, 100ML",
    category: "women",
    price: "$205",
    tone: "from-[#d8d4cd] to-[#80796c]"
  },
  {
    slug: "noir-reserve",
    name: "YUBI ESSENCE NOIR RESERVE, 100ML",
    category: "men",
    price: "$235",
    tone: "from-[#d9d0c2] to-[#88714d]"
  },
  {
    slug: "golden-veil",
    name: "YUBI ESSENCE GOLDEN VEIL, 90ML",
    category: "women",
    price: "$210",
    tone: "from-[#eadfd6] to-[#ae8467]"
  },
  {
    slug: "lunar-smoke",
    name: "YUBI ESSENCE LUNAR SMOKE, 75ML",
    category: "men",
    price: "$185",
    tone: "from-[#d5cdbc] to-[#876c43]"
  },
  {
    slug: "velour-iris",
    name: "YUBI ESSENCE VELOUR IRIS, 75ML",
    category: "women",
    price: "$190",
    tone: "from-[#ddd7ce] to-[#8e8478]"
  }
];

export function CapsuleCollection() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const visibleProducts = useMemo(() => {
    if (activeTab === "all") return products;
    return products.filter((product) => product.category === activeTab);
  }, [activeTab]);

  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1320px] border-x border-black/10">
        <div className="border-b border-black/10 px-5 py-10 text-center md:px-8 md:py-14">
          <h2 className="text-[34px] leading-none tracking-[0.03em] text-black/80 md:text-[52px]">
            DISCOVER YUBI ESSENCE COLLECTION
          </h2>
          <div className="mx-auto mt-5 h-px w-28 bg-black/25" />

          <div className="mt-5 flex items-center justify-center gap-6">
            {(["all", "men", "women"] as const).map((tab) => {
              const label = tab === "all" ? "ALL" : tab === "men" ? "MEN" : "WOMEN";
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] tracking-[0.14em] transition ${
                    active ? "text-black" : "text-black/35"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2">
          {visibleProducts.map((product, index) => (
            <article key={product.slug} className="border-b border-black/10">
              <div className={`${index % 2 === 0 ? "border-r" : ""} border-black/10`}>
                <div className="relative border-b border-black/10 bg-white/40">
                  <button
                    className="absolute right-3 top-3 z-10 text-black/75"
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M12 20s-6.5-4.1-8.8-7.1C1 10 1.4 6.9 4.3 5.6c2-0.9 4.2-0.3 5.7 1.4 1.5-1.7 3.8-2.3 5.7-1.4 2.9 1.3 3.3 4.4 1.1 7.3C18.5 15.9 12 20 12 20Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </button>

                  <Link href={`/product/${product.slug}`} className="block">
                    <div className={`aspect-square w-full bg-gradient-to-b ${product.tone}`} />
                  </Link>
                </div>

                <div className="px-3 py-4 text-center md:px-5 md:py-5">
                  <p className="mx-auto max-w-[210px] text-[11px] uppercase leading-[1.4] tracking-[0.08em] text-black/80 md:text-xs">
                    {product.name}
                  </p>
                  <p className="mt-4 text-[30px] leading-none text-black/80 md:text-[34px]">{product.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
