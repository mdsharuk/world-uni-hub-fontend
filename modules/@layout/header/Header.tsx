"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Button from "@/modules/@common/Button";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";
import { navItems } from "./navData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeItem =
    navItems.find((item) => item.label === activeMenu) ?? null;

  return (
    <>
      <div className="bg-[#0b0b2b] text-white">
        <div className="container flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-xs sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-white/70">
            Compare leading global university ranking publishers in one place
          </span>
          <Link
            href="/rankings"
            className="font-semibold text-white transition-colors hover:text-accent"
          >
            Explore ranking sources &rarr;
          </Link>
        </div>
      </div>

      <header
        onMouseLeave={() => setActiveMenu(null)}
        className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
          scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/misc/logo.png"
              alt="World Uni Hub"
              width={162}
              height={30}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                onMouseEnter={() =>
                  setActiveMenu(item.columns ? item.label : null)
                }
              >
                <Link
                  href={item.href}
                  data-active={activeMenu === item.label}
                  className="nav-link flex items-center gap-1.5 text-base font-medium text-gray-700"
                >
                  {item.label}
                  {item.columns && (
                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-300 ${
                        activeMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button href="/universities">Find a university</Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="text-2xl text-gray-700 transition-colors hover:text-primary lg:hidden"
          >
            <FaBars />
          </button>
        </div>

        <MegaMenu item={activeItem} />
      </header>

      <MobileDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={navItems}
      />
    </>
  );
}
