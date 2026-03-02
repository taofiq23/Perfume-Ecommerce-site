"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto w-full max-w-xl">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Authentication</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Sign In</h2>
        <p className="account-subtitle">Access orders, wallet activity, and personalized fragrance recommendations.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="account-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="account-input"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="account-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="account-input"
              placeholder="********"
              required
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.12em] text-black/60">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link href="/account/forgot-password" className="hover:text-black">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="account-btn-primary w-full">
            Sign In
          </button>
        </form>

        {submitted ? (
          <p className="mt-5 border border-black/10 bg-black/[0.03] p-3 text-sm text-black/75">
            Demo mode: your sign-in request was captured.
          </p>
        ) : null}

        <p className="mt-7 text-xs uppercase tracking-[0.12em] text-black/55">
          New here?{" "}
          <Link href="/account/signup" className="text-black hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </section>
  );
}
