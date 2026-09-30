import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({
  items,
  className = "",
}: BreadcrumbProps) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-gray-500 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-semibold text-gray-900"
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <FaChevronRight className="text-[10px] text-gray-400" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
