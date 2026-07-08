import { PageHeader, ContentBlock } from "@/components/ContentBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Gharpi village in the Western Ghats — rich fertile soil, organic farming, and pristine agro-tourism at Kannai.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Gharpi"
        subtitle="Where pristine nature meets organic living in the Western Ghats"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title="Our Story"
            description={[site.intro, site.about.philosophy]}
            image={images.about}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Climate & Environment"
            subtitle="Gharpi's unique geography creates a paradise of biodiversity."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {site.climate.seasons.map((season) => (
              <FeatureCard
                key={season.name}
                title={`${season.name} (${season.period})`}
                description={season.temperature}
              />
            ))}
          </div>
          <p className="mt-8 text-center text-muted">
            Elevation: {site.climate.elevation} &middot; {site.climate.rainfall}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title="The Landscape"
            description={site.about.description}
            image={images.landscape}
            reverse
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Makes Us Special" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {site.highlights.map((highlight) => (
              <FeatureCard key={highlight} title="" description={highlight} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
