import Link from "next/link";

export default function SupportPage() {
  return (
    <section className="container-luxe py-16 md:py-24">
      <p className="kicker">Support Center</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Order & Account Support</h1>
      <p className="mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-[0.12em] text-secondary/70">
        Find fast answers for order tracking, billing questions, shipping timelines, and account access.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Common Actions</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-secondary/80">
            <Link href="/account/orders" className="hover:underline">
              Track an existing order
            </Link>
            <Link href="/returns" className="hover:underline">
              Start a return or exchange
            </Link>
            <Link href="/shipping" className="hover:underline">
              Review shipping options
            </Link>
          </div>
        </article>

        <article className="border border-black/10 p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Contact Hours</h2>
          <p className="mt-4 text-sm leading-relaxed text-secondary/75">
            Monday to Friday, 9:00 AM - 7:00 PM (US Eastern). Average first response time is under 12 hours.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-secondary/75">
            For urgent shipping issues, include your order number in the message subject.
          </p>
        </article>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="btn-primary">
          Open Contact Page
        </Link>
      </div>
    </section>
  );
}
