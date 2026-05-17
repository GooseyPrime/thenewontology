"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-widest text-text/90 hover:text-accent transition-colors no-underline uppercase"
        >
          thenewontology.life
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-xs tracking-wide uppercase transition-colors no-underline ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-muted hover:text-accent-vol2"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-muted transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-muted transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-muted transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-bg/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-sans text-sm tracking-wide uppercase transition-colors no-underline ${
                isActive(link.href) ? "text-accent" : "text-muted hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
