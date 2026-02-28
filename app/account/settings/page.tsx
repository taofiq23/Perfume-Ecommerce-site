"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    newsletter: true,
    marketing: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic
    console.log("Settings saved:", formData);
    alert("Settings saved successfully!");
  };

  return (
    <section className="min-h-screen bg-white py-24 md:py-32">
      <div className="container-luxe max-w-2xl">
        <div className="mb-12">
          <h1 className="font-display text-4xl leading-[0.95] md:text-5xl">Account Settings</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.1em] text-black/50">
            Manage your personal information and preferences
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="border-b border-black/10 pb-8">
            <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-black/60">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.2em] text-black/60">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-black/20 px-4 py-3 text-sm focus:border-black focus:outline-none"
              />
            </div>
          </div>

          <div className="border-b border-black/10 pb-8">
            <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-black/60">Communication Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span className="text-sm">Subscribe to newsletter for exclusive offers and updates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="marketing"
                  checked={formData.marketing}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span className="text-sm">Receive marketing communications about new products</span>
              </label>
            </div>
          </div>

          <div className="border-b border-black/10 pb-8">
            <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-black/60">Security</h2>
            <div className="space-y-4">
              <button
                type="button"
                className="border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white"
              >
                Change Password
              </button>
              <button
                type="button"
                className="ml-4 border border-black/20 px-6 py-3 text-xs uppercase tracking-[0.2em] hover:border-black"
              >
                Two-Factor Authentication
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="border border-black/20 px-8 py-3 text-xs uppercase tracking-[0.2em] hover:border-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black px-8 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-black/90"
            >
              Save Changes
            </button>
          </div>
        </form>

        <div className="mt-12 border-t border-black/10 pt-12">
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-black/60">Account Actions</h2>
          <div className="space-y-4">
            <button className="text-left text-sm text-red-600 hover:underline">
              Deactivate Account
            </button>
            <button className="text-left text-sm text-red-600 hover:underline">
              Delete Account Permanently
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
