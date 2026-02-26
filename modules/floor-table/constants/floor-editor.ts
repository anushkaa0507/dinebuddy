import { CanvasObject, FurnitureItem } from "../types/floor-editor";

export const furnitureLibrary: FurnitureItem[] = [
  { id: "2sq", name: "2-Top Square", icon: "square-sm", category: "TABLES" },
  {
    id: "4rd",
    name: "4-Top Round",
    icon: "circle-sm",
    category: "TABLES",
    isCircle: true,
  },
  { id: "6rc", name: "6-Top Rect", icon: "rect", category: "TABLES" },
  { id: "bth", name: "Booth Large", icon: "booth", category: "TABLES" },
  {
    id: "plt",
    name: "Potted Plant",
    icon: "plant",
    category: "DECOR & DIVIDERS",
  },
  {
    id: "glv",
    name: "Glass Divider",
    icon: "divider",
    category: "DECOR & DIVIDERS",
  },
  {
    id: "hst",
    name: "Host Station",
    icon: "host",
    category: "DECOR & DIVIDERS",
  },
  { id: "ent", name: "Entryway", icon: "entry", category: "DECOR & DIVIDERS" },
];

export const initialObjects: CanvasObject[] = [
  {
    id: "t12",
    type: "table",
    label: "TABLE 12",
    seats: 4,
    shape: "Circular",
    x: 142,
    y: 152,
    rotation: 0,
    outOfService: true,
  },
  {
    id: "t15",
    type: "table",
    label: "TABLE 15",
    seats: 2,
    shape: "Square",
    x: 360,
    y: 165,
    rotation: 0,
    outOfService: false,
  },
  {
    id: "t14",
    type: "table",
    label: "TABLE 14",
    seats: 4,
    shape: "Booth",
    x: 255,
    y: 290,
    rotation: 0,
    outOfService: false,
    isInactive: true,
  },
];
