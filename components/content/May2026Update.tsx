import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Display date for the kicker; defaults to the original May 17 block label. */
  date?: string;
};

/** Labeled May 2026 editorial block used across Vol I–III chapters. */
export default function May2026Update({ children, date = "May 17, 2026" }: Props) {
  return (
    <section id="may-2026-update" className="mt-12 pt-8 border-t border-border">
      <p className="section-title">Added {date}</p>
      <h3 className="font-sans text-xl font-semibold text-text mb-4">Update — May 2026</h3>
      <div className="prose prose-invert prose-sm max-w-none">{children}</div>
    </section>
  );
}
