export default function OrdersPage() {
  return (
    <section className="container-luxe py-20 md:py-24">
      <p className="kicker">Account</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.96] md:text-6xl">Orders</h1>
      <p className="mt-6 max-w-xl text-sm uppercase tracking-[0.14em] text-secondary/70">
        Orders page placeholder. Show order history, status, and tracking here.
      </p>
    </section>
  );
}
import Link from "next/link";

const orders = [
  { id: "ORD-78945", date: "2026-02-15", total: "$220", status: "Delivered", items: ["Velvet Oud"] },
  { id: "ORD-78944", date: "2026-02-10", total: "$430", status: "Processing", items: ["Amber Noir", "Rose Ombre"] },
  { id: "ORD-78943", date: "2026-02-05", total: "$195", status: "Delivered", items: ["Amber Noir"] },
  { id: "ORD-78942", date: "2026-01-28", total: "$375", status: "Delivered", items: ["Midnight Musk", "Velvet Oud"] },
];

export default function OrdersPage() {
  return (
    <section className="min-h-screen bg-white py-24 md:py-32">
      <div className="container-luxe">
        <div className="mb-12">
          <h1 className="font-display text-4xl leading-[0.95] md:text-5xl">My Orders</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.1em] text-black/50">
            Track and manage your recent purchases
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead>
              <tr className="border-b border-black/10">
                <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Order ID</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Date</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Items</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Total</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Status</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-black/5">
                  <td className="py-6">
                    <p className="text-sm font-medium">{order.id}</p>
                  </td>
                  <td className="py-6">
                    <p className="text-sm text-black/70">{order.date}</p>
                  </td>
                  <td className="py-6">
                    <p className="text-sm text-black/70">{order.items.join(", ")}</p>
                  </td>
                  <td className="py-6">
                    <p className="text-sm font-medium">{order.total}</p>
                  </td>
                  <td className="py-6">
                    <span className={`inline-block px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                      order.status === "Delivered" 
                        ? "bg-green-50 text-green-700" 
                        : "bg-yellow-50 text-yellow-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-6">
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="text-xs uppercase tracking-[0.1em] text-black/50 hover:text-black"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 border-t border-black/10 pt-12">
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-black/60">Need Help?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-black/10 p-6">
              <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.1em]">Order Support</h3>
              <p className="text-sm text-black/70">Questions about your order? Contact our support team.</p>
              <Link href="/support" className="mt-4 inline-block text-xs uppercase tracking-[0.1em] text-black hover:underline">
                Contact Support
              </Link>
            </div>
            <div className="border border-black/10 p-6">
              <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.1em]">Returns & Exchanges</h3>
              <p className="text-sm text-black/70">Learn about our return policy and initiate a return.</p>
              <Link href="/returns" className="mt-4 inline-block text-xs uppercase tracking-[0.1em] text-black hover:underline">
                View Policy
              </Link>
            </div>
            <div className="border border-black/10 p-6">
              <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.1em]">Shipping Info</h3>
              <p className="text-sm text-black/70">Track your shipment and view delivery estimates.</p>
              <Link href="/shipping" className="mt-4 inline-block text-xs uppercase tracking-[0.1em] text-black hover:underline">
                Shipping Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
