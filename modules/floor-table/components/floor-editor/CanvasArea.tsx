import { Plus, Minus, Maximize2, Layers, ExternalLink } from "lucide-react";
import { CanvasObject } from "../../types/floor-editor";
import { CanvasObjectItem } from "./CanvasObjectItem";

interface CanvasAreaProps {
  objects: CanvasObject[];
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  handleDrag: (id: string, dx: number, dy: number) => void;
  zoom: number;
  setZoom: (updater: (z: number) => number) => void;
  selectedObj: CanvasObject | null;
}

export function CanvasArea({
  objects,
  selectedId,
  setSelectedId,
  handleDrag,
  zoom,
  setZoom,
  selectedObj,
}: CanvasAreaProps) {
  return (
    <main className="flex-1 flex flex-col overflow-hidden relative">
      {/* Entrance Label */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <div className="bg-[#e85d2f] text-white text-[9px] font-bold tracking-widest px-1.5 py-3 rounded-r-lg shadow">
          ENTRANCE
        </div>
      </div>

      {/* Canvas Area */}
      <div
        className="flex-1 overflow-hidden relative bg-[#f5f0eb]"
        onClick={() => setSelectedId(null)}
      >
        {/* Grid pattern background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e8e0d855 1px, transparent 1px),
              linear-gradient(to bottom, #e8e0d855 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Canvas inner */}
        <div
          className="absolute inset-4 bg-[#f8f4ef] rounded-2xl shadow-inner border border-[#e0d8d0] overflow-hidden"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top left",
            transition: "transform 0.2s",
          }}
        >
          {objects.map((obj) => (
            <CanvasObjectItem
              key={obj.id}
              obj={obj}
              selected={selectedId === obj.id}
              onClick={() => setSelectedId(obj.id)}
              onDrag={handleDrag}
            />
          ))}

          {/* Plant decor */}
          <div className="absolute bottom-16 left-10 text-3xl opacity-60 pointer-events-none">
            🌿
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-1.5 z-10">
          <button
            onClick={() => setZoom((z) => Math.min(z + 10, 200))}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#d8d0c8] shadow-md hover:bg-[#f0ece7] transition-colors text-[#3a3330]"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="w-9 h-7 flex items-center justify-center rounded-lg bg-white border border-[#d8d0c8] shadow-sm">
            <span className="text-[10px] font-bold text-[#6b6460]">
              {zoom}%
            </span>
          </div>
          <button
            onClick={() => setZoom((z) => Math.max(z - 10, 40))}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#d8d0c8] shadow-md hover:bg-[#f0ece7] transition-colors text-[#3a3330]"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#d8d0c8] shadow-md hover:bg-[#f0ece7] transition-colors text-[#3a3330]">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-[#d8d0c8] shadow-md hover:bg-[#f0ece7] transition-colors text-[#3a3330]">
            <Layers className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="flex items-center justify-between px-5 py-2 bg-white border-t border-[#e8e0d8] text-[11px] text-[#8a7f77]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>Editor Connected</span>
          </div>
          <span>Active Layer: Tables_L1</span>
          <span>
            Coordinates: X: {selectedObj ? Math.round(selectedObj.x) : 0}
            .00, Y: {selectedObj ? Math.round(selectedObj.y) : 0}.45
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 hover:text-[#3a3330] transition-colors">
            <ExternalLink className="w-3 h-3" />
            <span>Shortcuts</span>
          </button>
          <button className="flex items-center gap-1 hover:text-[#3a3330] transition-colors">
            <span>Guide</span>
          </button>
        </div>
      </div>
    </main>
  );
}
