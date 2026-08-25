interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-serif text-3xl leading-snug font-semibold text-forest sm:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-5 h-1 w-16 rounded-full bg-terracotta ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
