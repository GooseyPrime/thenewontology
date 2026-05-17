"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import type { Core, EventObject, NodeSingular } from "cytoscape";
import { FIGURE_CATEGORIES, type Figure, type FigureCategory, type StakeholderFlag } from "@/content/whos-who/types";
import { CATEGORY_LABELS } from "@/content/whos-who/types";
import { buildCytoscapeElements } from "@/lib/network/build-cytoscape-elements";
import { CATEGORY_COLORS, EDGE_STYLES, FLAG_RING_COLORS } from "@/lib/network/graph-styles";

cytoscape.use(coseBilkent);

const LAYOUT_OPTS = {
  name: "cose-bilkent",
  quality: "default",
  nodeDimensionsIncludeLabels: true,
  nestingFactor: 0.1,
  idealEdgeLength: 100,
  nodeRepulsion: 4500,
  animate: true,
  animationDuration: 800,
};

function lastName(name: string) {
  return name.split(" ").pop() ?? name;
}

function flagLabel(flag: StakeholderFlag) {
  return flag.replace(/-/g, " ");
}

type HoverState = {
  figure: Figure;
  x: number;
  y: number;
  pinned: boolean;
};

export default function NetworkGraph() {
  const cyRef = useRef<Core | null>(null);
  const [search, setSearch] = useState("");
  const [hover, setHover] = useState<HoverState | null>(null);
  const [hiddenCategories, setHiddenCategories] = useState<Set<FigureCategory>>(new Set());
  const [layoutDone, setLayoutDone] = useState(false);

  const elements = useMemo(() => {
    const { nodes, edges } = buildCytoscapeElements();
    return [...nodes, ...edges];
  }, []);

  const stylesheet = useMemo(
    () => [
      {
        selector: "node[isOrg]",
        style: {
          "background-color": "rgba(155,188,255,0.06)",
          "border-color": "rgba(155,188,255,0.25)",
          "border-width": 1,
          label: "data(label)",
          color: "rgba(200,210,230,0.7)",
          "font-size": 9,
          "text-transform": "uppercase",
          "text-valign": "top",
          "text-halign": "center",
          "text-margin-y": -8,
          padding: 24,
        },
      },
      {
        selector: "node.figure-node",
        style: {
          width: 28,
          height: 28,
          label: "data(label)",
          "font-size": 10,
          color: "#e8eeff",
          "text-valign": "bottom",
          "text-margin-y": 6,
          "border-width": 3,
        },
      },
      ...FIGURE_CATEGORIES.map((cat) => ({
        selector: `node.cat-${cat}`,
        style: {
          "background-color": CATEGORY_COLORS[cat],
          "border-color": CATEGORY_COLORS[cat],
        },
      })),
      {
        selector: "edge",
        style: {
          width: 1.5,
          "curve-style": "bezier",
          "target-arrow-shape": "none",
          opacity: 0.65,
        },
      },
      ...Object.entries(EDGE_STYLES).map(([type, s]) => ({
        selector: `edge.conn-${type}`,
        style: {
          "line-color": s.color,
          "line-style": s.lineStyle,
        },
      })),
      {
        selector: "edge.affiliation-edge",
        style: {
          "line-color": "rgba(155,188,255,0.2)",
          "line-style": "dotted",
          width: 1,
        },
      },
      {
        selector: ".dimmed",
        style: { opacity: 0.2 },
      },
      {
        selector: ".highlighted",
        style: { opacity: 1, "z-index": 10 },
      },
    ],
    []
  );

  const applyFilters = useCallback(() => {
    const cy = cyRef.current;
    if (!cy) return;
    const q = search.trim().toLowerCase();
    cy.nodes(".figure-node").forEach((node) => {
      const fig = node.data("figure") as Figure;
      const catHidden = hiddenCategories.has(fig.category);
      const match =
        !q ||
        fig.name.toLowerCase().includes(q) ||
        fig.role.toLowerCase().includes(q) ||
        fig.affiliations.some((a) => a.toLowerCase().includes(q));
      node.toggleClass("dimmed", catHidden || !match);
    });
    cy.edges().removeClass("dimmed");
    if (q || hiddenCategories.size) {
      cy.edges().forEach((e) => {
        const srcDim = e.source().hasClass("dimmed");
        const tgtDim = e.target().hasClass("dimmed");
        e.toggleClass("dimmed", srcDim || tgtDim);
      });
    }
  }, [search, hiddenCategories]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const positionCard = (node: NodeSingular, pinned: boolean) => {
    const fig = node.data("figure") as Figure;
    if (!fig) return;
    const pos = node.renderedPosition();
    const padding = 16;
    const cardW = 320;
    const cardH = 280;
    let x = pos.x + 20;
    let y = pos.y - 20;
    if (typeof window !== "undefined") {
      x = Math.min(x, window.innerWidth - cardW - padding);
      y = Math.min(y, window.innerHeight - cardH - padding);
      x = Math.max(padding, x);
      y = Math.max(padding, y);
    }
    setHover({ figure: fig, x, y, pinned });
  };

  const onCy = (cy: Core) => {
    cyRef.current = cy;
    cy.on("layoutstop", () => {
      setLayoutDone(true);
      cy.autoungrabify(true);
    });
    cy.on("mouseover", "node.figure-node", (evt: EventObject) => {
      if (hover?.pinned) return;
      positionCard(evt.target, false);
    });
    cy.on("mouseout", "node.figure-node", () => {
      if (!hover?.pinned) setHover(null);
    });
    cy.on("tap", "node.figure-node", (evt: EventObject) => {
      positionCard(evt.target, true);
    });
    cy.on("tap", (evt: EventObject) => {
      if (evt.target === cy) {
        setHover(null);
        cy.nodes().removeClass("highlighted");
        cy.nodes().style("opacity", 1);
      }
    });
    cy.on("tap", "node[isOrg]", (evt: EventObject) => {
      const orgId = evt.target.id();
      cy.nodes().forEach((n) => {
        const parent = n.data("parent");
        const inOrg = n.id() === orgId || parent === orgId;
        n.style("opacity", inOrg || n.data("isOrg") ? 1 : 0.2);
      });
    });
    cy.on("mouseover", "edge", (evt: EventObject) => {
      const d = evt.target.data();
      if (d.type && d.type !== "affiliation-link") {
        evt.target.style("width", 3);
      }
    });
    cy.on("mouseout", "edge", (evt: EventObject) => {
      evt.target.style("width", 1.5);
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHover(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleCategory = (cat: FigureCategory) => {
    setHiddenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <input
          type="search"
          placeholder="Search by name, role, or affiliation…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 max-w-md"
          aria-label="Search network"
        />
        <button
          type="button"
          className="font-sans text-xs uppercase tracking-wide px-4 py-2 border border-border rounded-lg text-muted hover:text-accent hover:border-accent/40 transition-colors"
          onClick={() => {
            cyRef.current?.fit(undefined, 40);
            cyRef.current?.nodes().style("opacity", 1);
          }}
        >
          Reset view
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {FIGURE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => toggleCategory(cat)}
            className={`font-sans text-[10px] uppercase tracking-wide px-2 py-1 rounded border transition-colors ${
              hiddenCategories.has(cat)
                ? "opacity-40 border-border text-muted"
                : "border-accent/30 text-accent"
            }`}
            style={{ borderColor: hiddenCategories.has(cat) ? undefined : CATEGORY_COLORS[cat] }}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <div className="relative border border-border rounded-xl overflow-hidden bg-panel/40" style={{ height: "min(70vh, 640px)" }}>
        <CytoscapeComponent
          elements={elements}
          stylesheet={stylesheet}
          layout={layoutDone ? undefined : LAYOUT_OPTS}
          cy={onCy}
          wheelSensitivity={0.2}
          style={{ width: "100%", height: "100%" }}
        />

        {hover && (
          <div
            className="absolute z-20 panel p-4 max-w-xs shadow-panel pointer-events-auto"
            style={{ left: hover.x, top: hover.y }}
            role="dialog"
            aria-label={`Details for ${hover.figure.name}`}
          >
            <div className="flex justify-between items-start gap-2 mb-2">
              <h3 className="font-sans text-sm font-semibold text-accent">{hover.figure.name}</h3>
              {hover.pinned && (
                <button
                  type="button"
                  className="text-muted text-xs"
                  onClick={() => setHover(null)}
                  aria-label="Close"
                >
                  ✕
                </button>
              )}
            </div>
            <p className="text-[10px] uppercase tracking-wide text-muted mb-2">
              {CATEGORY_LABELS[hover.figure.category]}
            </p>
            <p className="font-serif text-xs text-text mb-2">{hover.figure.role}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {hover.figure.affiliations.map((a) => (
                <span key={a} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted border border-border">
                  {a}
                </span>
              ))}
            </div>
            <p className="font-serif text-xs text-text leading-relaxed mb-2">{hover.figure.bio}</p>
            {hover.figure.stakeholderFlags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {hover.figure.stakeholderFlags.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] px-1.5 py-0.5 rounded border"
                    style={{
                      borderColor: FLAG_RING_COLORS[f] ?? "var(--border)",
                      color: FLAG_RING_COLORS[f] ?? "var(--muted)",
                    }}
                  >
                    {flagLabel(f)}
                  </span>
                ))}
              </div>
            )}
            {hover.figure.calibrationNote && (
              <p className="font-serif text-[11px] italic text-muted/80 leading-relaxed border-l-2 border-muted/40 pl-3">
                {hover.figure.calibrationNote}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
