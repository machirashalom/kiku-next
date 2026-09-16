"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/custom", label: "Custom Orders" },
  { href: "/about", label: "About" },
  { href: "/showroom", label: "Showroom" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_URL =
  "https://wa.me/254741205945?text=Hello%20Kiku%20Studio%2C%20I%27d%20like%20to%20enquire%20about%20furniture.";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-shaving bg-papyrus">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-ink focus-visible:outline-2 focus-visible:outline-upholstery"
        >
          Kiku Studio
        </Link>

        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-ink"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </label>

        <nav
          className="fixed inset-x-0 top-[65px] hidden border-b border-shaving bg-papyrus px-4 py-4 peer-checked:block md:static md:block md:border-0 md:p-0"
          aria-label="Main navigation"
        >
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`pb-1 focus-visible:outline-2 focus-visible:outline-upholstery ${
                      active
                        ? "border-b-2 border-mvule font-medium text-ink"
                        : "text-ink hover:border-b-2 hover:border-mvule"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="md:ml-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-block rounded-none bg-upholstery px-4 py-2 text-papyrus hover:bg-ink focus-visible:outline-2 focus-visible:outline-upholstery"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
