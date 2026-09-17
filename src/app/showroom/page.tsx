import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/asset";

import Cta from "@/components/home/Cta";

export const metadata: Metadata = {
  title: "Showroom — Kiku Studio",
  description:
    "Visit the Kiku Studio showroom on Getathuru Road, Nairobi — see the furniture in person, or message us for photos and prices.",
};

export default function ShowroomPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h1 className="font-display text-4xl font-bold text-ink">
          Visit the showroom
        </h1>
        <p className="mt-2 max-w-xl text-ink/70">
          See the furniture in person — or message us for photos and prices
        </p>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              See the furniture before you order
            </h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Visit the showroom to look at our work, feel the finish and talk
              through your order with us.
            </p>

            <h3 className="mt-8 font-display text-xl font-semibold text-ink">
              Location
            </h3>
            <p className="mt-2 text-ink/80">
              Getathuru Road
              <br />
              Nairobi, Kenya
            </p>
            <p className="mt-1">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Getathuru+Road+Nairobi+Kenya"
                target="_blank"
                rel="noopener"
                className="text-upholstery hover:text-ink focus-visible:outline-2 focus-visible:outline-upholstery"
              >
                Open in Google Maps
              </a>
            </p>

            <h3 className="mt-8 font-display text-xl font-semibold text-ink">
              Opening hours
            </h3>
            <p className="mt-2 text-ink/80">
              Visits by appointment — WhatsApp or call to arrange a time.
            </p>

            <h3 className="mt-8 font-display text-xl font-semibold text-ink">
              Book ahead (recommended)
            </h3>
            <p className="mt-2 text-ink/80">
              Call us: <strong>+254 741 205 945</strong>
            </p>
            <a
              href="https://wa.me/254741205945?text=Hello%20Kiku%20Studio%2C%20I%27d%20like%20to%20book%20a%20showroom%20visit."
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block bg-upholstery px-5 py-3 text-sm font-medium text-papyrus hover:bg-ink focus-visible:outline-2 focus-visible:outline-upholstery"
            >
              Book a visit on WhatsApp
            </a>
          </div>

          <div className="relative h-72 md:h-96">
            <Image
              src={asset("/images/showroom.jpg")}
              alt="The Kiku Studio showroom on Getathuru Road, Nairobi"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
