import { site } from "@/content/site";

const { howToReach } = site;
const { lat, lng } = howToReach.coordinates;
const label = encodeURIComponent("Kannai Agro Tourism Centre, Gharpi");

/** Embedded map centred on Gharpi village (Kannai Agro Tourism Centre). */
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}%20(${label})&hl=en&z=15&output=embed`;

/** Turn-by-turn directions to the property. */
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

/** Open the property location in Google Maps (share link from owner). */
export const mapsSearchUrl =
  howToReach.mapsShareUrl ??
  `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
