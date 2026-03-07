"use client";

import { Search, Plus, Filter, Grid2X2, Bell, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloorGrid } from "../components/manage-floor/floor-grid";
import { StatsSummary } from "../components/manage-floor/stats-summary";
import { AddFloorModal } from "../components/manage-floor/add-floor-modal";

export function FloorManagementPage() {
  const [isAddFloorOpen, setIsAddFloorOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <Grid2X2 className="w-5 h-5" />
              </div>
              <h1 className="text-lg font-bold tracking-tight">
                Floor Management
              </h1>
            </div>
            <div className="hidden md:flex items-center">
              <div className="relative block w-64 lg:w-80">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Search className="w-4 h-4" />
                </span>
                <Input
                  className="block w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-3 text-sm placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all h-9"
                  placeholder="Search layouts..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => setIsAddFloorOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
            >
              <Plus className="w-4 h-4" />
              <span>Add Floor</span>
            </Button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
            <Button
              variant="ghost"
              size="icon"
              className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 p-1 pl-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-800 transition-colors h-9"
            >
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 hidden lg:block">
                Admin User
              </span>
              <div className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Restaurant Layouts
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg">
              Manage and organize your physical dining spaces, table
              assignments, and floor capacity.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsAddFloorOpen(true)}
              className="flex sm:hidden items-center justify-center w-full py-2.5 bg-primary text-white font-semibold rounded-lg"
            >
              <Plus className="mr-2 w-4 h-4" /> Add Floor
            </Button>
            <Button
              variant="outline"
              className="px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 transition-all h-10"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </Button>
          </div>
        </div>

        {/* Floor Grid */}
        <FloorGrid />

        {/* Stats Summary */}
        <StatsSummary />
      </main>

      <AddFloorModal
        isOpen={isAddFloorOpen}
        onClose={() => setIsAddFloorOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 FloorFlow Management System. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">
              System Status
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Help Center
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
