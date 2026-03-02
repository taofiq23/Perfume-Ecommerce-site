export default function PrivacyPolicyPage() {
  return (
    <section className="container-luxe py-16 md:py-24">
      <p className="kicker">Legal</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Privacy Policy</h1>
      <p className="mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-[0.12em] text-secondary/70">
        This policy explains how Noir Atelier collects, uses, and protects your personal information.
      </p>

      <div className="mt-10 space-y-6">
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Data We Collect</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/80">
            Account details, order information, payment metadata, delivery addresses, and customer support messages.
          </p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">How We Use Data</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/80">
            To process orders, deliver products, provide support, improve services, and send marketing messages when consent is provided.
          </p>
        </article>
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Your Choices</h2>
          <p className="mt-3 text-sm leading-relaxed text-secondary/80">
            You may request data updates, marketing opt-out, or account deletion by contacting client services.
          </p>
        </article>
      </div>
    </section>
  );
}

