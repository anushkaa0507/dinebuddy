import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FurnitureIcon } from "./FurnitureIcon";
import { furnitureLibrary } from "../../constants/floor-editor";

interface FurnitureSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function FurnitureSidebar({
  searchQuery,
  setSearchQuery,
}: FurnitureSidebarProps) {
  const filteredFurniture = furnitureLibrary.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const tableItems = filteredFurniture.filter((f) => f.category === "TABLES");
  const decorItems = filteredFurniture.filter(
    (f) => f.category === "DECOR & DIVIDERS",
  );

  return (
    <aside className="w-52 bg-[#f0ece7] border-r border-[#e0d8d0] flex flex-col py-3 gap-3 shrink-0 overflow-y-auto">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77] px-4 pt-1">
        Furniture Library
      </p>

      {/* Search */}
      <div className="px-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#a09890]" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-8 text-xs bg-white border-[#d8d0c8] rounded-lg focus-visible:ring-[#e85d2f]"
          />
        </div>
      </div>

      {/* Tables */}
      <div className="px-3">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-3.5 h-3.5 rounded-sm bg-[#e85d2f] flex items-center justify-center">
            <div className="w-2 h-2 border border-white rounded-[1px]" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#e85d2f]">
            Tables
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {tableItems.map((item) => (
            <button
              key={item.id}
              draggable
              className="flex flex-col items-center gap-1.5 p-2.5 bg-white rounded-xl border border-[#e0d8d0] hover:border-[#e85d2f] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <FurnitureIcon icon={item.icon} />
              </div>
              <span className="text-[9px] text-[#6b6460] group-hover:text-[#3a3330] text-center leading-tight font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Separator className="bg-[#d8d0c8] mx-3" />

      {/* Decor */}
      <div className="px-3">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-3.5 h-3.5 rounded-sm bg-[#e85d2f] flex items-center justify-center">
            <div className="w-2 h-2 border border-white rounded-[1px]" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#e85d2f]">
            Decor & Dividers
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {decorItems.map((item) => (
            <button
              key={item.id}
              draggable
              className="flex flex-col items-center gap-1.5 p-2.5 bg-white rounded-xl border border-[#e0d8d0] hover:border-[#e85d2f] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <FurnitureIcon icon={item.icon} />
              </div>
              <span className="text-[9px] text-[#6b6460] group-hover:text-[#3a3330] text-center leading-tight font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
