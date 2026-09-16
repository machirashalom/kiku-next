"use client";

import { useState } from "react";

const FURNITURE_TYPES = [
  "Sofa Set",
  "L-Shaped Sofa",
  "Bed",
  "Dining Set",
  "TV Stand",
  "Coffee Table",
  "Other",
];

const INTERESTS = [
  "Sofa Set",
  "L-Shaped Sofa",
  "Bed",
  "Dining Set",
  "TV Stand",
  "Coffee Table",
  "Custom Furniture",
];

const FINISHES = ["Not sure — advise me", "Natural", "Varnished", "Painted"];
const WOODS = ["Not sure — advise me", "Mvule", "Mahogany"];

const inputClass =
  "w-full border border-ink/30 bg-papyrus px-4 py-3 text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-upholstery";

type Variant = "custom" | "contact";

export default function EnquiryForm({ variant }: { variant: Variant }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [extra, setExtra] = useState("");
  const [details, setDetails] = useState("");

  const typeOptions = variant === "custom" ? FURNITURE_TYPES : INTERESTS;
  const extraOptions = variant === "custom" ? FINISHES : WOODS;
  const extraLabel = variant === "custom" ? "Preferred Finish" : "Preferred Wood";

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const lines = [
      variant === "custom" ? "Custom enquiry" : "Enquiry",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Town: ${location}`,
      type && `${variant === "custom" ? "Item" : "Interested in"}: ${type}`,
      extra && !extra.startsWith("Not sure") && `${extraLabel}: ${extra}`,
      details && `Details: ${details}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/254741205945?text=${encodeURIComponent(
        `Hello Kiku Studio.\n${lines.join("\n")}`
      )}`,
      "_blank",
      "noopener"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${variant}-name`} className="mb-1 block text-sm font-medium text-ink">
            Your name *
          </label>
          <input
            id={`${variant}-name`}
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Amina Wanjiru…"
            className={inputClass}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${variant}-phone`} className="mb-1 block text-sm font-medium text-ink">
            Phone number *
          </label>
          <input
            id={`${variant}-phone`}
            type="tel"
            required
            autoComplete="tel"
            placeholder="e.g. 07XX XXX XXX…"
            className={inputClass}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${variant}-location`} className="mb-1 block text-sm font-medium text-ink">
            Your town / delivery location *
          </label>
          <input
            id={`${variant}-location`}
            type="text"
            required
            autoComplete="off"
            placeholder="e.g. Nakuru…"
            className={inputClass}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${variant}-type`} className="mb-1 block text-sm font-medium text-ink">
            {variant === "custom" ? "What do you want built? *" : "What are you interested in? *"}
          </label>
          <select
            id={`${variant}-type`}
            required
            className={inputClass}
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Choose an option…</option>
            {typeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${variant}-extra`} className="mb-1 block text-sm font-medium text-ink">
          {extraLabel}
        </label>
        <select
          id={`${variant}-extra`}
          className={inputClass}
          value={extra}
          onChange={(event) => setExtra(event.target.value)}
        >
          {extraOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${variant}-details`} className="mb-1 block text-sm font-medium text-ink">
          {variant === "custom" ? "Describe what you want *" : "Tell us what you want built *"}
        </label>
        <textarea
          id={`${variant}-details`}
          required
          rows={5}
          placeholder={
            variant === "custom"
              ? "Style, colours, features, or a photo you saw…"
              : "Sizes, style, colours…"
          }
          className={inputClass}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-upholstery px-6 py-3 text-sm font-medium text-papyrus hover:bg-ink focus-visible:outline-2 focus-visible:outline-upholstery"
      >
        {variant === "custom" ? "Send custom enquiry" : "Request a quote"}
      </button>
      <p className="text-sm text-ink/70">
        This opens WhatsApp with your details pre-filled. You can also send
        photos once the chat opens.
      </p>
    </form>
  );
}
