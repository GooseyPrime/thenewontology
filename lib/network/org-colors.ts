/** Deterministic warm hue per affiliation label — stable across sessions. */
export function orgColor(affiliation: string): string {
  let hash = 0;
  for (let i = 0; i < affiliation.length; i++) {
    hash = affiliation.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = 18 + (Math.abs(hash) % 42);
  return `hsl(${hue}, 72%, 52%)`;
}

export function orgFill(affiliation: string, alpha = 0.14): string {
  let hash = 0;
  for (let i = 0; i < affiliation.length; i++) {
    hash = affiliation.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = 18 + (Math.abs(hash) % 42);
  return `hsla(${hue}, 65%, 45%, ${alpha})`;
}
