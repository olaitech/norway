import Link from "next/link";

const exploreLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Routes", href: "/routes" },
  { label: "Journal", href: "/journal" },
  { label: "Map", href: "/map" },
  { label: "Responsible travel", href: "/responsible-travel" },
] as const;

const guideLinks = [
  { label: "Best time to visit Norway", href: "/best-time-to-visit-norway" },
  { label: "Norway road trip routes", href: "/norway-road-trip-routes" },
  { label: "Lofoten travel guide", href: "/lofoten-travel-guide" },
  { label: "Northern lights in Norway", href: "/northern-lights-norway" },
  { label: "Fjords of Norway", href: "/fjords-of-norway" },
] as const;

const informationLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Cookie settings", href: "/privacy-settings" },
  { label: "Terms", href: "/terms" },
] as const;

type FooterColumnProps = {
  title: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={title}>
      <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#b79b63]">
        {title}
      </h2>
      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-light text-[#a8a095] transition-colors duration-300 hover:text-[#f1ede3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79b63]/50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#050706] text-[#f1ede3]"
      aria-labelledby="site-footer-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(183,155,99,0.055),rgba(5,7,6,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(183,155,99,0.08),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(126,176,192,0.06),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b79b63]/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-14 sm:px-8 sm:pt-14 sm:pb-16 md:px-12 lg:pt-16 lg:pb-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.75fr_0.95fr_0.75fr] lg:gap-14">
          <div className="max-w-md">
            <h2
              id="site-footer-title"
              className="font-serif text-4xl font-normal tracking-[-0.045em] text-[#f1ede3]"
            >
              Norway
            </h2>
            <p className="mt-5 text-sm font-light leading-7 text-[#a8a095] sm:text-base">
              A cinematic travel knowledge portal for Norway&apos;s quiet
              roads, dramatic fjords, northern light skies and remote coastal
              places worth slowing down for.
            </p>
            <p className="mt-6 border-l border-[#b79b63]/45 pl-4 text-xs font-light uppercase tracking-[0.22em] text-[#b79b63]/85">
              Built as an independent editorial travel guide.
            </p>
          </div>

          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Guides" links={guideLinks} />
          <FooterColumn title="Information" links={informationLinks} />
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.08] pt-7 text-xs font-light text-[#a8a095] sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 sm:space-y-0">
            <p>
              &copy; {currentYear} Norway Travel Knowledge Portal. All rights
              reserved.
            </p>
            <p className="text-[#a8a095]/75">
              Independent travel knowledge portal.
            </p>
          </div>

          <Link
            href="#top"
            className="inline-flex w-fit items-center rounded-full border border-white/[0.1] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f1ede3]/78 transition-colors duration-300 hover:border-[#b79b63]/45 hover:text-[#f1ede3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79b63]/50"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
