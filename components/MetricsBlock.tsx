export default function MetricsBlock({ metrics }: { metrics: Array<{ label: string; value: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs uppercase tracking-wider text-slate-500">{metric.label}</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
