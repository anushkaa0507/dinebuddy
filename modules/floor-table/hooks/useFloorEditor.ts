import { useState, useCallback } from "react";
import { CanvasObject } from "@/modules/floor-table/types/floor-editor";
import { initialObjects } from "@/modules/floor-table/constants/floor-editor";

export function useFloorEditor() {
  const [objects, setObjects] = useState<CanvasObject[]>(initialObjects);
  const [selectedId, setSelectedId] = useState<string | null>("t12");
  const [zoom, setZoom] = useState(100);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedObj = objects.find((o) => o.id === selectedId) ?? null;

  const updateObj = useCallback(
    (id: string, updates: Partial<CanvasObject>) => {
      setObjects((prev) =>
        prev.map((o) => (o.id === id ? { ...o, ...updates } : o)),
      );
    },
    [],
  );

  const handleDrag = useCallback((id: string, dx: number, dy: number) => {
    setObjects((prev) =>
      prev.map((o) => (o.id === id ? { ...o, x: o.x + dx, y: o.y + dy } : o)),
    );
  }, []);

  const handleDelete = useCallback(() => {
    if (!selectedId) return;
    setObjects((prev) => prev.filter((o) => o.id !== selectedId));
    setSelectedId(null);
  }, [selectedId]);

  const handleDuplicate = useCallback(() => {
    if (!selectedObj) return;
    const newObj: CanvasObject = {
      ...selectedObj,
      id: `${selectedObj.id}_copy_${Date.now()}`,
      x: selectedObj.x + 30,
      y: selectedObj.y + 30,
    };
    setObjects((prev) => [...prev, newObj]);
    setSelectedId(newObj.id);
  }, [selectedObj]);

  return {
    objects,
    selectedId,
    setSelectedId,
    zoom,
    setZoom,
    searchQuery,
    setSearchQuery,
    selectedObj,
    updateObj,
    handleDrag,
    handleDelete,
    handleDuplicate,
  };
}
