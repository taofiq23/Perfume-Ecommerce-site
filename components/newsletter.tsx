export function Newsletter() {
  return (
    <section className="border-t border-black/10 py-24 md:py-28">
      <div className="container-luxe grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="kicker">Private Access</p>
          <h2 className="section-title mt-5">Join The Fragrance List</h2>
          <p className="mt-5 max-w-lg text-sm uppercase leading-relaxed tracking-[0.14em] text-secondary/70">
            Early access to launches, capsule drops, and brand stories.
          </p>
        </div>
        <form className="flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Your Email"
            className="h-12 w-full border border-black/20 bg-transparent px-4 text-[11px] uppercase tracking-[0.14em] outline-none placeholder:text-secondary/50 focus:border-secondary"
          />
          <button type="button" className="btn-primary h-12 min-w-40">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
