export default function FaqPage() {
  return (
    <section className="container-luxe py-16 md:py-24">
      <p className="kicker">FAQ</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Frequently Asked Questions</h1>
      <p className="mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-[0.12em] text-secondary/70">
        Quick answers for orders, shipping, account, and product care.
      </p>

      <div className="mt-10 border-t border-black/10">
        <details className="border-b border-black/10 py-4">
          <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-secondary/75">
            How do I track my order?
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary/80">
            Sign in to your account and open the Orders page to see current status and shipment details.
          </p>
        </details>
        <details className="border-b border-black/10 py-4">
          <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-secondary/75">
            Can I change my shipping address after placing an order?
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary/80">
            Address changes are possible before dispatch. Contact support as soon as possible with your order number.
          </p>
        </details>
        <details className="border-b border-black/10 py-4">
          <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-secondary/75">
            Do you offer international shipping?
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary/80">
            Yes. International delivery timelines and rates are shown at checkout and may vary by destination.
          </p>
        </details>
        <details className="border-b border-black/10 py-4">
          <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-secondary/75">
            What is your return window?
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary/80">
            Unopened products can be returned within 14 days from delivery.
          </p>
        </details>
      </div>
    </section>
  );
}

