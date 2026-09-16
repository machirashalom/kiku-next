import type { Metadata } from "next";
import { Zilla_Slab, Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-zilla",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
});

const SITE_BASE = `https://machirashalom.github.io${
  process.env.NEXT_PUBLIC_BASE_PATH || "/kiku"
}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE),
  title: "Kiku Studio — Handmade Mvule & Mahogany Furniture, Nairobi",
  description:
    "Handmade Mvule and Mahogany furniture built to order in Nairobi — sofa sets, beds, dining sets, TV stands and coffee tables. Delivered across Kenya. Get a price on WhatsApp.",
  openGraph: {
    type: "website",
    siteName: "Kiku Studio",
    title: "Kiku Studio — Handmade Mvule & Mahogany Furniture, Nairobi",
    description:
      "Handmade Mvule and Mahogany furniture built to order in Nairobi. Delivered across Kenya. Get a price on WhatsApp.",
    images: ["/images/og-share.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Kiku Studio",
  description:
    "Handmade Mvule and Mahogany furniture, built to order in Nairobi and delivered across Kenya.",
  url: "https://machirashalom.github.io/kiku/",
  telephone: "+254741205945",
  email: "machirashalom@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Getathuru Road",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${zilla.variable} ${archivo.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="pb-14 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
