import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  image: { src: string; alt: string };
  title: string;
  subtitle?: string;
  cta?: { href: string; label: string };
  overlay?: "dark" | "light";
  priority?: boolean;
}

export function Hero({
  image,
  title,
  subtitle,
  cta,
  overlay = "dark",
  priority = false,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />
      <div
        className={`absolute inset-0 ${
          overlay === "dark"
            ? "bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80"
            : "bg-gradient-to-b from-black/30 to-black/50"
        }`}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center text-white">
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
            {subtitle}
          </p>
        )}
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-light"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
