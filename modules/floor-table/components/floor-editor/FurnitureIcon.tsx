export function FurnitureIcon({ icon }: { icon: string }) {
  if (icon === "circle-sm")
    return (
      <div className="w-8 h-8 rounded-full border-2 border-[#8a7f77] bg-transparent" />
    );
  if (icon === "rect")
    return (
      <div className="w-10 h-6 rounded-sm border-2 border-[#8a7f77] bg-transparent" />
    );
  if (icon === "booth")
    return (
      <div className="w-10 h-7 rounded-md border-2 border-[#8a7f77] bg-transparent flex">
        <div className="w-1.5 h-full bg-[#d8d0c8] rounded-l-sm" />
      </div>
    );
  if (icon === "plant")
    return (
      <div className="w-8 h-8 rounded-full border-2 border-green-400 bg-green-50 flex items-center justify-center">
        <span className="text-green-600 text-xs">🪴</span>
      </div>
    );
  if (icon === "divider")
    return (
      <div className="w-10 h-1.5 rounded bg-[#b8d4f0] border border-[#8ab0d8]" />
    );
  if (icon === "host")
    return (
      <div className="w-8 h-7 rounded border-2 border-[#8a7f77] bg-transparent flex items-center justify-center">
        <div className="w-4 h-3 border border-[#8a7f77] rounded-sm" />
      </div>
    );
  if (icon === "entry")
    return (
      <div className="w-8 h-8 rounded-sm border-2 border-[#8a7f77] bg-transparent flex items-end justify-center pb-0.5">
        <div className="w-4 h-5 border-t-2 border-l-2 border-[#8a7f77]" />
      </div>
    );
  // default square
  return (
    <div className="w-8 h-8 rounded-md border-2 border-[#8a7f77] bg-transparent" />
  );
}
