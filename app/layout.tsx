import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "@/styles/main.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "World Uni Hub",
    template: "%s | World Uni Hub",
  },
  description:
    "World Uni Hub - discover universities, programs and opportunities worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
