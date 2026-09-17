import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:px-6">
      <h1 className="font-display text-6xl font-bold text-ink">404</h1>
      <p className="mt-4 max-w-md text-ink/70">
        Sorry — this page doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 bg-ink px-6 py-3 text-sm font-medium text-papyrus hover:bg-upholstery focus-visible:outline-2 focus-visible:outline-upholstery"
      >
        Back to home
      </Link>
    </section>
  );
}
