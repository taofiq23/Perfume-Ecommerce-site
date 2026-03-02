import Link from "next/link";

const footerSections = [
  {
    title: "Shop",
    links: [
      { href: "/collection", label: "Collection" },
      { href: "/product/velvet-oud", label: "Signature Fragrance" },
      { href: "/story", label: "Brand Story" }
    ]
  },
  {
    title: "Customer Care",
    links: [
      { href: "/client-services", label: "Client Services" },
      { href: "/support", label: "Support Center" },
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "FAQ" },
      { href: "/shipping", label: "Shipping" },
      { href: "/returns", label: "Returns & Exchanges" }
    ]
  },
  {
    title: "Account",
    links: [
      { href: "/account/signin", label: "Sign In" },
      { href: "/account/signup", label: "Create Account" },
      { href: "/account/orders", label: "My Orders" },
      { href: "/account/wallet", label: "Wallet" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" }
    ]
  }
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-secondary text-base-2">
      <div className="container-luxe py-12 md:py-16">
        <div className="grid gap-10 border-b border-base-2/20 pb-10 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-display text-2xl tracking-[0.2em]">NOIR ATELIER</p>
            <p className="mt-4 max-w-xs text-xs uppercase leading-relaxed tracking-[0.12em] text-base-2/70">
              Modern fragrance house built with editorial aesthetics, precise perfumery, and luxury service.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-base-2/55">{section.title}</h3>
              <div className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs uppercase tracking-[0.14em] text-base-2/75 transition hover:text-base-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 text-xs uppercase tracking-[0.12em] text-base-2/60 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} Noir Atelier. All rights reserved.</p>
          <p>Secure Checkout | Major Cards Accepted</p>
        </div>
      </div>
    </footer>
  );
}
