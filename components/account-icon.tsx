"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export function AccountIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  };

  const closeMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 120);
  };

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center"
        aria-label="Account menu"
        aria-expanded={isOpen}
      >
        <div className="relative h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-md border border-black/10 bg-white py-2 shadow-lg">
          <div className="px-4 py-3 border-b border-black/10">
            <p className="text-xs uppercase tracking-[0.1em] text-black/60">Welcome</p>
            <p className="text-sm font-medium">Sign in to your account</p>
          </div>
          <Link
            href="/account/signin"
            className="block px-4 py-3 text-sm uppercase tracking-[0.1em] hover:bg-black/5"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/account/signup"
            className="block px-4 py-3 text-sm uppercase tracking-[0.1em] hover:bg-black/5"
            onClick={() => setIsOpen(false)}
          >
            Create Account
          </Link>
          <div className="border-t border-black/10">
            <Link
              href="/account/orders"
              className="block px-4 py-3 text-sm uppercase tracking-[0.1em] hover:bg-black/5"
              onClick={() => setIsOpen(false)}
            >
              My Orders
            </Link>
            <Link
              href="/account/wallet"
              className="block px-4 py-3 text-sm uppercase tracking-[0.1em] hover:bg-black/5"
              onClick={() => setIsOpen(false)}
            >
              Wallet
            </Link>
            <Link
              href="/account/settings"
              className="block px-4 py-3 text-sm uppercase tracking-[0.1em] hover:bg-black/5"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
