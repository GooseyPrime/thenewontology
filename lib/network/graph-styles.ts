import type {
  FigureCategory,
  ConnectionType,
  StakeholderFlag,
} from "@/content/whos-who/types";

/** Bright fills for person nodes — high contrast on dark org backgrounds. */
export const CATEGORY_COLORS: Record<FigureCategory, string> = {
  "government-military": "#6eb8ff",
  "intelligence-community": "#b49aff",
  legislator: "#e8c06a",
  "scientist-academic": "#5ee0c8",
  "witness-experiencer": "#f592c8",
  "journalist-investigator": "#b8e070",
};

export const FIGURE_NODE_BORDER = "#f4f6fb";

export const EDGE_STYLES: Record<
  ConnectionType,
  { color: string; lineStyle: "solid" | "dashed" | "dotted" }
> = {
  "co-authored": { color: "#8ec0ff", lineStyle: "solid" },
  "co-founded": { color: "#c4a8ff", lineStyle: "solid" },
  "co-testified": { color: "#7ee8ff", lineStyle: "dashed" },
  "investigated-together": { color: "#6ee8c8", lineStyle: "solid" },
  "public-dispute": { color: "#ff8a8a", lineStyle: "solid" },
  "mentor-mentee": { color: "#f0d070", lineStyle: "dotted" },
  funded: { color: "#ffb86a", lineStyle: "dashed" },
};

export const AFFILIATION_EDGE_COLOR = "rgba(186, 204, 230, 0.55)";

export const FLAG_RING_COLORS: Partial<Record<StakeholderFlag, string>> = {
  "legislative-blocker": "#ff7a7a",
  "defense-contractor": "#d4a86a",
  "energy-industry": "#ffc060",
  whistleblower: "#6ee89a",
  "disclosure-advocate": "#ffa060",
  "intel-community": "#c49aff",
  experiencer: "#f592c8",
  "contested-status": "#b8c4d8",
  deceased: "#8a9098",
  missing: "#a8b0bc",
};

const FLAG_PRIORITY: StakeholderFlag[] = [
  "contested-status",
  "whistleblower",
  "deceased",
  "missing",
  "legislative-blocker",
  "defense-contractor",
  "energy-industry",
  "disclosure-advocate",
  "intel-community",
  "experiencer",
];

export function primaryStakeholderFlag(
  flags: StakeholderFlag[]
): StakeholderFlag | undefined {
  for (const flag of FLAG_PRIORITY) {
    if (flags.includes(flag)) return flag;
  }
  return flags[0];
}
