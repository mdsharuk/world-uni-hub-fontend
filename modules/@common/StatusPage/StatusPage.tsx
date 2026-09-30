import type { ReactNode } from "react";

interface StatusPageProps {
  code: string;
  title: string;
  description: string;
  children?: ReactNode;
  fullHeight?: boolean;
}

export default function StatusPage({
  code,
  title,
  description,
  children,
  fullHeight = false,
}: StatusPageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-20 text-center ${
        fullHeight ? "min-h-screen" : "min-h-[70vh]"
      }`}
    >
      <p className="bg-gradient-to-r from-accent to-primary bg-clip-text text-7xl font-extrabold leading-none text-transparent sm:text-8xl">
        {code}
      </p>
      <h1 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 max-w-md text-sm text-gray-500 sm:text-base">
        {description}
      </p>
      {children && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {children}
        </div>
      )}
    </div>
  );
}
