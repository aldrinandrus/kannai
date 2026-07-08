import { PageHeader, ContentBlock } from "@/components/ContentBlock";
import { ImageGallery } from "@/components/ImageGallery";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/content/site";
import { images, galleryImages } from "@/content/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Explore",
  description:
    "Walk through scenic trails of orange, coffee, and medicinal plantations. Discover waterfalls, natural pools, and a fish pond.",
  path: "/explore",
});

export default function ExplorePage() {
  const { explore } = site;

  return (
    <>
      <PageHeader
        title="Explore"
        subtitle="Walk and wonder through nature's abundance"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={explore.trails.title}
            description={explore.trails.description}
            image={images.trails}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={explore.water.title}
            description={explore.water.description}
            image={images.waterFeatures}
            reverse
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={explore.waterfall.title}
            description={explore.waterfall.description}
            image={images.waterfall}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages.explore} columns={2} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
