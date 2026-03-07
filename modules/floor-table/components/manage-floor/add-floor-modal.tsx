"use client";

import { LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddFloorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddFloorModal({ isOpen, onClose }: AddFloorModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg rounded-[32px] p-0 border-none overflow-hidden shadow-2xl bg-white dark:bg-slate-900">
        <DialogHeader className="p-8 pb-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <LayoutGrid className="w-6 h-6" />
            </div>
            <div className="text-left">
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Add New Floor
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-400 font-bold uppercase tracking-tight">
                Create and organize your seating areas
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <Label
              htmlFor="floorName"
              className="text-[11px] font-bold uppercase tracking-widest text-slate-400"
            >
              Floor Name
            </Label>
            <Input
              id="floorName"
              placeholder="e.g. Secret Garden"
              className="h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold px-5 placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="description"
              className="text-[11px] font-bold uppercase tracking-widest text-slate-400"
            >
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe this seating area..."
              className="min-h-[120px] bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold p-5 placeholder:text-slate-300 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label
                htmlFor="defaultTables"
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400"
              >
                Default Tables
              </Label>
              <Input
                id="defaultTables"
                type="number"
                placeholder="0"
                className="h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold px-5 placeholder:text-slate-300"
              />
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="status"
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400"
              >
                Status
              </Label>
              <Select defaultValue="active">
                <SelectTrigger className="h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-bold px-5 focus:ring-0">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100 dark:border-slate-800">
                  <SelectItem value="active" className="font-bold">
                    Active
                  </SelectItem>
                  <SelectItem value="seasonal" className="font-bold">
                    Seasonal
                  </SelectItem>
                  <SelectItem value="maintenance" className="font-bold">
                    Maintenance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
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
            Create Floor
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
