import { faqs } from "@/lib/data";

export default function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
        Frequently asked questions
      </h2>
      <div className="mt-8">
        {faqs.map((faq) => (
          <details key={faq.q} className="border-t border-shaving py-5">
            <summary className="cursor-pointer font-display text-lg font-semibold text-ink focus-visible:outline-2 focus-visible:outline-upholstery">
              {faq.q}
            </summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink/80">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
