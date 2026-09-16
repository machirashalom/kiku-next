const WHATSAPP_IDEA =
  "https://wa.me/254741205945?text=Hello%20Kiku%20Studio%2C%20I%20have%20a%20piece%20in%20mind...";

export default function Cta() {
  return (
    <section className="bg-ink py-16 text-papyrus">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Have a piece in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-papyrus/85">
          Send us your idea, dimensions, or a reference photo. We&apos;ll help
          you turn it into a handcrafted Mvule or Mahogany piece.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_IDEA}
            target="_blank"
            rel="noopener"
            className="bg-upholstery px-6 py-3 text-sm font-medium text-papyrus hover:bg-papyrus hover:text-ink focus-visible:outline-2 focus-visible:outline-papyrus"
          >
            WhatsApp us
          </a>
          <a
            href="tel:+254741205945"
            className="border border-shaving px-6 py-3 text-sm font-medium text-papyrus hover:bg-upholstery focus-visible:outline-2 focus-visible:outline-papyrus"
          >
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
