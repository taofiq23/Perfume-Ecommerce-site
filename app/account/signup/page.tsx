"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic
    console.log("Sign up attempt:", formData);
  };

  return (
    <section className="min-h-screen bg-white py-24 md:py-32">
      <div className="container-luxe max-w-md">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl leading-[0.95] md:text-5xl">Create Account</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.1em] text-black/50">
            Join our community for exclusive benefits
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
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
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-xs uppercase tracking-[0.1em] text-black/60">
              Subscribe to our newsletter for exclusive offers
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black py-4 text-xs uppercase tracking-[0.3em] text-white transition-all hover:bg-black/90"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.1em] text-black/50">
            Already have an account?{" "}
            <Link href="/account/signin" className="font-medium text-black hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-12 border-t border-black/10 pt-12">
          <h2 className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-black/60">Account Benefits</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-black/10 p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.1em]">Order Tracking</p>
            </div>
            <div className="border border-black/10 p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.1em]">Wallet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
