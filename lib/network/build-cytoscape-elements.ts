import { figures } from "@/content/whos-who/figures";
import { connections } from "@/content/whos-who/connections";
import type { Figure } from "@/content/whos-who/types";
import { CATEGORY_COLORS, EDGE_STYLES } from "./graph-styles";

function slugifyAffiliation(name: string): string {
  return `org-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export function collectAffiliations(): string[] {
  const set = new Set<string>();
  for (const f of figures) {
    for (const a of f.affiliations) set.add(a);
  }
  return [...set].sort();
}

export function buildCytoscapeElements() {
  const affiliations = collectAffiliations();
  const figureById = new Map(figures.map((f) => [f.id, f]));

  const nodes: { data: Record<string, unknown>; classes?: string }[] = [];
  const edges: { data: Record<string, unknown>; classes?: string }[] = [];

  for (const aff of affiliations) {
    const id = slugifyAffiliation(aff);
    nodes.push({
      data: {
        id,
        label: aff,
        isCompound: true,
        isOrg: true,
      },
      classes: "compound-parent",
    });
  }

  for (const figure of figures) {
    const primaryAff = figure.affiliations[0];
    const parent = primaryAff ? slugifyAffiliation(primaryAff) : undefined;
    nodes.push({
      data: {
        id: figure.id,
        label: figure.name.split(" ").pop() ?? figure.name,
        fullName: figure.name,
        parent,
        category: figure.category,
        figure,
      },
      classes: `figure-node cat-${figure.category}`,
    });

    for (let i = 1; i < figure.affiliations.length; i++) {
      const affId = slugifyAffiliation(figure.affiliations[i]);
      edges.push({
        data: {
          id: `aff-${figure.id}-${affId}`,
          source: figure.id,
          target: affId,
          type: "affiliation-link",
          note: figure.affiliations[i],
        },
        classes: "affiliation-edge",
      });
    }
  }

  for (const conn of connections) {
    if (!figureById.has(conn.source) || !figureById.has(conn.target)) continue;
    const style = EDGE_STYLES[conn.type];
    edges.push({
      data: {
        id: `conn-${conn.source}-${conn.target}-${conn.type}`,
        source: conn.source,
        target: conn.target,
        type: conn.type,
        note: conn.note,
        year: conn.year,
      },
      classes: `conn-${conn.type}`,
    });
  }

  return { nodes, edges };
}

export function getFigureById(id: string): Figure | undefined {
  return figures.find((f) => f.id === id);
}
