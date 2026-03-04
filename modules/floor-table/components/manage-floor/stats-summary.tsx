interface StatItemProps {
  label: string;
  value: string | number;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-2xl font-black text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

export function StatsSummary() {
  const stats = [
    { label: "Total Floors", value: "03" },
    { label: "Active Tables", value: "35" },
    { label: "Total Capacity", value: "140" },
    { label: "Last Update", value: "Today" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
}
