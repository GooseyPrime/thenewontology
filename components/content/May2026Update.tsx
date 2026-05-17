import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Labeled May 2026 editorial block used across Vol I–III chapters. */
export default function May2026Update({ children }: Props) {
  return (
    <section id="may-2026-update" className="update-may-2026">
      <p className="update-may-2026-kicker">Added May 17, 2026</p>
      <h3 className="font-sans text-xl font-light text-text mb-4">Update — May 2026</h3>
      <div className="prose-warm max-w-none">{children}</div>
    </section>
  );
}
