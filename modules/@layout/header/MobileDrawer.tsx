"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import Button from "@/modules/@common/Button";
import type { NavItem } from "./navData";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}

export default function MobileDrawer({
  open,
  onClose,
  items,
}: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85%] flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <span className="text-lg font-semibold text-primary">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-xl text-gray-600 transition-colors hover:text-primary"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {items.map((item) => {
            const isOpen = expanded === item.label;
            return (
              <div
                key={item.href}
                className="border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex-1 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      aria-label={`Toggle ${item.label}`}
                      aria-expanded={isOpen}
                      className="p-2 text-xs text-gray-400 transition-colors hover:text-primary"
                    >
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.columns && (
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-3 pb-3 pl-3">
                        {item.columns.map((column, index) => (
                          <div key={column.title ?? index}>
                            {column.title && (
                              <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                                {column.title}
                              </p>
                            )}
                            {column.items.map((leaf) => (
                              <Link
                                key={leaf.href}
                                href={leaf.href}
                                onClick={onClose}
                                className="block rounded-lg px-2 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-primary"
                              >
                                {leaf.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-gray-100 p-5">
          <Button href="/universities" className="w-full">
            Find a university
          </Button>
        </div>
      </aside>
    </div>
  );
}
