interface FeatureCardProps {
  title?: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-sage">
          {icon}
        </div>
      )}
      {title ? (
        <h3 className="font-serif text-xl leading-snug font-semibold text-forest">
          {title}
        </h3>
      ) : null}
      <p
        className={`text-sm leading-relaxed text-muted ${title ? "mt-4" : ""}`}
      >
        {description}
      </p>
    </div>
  );
}
