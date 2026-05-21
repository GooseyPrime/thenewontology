"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/the-next-human-ontology", label: "Vol I" },
  { href: "/the-sovereign-mind", label: "Vol II" },
  { href: "/the-bigger-world", label: "Vol III" },
  { href: "/the-great-convergence", label: "Convergence" },
  { href: "/timeline", label: "Timeline" },
  { href: "/whos-who", label: "Who's Who" },
  { href: "/network", label: "Network" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export default function GlobalNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-sans text-xl font-semibold tracking-widest text-accent/80 hover:text-accent transition-colors no-underline uppercase"
        >
          thenewontology.life
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[0.7rem] tracking-wide text-muted hover:text-accent transition-colors no-underline uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-6 bg-muted transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-muted transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-muted transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden px-6 pb-5 pt-2 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(155,188,255,0.08)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sans text-[1.2rem] tracking-wide text-muted hover:text-accent transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
