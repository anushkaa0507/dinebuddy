import React, { useRef } from "react";
import { CanvasObject } from "../../types/floor-editor";

export function CanvasObjectItem({
  obj,
  selected,
  onClick,
  onDrag,
}: {
  obj: CanvasObject;
  selected: boolean;
  onClick: () => void;
  onDrag: (id: string, dx: number, dy: number) => void;
}) {
  const dragStart = useRef<{ x: number; y: number } | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    dragStart.current = { x: e.clientX, y: e.clientY };
    onClick();

    const handleMouseMove = (me: MouseEvent) => {
      if (!dragStart.current) return;
      const dx = me.clientX - dragStart.current.x;
      const dy = me.clientY - dragStart.current.y;
      dragStart.current = { x: me.clientX, y: me.clientY };
      onDrag(obj.id, dx, dy);
    };
    const handleMouseUp = () => {
      dragStart.current = null;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const isCircle = obj.shape === "Circular";
  const baseClass = `
    absolute flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none
    border-2 transition-shadow duration-150
    ${isCircle ? "rounded-full w-24 h-24" : "rounded-2xl w-28 h-20"}
    ${
      selected
        ? "border-[#e85d2f] shadow-[0_0_0_3px_rgba(232,93,47,0.25)]"
        : "border-[#c8bfb6] shadow-md hover:shadow-lg"
    }
    bg-white
  `;

  return (
    <div
      className={baseClass}
      style={{
        left: obj.x,
        top: obj.y,
        transform: `rotate(${obj.rotation}deg)`,
        transformOrigin: "center",
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Selection handles for circles */}
      {selected && isCircle && (
        <>
          {[
            "-top-2 left-1/2 -translate-x-1/2",
            "-bottom-2 left-1/2 -translate-x-1/2",
            "top-1/2 -translate-y-1/2 -left-2",
            "top-1/2 -translate-y-1/2 -right-2",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute w-2.5 h-2.5 bg-white border-2 border-[#e85d2f] rounded-full ${pos}`}
            />
          ))}
        </>
      )}

      <span className="text-[10px] font-bold text-[#6b6460] tracking-widest">
        {obj.label}
      </span>
      {obj.seats > 0 && !obj.isInactive && (
        <div className="flex gap-0.5 mt-0.5">
          {Array.from({ length: Math.min(obj.seats, 5) }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#c8bfb6]" />
          ))}
        </div>
      )}
      {obj.isInactive && (
        <span className="text-[9px] font-bold text-[#8a7f77] bg-[#ede6df] px-1.5 py-0.5 rounded-full mt-0.5 tracking-wider">
          INACTIVE
        </span>
      )}
      {obj.outOfService && !obj.isInactive && (
        <span className="text-[9px] font-semibold text-[#e85d2f] mt-0.5">
          ⚠ OOS
        </span>
      )}
      {/* Seat count for circle */}
      {isCircle && !obj.isInactive && (
        <span className="text-lg font-black text-[#2a2420] leading-none">
          {obj.seats}
        </span>
      )}
    </div>
  );
}
