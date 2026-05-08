const stats = [
  { value: "15+", label: "Students Helped" },
  { value: "7+", label: "UT Austin Admits" },
  { value: "UC Berkeley & Northeastern", label: "Top Schools" },
  { value: "100%", label: "Online & Flexible" },
] as const;

export function StatsBar() {
  return (
    <div className="bg-accent py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 text-center text-white lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-sm font-semibold uppercase tracking-wide text-white/80">
                {s.label}
              </dt>
              <dd className="mt-1 text-2xl font-bold sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
