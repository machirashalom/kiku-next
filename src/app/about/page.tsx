import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Cta from "@/components/home/Cta";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "About — Kiku Studio",
  description:
    "Kiku Studio builds handmade Mvule and Mahogany furniture to order at our Nairobi workshop and delivers across Kenya.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-72 md:h-96">
            <Image
              src="/images/workshop.jpg"
              alt="Inside the Kiku Studio workshop in Nairobi"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="font-display text-4xl font-bold text-ink">
              Our story
            </h1>
            <p className="mt-4 leading-relaxed text-ink/80">
              Kiku Studio builds handmade Mvule and Mahogany furniture to order
              at our Nairobi workshop — sofas, beds, dining sets, TV stands and
              coffee tables — and delivers across Kenya. We confirm price and
              delivery on WhatsApp before you order. Visit us on Getathuru Road
              to see pieces in person.
            </p>
            <Link
              href="/custom"
              className="mt-6 inline-block bg-ink px-5 py-3 text-sm font-medium text-papyrus hover:bg-upholstery focus-visible:outline-2 focus-visible:outline-upholstery"
            >
              Order a custom piece
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <h2 className="font-display text-3xl font-bold text-ink">
          How ordering works
        </h2>
        <ProcessSteps />
      </section>

      <Cta />
    </>
  );
}
