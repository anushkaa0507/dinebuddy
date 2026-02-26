export type TableShape = "Circular" | "Square" | "Booth";
export type FurnitureCategory = "TABLES" | "DECOR & DIVIDERS";

export interface CanvasObject {
  id: string;
  type: string;
  label: string;
  seats: number;
  shape: TableShape;
  x: number;
  y: number;
  rotation: number;
  outOfService: boolean;
  isInactive?: boolean;
}

export interface FurnitureItem {
  id: string;
  name: string;
  icon: string;
  category: FurnitureCategory;
  isCircle?: boolean;
}
