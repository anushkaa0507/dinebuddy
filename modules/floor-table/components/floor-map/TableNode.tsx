import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TableData } from "../../types/floor-map";
import { statusConfig } from "../../constants/floor-map";

interface TableNodeProps {
  table: TableData;
  onClick: () => void;
  selected: boolean;
}

export function TableNode({ table, onClick, selected }: TableNodeProps) {
  const cfg = statusConfig[table.status];
  const isCircle = table.shape === "circle";
  const isGrand = table.isGrand;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={`
            flex flex-col items-center justify-center gap-0.5 font-bold cursor-pointer transition-all duration-200
            ${cfg.bg} ${cfg.text}
            ${isCircle ? "rounded-full" : "rounded-2xl"}
            ${isGrand ? "w-28 h-20" : isCircle ? "w-16 h-16" : "w-24 h-16"}
            ${selected ? "ring-4 ring-offset-2 ring-[#c9962a] scale-105" : "hover:scale-105 hover:shadow-lg"}
            shadow-md border-2 ${cfg.border}
          `}
          >
            <span className="text-[10px] font-semibold opacity-80 tracking-wider">
              {table.label}
            </span>
            <span
              className={`font-black leading-none ${isGrand ? "text-3xl" : "text-2xl"}`}
            >
              {table.seats}
            </span>
            {(table.time || table.note) && (
              <span className="text-[9px] font-medium opacity-85 tracking-wide">
                {table.note ?? table.time}
              </span>
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="shadow-lg">
          <div className="text-xs">
            <div className="font-semibold">{table.label}</div>
            <div className="text-muted-foreground capitalize">
              Status: {table.status}
            </div>
            <div className="text-muted-foreground">Seats: {table.seats}</div>
            {table.time && (
              <div className="text-muted-foreground">Time: {table.time}</div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
