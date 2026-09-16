import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section aria-label="Customer testimonials" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
        What customers say
      </h2>
      <p className="mt-2 max-w-xl text-ink/70">
        Homes across Kenya, furnished with handmade hardwood
      </p>
      <div className="mt-8">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="border-t border-shaving py-6"
          >
            <blockquote className="max-w-3xl leading-relaxed text-ink/90">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-2 text-sm text-ink/70">
              {testimonial.name}, {testimonial.town}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
