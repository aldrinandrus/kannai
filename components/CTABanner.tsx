import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryExternal?: boolean;
}

const buttonSecondaryClass =
  "rounded-full border border-cream/30 px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/10";

export function CTABanner({
  title = "Plan Your Visit",
  description = "Experience the generosity of nature. Contact us to arrange your stay at Kannai Agro Tourism Centre.",
  secondaryHref = "/how-to-reach#directions",
  secondaryLabel = "How to Reach",
  secondaryExternal = false,
}: CTABannerProps) {
  return (
    <section className="bg-forest py-16 text-cream">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl leading-snug font-semibold sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream/85">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-light"
          >
            Contact Us
          </Link>
          {secondaryExternal ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonSecondaryClass}
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link href={secondaryHref} className={buttonSecondaryClass}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
