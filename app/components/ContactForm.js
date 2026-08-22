"use client";

import { useState } from "react";
import { contactApiUrl } from "../lib/api";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-6 shadow-sm shadow-surface-container-highest sm:p-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-on-surface">Contact Form</p>
        <p className="mt-2 text-on-surface-variant">Send your message and our team will respond shortly.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-on-surface-variant">
          <span>Name</span>
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </label>
        <label className="space-y-2 text-sm text-on-surface-variant">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-on-surface-variant">
        <span>Subject</span>
        <input
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder="Partnership inquiry, volunteer, donation..."
          className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </label>
      <label className="space-y-2 text-sm text-on-surface-variant">
        <span>Message</span>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows="6"
          required
          className="w-full rounded-3xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </label>
      {status ? (
        <div className={`rounded-3xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900"}`}>
          {status.message}
        </div>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-container disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
