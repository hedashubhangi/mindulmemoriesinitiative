"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Our Impact" },
  { href: "/calendar", label: "Calendar" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest shadow-[0_4px_20px_rgba(146,7,3,0.04)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-gutter py-4">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-primary">
          Mindful Memories Initiative
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label-md text-label-md text-on-surface-variant transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-outline bg-surface px-4 py-2 font-label-md text-label-md text-on-surface transition hover:bg-surface-container-low"
          >
            Donate
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmBLgVRSQ9O9XLAl5M50lO-c1fPf-4IBg13yGlFxyuZkYArA/viewform"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-secondary px-4 py-2 font-label-md text-label-md text-on-secondary transition hover:bg-secondary-fixed-dim hover:text-on-secondary"
          >
            Get Involved
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline bg-surface text-on-surface-variant transition hover:border-primary hover:text-primary md:hidden"
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden border-t border-outline-variant bg-surface-container-lowest transition-all duration-300 ${menuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-gutter py-4">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-3xl px-4 py-3 text-sm font-semibold text-on-surface-variant transition hover:bg-surface-container-low hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://www.gofundme.com/f/bringing-joy-and-remembrance-to-dementia-patients"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-outline bg-surface px-4 py-3 text-center text-sm font-semibold text-on-surface transition hover:bg-surface-container-low"
            >
              Donate
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScmBLgVRSQ9O9XLAl5M50lO-c1fPf-4IBg13yGlFxyuZkYArA/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-secondary px-4 py-3 text-center text-sm font-semibold text-on-secondary transition hover:bg-secondary-fixed-dim hover:text-on-secondary"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
