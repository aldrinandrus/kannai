import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cream-dark bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full"
              />
              <h3 className="font-serif text-2xl leading-snug font-semibold">
                {site.shortName}
              </h3>
            </Link>
            <p className="mt-3 text-sm text-cream/70">{site.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              {site.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-cream/60">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {site.nav.slice(1, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-cream/60">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-cream">
                  {site.contact.email}
                </a>
              </li>
              {site.contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:+91${phone}`} className="hover:text-cream">
                    +91 {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://${site.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  {site.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            Content and Design:{" "}
            <a
              href={`mailto:${site.contact.designEmail}`}
              className="hover:text-cream/70"
            >
              {site.contact.designCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
