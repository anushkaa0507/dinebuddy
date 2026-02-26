import { Clock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloorMapTopNavProps {
  activeZone: "Indoor" | "Outdoor" | "Rooftop";
  setActiveZone: (zone: "Indoor" | "Outdoor" | "Rooftop") => void;
}

export function FloorMapTopNav({
  activeZone,
  setActiveZone,
}: FloorMapTopNavProps) {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-white border-b border-[#e8e0d8] shadow-sm z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#e85d2f] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">✕</span>
        </div>
        <span className="font-bold text-[#1a1a1a] text-base tracking-tight">
          Live Floor Map
        </span>
      </div>

      {/* Zone Tabs */}
      <div className="flex items-center bg-[#f0ece7] rounded-full p-1 gap-0.5">
        {(["Indoor", "Outdoor", "Rooftop"] as const).map((zone) => (
          <button
            key={zone}
            onClick={() => setActiveZone(zone)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeZone === zone
                ? "bg-white text-[#1a1a1a] shadow-sm"
                : "text-[#6b6460] hover:text-[#1a1a1a]"
            }`}
          >
            {zone}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-sm text-[#6b6460]">
          <Clock className="w-4 h-4" />
          <span>Sat, Oct 21 • 7:45 PM</span>
        </div>
        <Button
          size="sm"
          className="bg-[#e85d2f] hover:bg-[#d44f23] text-white rounded-full px-4 gap-1.5 shadow"
        >
          <UserPlus className="w-4 h-4" />
          Add Walk-in
        </Button>
        <div className="w-8 h-8 rounded-full bg-[#d0c8bf] overflow-hidden flex items-center justify-center">
          <span className="text-xs text-[#5a4f46]">👤</span>
        </div>
      </div>
    </header>
  );
}
