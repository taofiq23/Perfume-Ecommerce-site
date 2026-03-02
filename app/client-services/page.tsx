import Link from "next/link";

export default function ClientServicesPage() {
  return (
    <section className="container-luxe py-16 md:py-24">
      <p className="kicker">Client Services</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">How We Can Help</h1>
      <p className="mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-[0.12em] text-secondary/70">
        We provide fragrance guidance, order support, delivery assistance, and post-purchase care for every Noir Atelier client.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Product Advice</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/75">
            Need help choosing a fragrance family or gift? Our team can recommend options based on mood and occasion.
          </p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Order Assistance</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/75">
            Support for payment confirmation, order changes, shipment delays, and delivery issues.
          </p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Aftercare</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/75">
            Guidance on product handling, returns, exchanges, and wallet credit questions.
          </p>
        </article>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/support" className="btn-primary">
          Visit Support Center
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
