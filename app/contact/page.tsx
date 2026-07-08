import { PageHeader } from "@/components/ContentBlock";
import { site } from "@/content/site";
import { mapsEmbedUrl } from "@/lib/maps";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Kannai Agro Tourism Centre to plan your visit. Email josekannai@gmail.com or call 9869504759.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We would love to hear from you"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-forest">
            Get in Touch
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-terracotta" />
          <p className="mt-6 leading-relaxed text-muted">
            For bookings, travel arrangements, or any questions about your visit,
            please reach out. We can arrange travel from Sawantwadi for our
            guests.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
                Email
              </h3>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-1 block text-lg text-forest hover:text-terracotta"
              >
                {site.contact.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
                Phone
              </h3>
              {site.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="mt-1 block text-lg text-forest hover:text-terracotta"
                >
                  +91 {phone}
                </a>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
                WhatsApp
              </h3>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-2.5 text-white transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span className="text-lg font-medium">+91 {site.contact.whatsapp}</span>
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
                Website
              </h3>
              <a
                href={`https://${site.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg text-forest hover:text-terracotta"
              >
                {site.contact.website}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
                Location
              </h3>
              <p className="mt-1 text-lg text-forest">{site.howToReach.address}</p>
              <p className="mt-1 text-sm text-muted">{site.howToReach.landmark}</p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-cream-dark shadow-sm">
            <iframe
              title={`Map — ${site.howToReach.mapsQuery}`}
              src={mapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
