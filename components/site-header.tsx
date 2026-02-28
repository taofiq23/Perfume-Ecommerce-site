"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AccountIcon } from "./account-icon";

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/story", label: "Story" },
  { href: "/product/velvet-oud", label: "Signature" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 40) {
        setCompact(false);
      } else if (currentY > lastY) {
        setCompact(true);
      } else if (currentY < lastY) {
        setCompact(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-base/95 backdrop-blur-sm">
      <div
        className={`hidden overflow-hidden border-b border-black/10 transition-all duration-300 md:block ${
          compact ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-luxe flex h-9 items-center justify-between text-[9px] uppercase tracking-[0.24em] text-secondary/60">
          <p>United States / English</p>
          <div className="flex items-center gap-6">
            <button>Search</button>
            <button>Shipping</button>
          </div>
        </div>
      </div>

      <div className="container-luxe flex h-16 items-center justify-between text-[10px] uppercase tracking-[0.25em] md:h-[86px]">
        <button className="hidden md:inline-block">Menu</button>
        <Link href="/" className="font-display text-[21px] tracking-[0.2em] md:text-[29px]">
          NOIR ATELIER
        </Link>
        <div className="flex items-center gap-6">
          <button className="hidden md:inline-block">Bag (0)</button>
          <div className="hidden md:block">
            <AccountIcon />
          </div>
          <button
            className="inline md:hidden"
            onClick={() => setMenuOpen((state) => !state)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
        </div>
      </div>

      <div
        className={`hidden overflow-hidden border-t border-black/10 transition-all duration-300 md:block ${
          compact ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
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
          <Link
            href="/account/signin"
            onClick={() => setMenuOpen(false)}
            className="border-b border-black/10 py-4 text-xs uppercase tracking-[0.22em] text-secondary/80"
          >
            Sign In
          </Link>
          <Link
            href="/account/signup"
            onClick={() => setMenuOpen(false)}
            className="border-b border-black/10 py-4 text-xs uppercase tracking-[0.22em] text-secondary/80"
          >
            Create Account
          </Link>
          <Link
            href="/account/orders"
            onClick={() => setMenuOpen(false)}
            className="border-b border-black/10 py-4 text-xs uppercase tracking-[0.22em] text-secondary/80"
          >
            My Orders
          </Link>
          <Link
            href="/account/wallet"
            onClick={() => setMenuOpen(false)}
            className="border-b border-black/10 py-4 text-xs uppercase tracking-[0.22em] text-secondary/80"
          >
            Wallet
          </Link>
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
