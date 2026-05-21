"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import type { Core, EventObject, NodeSingular } from "cytoscape";
import { FIGURE_CATEGORIES, type Figure, type FigureCategory, type StakeholderFlag } from "@/content/whos-who/types";
import { CATEGORY_LABELS } from "@/content/whos-who/types";
import { buildCytoscapeElements } from "@/lib/network/build-cytoscape-elements";
import {
  CATEGORY_COLORS,
  EDGE_STYLES,
  FLAG_RING_COLORS,
} from "@/lib/network/graph-styles";
import NetworkLegend from "@/components/network/NetworkLegend";

cytoscape.use(coseBilkent);

const LAYOUT_OPTS = {
  name: "cose-bilkent",
  quality: "default",
  nodeDimensionsIncludeLabels: true,
  nestingFactor: 0.12,
  idealEdgeLength: 130,
  nodeRepulsion: 3000,
  gravity: 0.25,
  padding: 40,
  animate: true,
  animationDuration: 800,
};

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const [hover, setHover] = useState<HoverState | null>(null);
  const [hiddenCategories, setHiddenCategories] = useState<Set<FigureCategory>>(new Set());
  const [focusedOrg, setFocusedOrg] = useState<string | null>(null);
  const [layoutDone, setLayoutDone] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const { nodes, edges, affiliations } = useMemo(() => buildCytoscapeElements(), []);
  const elements = useMemo(() => [...nodes, ...edges], [nodes, edges]);

  const orgStyles = useMemo(() => {
    return affiliations.map((aff) => {
      const id = `org-${aff.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
      const node = nodes.find((n) => n.data.id === id);
      const fill = (node?.data.orgFill as string) ?? "rgba(255,140,0,0.12)";
      const color = (node?.data.orgColor as string) ?? "#ff8c4d";
      return { id, aff, fill, color };
    });
  }, [affiliations, nodes]);

  const stylesheet = useMemo(
    () => [
      {
        selector: "node.org-node",
        style: {
          "background-color": "data(orgFill)",
          "border-color": "data(orgColor)",
          "border-width": 2,
          shape: "round-rectangle",
          label: "data(label)",
          color: "data(orgColor)",
          "font-size": 11,
          "font-weight": 600,
          "text-transform": "uppercase",
          "text-valign": "top",
          "text-halign": "center",
          "text-margin-y": -10,
          "text-max-width": 140,
          "text-wrap": "wrap",
          padding: 28,
          "min-width": 80,
          "min-height": 60,
        },
      },
      {
        selector: "node.figure-node",
        style: {
          width: "data(nodeSize)",
          height: "data(nodeSize)",
          label: "data(label)",
          "font-size": 11,
          "font-weight": 500,
          "text-outline-width": 2,
          "text-outline-color": "#0d0500",
          "text-outline-opacity": 0.9,
          color: "#e6e8ec",
          "text-valign": "bottom",
          "text-margin-y": 8,
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
      ...Object.keys(FLAG_RING_COLORS).map((flag) => ({
        selector: `node.flag-${flag}`,
        style: {
          "border-color": FLAG_RING_COLORS[flag as StakeholderFlag],
          "border-width": 4,
        },
      })),
      {
        selector: "node.status-deceased, node.status-missing",
        style: { opacity: 0.75, "border-style": "dashed" },
      },
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
          "line-color": "rgba(155, 188, 255, 0.35)",
          "line-style": "dotted",
          width: 1,
        },
      },
      {
        selector: ".dimmed",
        style: { opacity: 0.15 },
      },
      {
        selector: ".highlighted",
        style: { opacity: 1, "z-index": 10 },
      },
    ],
    []
  );

  const fitGraph = useCallback((padding = 80) => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.fit(undefined, padding);
    cy.minZoom(0.35);
    const z = cy.zoom();
    cy.zoom(z * 1.15);
  }, []);

  const applyFilters = useCallback(() => {
    const cy = cyRef.current;
    if (!cy) return;
    const q = search.trim().toLowerCase();
    cy.nodes(".figure-node").forEach((node) => {
      const fig = node.data("figure") as Figure;
      const catHidden = hiddenCategories.has(fig.category);
      const parent = node.data("parent") as string | undefined;
      const orgHidden = focusedOrg != null && parent !== focusedOrg;
      const match =
        !q ||
        fig.name.toLowerCase().includes(q) ||
        fig.role.toLowerCase().includes(q) ||
        fig.affiliations.some((a) => a.toLowerCase().includes(q));
      node.toggleClass("dimmed", catHidden || orgHidden || !match);
    });
    cy.nodes(".org-node").forEach((node) => {
      const dim = focusedOrg != null && node.id() !== focusedOrg;
      node.toggleClass("dimmed", dim);
    });
    cy.edges().forEach((e) => {
      const srcDim = e.source().hasClass("dimmed");
      const tgtDim = e.target().hasClass("dimmed");
      e.toggleClass("dimmed", srcDim || tgtDim);
    });
  }, [search, hiddenCategories, focusedOrg]);

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

  const highlightEgo = (nodeId: string) => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.nodes().removeClass("highlighted");
    const n = cy.getElementById(nodeId);
    n.addClass("highlighted");
    n.connectedEdges().addClass("highlighted");
    n.neighborhood().nodes().addClass("highlighted");
  };

  const onCy = (cy: Core) => {
    cyRef.current = cy;
    cy.on("layoutstop", () => {
      setLayoutDone(true);
      cy.autoungrabify(true);
      fitGraph(80);
    });
    cy.on("mouseover", "node.figure-node", (evt: EventObject) => {
      if (hover?.pinned) return;
      highlightEgo(evt.target.id());
      positionCard(evt.target, false);
    });
    cy.on("mouseout", "node.figure-node", () => {
      if (!hover?.pinned) {
        setHover(null);
        cy.nodes().removeClass("highlighted");
        cy.edges().removeClass("highlighted");
      }
    });
    cy.on("tap", "node.figure-node", (evt: EventObject) => {
      highlightEgo(evt.target.id());
      positionCard(evt.target, true);
    });
    cy.on("tap", (evt: EventObject) => {
      if (evt.target === cy) {
        setHover(null);
        setFocusedOrg(null);
        cy.nodes().removeClass("highlighted dimmed");
        cy.edges().removeClass("highlighted dimmed");
        cy.nodes().style("opacity", 1);
        fitGraph(80);
      }
    });
    cy.on("tap", "node.org-node, node[isOrg]", (evt: EventObject) => {
      const orgId = evt.target.id();
      setFocusedOrg((prev) => (prev === orgId ? null : orgId));
      cy.nodes().forEach((n) => {
        const parent = n.data("parent");
        const inOrg = n.id() === orgId || parent === orgId;
        n.style("opacity", inOrg || n.data("isOrg") === true ? 1 : 0.2);
      });
      const cluster = cy.nodes().filter((n) => n.id() === orgId || n.data("parent") === orgId);
      if (cluster.length) cy.fit(cluster, 60);
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
      if (e.key === "Escape") {
        setHover(null);
        setFullscreen(false);
      }
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

  const zoomBy = (factor: number) => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.zoom({ level: cy.zoom() * factor, renderedPosition: { x: cy.width() / 2, y: cy.height() / 2 } });
  };

  const graphHeight = fullscreen ? "100vh" : "min(88vh, 960px)";

  return (
    <div className={fullscreen ? "fixed inset-0 z-50 bg-bg p-4 flex flex-col" : ""}>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <input
          type="search"
          placeholder="Search by name, role, or affiliation…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 max-w-md"
          aria-label="Search network"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="font-sans text-xs uppercase tracking-wide px-3 py-2 border border-border rounded-lg text-muted hover:text-accent hover:border-accent/40 transition-colors"
            onClick={() => fitGraph(80)}
          >
            Fit
          </button>
          <button
            type="button"
            className="font-sans text-xs uppercase tracking-wide px-3 py-2 border border-border rounded-lg text-muted hover:text-accent transition-colors"
            onClick={() => zoomBy(1.2)}
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            className="font-sans text-xs uppercase tracking-wide px-3 py-2 border border-border rounded-lg text-muted hover:text-accent transition-colors"
            onClick={() => zoomBy(1 / 1.2)}
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            type="button"
            className="font-sans text-xs uppercase tracking-wide px-3 py-2 border border-border rounded-lg text-muted hover:text-accent transition-colors"
            onClick={() => {
              setFocusedOrg(null);
              cyRef.current?.nodes().style("opacity", 1);
              fitGraph(80);
            }}
          >
            Reset view
          </button>
          <button
            type="button"
            className="font-sans text-xs uppercase tracking-wide px-3 py-2 border border-accent/40 rounded-lg text-accent transition-colors"
            onClick={() => setFullscreen((f) => !f)}
          >
            {fullscreen ? "Exit fullscreen" : "Fullscreen"}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-2">
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

      <div className="flex flex-wrap gap-2 mb-4 max-h-24 overflow-y-auto">
        {orgStyles.map(({ id, aff, color }) => (
          <button
            key={id}
            type="button"
            onClick={() => setFocusedOrg((prev) => (prev === id ? null : id))}
            className={`font-sans text-[10px] px-2 py-1 rounded border transition-colors flex items-center gap-1.5 ${
              focusedOrg === id ? "border-accent text-text bg-accent/10" : "border-border text-muted"
            }`}
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
            <span className="truncate max-w-[120px]">{aff}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div
          ref={containerRef}
          className="relative flex-1 border border-border rounded-xl overflow-hidden bg-panel/40"
          style={{ height: graphHeight }}
        >
          <CytoscapeComponent
            elements={elements}
            stylesheet={stylesheet}
            layout={layoutDone ? undefined : LAYOUT_OPTS}
            cy={onCy}
            wheelSensitivity={0.25}
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
                  <span
                    key={a}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-muted border border-border"
                  >
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

        <div className="hidden xl:block w-64 shrink-0">
          <NetworkLegend />
        </div>
      </div>

      <div className="xl:hidden mt-4">
        <NetworkLegend />
      </div>
    </div>
  );
}
