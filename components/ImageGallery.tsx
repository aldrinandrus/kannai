import Image from "next/image";

interface ImageGalleryProps {
  images: readonly { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-4 ${colClass}`}>
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`relative overflow-hidden rounded-xl shadow-md ${
            i === 0 && columns === 3 ? "sm:col-span-2 sm:row-span-2 aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
