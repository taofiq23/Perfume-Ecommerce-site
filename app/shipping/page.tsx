export default function ShippingPage() {
  const methods = [
    { name: "Standard", eta: "3-5 business days", cost: "Free over $150" },
    { name: "Express", eta: "1-2 business days", cost: "$18" },
    { name: "International", eta: "5-10 business days", cost: "Calculated at checkout" }
  ];

  return (
    <section className="container-luxe py-16 md:py-24">
      <p className="kicker">Shipping</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">Shipping Information</h1>
      <p className="mt-6 max-w-3xl text-sm uppercase leading-relaxed tracking-[0.12em] text-secondary/70">
        Delivery timelines and shipping options for domestic and international fragrance orders.
      </p>

      <div className="mt-10 grid gap-4 md:hidden">
        {methods.map((method) => (
          <article key={method.name} className="border border-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-secondary/60">{method.name}</p>
            <p className="mt-3 text-sm text-secondary/80">Estimated: {method.eta}</p>
            <p className="mt-1 text-sm font-medium text-secondary/80">{method.cost}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[680px] border border-black/10">
          <thead>
            <tr className="border-b border-black/10 bg-black/5">
              <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.2em] text-secondary/70">Method</th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.2em] text-secondary/70">Estimated Time</th>
              <th className="px-4 py-3 text-left text-xs uppercase tracking-[0.2em] text-secondary/70">Cost</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((method) => (
              <tr key={`table-${method.name}`} className="border-b border-black/10 last:border-b-0">
                <td className="px-4 py-4 text-sm text-secondary/80">{method.name}</td>
                <td className="px-4 py-4 text-sm text-secondary/80">{method.eta}</td>
                <td className="px-4 py-4 text-sm text-secondary/80">{method.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 border border-black/10 p-6">
        <h2 className="text-xs uppercase tracking-[0.2em] text-secondary/70">Shipping Notes</h2>
        <p className="mt-3 text-sm leading-relaxed text-secondary/80">
          Orders are processed Monday through Friday. During launch periods and holidays, processing can take up to 48 extra hours.
        </p>
      </div>
    </section>
  );
}
