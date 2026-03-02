"use client";

import { useState } from "react";

type WalletTx = {
  id: number;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: string;
};

export default function WalletPage() {
  const [balance] = useState(125.5);
  const [transactions] = useState<WalletTx[]>([
    { id: 1, type: "credit", amount: 50, description: "Gift Card", date: "2026-02-20" },
    { id: 2, type: "debit", amount: -220, description: "Velvet Oud Purchase", date: "2026-02-15" },
    { id: 3, type: "credit", amount: 100, description: "Wallet Top-up", date: "2026-02-10" },
    { id: 4, type: "debit", amount: -195, description: "Amber Noir Purchase", date: "2026-02-05" }
  ]);

  return (
    <section className="space-y-6">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Wallet</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Credits & Transactions</h2>
        <p className="account-subtitle">Manage balance, reward points, and payment activity.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Current Balance</p>
          <p className="mt-3 font-display text-4xl">${balance.toFixed(2)}</p>
        </article>
        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Available Credit</p>
          <p className="mt-3 font-display text-4xl">$500.00</p>
        </article>
        <article className="account-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-black/55">Reward Points</p>
          <p className="mt-3 font-display text-4xl">1,250</p>
        </article>
      </div>

      <div className="grid gap-3 sm:flex sm:flex-wrap">
        <button className="account-btn-primary w-full sm:w-auto">Add Funds</button>
        <button className="account-btn-outline w-full sm:w-auto">Transfer to Bank</button>
        <button className="account-btn-outline w-full sm:w-auto">View Gift Cards</button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.18em] text-black/55">Recent Transactions</h3>
        <div className="grid gap-4 md:hidden">
          {transactions.map((tx) => (
            <article key={`mobile-${tx.id}`} className="account-panel p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-black/55">{tx.date}</p>
                  <p className="mt-2 text-sm text-black/80">{tx.description}</p>
                </div>
                <span
                  className={`inline-block px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                    tx.type === "credit" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                  }`}
                >
                  {tx.type}
                </span>
              </div>
              <p className={`mt-4 text-sm font-medium ${tx.type === "credit" ? "text-green-700" : "text-red-700"}`}>
                {tx.type === "credit" ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
              </p>
            </article>
          ))}
        </div>

        <div className="account-panel hidden overflow-x-auto p-6 md:block">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-black/10">
                <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Date</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Description</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Amount</th>
                <th className="pb-4 text-left text-xs uppercase tracking-[0.18em] text-black/60">Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-black/5">
                  <td className="py-4 text-sm">{tx.date}</td>
                  <td className="py-4 text-sm">{tx.description}</td>
                  <td className={`py-4 text-sm font-medium ${tx.type === "credit" ? "text-green-700" : "text-red-700"}`}>
                    {tx.type === "credit" ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                        tx.type === "credit" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      }`}
                    >
                      {tx.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
