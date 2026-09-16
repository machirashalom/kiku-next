import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/data";

export default function CollectionRows() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
        Explore our hardwood collections
      </h2>
      <p className="mt-2 max-w-xl text-ink/70">
        Handmade pieces crafted from Mvule and Mahogany
      </p>

      <div className="mt-12 space-y-16">
        {categories.map((category, index) => (
          <div
            key={category.slug}
            className="grid items-center gap-8 md:grid-cols-5"
          >
            <Link
              href={`/collections/${category.slug}`}
              className={`relative block h-64 overflow-hidden md:col-span-3 md:h-80 focus-visible:outline-2 focus-visible:outline-upholstery ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={category.image}
                alt={category.blurb}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </Link>
            <div className={`md:col-span-2 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <h3 className="font-display text-2xl font-semibold text-ink">
                {category.name}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                {category.blurb}
              </p>
              <Link
                href={`/collections/${category.slug}`}
                className="mt-4 inline-block border-b-2 border-upholstery pb-0.5 text-upholstery hover:border-mvule hover:text-ink focus-visible:outline-2 focus-visible:outline-upholstery"
              >
                View collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
