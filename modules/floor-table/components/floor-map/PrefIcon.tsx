import { Monitor, Cake, Plug, CircleDot } from "lucide-react";
import { WaitlistEntry } from "../../types/floor-map";

export function PrefIcon({ type }: { type: WaitlistEntry["prefIcon"] }) {
  if (type === "outdoor") return <Monitor className="w-3.5 h-3.5" />;
  if (type === "birthday") return <Cake className="w-3.5 h-3.5" />;
  if (type === "outlet") return <Plug className="w-3.5 h-3.5" />;
  return <CircleDot className="w-3.5 h-3.5" />;
}
