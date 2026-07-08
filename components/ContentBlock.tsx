import Link from "next/link";
import Image from "next/image";

interface ContentBlockProps {
  title: string;
  description: string | string[];
  image?: { src: string; alt: string };
  reverse?: boolean;
  children?: React.ReactNode;
}

export function ContentBlock({
  title,
  description,
  image,
  reverse = false,
  children,
}: ContentBlockProps) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      )}
      <div className={image ? "" : "lg:col-span-2"}>
        <h2 className="font-serif text-2xl font-semibold text-forest sm:text-3xl">
          {title}
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-terracotta" />
        <div className="mt-6 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}

export function PullQuote({ lines }: { lines: readonly string[] }) {
  return (
    <blockquote className="my-12 border-l-4 border-terracotta py-4 pl-6">
      {lines.map((line, i) => (
        <p
          key={i}
          className="font-serif text-xl italic text-forest/80 sm:text-2xl"
        >
          {line}
        </p>
      ))}
    </blockquote>
  );
}

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-forest py-16 text-cream">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-cream/80">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export function QuickLinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition-all hover:border-sage/30 hover:shadow-md"
    >
      <h3 className="font-serif text-xl font-semibold text-forest group-hover:text-sage">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-terracotta">
        Learn more &rarr;
      </span>
    </Link>
  );
}
