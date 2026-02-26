import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { waitlist } from "../../constants/floor-map";
import { PrefIcon } from "./PrefIcon";

export function WaitlistSidebar() {
  return (
    <aside className="w-64 bg-white border-l border-[#e8e0d8] flex flex-col shrink-0">
      {/* Waitlist Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e8e0d8]">
        <h2 className="font-bold text-[#1a1a1a] text-base">Waitlist</h2>
        <Badge className="bg-[#e85d2f] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          8 Parties
        </Badge>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-3 flex flex-col gap-3">
          {waitlist.map((entry) => (
            <div
              key={entry.id}
              className="bg-[#faf7f4] rounded-xl p-3 border border-[#ede6df]"
            >
              <div className="flex items-start justify-between mb-1.5">
                <span className="font-semibold text-sm text-[#1a1a1a]">
                  {entry.name}
                </span>
                <span className="text-[10px] font-semibold text-[#c9962a] whitespace-nowrap ml-1">
                  {entry.waitMin}m wait
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2.5 text-[11px] text-[#8a7f77]">
                <div className="flex items-center gap-0.5">
                  <Users className="w-3 h-3" />
                  <span>{entry.pax} pax</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <PrefIcon type={entry.prefIcon} />
                  <span>{entry.preference}</span>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full h-7 text-xs font-medium border-[#d8d0c8] text-[#3a3330] hover:bg-[#ede6df] rounded-lg"
              >
                Assign Table
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* New Reservation Button */}
      <div className="p-3 border-t border-dashed border-[#d8d0c8]">
        <button className="w-full h-10 flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#b8afa6] text-[#8a7f77] hover:bg-[#f5f0eb] hover:text-[#3a3330] transition-colors text-sm font-medium">
          + New Reservation
        </button>
      </div>
    </aside>
  );
}
