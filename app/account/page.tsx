import Link from "next/link";

const quickLinks = [
  { href: "/account/orders", label: "Orders", subtitle: "Track purchases and delivery status" },
  { href: "/account/wishlist", label: "Wishlist", subtitle: "Save products for later checkout" },
  { href: "/account/address-book", label: "Address Book", subtitle: "Manage shipping and billing addresses" },
  { href: "/account/payment", label: "Payment", subtitle: "Update cards, billing, and invoices" },
  { href: "/account/wallet", label: "Wallet", subtitle: "Review credits, rewards, and transactions" },
  { href: "/account/settings", label: "Settings", subtitle: "Edit profile and communication preferences" }
];

export default function AccountPage() {
  return (
    <section className="space-y-8">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Overview</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Welcome Back</h2>
        <p className="account-subtitle mt-5 max-w-3xl">
          Access recent orders, payment options, saved items, and personal preferences from this dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {quickLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="account-panel group flex min-h-36 flex-col justify-between p-6 transition hover:border-black/25 hover:bg-white"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/55 group-hover:text-black/75">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{item.subtitle}</p>
            </div>
            <span className="mt-6 text-xs uppercase tracking-[0.14em] text-black/45 group-hover:text-black/70">
              Open Section
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
