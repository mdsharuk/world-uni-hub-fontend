import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const columns = [
  {
    title: "Discover",
    links: [
      { label: "Universities", href: "/universities" },
      { label: "Programs", href: "/programs" },
      { label: "Destinations", href: "/destinations" },
      { label: "Scholarships", href: "/scholarships" },
    ],
  },
  {
    title: "Rankings",
    links: [
      { label: "QS", href: "/rankings/qs" },
      { label: "Times Higher Education", href: "/rankings/the" },
      { label: "ShanghaiRanking", href: "/rankings/arwu" },
      { label: "U.S. News", href: "/rankings/us-news" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Study guides", href: "/guides" },
      { label: "Compare universities", href: "/compare" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socials = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/misc/logo.png"
                alt="World University Hub"
                width={162}
                height={30}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-gray-500">
              Independent university discovery and ranking comparison for
              clearer global study decisions.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-hover text-sm text-gray-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {year} World University Hub
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="link-hover text-sm text-gray-500"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="link-hover text-sm text-gray-500"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

