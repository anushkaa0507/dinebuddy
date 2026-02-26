import { Trash2, Plus, Minus, RotateCcw, Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CanvasObject, TableShape } from "../../types/floor-editor";

interface PropertiesSidebarProps {
  selectedObj: CanvasObject | null;
  handleDelete: () => void;
  updateObj: (id: string, updates: Partial<CanvasObject>) => void;
  handleDuplicate: () => void;
}

export function PropertiesSidebar({
  selectedObj,
  handleDelete,
  updateObj,
  handleDuplicate,
}: PropertiesSidebarProps) {
  return (
    <aside className="w-60 bg-white border-l border-[#e8e0d8] flex flex-col shrink-0 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e8e0d8]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77]">
            Object Properties
          </p>
          {selectedObj && (
            <p className="text-xs text-[#e85d2f] font-semibold mt-0.5">
              Editing: {selectedObj.label.replace("TABLE", "Table")}
            </p>
          )}
        </div>
        <button
          onClick={handleDelete}
          disabled={!selectedObj}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 hover:text-red-500 text-[#c8bfb6] disabled:opacity-30 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {selectedObj ? (
        <div className="flex flex-col gap-5 p-4 flex-1">
          {/* Table Designation */}
          <div>
            <Label className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77] mb-1.5 block">
              Table Designation
            </Label>
            <Input
              value={selectedObj.label.replace("TABLE ", "Table ")}
              onChange={(e) =>
                updateObj(selectedObj.id, {
                  label: e.target.value.toUpperCase(),
                })
              }
              className="h-9 text-sm border-[#d8d0c8] rounded-lg focus-visible:ring-[#e85d2f]"
            />
          </div>

          {/* Seat Capacity */}
          <div>
            <Label className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77] mb-2 block">
              Seat Capacity
            </Label>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateObj(selectedObj.id, {
                    seats: Math.max(1, selectedObj.seats - 1),
                  })
                }
                className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#d8d0c8] hover:bg-[#f0ece7] text-[#3a3330] transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <div className="flex-1 h-9 border border-[#d8d0c8] rounded-lg flex items-center justify-center text-sm font-semibold text-[#1a1a1a]">
                {selectedObj.seats}
              </div>
              <button
                onClick={() =>
                  updateObj(selectedObj.id, {
                    seats: selectedObj.seats + 1,
                  })
                }
                className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#d8d0c8] hover:bg-[#f0ece7] text-[#3a3330] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Shape */}
          <div>
            <Label className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77] mb-1.5 block">
              Shape
            </Label>
            <div className="flex gap-1.5">
              {(["Circular", "Square", "Booth"] as TableShape[]).map(
                (shape) => (
                  <button
                    key={shape}
                    onClick={() => updateObj(selectedObj.id, { shape })}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedObj.shape === shape
                        ? "bg-[#fff8f5] border-[#e85d2f] text-[#e85d2f]"
                        : "border-[#d8d0c8] text-[#6b6460] hover:border-[#c8bfb6]"
                    }`}
                  >
                    {shape}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Status Toggle */}
          <div className="bg-[#2a2420] rounded-xl p-3.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#a09890] mb-0.5">
                  Status Toggle
                </p>
                <p className="text-sm font-semibold text-white">
                  Out of Service
                </p>
              </div>
              <Switch
                checked={selectedObj.outOfService}
                onCheckedChange={(v) =>
                  updateObj(selectedObj.id, { outOfService: v })
                }
                className="data-[state=checked]:bg-[#e85d2f]"
              />
            </div>
            <p className="text-[10px] text-[#6b6460] mt-2 leading-relaxed">
              * Marking a table &quot;Out of Service&quot; will hide it from the
              online reservation portal and mobile apps.
            </p>
          </div>

          {/* Rotation & Position */}
          <div>
            <Label className="text-[10px] font-bold uppercase tracking-widest text-[#8a7f77] mb-2 block">
              Rotation & Position
            </Label>
            <div className="flex items-center gap-2 mb-2">
              <RotateCcw className="w-3.5 h-3.5 text-[#8a7f77]" />
              <Slider
                min={0}
                max={360}
                step={1}
                value={[selectedObj.rotation]}
                onValueChange={([v]) =>
                  updateObj(selectedObj.id, { rotation: v })
                }
                className="flex-1 **:[[role=slider]]:bg-[#e85d2f] **:[[role=slider]]:border-[#e85d2f] [&_.bg-primary]:bg-[#e85d2f]"
              />
              <span className="text-xs text-[#6b6460] w-8 text-right font-medium">
                {selectedObj.rotation}°
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  label: "X-AXIS",
                  value: `${Math.round(selectedObj.x)}px`,
                  key: "x",
                },
                {
                  label: "Y-AXIS",
                  value: `${Math.round(selectedObj.y)}px`,
                  key: "y",
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="border border-[#d8d0c8] rounded-lg p-2.5"
                >
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#8a7f77] mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-[#1a1a1a]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="text-sm text-[#b8afa6] text-center leading-relaxed">
            Select an object on the canvas to edit its properties
          </p>
        </div>
      )}

      {/* Duplicate Button */}
      <div className="p-4 border-t border-[#e8e0d8]">
        <Button
          onClick={handleDuplicate}
          disabled={!selectedObj}
          className="w-full bg-[#2a2420] hover:bg-[#3a3330] text-white rounded-xl gap-2 disabled:opacity-40 h-11"
        >
          <Copy className="w-4 h-4" />
          Duplicate Component
        </Button>
      </div>
    </aside>
  );
}
