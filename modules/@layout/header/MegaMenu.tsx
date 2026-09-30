"use client";

import Link from "next/link";
import type { NavItem } from "./navData";

interface MegaMenuProps {
  item: NavItem | null;
}

export default function MegaMenu({ item }: MegaMenuProps) {
  if (!item || !item.columns) return null;

  const isWide = item.columns.length >= 5;

  return (
    <div className="mega-menu absolute inset-x-0 top-full z-40 border-b border-gray-200 bg-white shadow-xl">
      <div className="container max-h-[80vh] overflow-y-auto py-2">
        <div
          className={
            isWide
              ? "grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
              : "flex flex-wrap justify-center gap-x-20 gap-y-8"
          }
        >
          {item.columns.map((column, index) => (
            <div
              key={column.title ?? index}
              className={isWide ? "" : "min-w-[240px]"}
            >
              {column.title && <p className="mega-heading">{column.title}</p>}
              <ul className="space-y-2.5">
                {column.items.map((leaf) => (
                  <li key={leaf.href}>
                    <Link href={leaf.href} className="mega-link group block">
                      <span className="mega-link-label inline-block text-sm font-medium text-gray-600">
                        {leaf.label}
                      </span>
                      {leaf.description && (
                        <span className="block text-xs text-gray-400">
                          {leaf.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
