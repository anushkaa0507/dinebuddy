import { PlusCircle } from "lucide-react";
import { FloorCard } from "./floor-card";

const FLOORS = [
  {
    title: "Ground Floor",
    createdAt: "Oct 12, 2023",
    tables: 12,
    capacity: 48,
    status: "Active" as const,
    image: "/images/floors/ground-floor.webp",
  },
  {
    title: "First Floor",
    createdAt: "Nov 05, 2023",
    tables: 8,
    capacity: 32,
    status: "Active" as const,
    image: "/images/floors/first-floor.webp",
  },
  {
    title: "Outdoor Patio",
    createdAt: "Jan 20, 2024",
    tables: 15,
    capacity: 60,
    status: "Seasonal" as const,
    image: "/images/floors/outdoor-patio.webp",
  },
];

export function FloorGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {FLOORS.map((floor) => (
        <FloorCard key={floor.title} {...floor} />
      ))}
      <button className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-900 hover:border-primary/50 transition-all group">
        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-4">
          <PlusCircle className="w-6 h-6" />
        </div>
        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
          Create New Layout
        </span>
        <span className="text-xs text-slate-400 mt-1">
          Start from a template or scratch
        </span>
      </button>
    </div>
  );
}
