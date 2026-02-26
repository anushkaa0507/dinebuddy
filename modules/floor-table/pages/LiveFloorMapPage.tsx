"use client";

import { useFloorMap } from "../hooks/useFloorMap";
import { FloorMapTopNav } from "../components/floor-map/FloorMapTopNav";
import { StatusSidebar } from "../components/floor-map/StatusSidebar";
import { FloorMapCanvasArea } from "../components/floor-map/FloorMapCanvasArea";
import { WaitlistSidebar } from "../components/floor-map/WaitlistSidebar";

export function LiveFloorMapPage() {
  const {
    activeZone,
    setActiveZone,
    selectedTable,
    setSelectedTable,
    zoom,
    setZoom,
  } = useFloorMap();

  return (
    <div className="flex flex-col h-screen bg-[#f5f0eb] font-sans overflow-hidden">
      <FloorMapTopNav activeZone={activeZone} setActiveZone={setActiveZone} />

      <div className="flex flex-1 overflow-hidden">
        <StatusSidebar />

        <FloorMapCanvasArea
          zoom={zoom}
          setZoom={setZoom}
          selectedTable={selectedTable}
          setSelectedTable={setSelectedTable}
        />

        <WaitlistSidebar />
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-end px-5 py-1.5 bg-white border-t border-[#e8e0d8] text-[10px] text-[#b8afa6]">
        © 2023 RestoMap Pro v2.4.1
      </footer>
    </div>
  );
}
