import { site } from "@/content/site";

export function getWhatsAppUrl(
  message: string = site.contact.whatsappMessage,
  phone: string = site.contact.whatsapp,
) {
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}
