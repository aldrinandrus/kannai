import Image from "next/image";
import { PageHeader, ContentBlock } from "@/components/ContentBlock";
import { PlantationSection } from "@/components/PlantationSection";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import {
  faunaOverview,
  faunaSections,
  birds,
  wildlife,
  domesticAnimals,
} from "@/content/fauna";
import { images } from "@/content/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Fauna",
  description:
    "Discover diverse wildlife at Kannai — peacocks, hornbills, organic poultry, goats, and native animals of the Western Ghats.",
  path: "/fauna",
});

export default function FaunaPage() {
  return (
    <>
      <PageHeader
        title={faunaOverview.title}
        subtitle="A rich and diverse ecosystem"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title="Wildlife & Birds"
            description={[faunaOverview.intro, faunaOverview.wildlife]}
            image={faunaOverview.image}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Birds You May Spot" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {birds.map((bird) => (
              <span
                key={bird}
                className="rounded-full bg-sage/10 px-4 py-2 text-sm font-medium text-sage"
              >
                {bird}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl leading-snug font-semibold text-forest">
                Native Wildlife
              </h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-terracotta" />
              <div className="mt-6 flex flex-wrap gap-3">
                {wildlife.map((animal) => (
                  <span
                    key={animal}
                    className="rounded-full bg-forest/10 px-4 py-2 text-sm font-medium text-forest"
                  >
                    {animal}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl leading-snug font-semibold text-forest">
                On the Property
              </h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-terracotta" />
              <div className="mt-6 flex flex-wrap gap-3">
                {domesticAnimals.map((animal) => (
                  <span
                    key={animal}
                    className="rounded-full bg-terracotta/10 px-4 py-2 text-sm font-medium text-terracotta"
                  >
                    {animal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <div className="grid h-full grid-cols-2">
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={images.poultry.src}
                    alt={images.poultry.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 17vw"
                  />
                </div>
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={images.poultryRooster.src}
                    alt={images.poultryRooster.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 17vw"
                  />
                </div>
              </div>
            </div>

            {[images.goats, images.cows, images.turtle].map((img) => (
              <div
                key={img.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {faunaSections.map((section, index) => (
            <PlantationSection
              key={section.id}
              title={section.title}
              description={section.description}
              image={section.image}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
