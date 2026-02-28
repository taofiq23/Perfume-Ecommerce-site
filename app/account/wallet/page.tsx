"use client";

import { useState } from "react";

export default function WalletPage() {
  const [balance, setBalance] = useState(125.50);
  const [transactions] = useState([
    { id: 1, type: "credit", amount: 50.00, description: "Gift Card", date: "2026-02-20" },
    { id: 2, type: "debit", amount: -220.00, description: "Velvet Oud Purchase", date: "2026-02-15" },
    { id: 3, type: "credit", amount: 100.00, description: "Wallet Top-up", date: "2026-02-10" },
    { id: 4, type: "debit", amount: -195.00, description: "Amber Noir Purchase", date: "2026-02-05" },
  ]);

  return (
    <section className="min-h-screen bg-white py-24 md:py-32">
      <div className="container-luxe max-w-4xl">
        <div className="mb-12">
          <h1 className="font-display text-4xl leading-[0.95] md:text-5xl">My Wallet</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.1em] text-black/50">
            Manage your balance and transaction history
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="border border-black/10 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">Current Balance</p>
            <p className="mt-4 font-display text-4xl">${balance.toFixed(2)}</p>
          </div>
          <div className="border border-black/10 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">Available Credit</p>
            <p className="mt-4 font-display text-4xl">$500.00</p>
          </div>
          <div className="border border-black/10 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">Reward Points</p>
            <p className="mt-4 font-display text-4xl">1,250</p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <button className="border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white">
            Add Funds
          </button>
          <button className="border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white">
            Transfer to Bank
          </button>
          <button className="border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white">
            View Gift Cards
          </button>
        </div>

        <div>
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-black/60">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Date</th>
                  <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Description</th>
                  <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Amount</th>
                  <th className="pb-4 text-left text-xs uppercase tracking-[0.2em] text-black/60">Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-black/5">
                    <td className="py-4 text-sm">{tx.date}</td>
                    <td className="py-4 text-sm">{tx.description}</td>
                    <td className={`py-4 text-sm font-medium ${
                      tx.type === "credit" ? "text-green-700" : "text-red-700"
                    }`}>
                      {tx.type === "credit" ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <span className={`inline-block px-3 py-1 text-xs uppercase tracking-[0.1em] ${
                        tx.type === "credit" 
                          ? "bg-green-50 text-green-700" 
                          : "bg-red-50 text-red-700"
                      }`}>
                        {tx.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-12">
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-black/60">Wallet Benefits</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Instant checkout with stored balance</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Earn reward points on every purchase</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Exclusive offers for wallet users</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Secure transactions with encryption</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
