export const FIGURE_CATEGORIES = [
  "government-military",
  "intelligence-community",
  "legislator",
  "scientist-academic",
  "witness-experiencer",
  "journalist-investigator",
] as const;

export type FigureCategory = (typeof FIGURE_CATEGORIES)[number];

export const STAKEHOLDER_FLAGS = [
  "defense-contractor",
  "energy-industry",
  "legislative-blocker",
  "disclosure-advocate",
  "intel-community",
  "whistleblower",
  "experiencer",
  "deceased",
  "missing",
  "contested-status",
] as const;

export type StakeholderFlag = (typeof STAKEHOLDER_FLAGS)[number];

export type FigureStatus = "active" | "deceased" | "missing" | "retired";

export const CONNECTION_TYPES = [
  "co-authored",
  "co-founded",
  "co-testified",
  "investigated-together",
  "public-dispute",
  "mentor-mentee",
  "funded",
] as const;

export type ConnectionType = (typeof CONNECTION_TYPES)[number];

export type Figure = {
  id: string;
  name: string;
  category: FigureCategory;
  affiliations: string[];
  role: string;
  bio: string;
  stakeholderFlags: StakeholderFlag[];
  status: FigureStatus;
  dateOfEvent?: string;
  calibrationNote?: string;
  cites?: string[];
};

export type Connection = {
  source: string;
  target: string;
  type: ConnectionType;
  note: string;
  year?: string;
};

export const CATEGORY_LABELS: Record<FigureCategory, string> = {
  "government-military": "Government / Military",
  "intelligence-community": "Intelligence Community",
  legislator: "Legislators",
  "scientist-academic": "Scientists & Academics",
  "witness-experiencer": "Witnesses & Experiencers",
  "journalist-investigator": "Journalists & Investigators",
};
