import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onAddTable: () => void;
}

export function Header({ onAddTable }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tighter">
        Tables <span className="text-primary font-black">Management</span>
      </h1>
      <Button
        onClick={onAddTable}
        className="h-12 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-extrabold shadow-lg shadow-primary/25 flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
      >
        <Plus className="w-5 h-5 stroke-3" />
        Add Table
      </Button>
    </div>
  );
}
