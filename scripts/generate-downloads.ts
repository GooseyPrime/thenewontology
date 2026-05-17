import { writeFileSync, mkdirSync } from "fs";
import { figures } from "../content/whos-who/figures";
import { connections } from "../content/whos-who/connections";
import { buildCytoscapeElements } from "../lib/network/build-cytoscape-elements";

mkdirSync("public/downloads", { recursive: true });

const header =
  "name,category,affiliations,role,stakeholder_flags,status,date_of_event,calibration_note,cites";
const esc = (s: string) => `"${String(s ?? "").replace(/"/g, '""')}"`;
const rows = figures.map((f) =>
  [
    esc(f.name),
    esc(f.category),
    esc(f.affiliations.join("; ")),
    esc(f.role),
    esc(f.stakeholderFlags.join("; ")),
    esc(f.status),
    esc(f.dateOfEvent ?? ""),
    esc(f.calibrationNote ?? ""),
    esc((f.cites ?? []).join("; ")),
  ].join(",")
);
writeFileSync("public/downloads/figures.csv", [header, ...rows].join("\n"));
writeFileSync("public/downloads/figures.json", JSON.stringify({ figures, connections }, null, 2));

const { nodes, edges } = buildCytoscapeElements();
writeFileSync(
  "public/downloads/network-cytoscape.json",
  JSON.stringify({ elements: { nodes, edges } }, null, 2)
);

console.log(`Generated downloads: ${figures.length} figures, ${connections.length} connections`);
