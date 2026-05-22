import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  date?: string;
};

/** May 2026 editorial block for Volume III (youth-accessible styling context). */
export default function MayUpdateYouth({ children, date = "May 21, 2026" }: Props) {
  return (
    <section id="may-2026-update-youth" className="mt-12 pt-8 border-t border-violet-800/30">
      <p className="text-violet-300/60 text-xs uppercase tracking-widest font-sans mb-2">Added {date}</p>
      <h2 className="font-sans text-xl font-semibold text-violet-100 mb-4">Update — May 2026</h2>
      <div className="prose prose-invert prose-sm max-w-none">{children}</div>
    </section>
  );
}
