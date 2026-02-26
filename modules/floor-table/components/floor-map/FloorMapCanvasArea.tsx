import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TableNode } from "./TableNode";
import { tables } from "../../constants/floor-map";

interface FloorMapCanvasAreaProps {
  zoom: number;
  setZoom: (updater: (z: number) => number) => void;
  selectedTable: string | null;
  setSelectedTable: (id: string | null) => void;
}

export function FloorMapCanvasArea({
  zoom,
  setZoom,
  selectedTable,
  setSelectedTable,
}: FloorMapCanvasAreaProps) {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      {/* Canvas Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-[#e8e0d8]">
        <div>
          <h1 className="text-xl font-bold text-[#1a1a1a]">Main Dining Room</h1>
          <p className="text-sm text-[#8a7f77]">Zone A & B • 36 Tables Total</p>
        </div>
        <div className="flex items-center gap-1.5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setZoom((z) => Math.min(z + 10, 150))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f0ece7] hover:bg-[#e4ddd6] transition-colors text-[#6b6460]"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Zoom In</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setZoom((z) => Math.max(z - 10, 60))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f0ece7] hover:bg-[#e4ddd6] transition-colors text-[#6b6460]"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Zoom Out</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f0ece7] hover:bg-[#e4ddd6] transition-colors text-[#6b6460]">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Fullscreen</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-auto bg-[#f5f0eb] p-6">
        <div
          className="relative w-full h-full flex items-start justify-center"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top center",
            transition: "transform 0.2s ease",
          }}
        >
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(3, auto)",
              gridTemplateRows: "repeat(4, auto)",
            }}
          >
            {/* Row 1 */}
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[0]}
                onClick={() => setSelectedTable(tables[0].id)}
                selected={selectedTable === tables[0].id}
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[1]}
                onClick={() => setSelectedTable(tables[1].id)}
                selected={selectedTable === tables[1].id}
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[2]}
                onClick={() => setSelectedTable(tables[2].id)}
                selected={selectedTable === tables[2].id}
              />
            </div>
            {/* Row 2 */}
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[3]}
                onClick={() => setSelectedTable(tables[3].id)}
                selected={selectedTable === tables[3].id}
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[4]}
                onClick={() => setSelectedTable(tables[4].id)}
                selected={selectedTable === tables[4].id}
              />
            </div>
            <div className="p-4" /> {/* empty cell */}
            {/* Row 3 */}
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[5]}
                onClick={() => setSelectedTable(tables[5].id)}
                selected={selectedTable === tables[5].id}
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[6]}
                onClick={() => setSelectedTable(tables[6].id)}
                selected={selectedTable === tables[6].id}
              />
            </div>
            <div className="p-4" />
            {/* Row 4 */}
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[7]}
                onClick={() => setSelectedTable(tables[7].id)}
                selected={selectedTable === tables[7].id}
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <TableNode
                table={tables[8]}
                onClick={() => setSelectedTable(tables[8].id)}
                selected={selectedTable === tables[8].id}
              />
            </div>
            <div className="p-4" />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 py-2.5 bg-white border-t border-[#e8e0d8]">
        {[
          { color: "bg-[#4a7c6f]", label: "Available" },
          { color: "bg-[#b5422a]", label: "Occupied" },
          { color: "bg-[#c9962a]", label: "Reserved" },
          { color: "bg-[#7c5cbf]", label: "Cleaning" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
            <span className="text-xs text-[#6b6460]">{label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
