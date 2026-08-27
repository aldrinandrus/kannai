import { PageHeader, ContentBlock, PullQuote } from "@/components/ContentBlock";
import { ImageGallery } from "@/components/ImageGallery";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/content/site";
import { images, galleryImages } from "@/content/images";
import { createMetadata, lodgingJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Stay",
  description:
    "Stay in a picturesque cottage built with laterite stones and terracotta tiles. Solar and hydel powered luxury in the Western Ghats.",
  path: "/stay",
});

export default function StayPage() {
  const { stay } = site;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd()) }}
      />

      <PageHeader
        title="Stay With Us"
        subtitle="A picturesque human nest in the midst of unmatchable beauty"
      />

      <section className="pt-16 pb-8 sm:pt-20 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={stay.cottage.title}
            description={stay.cottage.description}
            image={images.cottage}
          />
        </div>
      </section>

      <PullQuote lines={site.poetry.lines} />

      <section className="bg-white pt-8 pb-16 sm:pt-10 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={stay.bedroom.title}
            description={[stay.bedroom.description, ...stay.bedroom.features]}
            image={images.bedroom}
            reverse
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={stay.digitalDetox.title}
            description={stay.digitalDetox.description}
            image={images.digitalDetox}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title={stay.washrooms.title}
            description={stay.washrooms.description}
            image={images.washroom}
            reverse
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ImageGallery images={galleryImages.stay} columns={2} />
        </div>
      </section>

      <CTABanner
        title="Book Your Stay"
        description="Counselling, farm tours, meditation, and farm-fresh meals are included. Book your stay in advance."
      />
    </>
  );
}
