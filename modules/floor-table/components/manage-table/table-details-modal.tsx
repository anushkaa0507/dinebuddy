"use client";

import {
  Users,
  CheckCircle,
  Calendar,
  Trash2,
  Edit2,
  Brush,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableStatus } from "../../types";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface TableDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  table: Table | null;
}

const statusConfig: Record<
  TableStatus,
  {
    label: string;
    dotColor: string;
    borderColor: string;
    bgColor: string;
    textColor: string;
  }
> = {
  available: {
    label: "Available",
    dotColor: "bg-green-500",
    borderColor: "border-green-100",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  occupied: {
    label: "Occupied",
    dotColor: "bg-red-500",
    borderColor: "border-red-100",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  reserved: {
    label: "Reserved",
    dotColor: "bg-amber-500",
    borderColor: "border-amber-100",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  cleaning: {
    label: "Cleaning",
    dotColor: "bg-blue-500",
    borderColor: "border-blue-100",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
};

const actionConfig: {
  status: TableStatus;
  label: string;
  icon: LucideIcon;
  variant: string;
}[] = [
  {
    status: "available",
    label: "Mark Available",
    icon: CheckCircle,
    variant: "bg-green-50 text-green-600 border-green-100",
  },
  {
    status: "occupied",
    label: "Mark Occupied",
    icon: Users,
    variant: "bg-red-50 text-red-600 border-red-100",
  },
  {
    status: "reserved",
    label: "Mark Reserved",
    icon: Calendar,
    variant: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    status: "cleaning",
    label: "Mark Cleaning",
    icon: Brush,
    variant: "bg-blue-50 text-blue-600 border-blue-100",
  },
];

export function TableDetailsModal({
  isOpen,
  onClose,
  table,
}: TableDetailsModalProps) {
  if (!table) return null;

  const currentStatusConfig = statusConfig[table.status];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl rounded-[32px] p-0 border-none overflow-hidden shadow-2xl bg-white dark:bg-slate-900">
        <DialogHeader className="p-8 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left">
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                Table Detail: {table.name}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="p-8 space-y-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Table Name
              </label>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                {table.name}
                <span className="text-slate-400 ml-2 font-medium">
                  {" "}
                  - Corner Window
                </span>
              </p>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Capacity
              </label>
              <div className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white">
                <Users className="w-6 h-6 text-primary/40" />
                <span>{table.capacity} Persons</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Current Status
            </label>
            <div
              className={cn(
                "flex items-center gap-3 w-fit px-5 py-3 rounded-2xl border shadow-sm",
                currentStatusConfig.borderColor,
                currentStatusConfig.bgColor,
              )}
            >
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full shadow-lg",
                  currentStatusConfig.dotColor,
                )}
              />
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-widest leading-none",
                  currentStatusConfig.textColor,
                )}
              >
                {currentStatusConfig.label}
              </span>
            </div>
            {table.status === "reserved" && (
              <p className="text-sm font-bold text-slate-400 flex items-center gap-3 pt-1">
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>
                  Reserved for:{" "}
                  <span className="text-slate-900 dark:text-white">
                    Smith Party @ 7:30 PM
                  </span>
                </span>
              </p>
            )}
          </div>

          <div className="space-y-5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Quick Actions
            </label>
            <div className="grid grid-cols-2 gap-4">
              {actionConfig.map((config) => {
                const Icon = config.icon;
                return (
                  <button
                    key={config.status}
                    className={cn(
                      "flex items-center gap-4 p-5 rounded-[22px] border-2 transition-all hover:scale-[1.02] active:scale-[0.98] group",
                      config.variant,
                      "font-bold text-sm tracking-tight",
                    )}
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <DialogFooter className="p-8 pt-0 flex flex-row items-center justify-between sm:justify-between">
          <button className="flex items-center gap-2.5 p-3 px-5 text-red-500 hover:text-red-600 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl transition-all">
            <Trash2 className="w-4.5 h-4.5" />
            Delete Table
          </button>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              onClick={onClose}
              className="h-14 px-8 rounded-2xl text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
            >
              Cancel
            </Button>
            <Button className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/25 flex items-center gap-2.5 transition-all hover:scale-105">
              <Edit2 className="w-4.5 h-4.5" />
              Edit Table
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
