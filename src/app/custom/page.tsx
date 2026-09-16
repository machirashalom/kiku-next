import type { Metadata } from "next";
import Image from "next/image";

import Cta from "@/components/home/Cta";
import EnquiryForm from "@/components/EnquiryForm";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Custom Orders — Kiku Studio",
  description:
    "Your design, built to your size in Mvule or Mahogany. Made to order at our Nairobi workshop, delivered across Kenya.",
};

export default function CustomPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h1 className="font-display text-4xl font-bold text-ink">
          Custom orders
        </h1>
        <p className="mt-2 max-w-xl text-ink/70">
          Your design, built to your size in Mvule or Mahogany
        </p>

        <figure className="mt-10">
          <div className="relative h-64 w-full md:h-96">
            <Image
              src="/images/workshop.jpg"
              alt="Handmade furniture being built at the Kiku Studio workshop in Nairobi"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-ink/70">
            Built by hand in Nairobi
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <h2 className="font-display text-3xl font-bold text-ink">
          How it works
        </h2>
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <h2 className="font-display text-3xl font-bold text-ink">
          Request a custom piece
        </h2>
        <p className="mt-2 max-w-xl text-ink/70">
          Fill in the details below and we&apos;ll get back to you on WhatsApp.
        </p>
        <div className="mt-8">
          <EnquiryForm variant="custom" />
        </div>
      </section>

      <Cta />
    </>
  );
}
