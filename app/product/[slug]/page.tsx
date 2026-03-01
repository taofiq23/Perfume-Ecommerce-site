"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ProductDetails = {
  name: string;
  family: string;
  description: string;
  tone: string;
  sizes: Array<{ label: string; price: string }>;
};

const productMap: Record<string, ProductDetails> = {
  "velvet-oud": {
    name: "Velvet Oud",
    family: "Woody Oriental",
    description: "Smoked oud with saffron and suede vanilla. Built for evenings and lasting presence.",
    tone: "from-[#e2d8c8] to-[#b59967]",
    sizes: [
      { label: "50 ml", price: "$150" },
      { label: "90 ml", price: "$220" }
    ]
  },
  "amber-noir": {
    name: "Amber Noir",
    family: "Amber Spicy",
    description: "Warm amber and spice layered with resin depth and soft musk finish.",
    tone: "from-[#dad0bf] to-[#9e7d49]",
    sizes: [
      { label: "50 ml", price: "$135" },
      { label: "90 ml", price: "$195" }
    ]
  },
  "rose-ombre": {
    name: "Rose Ombre",
    family: "Floral Smoke",
    description: "Dark rose, plum accord, and mineral woods in a modern unisex structure.",
    tone: "from-[#eadfda] to-[#b58e78]",
    sizes: [
      { label: "50 ml", price: "$125" },
      { label: "75 ml", price: "$175" }
    ]
  },
  "midnight-musk": {
    name: "Midnight Musk",
    family: "Musk Leather",
    description: "A clean leather-musk signature with cardamom and tonka bean warmth.",
    tone: "from-[#dbd7d0] to-[#7f776b]",
    sizes: [
      { label: "50 ml", price: "$145" },
      { label: "100 ml", price: "$205" }
    ]
  },
  "noir-reserve": {
    name: "Noir Reserve",
    family: "Dark Woody",
    description: "A richer oud-forward blend layered with incense and warm resin.",
    tone: "from-[#ddd5c6] to-[#8f7752]",
    sizes: [
      { label: "50 ml", price: "$165" },
      { label: "100 ml", price: "$235" }
    ]
  },
  "golden-veil": {
    name: "Golden Veil",
    family: "Amber Floral",
    description: "A smooth amber-floral composition with elegant evening depth.",
    tone: "from-[#e8ddd4] to-[#a47c66]",
    sizes: [
      { label: "50 ml", price: "$145" },
      { label: "90 ml", price: "$210" }
    ]
  },
  "lunar-smoke": {
    name: "Lunar Smoke",
    family: "Spiced Wood",
    description: "Dry woods and smoked spice designed for a modern statement trail.",
    tone: "from-[#d9cfbe] to-[#8d6f43]",
    sizes: [
      { label: "50 ml", price: "$130" },
      { label: "75 ml", price: "$185" }
    ]
  },
  "velour-iris": {
    name: "Velour Iris",
    family: "Powdered Floral",
    description: "Velvety iris and soft musk accords with contemporary refinement.",
    tone: "from-[#dfd9d0] to-[#8e8478]",
    sizes: [
      { label: "50 ml", price: "$132" },
      { label: "75 ml", price: "$190" }
    ]
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const currentSlug = productMap[params.slug] ? params.slug : "velvet-oud";
  const product = productMap[currentSlug];
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]?.label ?? product.sizes[0].label);
  const [quantity, setQuantity] = useState(1);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const gallery = [
    { title: "Hero Composition", tone: product.tone, chip: "01" },
    { title: "Bottle Detail", tone: "from-[#d9d5cf] to-[#969084]", chip: "02" },
    { title: "Material Mood", tone: "from-[#ece7dc] to-[#c4b49c]", chip: "03" }
  ];

  const selectedVariant = useMemo(
    () => product.sizes.find((size) => size.label === selectedSize) ?? product.sizes[0],
    [product.sizes, selectedSize]
  );
  const reviews = [
    {
      name: "Michael T.",
      date: "Feb 18, 2026",
      rating: 5,
      title: "Refined and long-lasting",
      comment:
        "Great balance of warmth and freshness. It stays on skin all evening and feels premium without being overpowering."
    },
    {
      name: "Daniel K.",
      date: "Feb 02, 2026",
      rating: 4,
      title: "Elegant daily signature",
      comment:
        "Clean opening with a smooth dry-down. Works well for office and dinner. Bottle and presentation are excellent."
    },
    {
      name: "Rahim A.",
      date: "Jan 27, 2026",
      rating: 5,
      title: "Exactly what I wanted",
      comment:
        "Strong projection in the first hour, then settles into a polished woody finish. Received many compliments."
    }
  ];
  const ratingBreakdown = [
    { label: "5", percent: 72 },
    { label: "4", percent: 19 },
    { label: "3", percent: 7 },
    { label: "2", percent: 1 },
    { label: "1", percent: 1 }
  ];
  const relatedProducts = useMemo(() => {
    const topRatedOrder = [
      "velvet-oud",
      "amber-noir",
      "noir-reserve",
      "golden-veil",
      "midnight-musk",
      "rose-ombre",
      "lunar-smoke",
      "velour-iris"
    ];

    return topRatedOrder
      .filter((slug) => slug !== currentSlug)
      .slice(0, 4)
      .map((slug, index) => {
        const item = productMap[slug];
        return {
          slug,
          ...item,
          rating: (4.9 - index * 0.1).toFixed(1),
          reviews: 240 - index * 32,
          price: item.sizes[item.sizes.length - 1]?.price ?? item.sizes[0].price
        };
      });
  }, [currentSlug]);

  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1580px] px-4 pt-5 md:px-8 xl:px-12">
        <nav className="mb-4 flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-black/45">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link href="/collection" className="hover:text-black">Fragrances For Men</Link>
          <span>/</span>
          <span className="text-black/80">{product.name}</span>
        </nav>
      </div>

      <div className="relative w-full overflow-hidden border-y border-black/10 bg-[#f1eee7]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.8),transparent_38%),radial-gradient(circle_at_90%_15%,rgba(255,255,255,0.55),transparent_28%)]" />
        <div className="mx-auto grid w-full max-w-[1580px] gap-6 px-4 py-5 md:px-8 md:py-8 xl:grid-cols-[1fr_220px] xl:px-12">
          <div className="relative h-[52vh] min-h-[360px] overflow-hidden border border-black/10 bg-white md:h-[62vh] md:min-h-[460px]">
            {gallery.map((slide, index) => (
              <div
                key={slide.chip}
                className={`absolute inset-0 transition-all duration-700 ${
                  selectedGalleryIndex === index ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-105"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.tone}`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.75),rgba(0,0,0,0.08))]" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 md:bottom-6 md:left-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center border border-black/20 bg-white/70 text-[10px] tracking-[0.14em]">
                    {slide.chip}
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-black/65">{slide.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 xl:grid-cols-1">
            {gallery.map((slide, index) => {
              const active = selectedGalleryIndex === index;
              return (
                <button
                  key={`thumb-${slide.chip}`}
                  onClick={() => setSelectedGalleryIndex(index)}
                  className={`group relative h-[96px] overflow-hidden border text-left transition-all duration-300 xl:h-[154px] ${
                    active ? "border-black shadow-[0_10px_25px_rgba(0,0,0,0.1)]" : "border-black/10 hover:border-black/35"
                  }`}
                  aria-label={`View ${slide.title}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.tone}`} />
                  <div className="absolute inset-0 bg-white/35 transition-opacity duration-300 group-hover:opacity-20" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between xl:bottom-3 xl:left-3 xl:right-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-black/70">{slide.chip}</span>
                    <span className="text-[9px] uppercase tracking-[0.14em] text-black/70">{active ? "Active" : "View"}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1580px] px-4 py-10 md:px-8 md:py-12 xl:px-12">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_440px] 2xl:grid-cols-[minmax(0,1fr)_460px]">
          <div>
            <h1 className="font-display text-4xl leading-[0.95] md:text-5xl">{product.name}, {selectedSize}</h1>
            <p className="mt-4 text-sm text-black/70">{product.family} fragrance profile.</p>

            <div className="mt-10 border-t border-black/10 pt-8">
              <h2 className="text-sm uppercase tracking-[0.2em] text-black/80">Product Description</h2>
              <p className="mt-4 text-sm leading-relaxed text-black/70">{product.description}</p>
            </div>

            <div className="mt-10 border-t border-black/10 pt-4 text-[10px] uppercase tracking-[0.2em] text-black/75">
              <details className="group border-b border-black/10 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1">
                  <span>Fragrance Notes</span>
                  <svg
                    className="h-3 w-3 text-black/50 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </summary>
                <p className="mt-2 pr-2 text-sm normal-case leading-relaxed text-black/70">
                  Top notes: bergamot, lemon zest and pink pepper. Heart notes: lavender, orange blossom and cardamom.
                  Base notes: cedarwood, amber and soft musk.
                </p>
              </details>
              <details className="group border-b border-black/10 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1">
                  <span>How To Apply</span>
                  <svg
                    className="h-3 w-3 text-black/50 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </summary>
                <p className="mt-2 pr-2 text-sm normal-case leading-relaxed text-black/70">
                  Spray 2 to 4 times on pulse points including neck and wrists. For longer wear, apply to moisturized skin
                  and avoid rubbing after application.
                </p>
              </details>
              <details className="group border-b border-black/10 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1">
                  <span>Shipping & Returns</span>
                  <svg
                    className="h-3 w-3 text-black/50 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </summary>
                <p className="mt-2 pr-2 text-sm normal-case leading-relaxed text-black/70">
                  Standard delivery in 3 to 5 business days and express delivery options at checkout. Unopened items can be
                  returned within 14 days from delivery.
                </p>
              </details>
              <details className="group border-b border-black/10 py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1">
                  <span>Ingredients</span>
                  <svg
                    className="h-3 w-3 text-black/50 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </summary>
                <p className="mt-2 pr-2 text-sm normal-case leading-relaxed text-black/70">
                  Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Coumarin, Citral, Geraniol,
                  Benzyl Benzoate, Citronellol, Eugenol.
                </p>
              </details>
            </div>
          </div>

          <div className="h-fit border border-black/10 bg-white p-5 md:sticky md:top-24 md:p-7">
            <p className="text-[9px] uppercase tracking-[0.25em] text-black/45">{product.family}</p>
            <h2 className="mt-3 font-display text-[34px] leading-[0.95] md:text-[42px]">{product.name}</h2>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-black/55">
              Eau De Parfum
            </p>
            <p className="mt-5 border-t border-black/10 pt-5 text-sm leading-relaxed text-black/70">{product.description}</p>

            <div className="mt-6">
              <div className="flex items-baseline justify-between">
                <p className="text-[10px] uppercase tracking-[0.22em] text-black/55">Size</p>
                <p className="text-[10px] uppercase tracking-[0.12em] text-black/45">Select a volume</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {product.sizes.map((size) => {
                  const active = size.label === selectedSize;
                  return (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size.label)}
                      className={`border px-3 py-3 text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/20 text-black/80 hover:border-black hover:text-black"
                      }`}
                    >
                      <span>{size.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between border-t border-black/10 pt-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/55">Price</p>
                <p className="mt-2 text-[30px] leading-none">{selectedVariant.price}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/55">Quantity</p>
                <div className="mt-2 flex border border-black/20">
                  <button
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="w-10 border-r border-black/20 text-sm hover:bg-black hover:text-white"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="flex w-10 items-center justify-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity((value) => value + 1)}
                    className="w-10 border-l border-black/20 text-sm hover:bg-black hover:text-white"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-2.5">
              <button className="border border-black bg-black px-4 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:bg-[#1a1a1a]">
                Add to Shopping Bag
              </button>
              <button className="border border-black px-4 py-4 text-[10px] uppercase tracking-[0.22em] text-black transition-colors duration-200 hover:bg-black hover:text-white">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 bg-white">
        <div className="mx-auto w-full max-w-[1580px] px-4 py-12 md:px-8 md:py-14 xl:px-12">
          <div className="mb-8 border-b border-black/10 pb-6">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/45">Verified Customer Feedback</p>
            <h2 className="mt-3 font-display text-3xl leading-[0.95] md:text-4xl">Reviews</h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="border border-black/10 bg-[#faf9f5] p-5 md:p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">Average Rating</p>
              <div className="mt-3 flex items-end gap-3">
                <p className="font-display text-5xl leading-none">4.7</p>
                <p className="pb-1 text-sm text-black/60">out of 5</p>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-black/50">Based on 247 reviews</p>
              <div className="mt-5 space-y-2">
                {ratingBreakdown.map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="w-3 text-[11px] text-black/60">{row.label}</span>
                    <div className="h-2 flex-1 bg-black/10">
                      <div className="h-2 bg-black" style={{ width: `${row.percent}%` }} />
                    </div>
                    <span className="w-9 text-right text-[11px] text-black/55">{row.percent}%</span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review) => (
                <article key={`${review.name}-${review.date}`} className="border border-black/10 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.14em] text-black/70">{review.name}</p>
                    <p className="text-[11px] text-black/45">{review.date}</p>
                  </div>
                  <p className="mt-2 text-[11px] text-black/70">{`${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`}</p>
                  <h3 className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-black/85">{review.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/68">{review.comment}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 bg-[#f8f6f1]">
        <div className="mx-auto w-full max-w-[1580px] px-4 py-12 md:px-8 md:py-14 xl:px-12">
          <div className="mb-8 border-b border-black/10 pb-6 text-center">
            <div className="mx-auto max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/45">Top Rated Picks</p>
              <h2 className="mt-3 font-display text-3xl leading-[0.95] md:text-4xl">You May Also Like</h2>
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-black/45">Swipe or scroll to explore</p>
            </div>
          </div>

          <div
            onWheel={(event) => {
              if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                event.preventDefault();
                event.currentTarget.scrollLeft += event.deltaY;
              }
            }}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
          >
            {relatedProducts.map((item) => (
              <article key={item.slug} className="group w-[290px] shrink-0 snap-start overflow-hidden border border-black/10 bg-white md:w-[320px]">
                <Link href={`/product/${item.slug}`} className="block">
                  <div className={`relative h-[220px] overflow-hidden bg-gradient-to-br ${item.tone}`}>
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.75),rgba(0,0,0,0.06))]" />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">{item.family}</p>
                    <p className="text-[10px] tracking-[0.08em] text-black/60">{"★".repeat(5)} {item.rating}</p>
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-[1]">{item.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-black/55">{item.reviews} Reviews</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                    <p className="text-sm font-medium">{item.price}</p>
                    <Link
                      href={`/product/${item.slug}`}
                      className="text-[10px] uppercase tracking-[0.18em] text-black/70 transition-colors hover:text-black"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
