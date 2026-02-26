import { Pencil, Monitor } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { statusSummaryItems } from "../../constants/floor-map";

export function StatusSidebar() {
  return (
    <aside className="w-52 bg-[#f0ece7] border-r border-[#e0d8d0] flex flex-col py-4 px-3 gap-4 shrink-0">
      {/* Status Summary */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77] mb-2.5 px-1">
          Status Summary
        </p>
        <div className="flex flex-col gap-2">
          {statusSummaryItems.map(
            ({ label, count, icon: Icon, iconColor, cardBg, countColor }) => (
              <div
                key={label}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl ${cardBg}`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${iconColor}`} />
                  <span className="text-sm font-medium text-[#1a1a1a]">
                    {label}
                  </span>
                </div>
                <span className={`text-sm font-bold ${countColor}`}>
                  {count}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      <Separator className="bg-[#d8d0c8]" />

      {/* Floor Controls */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77] mb-2.5 px-1">
          Floor Controls
        </p>
        <div className="flex flex-col gap-0.5">
          <Link href="/dinebuddy/floor-editor">
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#e4ddd6] transition-colors group">
              <span className="text-sm font-medium text-[#3a3330]">
                Edit Layout
              </span>
              <Pencil className="w-3.5 h-3.5 text-[#8a7f77] group-hover:text-[#3a3330]" />
            </button>
          </Link>
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#e4ddd6] transition-colors group">
            <span className="text-sm font-medium text-[#3a3330]">
              Staff View
            </span>
            <Monitor className="w-3.5 h-3.5 text-[#8a7f77] group-hover:text-[#3a3330]" />
          </button>
        </div>
      </div>

      <div className="flex-1" />

      {/* Status Footer */}
      <div className="px-1">
        <div className="flex items-center gap-1.5 text-[10px] text-[#8a7f77]">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>SYSTEM LIVE • SYNCING TERMINAL 04</span>
        </div>
      </div>
    </aside>
  );
}
