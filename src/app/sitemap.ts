import type { MetadataRoute } from "next";

import { categories, products } from "@/lib/data";

export const dynamic = "force-static";

const BASE = `https://machirashalom.github.io${
  process.env.NEXT_PUBLIC_BASE_PATH || "/kiku"
}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/collections",
    "/custom",
    "/about",
    "/showroom",
    "/contact",
  ].map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${BASE}/collections/${category.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${BASE}/product/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
