import { addedFigures } from "./figures-added";
import { originalFigures } from "./figures-original";

export const figures = [...originalFigures, ...addedFigures];

export type { Figure } from "./types";
