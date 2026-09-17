import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

const WHATSAPP_QUOTE =
  "https://wa.me/254741205945?text=Hello%20Kiku%20Studio%2C%20I%27d%20like%20a%20price%20and%20delivery%20quote.%20My%20town%20is%3A%20";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] min-h-[480px] w-full">
        <Image
          src={asset("/images/hero.jpg")}
          alt="Handmade hardwood furniture crafted by Kiku Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="hero-reveal absolute bottom-0 left-0 max-w-2xl bg-ink px-6 py-8 text-papyrus md:px-10 md:py-10">
        <h1 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Handmade Mvule &amp; Mahogany furniture, built to order in Nairobi
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed md:text-base">
          Custom sofas, beds, dining sets, TV stands and coffee tables crafted
          from premium hardwood. Delivered across Kenya — prices confirmed on
          WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/collections"
            className="bg-papyrus px-5 py-3 text-sm font-medium text-ink hover:bg-shaving focus-visible:outline-2 focus-visible:outline-papyrus"
          >
            Explore the collections
          </Link>
          <a
            href={WHATSAPP_QUOTE}
            target="_blank"
            rel="noopener"
            className="border border-shaving px-5 py-3 text-sm font-medium text-papyrus hover:bg-upholstery focus-visible:outline-2 focus-visible:outline-papyrus"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
