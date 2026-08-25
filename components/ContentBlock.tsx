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
        <h2 className="font-serif text-2xl leading-snug font-semibold text-forest sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 h-1 w-12 rounded-full bg-terracotta" />
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
      <div className="space-y-2">
        {lines.map((line, i) => (
          <p
            key={i}
            className="font-serif text-xl leading-snug italic text-forest/80 sm:text-2xl"
          >
            {line}
          </p>
        ))}
      </div>
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
        <h1 className="font-serif text-4xl leading-snug font-semibold sm:text-5xl">
          {title}
        </h1>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-terracotta" />
        {subtitle && (
          <p className="mt-6 text-lg leading-relaxed text-cream/80">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export function QuickLinkCard({
  href,
  title,
  description,
  image,
}: {
  href: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm transition-all hover:border-sage/30 hover:shadow-md"
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl leading-snug font-semibold text-forest group-hover:text-sage">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <span className="mt-4 inline-block text-sm font-medium text-terracotta">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
