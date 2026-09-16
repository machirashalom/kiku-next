type SpecPlateProps = {
  item: string;
  wood: string;
  sizes: string;
  leadTime: string;
};

const FIELDS: { key: keyof SpecPlateProps; label: string }[] = [
  { key: "item", label: "Item" },
  { key: "wood", label: "Wood" },
  { key: "sizes", label: "Size" },
  { key: "leadTime", label: "Lead time" },
];

export default function SpecPlate({
  item,
  wood,
  sizes,
  leadTime,
}: SpecPlateProps) {
  const values: Record<keyof SpecPlateProps, string> = {
    item,
    wood,
    sizes,
    leadTime,
  };

  return (
    <dl className="grid grid-cols-2 gap-px border border-ink bg-ink md:grid-cols-4">
      {FIELDS.map((field) => (
        <div key={field.key} className="bg-papyrus px-4 py-3">
          <dt className="text-xs text-ink/70">{field.label}</dt>
          <dd className="mt-1 font-display text-base font-semibold text-ink">
            {values[field.key]}
          </dd>
        </div>
      ))}
      <div className="col-span-2 flex items-center justify-between bg-papyrus px-4 py-3 md:col-span-4">
        <span className="text-sm text-ink/70">Price</span>
        <span className="font-display text-base font-semibold text-upholstery">
          Confirmed on WhatsApp
        </span>
      </div>
    </dl>
  );
}
