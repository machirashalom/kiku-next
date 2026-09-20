import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import SpecPlate from "@/components/SpecPlate";
import { categories, products } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((category) => ({ cat: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/collections/[cat]">): Promise<Metadata> {
  const { cat } = await params;
  const category = categories.find((entry) => entry.slug === cat);
  if (!category) return { title: "Not found — Kiku Studio" };
  return {
    title: `${category.name} — Kiku Studio`,
    description: category.blurb,
    alternates: { canonical: "./" },
  };
}

export default async function CategoryPage({
  params,
}: PageProps<"/collections/[cat]">) {
  const { cat } = await params;
  const category = categories.find((entry) => entry.slug === cat);
  if (!category) notFound();

  const items = products.filter((product) => product.category === cat);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <Link
        href="/collections"
        className="text-sm text-upholstery hover:text-ink focus-visible:outline-2 focus-visible:outline-upholstery"
      >
        All collections
      </Link>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">
        {category.name}
      </h1>
      <p className="mt-2 max-w-xl text-ink/70">{category.blurb}</p>

      <div className="mt-10 space-y-14">
        {items.map((product) => (
          <article key={product.slug} className="grid gap-6 md:grid-cols-2">
            <Link
              href={`/product/${product.slug}`}
              className="relative block h-64 focus-visible:outline-2 focus-visible:outline-upholstery md:h-72"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Link>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {product.name}
              </h2>
              <p className="mt-2 leading-relaxed text-ink/80">
                {product.description}
              </p>
              <div className="mt-4">
                <SpecPlate
                  item={product.name}
                  wood={product.wood}
                  sizes={product.sizes}
                  leadTime={product.leadTime}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/254741205945?text=${encodeURIComponent(
                    `Hello Kiku Studio, I'm interested in the ${product.name}. My town is: `
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="bg-upholstery px-5 py-3 text-sm font-medium text-papyrus hover:bg-ink focus-visible:outline-2 focus-visible:outline-upholstery"
                >
                  Get the price on WhatsApp
                </a>
                <Link
                  href={`/product/${product.slug}`}
                  className="border border-ink px-5 py-3 text-sm font-medium text-ink hover:bg-ink hover:text-papyrus focus-visible:outline-2 focus-visible:outline-upholstery"
                >
                  View details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
