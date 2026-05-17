import type {
  FigureCategory,
  ConnectionType,
  StakeholderFlag,
} from "@/content/whos-who/types";

export const CATEGORY_COLORS: Record<FigureCategory, string> = {
  "government-military": "var(--network-cat-gov)",
  "intelligence-community": "var(--network-cat-ic)",
  legislator: "var(--network-cat-leg)",
  "scientist-academic": "var(--network-cat-sci)",
  "witness-experiencer": "var(--network-cat-wit)",
  "journalist-investigator": "var(--network-cat-jour)",
};

export const EDGE_STYLES: Record<
  ConnectionType,
  { color: string; lineStyle: "solid" | "dashed" | "dotted" }
> = {
  "co-authored": { color: "var(--network-edge-coauth)", lineStyle: "solid" },
  "co-founded": { color: "var(--network-edge-cofound)", lineStyle: "solid" },
  "co-testified": { color: "var(--network-edge-cotest)", lineStyle: "dashed" },
  "investigated-together": { color: "var(--network-edge-invest)", lineStyle: "solid" },
  "public-dispute": { color: "var(--network-edge-dispute)", lineStyle: "solid" },
  "mentor-mentee": { color: "var(--network-edge-mentor)", lineStyle: "dotted" },
  funded: { color: "var(--network-edge-funded)", lineStyle: "dashed" },
};

export const FLAG_RING_COLORS: Partial<Record<StakeholderFlag, string>> = {
  "legislative-blocker": "var(--network-flag-blocker)",
  "defense-contractor": "var(--network-flag-contractor)",
  "energy-industry": "var(--network-flag-energy)",
  whistleblower: "var(--network-flag-whistle)",
  "disclosure-advocate": "#ff8c4d",
  "intel-community": "#c97ec8",
  experiencer: "#e88ab8",
  "contested-status": "var(--network-flag-contested)",
  deceased: "var(--network-flag-deceased)",
  missing: "var(--network-flag-missing)",
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
