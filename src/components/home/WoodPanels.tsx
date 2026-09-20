import Image from "next/image";
import { asset } from "@/lib/asset";

const WOODS = [
  {
    name: "Mvule",
    image: asset("/images/wood-mvule.jpg"),
    alt: "Mvule hardwood — L-shaped sofa with visible grain",
    copy: "Known for its strength, rich grain and long-lasting durability. Ideal for statement pieces that withstand daily use — beds, sofas and dining tables.",
  },
  {
    name: "Mahogany",
    image: asset("/images/wood-mahogany.jpg"),
    alt: "Mahogany hardwood grain",
    copy: "Elegant, smooth and timeless. Mahogany brings warmth and a premium finish to sofas, beds, TV stands and coffee tables.",
  },
];

export default function WoodPanels() {
  return (
    <section className="bg-ink py-16 text-papyrus">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Why Mvule and Mahogany?
        </h2>
        <p className="mt-2 max-w-xl text-papyrus/80">
          Two of the strongest, most beautiful hardwoods — for furniture that
          lasts generations
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2">
        {WOODS.map((wood) => (
          <div key={wood.name} className="relative h-96">
            <Image
              src={wood.image}
              alt={wood.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-ink/80 px-6 py-5">
              <h3 className="font-display text-2xl font-semibold">
                {wood.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-papyrus">
                {wood.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
