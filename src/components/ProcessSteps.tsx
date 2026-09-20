const STEPS = [
  {
    number: "1",
    title: "Tell us what you need",
    copy: "Send us the design, dimensions and a photo of what you have in mind.",
  },
  {
    number: "2",
    title: "We confirm the price",
    copy: "We reply on WhatsApp with the price and delivery quote for your town — before you order.",
  },
  {
    number: "3",
    title: "We build it",
    copy: "Your piece is made to order at our Nairobi workshop. We confirm the build time when you order.",
  },
  {
    number: "4",
    title: "Delivered to your door",
    copy: "Delivery across Kenya — cost and time confirmed for your destination.",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="mt-8 grid gap-px border border-mvule bg-mvule sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step) => (
        <li key={step.number} className="bg-papyrus px-5 py-6">
          <p aria-hidden="true" className="font-display text-2xl font-bold text-ink/60">
            {step.number}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">
            {step.copy}
          </p>
        </li>
      ))}
    </ol>
  );
}
