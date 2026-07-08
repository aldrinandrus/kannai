import Image from "next/image";

interface PlantationSectionProps {
  title: string;
  description: string;
  image: { src: string; alt: string };
  reverse?: boolean;
}

export function PlantationSection({
  title,
  description,
  image,
  reverse = false,
}: PlantationSectionProps) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-semibold text-forest sm:text-3xl">
          {title}
        </h3>
        <div className="mt-3 h-1 w-12 rounded-full bg-terracotta" />
        <p className="mt-6 leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
