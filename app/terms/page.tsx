export default function TermsPage() {
  return (
    <section className="container-luxe py-16 md:py-24">
      <p className="kicker">Legal</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Terms & Conditions</h1>
      <p className="mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-[0.12em] text-secondary/70">
        By using this site and placing orders, you agree to the following service terms.
      </p>

      <div className="mt-10 space-y-6">
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Orders & Payments</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/80">
            Orders are confirmed after successful payment authorization. Prices and availability may change without notice.
          </p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Shipping & Delivery</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/80">
            Delivery estimates are not guaranteed and may vary based on carrier operations, destination, and customs processing.
          </p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Returns & Liability</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/80">
            Returns follow our posted returns policy. Liability is limited to the value of purchased goods as permitted by applicable law.
          </p>
        </article>
      </div>
    </section>
  );
}

