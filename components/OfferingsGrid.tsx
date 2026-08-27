import { amenityIcons } from "@/components/AmenityIcons";
import { site } from "@/content/site";

export function OfferingsGrid() {
  const { offerings } = site;

  return (
    <section
      id="offerings"
      className="border-b border-cream-dark bg-cream py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-xl bg-forest px-7 py-3 font-sans text-lg font-bold tracking-wide text-cream uppercase sm:text-xl">
            {offerings.heading}
          </span>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {offerings.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center px-2 text-center"
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-forest shadow-sm">
                {amenityIcons[item.id]}
              </span>
              <h3 className="mt-5 max-w-[16rem] font-serif text-[0.95rem] leading-snug font-semibold tracking-wide text-forest uppercase">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center font-serif text-xl leading-snug italic text-forest sm:text-2xl">
          {offerings.promise}
        </p>
        <p className="mt-3 text-center text-sm font-medium tracking-wide text-muted">
          {offerings.bookingNote}
        </p>
      </div>
    </section>
  );
}
