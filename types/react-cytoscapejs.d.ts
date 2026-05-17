declare module "react-cytoscapejs" {
  import type { ComponentType } from "react";
  import type { Core, Stylesheet } from "cytoscape";

  export interface CytoscapeComponentProps {
    id?: string;
    cy?: (cy: Core) => void;
    style?: React.CSSProperties;
    elements: unknown;
    layout?: Record<string, unknown>;
    stylesheet?: Stylesheet | Stylesheet[];
    className?: string;
    zoom?: number;
    pan?: { x: number; y: number };
    minZoom?: number;
    maxZoom?: number;
    boxSelectionEnabled?: boolean;
    autounselectify?: boolean;
    wheelSensitivity?: number;
  }

  const CytoscapeComponent: ComponentType<CytoscapeComponentProps>;
  export default CytoscapeComponent;
}

declare module "cytoscape-cose-bilkent" {
  import type cytoscape from "cytoscape";
  const ext: cytoscape.Ext;
  export default ext;
}
