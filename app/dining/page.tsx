import { PageHeader, ContentBlock } from "@/components/ContentBlock";
import { ImageGallery } from "@/components/ImageGallery";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/content/site";
import { images, galleryImages } from "@/content/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dining",
  description:
    "Enjoy delicious organic vegetarian and non-vegetarian meals slow-cooked on firewood. Fresh seasonal fruit juices at our open breezy restaurant.",
  path: "/dining",
});

export default function DiningPage() {
  const { dining } = site;

  return (
    <>
      <PageHeader
        title="Dining"
        subtitle="Delicious and healthy meals prepared with love"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={dining.title}
            description={[dining.description, ...dining.details]}
            image={images.restaurant}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages.dining} columns={2} />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="rounded-2xl bg-forest p-10 text-cream">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              The Organic Kitchen
            </h2>
            <p className="mt-4 leading-relaxed text-cream/80">
              Ingredients primarily grown on the property. Slow-cooked on firewood
              in brass, bronze and copper utensils. Fresh fruit juices from
              organically grown seasonal fruits.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
