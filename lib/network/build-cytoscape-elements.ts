import { figures } from "@/content/whos-who/figures";
import { connections } from "@/content/whos-who/connections";
import type { Figure } from "@/content/whos-who/types";
import { primaryStakeholderFlag } from "./graph-styles";
import { orgColor, orgFill } from "./org-colors";

function figureNodeSize(degree: number): number {
  return Math.min(52, 36 + degree * 2);
}

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

function figureDegree(id: string, edges: { source: string; target: string }[]): number {
  return edges.filter((e) => e.source === id || e.target === id).length;
}

export function buildCytoscapeElements() {
  const affiliations = collectAffiliations();
  const figureById = new Map(figures.map((f) => [f.id, f]));

  const connEdges = connections
    .filter((c) => figureById.has(c.source) && figureById.has(c.target))
    .map((c) => ({ source: c.source, target: c.target }));

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
        affiliation: aff,
        orgColor: orgColor(aff),
        orgFill: orgFill(aff),
      },
      classes: "compound-parent org-node",
    });
  }

  for (const figure of figures) {
    const primaryAff = figure.affiliations[0];
    const parent = primaryAff ? slugifyAffiliation(primaryAff) : undefined;
    const degree = figureDegree(figure.id, connEdges);
    const primaryFlag = primaryStakeholderFlag(figure.stakeholderFlags);
    const lastName = figure.name.split(" ").pop() ?? figure.name;

    nodes.push({
      data: {
        id: figure.id,
        label: lastName,
        fullName: figure.name,
        parent,
        category: figure.category,
        figure,
        degree,
        nodeSize: figureNodeSize(degree),
        primaryFlag: primaryFlag ?? "",
        status: figure.status,
      },
      classes: `figure-node cat-${figure.category}${primaryFlag ? ` flag-${primaryFlag}` : ""}${figure.status === "deceased" || figure.status === "missing" ? ` status-${figure.status}` : ""}`,
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

  return { nodes, edges, affiliations };
}

export function getFigureById(id: string): Figure | undefined {
  return figures.find((f) => f.id === id);
}
