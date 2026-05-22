/** Deterministic hue per affiliation — stable across sessions. */
function orgHue(affiliation: string): number {
  let hash = 0;
  for (let i = 0; i < affiliation.length; i++) {
    hash = affiliation.charCodeAt(i) + ((hash << 5) - hash);
  }
  return 215 + (Math.abs(hash) % 45);
}

/** Muted rim + label color for organization compound nodes. */
export function orgColor(affiliation: string): string {
  const hue = orgHue(affiliation);
  return `hsl(${hue}, 32%, 48%)`;
}

/** Dark fill so person nodes read clearly on top of org clusters. */
export function orgFill(affiliation: string): string {
  const hue = orgHue(affiliation);
  return `hsla(${hue}, 28%, 8%, 0.92)`;
}
