"use client";

import { Plus, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface AddTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  floors: { id: string; name: string }[];
}

export function AddTableModal({ isOpen, onClose, floors }: AddTableModalProps) {
  const [selectedFloor, setSelectedFloor] = useState(floors[0]?.id);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg rounded-[32px] p-0 border-none overflow-hidden shadow-2xl bg-white dark:bg-slate-900">
        <DialogHeader className="p-8 pb-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Plus className="w-6 h-6" />
            </div>
            <div className="text-left">
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Add New Table
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-400 font-bold uppercase tracking-tight">
                Configure your floor layout
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label
                htmlFor="tableName"
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400"
              >
                Table Name
              </Label>
              <Input
                id="tableName"
                placeholder="e.g. Table 07"
                className="h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold px-5 placeholder:text-slate-300"
              />
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="capacity"
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400"
              >
                Capacity (Seats)
              </Label>
              <div className="relative">
                <Input
                  id="capacity"
                  type="number"
                  placeholder="4"
                  className="h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl pl-12 font-bold focus-visible:ring-primary/20"
                />
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              Floor Selection
            </Label>
            <div className="flex gap-2 p-1.5 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              {floors.map((floor) => (
                <button
                  key={floor.id}
                  onClick={() => setSelectedFloor(floor.id)}
                  className={cn(
                    "flex-1 py-3.5 text-xs font-bold rounded-xl transition-all",
                    selectedFloor === floor.id
                      ? "bg-white dark:bg-slate-700 text-primary shadow-sm ring-1 ring-slate-200/50"
                      : "text-slate-400 hover:text-slate-600",
                  )}
                >
                  {floor.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Default Status
            </Label>
            <button className="w-full h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl px-5 flex items-center justify-between text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-100 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                <span>Available</span>
              </div>
              <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-slate-400 transition-colors" />
            </button>
          </div>
        </div>

        <DialogFooter className="p-8 pt-0 flex flex-row gap-4 sm:justify-start">
          <Button
            variant="ghost"
            onClick={onClose}
            className="flex-1 h-14 rounded-2xl text-slate-400 font-bold hover:bg-slate-50 hover:text-slate-600 transition-all border border-transparent hover:border-slate-100"
          >
            Cancel
          </Button>
          <Button className="flex-1 h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]">
            Create Table
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
