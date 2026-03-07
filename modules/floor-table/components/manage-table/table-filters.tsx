import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TableStatus } from "../../types";

interface TableFiltersProps {
  activeFloor: string;
  onFloorChange: (floorId: string) => void;
  floors: { id: string; name: string }[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: "all" | TableStatus;
  onFilterChange: (filter: "all" | TableStatus) => void;
}

const statusLegend: { status: TableStatus; color: string }[] = [
  { status: "available", color: "bg-green-500" },
  { status: "occupied", color: "bg-red-500" },
  { status: "reserved", color: "bg-amber-500" },
  { status: "cleaning", color: "bg-blue-500" },
];

export function TableFilters({
  activeFloor,
  onFloorChange,
  floors,
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: TableFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Floor Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-100 dark:border-slate-800">
        {floors.map((floor) => (
          <button
            key={floor.id}
            onClick={() => onFloorChange(floor.id)}
            className={cn(
              "pb-3 text-sm font-bold transition-all relative",
              activeFloor === floor.id
                ? "text-primary border-b-2 border-primary"
                : "text-slate-400 hover:text-slate-600",
            )}
          >
            {floor.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search and Main Filters */}
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search tables by number or capacity..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl"
            />
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <Button
              variant={activeFilter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => onFilterChange("all")}
              className={cn(
                "h-9 px-4 rounded-lg text-xs font-bold",
                activeFilter === "all"
                  ? "bg-white dark:bg-slate-700 text-primary shadow-sm hover:bg-white"
                  : "text-slate-500 hover:bg-transparent hover:text-slate-900",
              )}
            >
              All Tables
            </Button>
            <Button
              variant={activeFilter === "available" ? "default" : "ghost"}
              size="sm"
              onClick={() => onFilterChange("available")}
              className={cn(
                "h-9 px-4 rounded-lg text-xs font-bold",
                activeFilter === "available"
                  ? "bg-white dark:bg-slate-700 text-primary shadow-sm hover:bg-white"
                  : "text-slate-500 hover:bg-transparent hover:text-slate-900",
              )}
            >
              Available
            </Button>
            <Button
              variant={activeFilter === "occupied" ? "default" : "ghost"}
              size="sm"
              onClick={() => onFilterChange("occupied")}
              className={cn(
                "h-9 px-4 rounded-lg text-xs font-bold",
                activeFilter === "occupied"
                  ? "bg-white dark:bg-slate-700 text-primary shadow-sm hover:bg-white"
                  : "text-slate-500 hover:bg-transparent hover:text-slate-900",
              )}
            >
              Occupied
            </Button>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
        {statusLegend.map(({ status, color }) => (
          <div key={status} className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", color)} />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
