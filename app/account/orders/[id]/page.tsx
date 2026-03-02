import Link from "next/link";
import { notFound } from "next/navigation";
import { orders } from "../order-data";

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const order = orders.find((item) => item.id === params.id);

  if (!order) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <div className="account-panel p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">Order Details</p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">{order.id}</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.12em] text-black/55">Placed on {order.date}</p>
          </div>
          <Link href="/account/orders" className="account-btn-outline">
            Back to Orders
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Status</p>
          <p className="mt-3 text-sm text-black/80">{order.status}</p>
        </article>
        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Total</p>
          <p className="mt-3 text-sm text-black/80">{order.total}</p>
        </article>
        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Items Count</p>
          <p className="mt-3 text-sm text-black/80">{order.items.length}</p>
        </article>
      </div>

      <div className="account-panel p-6 md:p-8">
        <h3 className="text-xs uppercase tracking-[0.16em] text-black/55">Items in This Order</h3>
        <ul className="mt-4 space-y-3">
          {order.items.map((item) => (
            <li key={item} className="border-b border-black/10 pb-3 text-sm text-black/78 last:border-b-0 last:pb-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
