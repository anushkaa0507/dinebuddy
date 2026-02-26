import { useState } from "react";

export function useFloorMap() {
  const [activeZone, setActiveZone] = useState<
    "Indoor" | "Outdoor" | "Rooftop"
  >("Indoor");
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);

  return {
    activeZone,
    setActiveZone,
    selectedTable,
    setSelectedTable,
    zoom,
    setZoom,
  };
}
