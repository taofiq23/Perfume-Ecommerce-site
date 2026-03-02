export default function PaymentPage() {
  return (
    <section className="space-y-6">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Payment</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Payment Methods</h2>
        <p className="account-subtitle">Manage cards, billing preferences, and invoice access.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="account-panel p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.16em] text-black/55">Visa Ending 2048</p>
            <span className="bg-black px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-white">Default</span>
          </div>
          <p className="mt-4 text-sm text-black/70">Cardholder: Alex Morgan</p>
          <p className="mt-1 text-sm text-black/70">Expires: 08/2028</p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-black/60">
            <button className="hover:text-black">Edit</button>
            <button className="hover:text-black">Remove</button>
          </div>
        </article>

        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Mastercard Ending 8831</p>
          <p className="mt-4 text-sm text-black/70">Cardholder: Alex Morgan</p>
          <p className="mt-1 text-sm text-black/70">Expires: 01/2029</p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-black/60">
            <button className="hover:text-black">Set Default</button>
            <button className="hover:text-black">Remove</button>
          </div>
        </article>
      </div>

      <div className="grid gap-3 sm:flex sm:flex-wrap">
        <button className="account-btn-primary w-full sm:w-auto">Add New Card</button>
        <button className="account-btn-outline w-full sm:w-auto">Download Latest Invoice</button>
      </div>
    </section>
  );
}
