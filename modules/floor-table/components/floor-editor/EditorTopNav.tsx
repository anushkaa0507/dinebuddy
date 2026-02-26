import { Undo2, Redo2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export function EditorTopNav() {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-white border-b border-[#e8e0d8] shadow-sm z-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#f0ece7] rounded-lg flex items-center justify-center">
          <span className="text-[#e85d2f] text-lg">🪑</span>
        </div>
        <div>
          <h1 className="font-bold text-[#1a1a1a] text-base leading-tight">
            Floor Plan Editor
          </h1>
          <p className="text-[11px] text-[#8a7f77]">Main Dining Hall • v2.4</p>
        </div>
      </div>

      {/* Undo / Redo */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f0ece7] transition-colors text-[#6b6460]">
                  <Undo2 className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f0ece7] transition-colors text-[#6b6460]">
                  <Redo2 className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/dinebuddy/floor-map">
            <Button
              variant="outline"
              size="sm"
              className="border-[#d8d0c8] text-[#3a3330] hover:bg-[#f0ece7] rounded-lg px-4"
            >
              Cancel
            </Button>
          </Link>
          <Button
            size="sm"
            className="bg-[#e85d2f] hover:bg-[#d44f23] text-white rounded-lg px-5 shadow"
          >
            Save Layout
          </Button>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#d0c8bf] flex items-center justify-center">
          <span className="text-xs text-[#5a4f46]">👤</span>
        </div>
      </div>
    </header>
  );
}
