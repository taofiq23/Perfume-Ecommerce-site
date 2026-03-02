export default function AddressBookPage() {
  return (
    <section className="space-y-6">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Address Book</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Saved Addresses</h2>
        <p className="account-subtitle">Keep shipping and billing details ready for faster checkout.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="account-panel p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.16em] text-black/55">Default Shipping</p>
            <span className="bg-black px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-white">Primary</span>
          </div>
          <p className="mt-4 text-sm text-black/80">Alex Morgan</p>
          <p className="mt-1 text-sm leading-relaxed text-black/70">
            580 Fifth Avenue, Suite 1120
            <br />
            New York, NY 10036
            <br />
            United States
          </p>
          <p className="mt-1 text-sm text-black/70">+1 (555) 203-1840</p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-black/60">
            <button className="hover:text-black">Edit</button>
            <button className="hover:text-black">Set as Billing</button>
          </div>
        </article>

        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Billing Address</p>
          <p className="mt-4 text-sm text-black/80">Alex Morgan</p>
          <p className="mt-1 text-sm leading-relaxed text-black/70">
            74 Mercer Street
            <br />
            New York, NY 10012
            <br />
            United States
          </p>
          <p className="mt-1 text-sm text-black/70">+1 (555) 203-1840</p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-black/60">
            <button className="hover:text-black">Edit</button>
            <button className="hover:text-black">Set as Shipping</button>
          </div>
        </article>
      </div>

      <button className="account-btn-primary w-full sm:w-auto">Add New Address</button>
    </section>
  );
}
