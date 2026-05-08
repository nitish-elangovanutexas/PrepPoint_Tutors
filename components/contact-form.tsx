"use client";

import { useState } from "react";
import type { ContactFormValues } from "@/lib/contact-schema";

const initial: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  service: "both",
  preferredTime: "afternoon",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(typeof data.error === "string" ? data.error : "Something went wrong.");
        return;
      }
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
        role="status"
      >
        <p className="text-lg font-semibold text-navy">Thanks—we received your message.</p>
        <p className="mt-2 text-muted">We&apos;ll get back to you soon.</p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-accent underline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-foreground outline-none ring-accent focus:ring-2"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-foreground outline-none ring-accent focus:ring-2"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy">
          Phone <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-foreground outline-none ring-accent focus:ring-2"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-navy">
            Service <span className="text-red-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-foreground outline-none ring-accent focus:ring-2"
            value={values.service}
            onChange={(e) =>
              setValues((v) => ({
                ...v,
                service: e.target.value as ContactFormValues["service"],
              }))
            }
          >
            <option value="sat">SAT Prep</option>
            <option value="counseling">College Counseling</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-navy">
            Preferred consultation time <span className="text-red-600">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-foreground outline-none ring-accent focus:ring-2"
            value={values.preferredTime}
            onChange={(e) =>
              setValues((v) => ({
                ...v,
                preferredTime: e.target.value as ContactFormValues["preferredTime"],
              }))
            }
          >
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Message / inquiry <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-foreground outline-none ring-accent focus:ring-2"
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        />
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        />
      </div>

      {errorMsg && (
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-accent py-3.5 text-base font-semibold text-navy transition hover:bg-accent-hover disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "loading" ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
