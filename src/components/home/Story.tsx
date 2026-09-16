import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
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
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Furniture made to order, one piece at a time
          </h2>
          <p className="mt-4 leading-relaxed text-ink/80">
            We build sofa sets, beds, dining sets, TV stands and coffee tables
            from solid Mvule and Mahogany at our workshop in Nairobi. You tell
            us what you want — the size, the design, the finish — and we make
            it for you.
          </p>
          <p className="mt-4 leading-relaxed text-ink/80">
            Visit the showroom on Getathuru Road, or message us on WhatsApp
            with the item and your town for a price.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block bg-ink px-5 py-3 text-sm font-medium text-papyrus hover:bg-upholstery focus-visible:outline-2 focus-visible:outline-upholstery"
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  );
}
