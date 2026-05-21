"use client";

import {
  FIGURE_CATEGORIES,
  CATEGORY_LABELS,
  CONNECTION_TYPES,
} from "@/content/whos-who/types";
import { CATEGORY_COLORS, EDGE_STYLES, FLAG_RING_COLORS } from "@/lib/network/graph-styles";
import type { StakeholderFlag } from "@/content/whos-who/types";

const LEGEND_FLAGS: StakeholderFlag[] = [
  "contested-status",
  "whistleblower",
  "legislative-blocker",
  "defense-contractor",
  "deceased",
  "missing",
];

const CONNECTION_LABELS: Record<string, string> = {
  "co-authored": "Co-authored",
  "co-founded": "Co-founded",
  "co-testified": "Co-testified",
  "investigated-together": "Investigated",
  "public-dispute": "Dispute",
  "mentor-mentee": "Mentor",
  funded: "Funded",
};

export default function NetworkLegend() {
  return (
    <aside className="glass-card p-4 text-xs space-y-5 lg:sticky lg:top-20">
      <div>
        <h3 className="font-mono uppercase tracking-wider text-accent mb-2">Categories</h3>
        <ul className="space-y-1.5">
          {FIGURE_CATEGORIES.map((cat) => (
            <li key={cat} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: CATEGORY_COLORS[cat] }}
              />
              <span className="text-muted">{CATEGORY_LABELS[cat]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-mono uppercase tracking-wider text-accent mb-2">Connections</h3>
        <ul className="space-y-1.5">
          {CONNECTION_TYPES.map((type) => (
            <li key={type} className="flex items-center gap-2">
              <span
                className="w-6 h-0.5 shrink-0"
                style={{
                  backgroundColor: EDGE_STYLES[type].color,
                  borderBottom:
                    EDGE_STYLES[type].lineStyle === "dashed"
                      ? `2px dashed ${EDGE_STYLES[type].color}`
                      : EDGE_STYLES[type].lineStyle === "dotted"
                        ? `2px dotted ${EDGE_STYLES[type].color}`
                        : undefined,
                }}
              />
              <span className="text-muted">{CONNECTION_LABELS[type]}</span>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <span className="w-6 border-b-2 border-dotted border-muted/50" />
            <span className="text-muted">Affiliation</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-mono uppercase tracking-wider text-accent mb-2">Stakeholder flags</h3>
        <ul className="space-y-1.5">
          {LEGEND_FLAGS.map((flag) => (
            <li key={flag} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full border-2 shrink-0"
                style={{ borderColor: FLAG_RING_COLORS[flag] ?? "var(--border)" }}
              />
              <span className="text-muted capitalize">{flag.replace(/-/g, " ")}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[10px] text-muted/70 leading-relaxed border-t border-border pt-3">
        Colored regions are organizations. Node fill = person category. Ring = primary stakeholder flag.
      </p>
    </aside>
  );
}
