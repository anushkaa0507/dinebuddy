import { LucideIcon, Eye, Edit2, Trash2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FloorCardProps {
  title: string;
  createdAt: string;
  tables: number;
  capacity: number;
  status: "Active" | "Seasonal";
  image: string;
}

export function FloorCard({
  title,
  createdAt,
  tables,
  capacity,
  status,
  image,
}: FloorCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
      <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute top-3 right-3">
          <Badge
            variant={status === "Active" ? "default" : "outline"}
            className={
              status === "Active"
                ? "bg-green-100 text-green-700 hover:bg-green-100 border-none text-[10px] font-bold uppercase tracking-wider"
                : "bg-amber-100 text-amber-700 hover:bg-amber-100 border-none text-[10px] font-bold uppercase tracking-wider"
            }
          >
            {status}
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Created {createdAt}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-primary">{tables} Tables</p>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">
              {capacity} Capacity
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Tables
          </Button>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              title="Edit Floor"
            >
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              title="Delete Floor"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
