import { site } from "@/content/site";

export function getWhatsAppUrl(message = site.contact.whatsappMessage) {
  const phone = `91${site.contact.whatsapp}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
