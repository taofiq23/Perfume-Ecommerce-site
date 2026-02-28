"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic
    console.log("Sign in attempt:", { email, password });
  };

  return (
    <section className="min-h-screen bg-white py-24 md:py-32">
      <div className="container-luxe max-w-md">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl leading-[0.95] md:text-5xl">Sign In</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.1em] text-black/50">
            Access your account to view orders, wallet, and more
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-xs uppercase tracking-[0.1em] text-black/60">Remember me</span>
            </label>
            <Link href="/account/forgot-password" className="text-xs uppercase tracking-[0.1em] text-black/50 hover:text-black">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black py-4 text-xs uppercase tracking-[0.3em] text-white transition-all hover:bg-black/90"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.1em] text-black/50">
            Don't have an account?{" "}
            <Link href="/account/signup" className="font-medium text-black hover:underline">
              Create one
            </Link>
          </p>
        </div>

        <div className="mt-12 border-t border-black/10 pt-12">
          <h2 className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-black/60">Benefits of an account</h2>
          <ul className="space-y-4 text-sm uppercase tracking-[0.1em] text-black/70">
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              Track your orders
            </li>
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              Manage your wallet
            </li>
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              Faster checkout
            </li>
            <li className="flex items-center">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              Exclusive offers
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
