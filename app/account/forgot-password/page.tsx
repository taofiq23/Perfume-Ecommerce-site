"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="mx-auto w-full max-w-xl">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Authentication</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Reset Password</h2>
        <p className="account-subtitle">
          Enter the email associated with your account and we will send reset instructions.
        </p>

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
              required
              className="account-input"
              placeholder="your@email.com"
            />
          </div>

          <button type="submit" className="account-btn-primary w-full">
            Send Reset Link
          </button>
        </form>

        {sent ? (
          <p className="mt-5 border border-black/10 bg-black/[0.03] p-3 text-sm text-black/75">
            If this email exists in our system, reset instructions will arrive shortly.
          </p>
        ) : null}

        <p className="mt-7 text-xs uppercase tracking-[0.12em] text-black/55">
          Remembered your password?{" "}
          <Link href="/account/signin" className="text-black hover:underline">
            Return to Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
