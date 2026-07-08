import { PageHeader, ContentBlock } from "@/components/ContentBlock";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sustainability",
  description:
    "Kannai runs on solar and hydel green energy. Organic farming, natural spring water, and traditional building materials preserve the Western Ghats.",
  path: "/sustainability",
});

export default function SustainabilityPage() {
  const { sustainability } = site;

  return (
    <>
      <PageHeader
        title={sustainability.title}
        subtitle="Enjoying nature's luxuries without interference"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title="Our Commitment"
            description={sustainability.description}
            image={images.solar}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Green Practices" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sustainability.features.map((feature) => (
              <FeatureCard key={feature} title="" description={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="rounded-2xl border border-cream-dark bg-white p-10 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-forest">
              Natural Spring Water
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We use natural spring water with PPM not exceeding 5.5 for drinking,
              cooking and cleaning — a testament to the purity of our environment.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
