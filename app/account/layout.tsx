"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const accountLinks = [
  { href: "/account", label: "Overview" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/wishlist", label: "Wishlist" },
  { href: "/account/address-book", label: "Address Book" },
  { href: "/account/payment", label: "Payment" },
  { href: "/account/wallet", label: "Wallet" },
  { href: "/account/settings", label: "Settings" }
];

export default function AccountLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="account-shell">
      <div className="border-b border-black/10 bg-white/55">
        <div className="container-luxe py-10 md:py-12">
          <p className="kicker">Client Space</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Account</h1>
          <p className="mt-4 max-w-3xl text-sm uppercase tracking-[0.12em] text-black/55">
            Orders, saved preferences, payment methods, and profile settings in one place.
          </p>
        </div>
      </div>

      <div className="container-luxe py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside>
            <nav className="account-panel sticky top-24 overflow-x-auto p-2">
              <div className="flex gap-2 lg:flex-col">
                {accountLinks.map((link) => {
                  const active =
                    link.href === "/account"
                      ? pathname === "/account"
                      : pathname === link.href || pathname.startsWith(`${link.href}/`);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`shrink-0 rounded-sm border px-4 py-2.5 text-xs uppercase tracking-[0.14em] transition ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/10 text-black/65 hover:border-black/30 hover:text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </aside>

          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
