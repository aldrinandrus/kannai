interface StatBlockProps {
  stats: { label: string; value: string }[];
}

export function StatBlock({ stats }: StatBlockProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl bg-forest px-6 py-8 text-center text-cream"
        >
          <p className="font-serif text-2xl leading-snug font-semibold sm:text-3xl">
            {stat.value}
          </p>
          <p className="mt-3 text-sm text-cream/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
