"use client";

import { FormEvent, useState } from "react";

type SettingsForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  newsletter: boolean;
  marketing: boolean;
};

const initialForm: SettingsForm = {
  firstName: "Alex",
  lastName: "Morgan",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  newsletter: true,
  marketing: false
};

export default function SettingsPage() {
  const [formData, setFormData] = useState<SettingsForm>(initialForm);
  const [saved, setSaved] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
    setSaved(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  const handleCancel = () => {
    setFormData(initialForm);
    setSaved(false);
  };

  return (
    <section className="space-y-6">
      <div className="account-panel p-6 md:p-8">
        <p className="kicker">Profile</p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Account Settings</h2>
        <p className="account-subtitle">Update personal details, communication preferences, and security settings.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="account-panel p-6 md:p-8">
          <h3 className="text-xs uppercase tracking-[0.18em] text-black/55">Personal Information</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="account-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="account-input"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="account-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="account-input"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="account-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="account-input"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="phone" className="account-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="account-input"
            />
          </div>
        </div>

        <div className="account-panel p-6 md:p-8">
          <h3 className="text-xs uppercase tracking-[0.18em] text-black/55">Communication Preferences</h3>
          <div className="mt-5 space-y-4">
            <label className="flex items-start gap-3 text-sm text-black/75">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="mt-0.5"
              />
              <span>Receive newsletter updates for launches, stories, and limited capsule releases.</span>
            </label>
            <label className="flex items-start gap-3 text-sm text-black/75">
              <input
                type="checkbox"
                name="marketing"
                checked={formData.marketing}
                onChange={handleChange}
                className="mt-0.5"
              />
              <span>Receive product recommendations and promotional messages.</span>
            </label>
          </div>
        </div>

        <div className="account-panel p-6 md:p-8">
          <h3 className="text-xs uppercase tracking-[0.18em] text-black/55">Security</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button type="button" className="account-btn-primary w-full">
              Change Password
            </button>
            <button type="button" className="account-btn-outline w-full">
              Two-Factor Authentication
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={handleCancel} className="account-btn-outline w-full sm:w-auto">
            Cancel
          </button>
          <button type="submit" className="account-btn-primary w-full sm:w-auto">
            Save Changes
          </button>
        </div>

        {saved ? (
          <p className="account-panel p-4 text-sm text-black/75">Your settings were saved successfully.</p>
        ) : null}
      </form>

      <div className="account-panel p-6 md:p-8">
        <h3 className="text-xs uppercase tracking-[0.18em] text-black/55">Account Actions</h3>
        <div className="mt-4 flex flex-col gap-3 text-sm">
          <button className="text-left text-red-600 hover:underline">Deactivate Account</button>
          <button className="text-left text-red-600 hover:underline">Delete Account Permanently</button>
        </div>
      </div>
    </section>
  );
}
