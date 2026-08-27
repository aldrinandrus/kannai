import type { Metadata } from "next";

import { site } from "@/content/site";

const baseUrl = "https://www.kannaiagrotourism.com";
const { howToReach } = site;

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export function lodgingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Kannai Agro Tourism Centre",
    description:
      "Experience the generosity of nature at a pure agro-tourism centre in Gharpi, Maharashtra.",
    url: baseUrl,
    email: "josekannai@gmail.com",
    telephone: ["+919869504759", "+917588718544", "+918691884759"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gharpi",
      addressLocality: "Sawantwadi",
      addressRegion: "Maharashtra",
      postalCode: howToReach.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: howToReach.coordinates.lat,
      longitude: howToReach.coordinates.lng,
    },
    image: `${baseUrl}/images/brochure/page01_img01.jpg`,
    priceRange: "$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Organic Farm" },
      { "@type": "LocationFeatureSpecification", name: "Solar Power" },
      { "@type": "LocationFeatureSpecification", name: "Restaurant" },
    ],
  };
}

export function touristAttractionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Kannai Agro Tourism Centre",
    description:
      "A multilayered agro-tourism experience in the Western Ghats with organic plantations, trails, and natural water features.",
    url: baseUrl,
    touristType: ["Nature lovers", "Families", "Eco tourists"],
    isAccessibleForFree: false,
  };
}
