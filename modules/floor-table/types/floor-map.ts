export type TableStatus = "available" | "occupied" | "reserved" | "cleaning";

export interface TableData {
  id: string;
  label: string;
  seats: number;
  status: TableStatus;
  time?: string;
  note?: string;
  isGrand?: boolean;
  shape: "circle" | "square";
  gridCol: number;
  gridRow: number;
}

export interface WaitlistEntry {
  id: string;
  name: string;
  pax: number;
  preference: string;
  prefIcon: "any" | "outdoor" | "birthday" | "outlet";
  waitMin: number;
}
