import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/asset";

import Cta from "@/components/home/Cta";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact — Kiku Studio",
  description:
    "WhatsApp, phone or email — we reply with prices and delivery quotes.",
};

const WHATSAPP_URL = "https://wa.me/254741205945";

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h1 className="font-display text-4xl font-bold text-ink">
          Get in touch
        </h1>
        <p className="mt-2 max-w-xl text-ink/70">
          WhatsApp, phone or email — we reply with prices and delivery quotes
        </p>

        <div className="mt-10 grid gap-px border border-ink bg-ink sm:grid-cols-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="bg-papyrus px-5 py-6 hover:bg-shaving focus-visible:outline-2 focus-visible:outline-upholstery"
          >
            <h2 className="font-display text-xl font-semibold text-ink">
              WhatsApp
            </h2>
            <p className="mt-1 text-sm text-ink/70">
              Prices and delivery quotes
            </p>
            <p className="mt-2 text-sm font-medium text-upholstery">
              +254 741 205 945
            </p>
          </a>
          <a
            href="tel:+254741205945"
            className="bg-papyrus px-5 py-6 hover:bg-shaving focus-visible:outline-2 focus-visible:outline-upholstery"
          >
            <h2 className="font-display text-xl font-semibold text-ink">
              Phone call
            </h2>
            <p className="mt-1 text-sm text-ink/70">Speak to our team</p>
            <p className="mt-2 text-sm font-medium text-upholstery">
              +254 741 205 945
            </p>
          </a>
          <a
            href="mailto:machirashalom@gmail.com"
            className="bg-papyrus px-5 py-6 hover:bg-shaving focus-visible:outline-2 focus-visible:outline-upholstery"
          >
            <h2 className="font-display text-xl font-semibold text-ink">
              Email
            </h2>
            <p className="mt-1 text-sm text-ink/70">Send us a message</p>
            <p className="mt-2 text-sm font-medium text-upholstery">
              machirashalom@gmail.com
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-72 md:h-96">
            <Image
              src={asset("/images/showroom.jpg")}
              alt="Kiku Studio showroom on Getathuru Road, Nairobi"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              Solid hardwood, made to order
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Message us with the item and your town — we confirm price and
              delivery on WhatsApp before you order. Visit the showroom on
              Getathuru Road to see pieces in person.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <h2 className="font-display text-3xl font-bold text-ink">
          Tell us what you want built
        </h2>
        <p className="mt-2 max-w-xl text-ink/70">
          Tell us what you need and where you are — we&apos;ll reply on
          WhatsApp with the price and delivery quote.
        </p>
        <div className="mt-8">
          <EnquiryForm variant="contact" />
        </div>
      </section>

      <Cta />
    </>
  );
}
