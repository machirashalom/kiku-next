import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collections — Kiku Studio",
  description:
    "Handmade Mvule and Mahogany furniture: sofa sets, beds, dining sets, TV stands and coffee tables. Built to order in Nairobi.",
  alternates: { canonical: "./" },
};


export default function CollectionsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <h1 className="font-display text-4xl font-bold text-ink">
        Collections
      </h1>
      <p className="mt-2 max-w-xl text-ink/70">
        Handmade pieces crafted from Mvule and Mahogany
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/collections/${category.slug}`}
            className="group relative block h-72 overflow-hidden focus-visible:outline-2 focus-visible:outline-upholstery"
          >
            <Image
              src={category.image}
              alt={category.blurb}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-ink/90 px-5 py-4">
              <h2 className="font-display text-xl font-semibold text-papyrus">
                {category.name}
              </h2>
              <p className="mt-1 text-sm text-papyrus/80">{category.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
