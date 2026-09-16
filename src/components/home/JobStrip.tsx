const STEPS = [
  { title: "Choose the wood", note: "Mvule or Mahogany" },
  { title: "Your size", note: "Built to your room" },
  { title: "We build", note: "By hand in Nairobi" },
  { title: "Delivered", note: "Anywhere in Kenya" },
];

export default function JobStrip() {
  return (
    <section aria-label="How an order works">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.title} className="bg-papyrus px-5 py-5">
              <p className="font-display text-lg font-semibold text-ink">
                {step.title}
              </p>
              <p className="mt-1 text-sm text-ink/70">{step.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
