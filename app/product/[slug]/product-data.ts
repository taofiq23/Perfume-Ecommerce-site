export type ProductDetails = {
  name: string;
  family: string;
  description: string;
  tone: string;
  sizes: Array<{ label: string; price: string }>;
};

export const productMap: Record<string, ProductDetails> = {
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
  },
  "obsidian-tonka": {
    name: "Obsidian Tonka",
    family: "Warm Tonka",
    description: "Roasted tonka, cocoa facets, and smoky woods for a rich evening signature.",
    tone: "from-[#d8d0c2] to-[#6f5b3b]",
    sizes: [
      { label: "50 ml", price: "$170" },
      { label: "100 ml", price: "$240" }
    ]
  },
  "silk-amber": {
    name: "Silk Amber",
    family: "Soft Amber",
    description: "Silken amber wrapped in delicate florals and creamy sandalwood.",
    tone: "from-[#eadfcd] to-[#ae8a61]",
    sizes: [
      { label: "50 ml", price: "$155" },
      { label: "90 ml", price: "$225" }
    ]
  },
  "black-saffron": {
    name: "Black Saffron",
    family: "Spiced Leather",
    description: "Saffron spice over dark leather and cedar for a bold modern trail.",
    tone: "from-[#ddd2c0] to-[#806645]",
    sizes: [
      { label: "50 ml", price: "$145" },
      { label: "75 ml", price: "$198" }
    ]
  },
  "velvet-rose": {
    name: "Velvet Rose",
    family: "Rose Amber",
    description: "Velvety rose petals blended with amber and warm musks.",
    tone: "from-[#ead7d3] to-[#9c7464]",
    sizes: [
      { label: "50 ml", price: "$160" },
      { label: "100 ml", price: "$230" }
    ]
  }
};

export const topRatedOrder = [
  "velvet-oud",
  "amber-noir",
  "noir-reserve",
  "golden-veil",
  "midnight-musk",
  "rose-ombre",
  "lunar-smoke",
  "velour-iris"
];

export const reviews = [
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

export const ratingBreakdown = [
  { label: "5", percent: 72 },
  { label: "4", percent: 19 },
  { label: "3", percent: 7 },
  { label: "2", percent: 1 },
  { label: "1", percent: 1 }
];
