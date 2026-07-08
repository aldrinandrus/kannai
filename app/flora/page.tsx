import { PageHeader } from "@/components/ContentBlock";
import { PlantationSection } from "@/components/PlantationSection";
import { ImageGallery } from "@/components/ImageGallery";
import { CTABanner } from "@/components/CTABanner";
import { floraOverview, plantations } from "@/content/flora";
import { galleryImages } from "@/content/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Flora",
  description:
    "Explore organic plantations of coconut, lemongrass, coffee, strawberries, orange, pineapple, and rare medicinal trees at Kannai.",
  path: "/flora",
});

export default function FloraPage() {
  return (
    <>
      <PageHeader
        title={floraOverview.title}
        subtitle="A wonder of vegetation in one place"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-muted">{floraOverview.intro}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages.flora} columns={3} />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {plantations.map((plantation, index) => (
            <PlantationSection
              key={plantation.id}
              title={plantation.title}
              description={plantation.description}
              image={plantation.image}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
