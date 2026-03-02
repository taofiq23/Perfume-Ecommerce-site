"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

type SignUpForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialForm: SignUpForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function SignUpPage() {
  const [formData, setFormData] = useState<SignUpForm>(initialForm);
  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({
      ...current,
      [event.target.id]: event.target.value
    }));
    setMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("Demo mode: your account request was captured.");
  };

  return (
    <section className="mx-auto w-full max-w-2xl">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Authentication</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Create Account</h2>
        <p className="account-subtitle">Build your profile to save favorites, track orders, and speed up checkout.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="account-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="account-input"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="account-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="account-input"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="account-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="account-input"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="password" className="account-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="account-input"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="account-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="account-input"
                required
              />
            </div>
          </div>

          <label className="inline-flex items-start gap-2 text-xs uppercase tracking-[0.12em] text-black/60">
            <input type="checkbox" className="mt-0.5" />
            <span>Send me launch updates, offers, and fragrance stories.</span>
          </label>

          <button type="submit" className="account-btn-primary w-full">
            Create Account
          </button>
        </form>

        {message ? (
          <p className="mt-5 border border-black/10 bg-black/[0.03] p-3 text-sm text-black/75">{message}</p>
        ) : null}

        <p className="mt-7 text-xs uppercase tracking-[0.12em] text-black/55">
          Already have an account?{" "}
          <Link href="/account/signin" className="text-black hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
