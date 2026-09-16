import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/254741205945";

export default function Footer() {
  return (
    <footer className="bg-ink text-papyrus">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold">Kiku Studio</p>
            <p className="mt-3 text-sm leading-relaxed">
              Handmade Mvule &amp; Mahogany furniture — made to order in
              Nairobi, delivered across Kenya.
            </p>
          </div>

          <nav aria-label="Explore">
            <h2 className="font-display text-lg font-semibold">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/collections"
                  className="hover:text-mvule focus-visible:outline-2 focus-visible:outline-mvule"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/custom"
                  className="hover:text-mvule focus-visible:outline-2 focus-visible:outline-mvule"
                >
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-mvule focus-visible:outline-2 focus-visible:outline-mvule"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/showroom"
                  className="hover:text-mvule focus-visible:outline-2 focus-visible:outline-mvule"
                >
                  Showroom
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-semibold">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="tel:+254741205945"
                  className="hover:text-mvule focus-visible:outline-2 focus-visible:outline-mvule"
                >
                  +254 741 205 945
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-mvule focus-visible:outline-2 focus-visible:outline-mvule"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href="mailto:machirashalom@gmail.com"
                  className="hover:text-mvule focus-visible:outline-2 focus-visible:outline-mvule"
                >
                  machirashalom@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Visit</h2>
            <p className="mt-3 text-sm">Getathuru Road, Nairobi, Kenya</p>
            <p className="mt-2 text-sm">
              Visits by appointment — call or WhatsApp to arrange.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-shaving/30 pt-4 text-sm md:flex-row">
          <span>© 2026 Kiku Studio. All rights reserved.</span>
          <span>Crafted in Nairobi</span>
        </div>
      </div>
    </footer>
  );
}
