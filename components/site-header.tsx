"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/story", label: "Story" },
  { href: "/product/velvet-oud", label: "Signature" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-base/95 backdrop-blur-sm">
      <div className="hidden border-b border-black/10 md:block">
        <div className="container-luxe flex h-9 items-center justify-between text-[9px] uppercase tracking-[0.24em] text-secondary/60">
          <p>United States / English</p>
          <p>Search</p>
        </div>
      </div>

      <div className="container-luxe flex h-16 items-center justify-between text-[10px] uppercase tracking-[0.25em] md:h-[86px]">
        <button className="hidden md:inline-block">Menu</button>
        <Link href="/" className="font-display text-[21px] tracking-[0.2em] md:text-[29px]">
          NOIR ATELIER
        </Link>
        <button className="hidden md:inline-block">Bag (0)</button>
        <button
          className="inline md:hidden"
          onClick={() => setMenuOpen((state) => !state)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </div>

      <div className="hidden border-t border-black/10 md:block">
        <nav className="container-luxe flex h-[50px] items-center justify-center gap-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.29em] text-secondary/72 transition hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={`overflow-hidden border-t border-black/10 bg-base transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="container-luxe flex flex-col py-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/10 py-4 text-xs uppercase tracking-[0.22em] text-secondary/80"
            >
              {link.label}
            </Link>
          ))}
          <button className="border-b border-black/10 py-4 text-left text-xs uppercase tracking-[0.22em] text-secondary/80">
            Search
          </button>
          <button className="py-4 text-left text-xs uppercase tracking-[0.22em] text-secondary/80">
            Bag (0)
          </button>
        </div>
      </div>
    </header>
  );
}
