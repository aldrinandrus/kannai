import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatBlock } from "@/components/StatBlock";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import { PullQuote, QuickLinkCard } from "@/components/ContentBlock";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { lodgingJsonLd, touristAttractionJsonLd } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const jsonLd = [lodgingJsonLd(), touristAttractionJsonLd()];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        image={images.hero}
        title={site.name}
        subtitle={`${site.tagline} ${site.location}.`}
        priority
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={site.subtitle}
            subtitle={site.intro}
          />

          <div className="mt-12">
            <StatBlock
              stats={[
                { label: "Elevation", value: "1,580 ft" },
                { label: "Annual Rainfall", value: "6,000 mm" },
                { label: "Region", value: "Western Ghats" },
              ]}
            />
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.highlights.map((highlight) => (
              <FeatureCard key={highlight} title="" description={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-forest">
                A Pure Agro-Tourism Experience
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-terracotta" />
              <p className="mt-6 leading-relaxed text-muted">
                {site.intro} The place receives an average annual rainfall of 6000
                millimetres. The temperature drops to 20° C during monsoon (June –
                October). In summer, the days are warm (30° – 35°) but it gets cooler
                (25° – 30°) at nights. In winter, the temperature is between 20° C
                and 25° C during the day.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block text-sm font-medium text-terracotta hover:text-terracotta-light"
              >
                Learn more about Gharpi &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PullQuote lines={site.poetry.lines} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nearby Attractions"
            subtitle="Explore the natural and historic wonders surrounding Kannai."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {site.nearbyAttractions.map((attraction) => (
              <FeatureCard
                key={attraction.name}
                title={attraction.name}
                description={attraction.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Discover Kannai" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <QuickLinkCard
              href="/stay"
              title="Stay"
              description="A picturesque cottage built with traditional materials, powered by green energy."
            />
            <QuickLinkCard
              href="/dining"
              title="Dining"
              description="Organic vegetarian and non-vegetarian meals slow-cooked on firewood."
            />
            <QuickLinkCard
              href="/explore"
              title="Explore"
              description="Trails through plantations and four distinct water features."
            />
            <QuickLinkCard
              href="/flora"
              title="Flora"
              description="Coffee, coconut, lemongrass, strawberries, and rare medicinal trees."
            />
            <QuickLinkCard
              href="/fauna"
              title="Fauna"
              description="Peacocks, hornbills, organic poultry, and native wildlife."
            />
            <QuickLinkCard
              href="/sustainability"
              title="Sustainability"
              description="Solar and hydel energy powering the entire property."
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
