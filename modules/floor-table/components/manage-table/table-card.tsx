import { Users } from "lucide-react";
import { Table, TableStatus } from "../../types";
import { cn } from "@/lib/utils";

interface TableCardProps {
  table: Table;
  onClick?: () => void;
}

const statusConfig: Record<
  TableStatus,
  {
    label: string;
    color: string;
    dotColor: string;
    borderColor: string;
    bgColor: string;
  }
> = {
  available: {
    label: "Available",
    color: "text-green-600",
    dotColor: "bg-green-500",
    borderColor: "border-slate-100",
    bgColor: "bg-white",
  },
  occupied: {
    label: "Occupied",
    color: "text-red-600",
    dotColor: "bg-red-500",
    borderColor: "border-red-100",
    bgColor: "bg-red-50/10",
  },
  reserved: {
    label: "Reserved",
    color: "text-amber-600",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-100",
    bgColor: "bg-amber-50/10",
  },
  cleaning: {
    label: "Cleaning",
    color: "text-blue-600",
    dotColor: "bg-blue-500",
    borderColor: "border-blue-100",
    bgColor: "bg-blue-50/10",
  },
};

export function TableCard({ table, onClick }: TableCardProps) {
  const config = statusConfig[table.status];

  return (
    <div
      onClick={onClick}
      className={cn(
        "group p-5 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md",
        config.borderColor,
        config.bgColor,
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
          {table.name}
        </h3>
        <div className="flex items-center gap-1.5 text-slate-400">
          <Users className="w-4 h-4" />
          <span className="text-sm font-bold">{table.capacity}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", config.dotColor)} />
          <span
            className={cn(
              "text-[11px] font-bold uppercase tracking-wider",
              config.color,
            )}
          >
            {config.label}
          </span>
        </div>

        {table.status === "occupied" && table.occupancyTime && (
          <span className="text-[10px] text-slate-400 font-bold ml-4">
            {table.occupancyTime} elapsed
          </span>
        )}

        {table.status === "reserved" && table.reservationTime && (
          <span className="text-[10px] text-slate-400 font-bold ml-4">
            Next: {table.reservationTime}
          </span>
        )}
      </div>
    </div>
  );
}
