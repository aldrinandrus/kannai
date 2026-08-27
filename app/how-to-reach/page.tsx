import { PageHeader, ContentBlock } from "@/components/ContentBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { mapsDirectionsUrl, mapsEmbedUrl, mapsSearchUrl } from "@/lib/maps";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How to Reach",
  description:
    "Directions to Kannai Agro Tourism Centre in Gharpi via Sawantwadi. Nearest airports, trains, and buses from Mumbai, Pune, and Goa.",
  path: "/how-to-reach",
});

export default function HowToReachPage() {
  const { howToReach, contact } = site;
  const primaryPhone = contact.phones[0];

  return (
    <>
      <PageHeader
        title="How to Reach"
        subtitle={`${howToReach.driveTime} from ${howToReach.hub}`}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContentBlock
            title="Getting Here"
            description={[
              howToReach.intro,
              howToReach.rail,
              howToReach.bus,
              howToReach.transport,
            ]}
            image={images.howToReach}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nearest Airports"
            subtitle="We can arrange pickup from these airports."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {howToReach.pickup.airports.map((airport) => (
              <FeatureCard
                key={airport.name}
                title={airport.name}
                description={`${airport.distance} · ${airport.time}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Railway Stations"
            subtitle="Typical distance and travel time to Kannai."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howToReach.pickup.stations.map((station) => (
              <FeatureCard
                key={station.name}
                title={station.name}
                description={`${station.distance} · ${station.time}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bus Stops"
            subtitle="We can arrange travel from these bus stops as well."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howToReach.pickup.busStops.map((stop) => (
              <FeatureCard
                key={stop.name}
                title={stop.name}
                description={`${stop.distance} · ${stop.time}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Travel Hub: Sawantwadi" />
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
            <p className="text-lg text-muted">
              Sawantwadi is a charming Konkan town that serves as the central hub
              for reaching Gharpi. Whether you arrive by air, rail, or road,
              Sawantwadi is just an hour away from our tourism centre.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-forest p-6 text-cream">
                <h3 className="font-serif text-xl leading-snug font-semibold">By Train</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/85">{howToReach.rail}</p>
              </div>
              <div className="rounded-2xl bg-forest p-6 text-cream">
                <h3 className="font-serif text-xl leading-snug font-semibold">By Bus</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/85">{howToReach.bus}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Directions to Gharpi"
            subtitle="Open Google Maps for turn-by-turn directions, or call us to arrange pickup from Sawantwadi."
          />
          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-terracotta px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-light"
            >
              Get Directions on Google Maps
            </a>
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-forest/20 px-8 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest/5"
            >
              View on Map
            </a>
            <a
              href={`tel:+91${primaryPhone}`}
              className="rounded-full border border-forest/20 px-8 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest/5"
            >
              Call for Pickup — +91 {primaryPhone}
            </a>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-cream-dark shadow-sm">
            <iframe
              title={`Map — ${howToReach.mapsQuery}`}
              src={mapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            {howToReach.address}
            <br />
            {howToReach.landmark} · {howToReach.driveTime}
          </p>
        </div>
      </section>

      <CTABanner
        title="Need Help Planning?"
        description="Contact us to arrange pickup from nearby airports, stations, or bus stops."
        secondaryHref={mapsDirectionsUrl}
        secondaryLabel="Get Directions"
        secondaryExternal
      />
    </>
  );
}
