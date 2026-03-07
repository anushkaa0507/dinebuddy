export type TableStatus = "available" | "occupied" | "reserved" | "cleaning";

export interface Table {
  id: string;
  name: string;
  capacity: number;
  status: TableStatus;
  floorId: string;
  isReserved?: boolean;
  reservationTime?: string;
  occupancyTime?: string;
}

export interface Floor {
  id: string;
  name: string;
}
