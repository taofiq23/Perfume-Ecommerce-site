export default function ReturnsPage() {
  return (
    <section className="container-luxe py-16 md:py-24">
      <p className="kicker">Returns</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Returns & Exchanges</h1>
      <p className="mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-[0.12em] text-secondary/70">
        Return unopened products within 14 days of delivery. Exchanges are available for sealed items of equal value.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">1. Request</h2>
          <p className="mt-3 text-sm text-secondary/80">Contact support with your order number and reason for return.</p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">2. Ship Back</h2>
          <p className="mt-3 text-sm text-secondary/80">Pack the sealed product securely and use the approved return label.</p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">3. Refund</h2>
          <p className="mt-3 text-sm text-secondary/80">Refunds are processed to the original payment method within 5-7 business days.</p>
        </article>
      </div>

      <div className="mt-10 border border-black/10 p-6">
        <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Eligibility</h2>
        <p className="mt-3 text-sm leading-relaxed text-secondary/80">
          Items must be unopened and in original packaging. Used, damaged, or unsealed products are non-returnable for hygiene and safety reasons.
        </p>
      </div>
    </section>
  );
}

