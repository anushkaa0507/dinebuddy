"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Table, Floor, TableStatus } from "../../types";
import { TableCard } from "./table-card";
import { TableFilters } from "./table-filters";
import { AddTableModal } from "./add-table-modal";
import { TableDetailsModal } from "./table-details-modal";
import { Header } from "./header";

const MOCK_FLOORS: Floor[] = [
  { id: "ground", name: "Ground Floor" },
  { id: "first", name: "First Floor" },
  { id: "outdoor", name: "Outdoor" },
];

const MOCK_TABLES: Table[] = [
  { id: "1", name: "T1", capacity: 2, status: "available", floorId: "ground" },
  {
    id: "2",
    name: "T2",
    capacity: 4,
    status: "occupied",
    floorId: "ground",
    occupancyTime: "45 mins",
  },
  {
    id: "3",
    name: "T3",
    capacity: 6,
    status: "reserved",
    floorId: "ground",
    isReserved: true,
    reservationTime: "18:30",
  },
  { id: "4", name: "T4", capacity: 4, status: "available", floorId: "ground" },
  { id: "5", name: "T5", capacity: 2, status: "cleaning", floorId: "ground" },
  {
    id: "6",
    name: "T6",
    capacity: 8,
    status: "occupied",
    floorId: "ground",
    occupancyTime: "1h 15m",
  },
  { id: "7", name: "T7", capacity: 4, status: "available", floorId: "ground" },
  {
    id: "8",
    name: "T8",
    capacity: 2,
    status: "reserved",
    floorId: "ground",
    isReserved: true,
    reservationTime: "20:00",
  },
];

export function TableList() {
  const [activeFloor, setActiveFloor] = useState(MOCK_FLOORS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | TableStatus>("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  const filteredTables = MOCK_TABLES.filter((table) => {
    if (table.floorId !== activeFloor) return false;
    if (activeFilter !== "all" && table.status !== activeFilter) return false;
    if (
      searchQuery &&
      !table.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-10 p-10 max-w-[1700px] mx-auto bg-slate-50/10 min-h-screen">
      <Header onAddTable={() => setIsAddModalOpen(true)} />

      <TableFilters
        activeFloor={activeFloor}
        onFloorChange={setActiveFloor}
        floors={MOCK_FLOORS}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 pb-12">
        {filteredTables.map((table) => (
          <TableCard
            key={table.id}
            table={table}
            onClick={() => setSelectedTable(table)}
          />
        ))}

        {/* <button
          onClick={() => setIsAddModalOpen(true)}
          className="group flex flex-col items-center justify-center aspect-square border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[32px] hover:bg-white dark:hover:bg-slate-900 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:scale-[1.02] transition-all duration-500 ease-out p-8"
        >
          <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 shadow-sm">
            <Plus className="w-8 h-8 stroke-[3]" />
          </div>
          <span className="text-sm font-black text-slate-300 mt-6 group-hover:text-slate-900 dark:group-hover:text-white uppercase tracking-widest transition-colors duration-500">
            New Table
          </span>
          <span className="text-[10px] text-slate-300 mt-2 font-bold uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Start adding chairs
          </span>
        </button> */}
      </div>

      <AddTableModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        floors={MOCK_FLOORS}
      />

      <TableDetailsModal
        isOpen={!!selectedTable}
        onClose={() => setSelectedTable(null)}
        table={selectedTable}
      />
    </div>
  );
}
