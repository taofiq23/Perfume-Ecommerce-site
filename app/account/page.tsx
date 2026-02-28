import Link from "next/link";

const accountLinks = [
  { href: "/account/orders", label: "Orders", subtitle: "Track and review purchases" },
  { href: "/account/settings", label: "Settings", subtitle: "Edit profile and preferences" },
  { href: "/account/address-book", label: "Address Book", subtitle: "Manage saved addresses" },
  { href: "/account/wishlist", label: "Wishlist", subtitle: "Saved favorites and alerts" },
  { href: "/account/payment", label: "Payment", subtitle: "Cards and billing options" },
  { href: "/account/sign-in", label: "Sign In", subtitle: "Access your account" }
];

export default function AccountPage() {
  return (
    <section className="container-luxe py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="border-b border-black/10 pb-8 text-center">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-black/20">
            <span className="relative h-7 w-7">
              <span className="absolute left-1/2 top-[2px] h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-secondary/80" />
              <span className="absolute bottom-[2px] left-1/2 h-3.5 w-5.5 -translate-x-1/2 rounded-t-full border border-secondary/80 border-b-0" />
            </span>
          </div>
          <p className="kicker mt-5">My Account</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Account Overview</h1>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {accountLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-black/10 bg-white/40 p-6 transition hover:bg-white"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-secondary/70 group-hover:text-secondary">
                {item.label}
              </p>
              <p className="mt-3 text-sm text-secondary/75">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
