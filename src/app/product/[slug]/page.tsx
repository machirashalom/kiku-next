import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import SpecPlate from "@/components/SpecPlate";
import { categories, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);
  if (!product) return { title: "Not found — Kiku Studio" };
  return {
    title: `${product.name} — Kiku Studio`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);
  if (!product) notFound();

  const category = categories.find((entry) => entry.slug === product.category);
  const siblings = products
    .filter(
      (entry) => entry.category === product.category && entry.slug !== slug
    )
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <Link
        href={`/collections/${product.category}`}
        className="text-sm text-upholstery hover:text-ink focus-visible:outline-2 focus-visible:outline-upholstery"
      >
        {category ? category.name : "Collections"}
      </Link>

      <div className="mt-4 grid gap-10 md:grid-cols-2">
        <div className="relative h-80 md:h-[28rem]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-4xl font-bold text-ink">
            {product.name}
          </h1>
          <p className="mt-4 leading-relaxed text-ink/80">
            {product.description}
          </p>

          <div className="mt-6">
            <SpecPlate
              item={product.name}
              wood={product.wood}
              sizes={product.sizes}
              leadTime={product.leadTime}
            />
          </div>

          <a
            href={`https://wa.me/254741205945?text=${encodeURIComponent(
              `Hello Kiku Studio, I'd like a price for the ${product.name}. My town is: `
            )}`}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-block bg-upholstery px-6 py-3 text-sm font-medium text-papyrus hover:bg-ink focus-visible:outline-2 focus-visible:outline-upholstery"
          >
            Get the price on WhatsApp
          </a>
        </div>
      </div>

      {siblings.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Also in this collection
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {siblings.map((sibling) => (
              <Link
                key={sibling.slug}
                href={`/product/${sibling.slug}`}
                className="group focus-visible:outline-2 focus-visible:outline-upholstery"
              >
                <div className="relative h-48">
                  <Image
                    src={sibling.image}
                    alt={sibling.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-upholstery">
                  {sibling.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
