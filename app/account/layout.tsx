import { ReactNode } from "react";
import Link from "next/link";

const accountLinks = [
  { href: "/account/orders", label: "My Orders" },
  { href: "/account/wallet", label: "Wallet" },
  { href: "/account/settings", label: "Settings" },
];

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-black/10">
        <div className="container-luxe py-8">
          <h1 className="font-display text-4xl md:text-5xl">Account</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.1em] text-black/50">
            Manage your account and preferences
          </p>
        </div>
      </div>
      <div className="container-luxe py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <nav className="sticky top-24 space-y-2">
              {accountLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-l-2 border-transparent py-2 pl-4 text-sm uppercase tracking-[0.1em] text-black/60 hover:border-black hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-black/10">
                <Link
                  href="/account/signin"
                  className="block py-2 pl-4 text-sm uppercase tracking-[0.1em] text-black/60 hover:text-black"
                >
                  Sign In
                </Link>
                <Link
                  href="/account/signup"
                  className="block py-2 pl-4 text-sm uppercase tracking-[0.1em] text-black/60 hover:text-black"
                >
                  Create Account
                </Link>
              </div>
            </nav>
          </div>
          <div className="md:col-span-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
