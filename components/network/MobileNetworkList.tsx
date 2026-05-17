import Link from "next/link";
import { figures } from "@/content/whos-who/figures";
import { CATEGORY_LABELS, type FigureCategory } from "@/content/whos-who/types";
import { CATEGORY_COLORS } from "@/lib/network/graph-styles";

const CATEGORY_ORDER: FigureCategory[] = [
  "government-military",
  "intelligence-community",
  "legislator",
  "scientist-academic",
  "witness-experiencer",
  "journalist-investigator",
];

function byLastName(a: { name: string }, b: { name: string }) {
  const la = a.name.split(" ").at(-1) ?? "";
  const lb = b.name.split(" ").at(-1) ?? "";
  return la.localeCompare(lb);
}

export default function MobileNetworkList() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: figures.filter((f) => f.category === cat).sort(byLastName),
  }));

  const byAffiliation = new Map<string, typeof figures>();
  for (const f of figures) {
    const primary = f.affiliations[0] ?? "Independent";
    const list = byAffiliation.get(primary) ?? [];
    list.push(f);
    byAffiliation.set(primary, list);
  }

  const affiliationGroups = [...byAffiliation.entries()].sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="space-y-8">
      <div className="panel p-4 border-l-4 border-accent/40">
        <p className="font-serif text-sm text-muted leading-relaxed">
          The interactive relationship graph requires a wider screen. Below is the same roster
          grouped by primary affiliation, with links to full entries on{" "}
          <Link href="/whos-who" className="text-accent">
            Who&apos;s Who
          </Link>
          .
        </p>
      </div>

      {affiliationGroups.map(([aff, members]) => (
        <section key={aff}>
          <h2 className="section-title mb-3">{aff}</h2>
          <ul className="space-y-4">
            {[...members].sort(byLastName).map((f) => (
              <li key={f.id} id={f.id} className="border-l border-border pl-4">
                <Link href={`/whos-who#${f.id}`} className="font-sans text-sm font-semibold text-accent">
                  {f.name}
                </Link>
                <p className="text-[10px] text-muted uppercase tracking-wide mt-0.5">
                  {CATEGORY_LABELS[f.category]}
                </p>
                <p className="font-serif text-xs text-text mt-1 leading-relaxed">{f.role}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2 className="section-title mb-3">By category</h2>
        {grouped.map(({ cat, items }) =>
          items.length ? (
            <div key={cat} className="mb-6">
              <h3
                className="font-sans text-xs uppercase tracking-wide mb-2"
                style={{ color: CATEGORY_COLORS[cat] }}
              >
                {CATEGORY_LABELS[cat]}
              </h3>
              <ul className="space-y-2">
                {items.map((f) => (
                  <li key={f.id}>
                    <Link href={`/whos-who#${f.id}`} className="text-sm text-accent">
                      {f.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </section>
    </div>
  );
}
