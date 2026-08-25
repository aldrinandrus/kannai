import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kannaiagrotourism.com"),
  title: {
    default: `${site.name} | ${site.location}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.tagline,
  icons: {
    icon: [
      { url: "/kannai-favicon-v3.ico", sizes: "any" },
      { url: "/favicon.ico?v=3", sizes: "48x48", type: "image/x-icon" },
      { url: "/logo.png?v=3", type: "image/png" },
    ],
    shortcut: "/kannai-favicon-v3.ico",
    apple: "/logo.png?v=3",
  },
  keywords: [
    "agro tourism",
    "Gharpi",
    "Maharashtra",
    "Western Ghats",
    "organic farm stay",
    "Konkan",
    "Sawantwadi",
    "eco tourism",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: site.name,
    description: site.tagline,
    images: [{ url: "/logo.png", alt: site.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
