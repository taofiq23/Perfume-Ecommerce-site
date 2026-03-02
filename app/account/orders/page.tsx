import Link from "next/link";
import { orders } from "./order-data";

export default function OrdersPage() {
  return (
    <section className="space-y-6">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Orders</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Order History</h2>
        <p className="account-subtitle">Track deliveries, review purchases, and access post-order support.</p>
      </div>

      <div className="grid gap-4 md:hidden">
        {orders.map((order) => (
          <article key={order.id} className="account-panel p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-black/55">Order</p>
                <p className="mt-1 text-sm font-medium">{order.id}</p>
              </div>
              <span
                className={`inline-block px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                  order.status === "Delivered" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                }`}
              >
                {order.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-black/70">Date: {order.date}</p>
            <p className="mt-1 text-sm text-black/70">Items: {order.items.join(", ")}</p>
            <p className="mt-1 text-sm font-medium">{order.total}</p>
            <Link
              href={`/account/orders/${order.id}`}
              className="mt-4 inline-block text-xs uppercase tracking-[0.12em] text-black/60 hover:text-black"
            >
              View Details
            </Link>
          </article>
        ))}
      </div>

      <div className="account-panel hidden overflow-x-auto p-6 md:block">
        <table className="w-full min-w-[760px]">
          <thead>
            <tr className="border-b border-black/10">
              <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Order ID</th>
              <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Date</th>
              <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Items</th>
              <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Total</th>
              <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Status</th>
              <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-black/5">
                <td className="py-5 text-sm font-medium">{order.id}</td>
                <td className="py-5 text-sm text-black/70">{order.date}</td>
                <td className="py-5 text-sm text-black/70">{order.items.join(", ")}</td>
                <td className="py-5 text-sm font-medium">{order.total}</td>
                <td className="py-5">
                  <span
                    className={`inline-block px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                      order.status === "Delivered" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-5">
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="text-xs uppercase tracking-[0.12em] text-black/60 hover:text-black"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="account-panel p-6">
          <h3 className="text-xs uppercase tracking-[0.16em] text-black/60">Order Support</h3>
          <p className="mt-3 text-sm text-black/72">Need help with a purchase or shipment update?</p>
          <Link href="/support" className="mt-4 inline-block text-xs uppercase tracking-[0.12em] text-black/65 hover:text-black">
            Contact Support
          </Link>
        </article>
        <article className="account-panel p-6">
          <h3 className="text-xs uppercase tracking-[0.16em] text-black/60">Returns & Exchanges</h3>
          <p className="mt-3 text-sm text-black/72">Review eligibility and start a return request.</p>
          <Link href="/returns" className="mt-4 inline-block text-xs uppercase tracking-[0.12em] text-black/65 hover:text-black">
            View Policy
          </Link>
        </article>
        <article className="account-panel p-6">
          <h3 className="text-xs uppercase tracking-[0.16em] text-black/60">Shipping Information</h3>
          <p className="mt-3 text-sm text-black/72">Delivery timelines and service levels.</p>
          <Link href="/shipping" className="mt-4 inline-block text-xs uppercase tracking-[0.12em] text-black/65 hover:text-black">
            Shipping Details
          </Link>
        </article>
      </div>
    </section>
  );
}
